import { ref } from 'vue';
import Navbar from "@/ui/element/Navbar/Navbar.vue";
function formatDataSource(dataSource) {
	return `[
    ${dataSource.map(item => `{
        label: '${item.label}',
        value: '${item.value}',
    }`).join(',\n    ')}
  ]`;
}

export default {
	title: 'Component/Navbar',
	component: Navbar,
	tags: ["autodocs"],
	argTypes: {
		links: {
			description: "選項",
			control: { type: "object" },
			table: {
				type: {
					summary: '{ label: string; value: string | number; }[]',
				}
			}
		},
		logoSrc: {
			description: 'logo',
			control: { type: 'text' },
		},
		className: {
			description: '客製化樣式',
			control: { type: 'text' },
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: 'Navbar',
			description: {
				component: 'Navbar 組件的呈現及說明。',
			},
		},
	},
};

//==== 預設項目 ====//
export const NavbarDefault = {
	name: '預設項目',
	args: {
		links: [
			{
				"label": "Products",
				"href": "#products",
				"order": 1
			},
			{
				"label": "Solutions",
				"href": "#solutions",
				"order": 2
			},
			{
				"label": "About",
				"href": "#about",
				"order": 3
			},
			{
				"label": "Technologies",
				"href": "#technologies",
				"order": 4
			}
		],
		logoSrc: "https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg",
		className: ""
	},
	render: (args) => ({
		components: { Navbar },
		setup() {
			return {
				args,
			};
		},
		template: `
			<Navbar
				:links="args.links"
				:logoSrc="args.logoSrc"
			></Navbar>
            `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['objectFit', 'src', 'value', 'name' ],
		},
		// docs: {
		//     source: {
		//         transform: (src, storyContext) => {
		//             const { args } = storyContext;
		//             const dataSourceString = formatDataSource(args.dataSource);
		//             return [
		//                 '<Dropdown',
		//                 `  :datasource="${dataSourceString}"`,
		//                 `  :label="${args.label}"`,
		//                 `  :placeholder="${args.placeholder}"`,
		//                 `  :size="${args.size}"`,
		//                 `  :maxHeight="${args.maxHeight}"`,
		//                 `  :className="${args.className}"`,
		//                 '>',
		//                 '</Dropdown>',
		//             ].join('\n').trim();
		//         }
		//     }
		// }
	},
};