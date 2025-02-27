
const globIcons = import.meta.glob('/src/assets/icons/*.svg', { eager: true, import: 'default' });

export default Object.fromEntries(
	Object.entries(globIcons).map(([path, component]) => {
		const name = path.match(/\/([^/]+)\.svg$/)[1]; // 取出 SVG 檔名作為 key
		return [name, component];
	})
);
