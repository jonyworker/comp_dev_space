import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// 取得當前檔案的 __dirname (因為 ES Module 沒有 __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COMPONENT_DIRS = [
	path.join(__dirname, "src", "ui", "element"),
	path.join(__dirname, "src", "ui", "layout"),
];

const outputPath = path.join(__dirname, "src", "index.js");

// 遞迴讀取目錄內的 .vue 檔案
async function getVueFiles(dir) {
	let files = [];
	const entries = await fs.promises.readdir(dir, { withFileTypes: true });

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			files = files.concat(await getVueFiles(fullPath));
		} else if (entry.name.endsWith(".vue")) {
			const componentName = entry.name.replace(".vue", "");
			const relativePath = `./${path.relative(__dirname, fullPath).replace(/\\/g, "/")}`;
			files.push({ name: componentName, path: relativePath });
		}
	}
	return files;
}

// 產生 `index.js`
async function generateIndex() {
	const components = (await Promise.all(COMPONENT_DIRS.map(getVueFiles))).flat();

	const importStatements = components.map(c => `import ${c.name} from '${c.path}';`).join("\n");
	const exportStatements = `export {\n  ${components.map(c => c.name).join(",\n  ")}\n};`;
	const installFunction = `
const components = [
  ${components.map(c => `{ key: '${c.name}', value: ${c.name} }`).join(",\n  ")}
];

export default {
  install(app) {
    components.forEach(component => {
      app.component(component.key, component.value);
    });
  },
};
`;

	const fileContent = `${importStatements}\n\n${exportStatements}\n\n${installFunction}`;
	await fs.promises.writeFile(outputPath, fileContent, "utf8");

	console.log("✅ `components/index.js` 已生成！");
}

generateIndex().catch(console.error);
