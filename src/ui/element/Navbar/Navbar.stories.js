import Navbar from "@/ui/element/Navbar/Navbar.vue";
function formatDataSource(dataSource) {
	return `[
    ${dataSource.map(item => `{
        label: '${item.label}',
        href: '${item.href}',
        value: '${item.value}',
    }`).join(',\n    ')}
  ]`;
}

export default {
	title: 'Component/Navbar',
	component: Navbar,
	tags: ["autodocs"],
	argTypes: {
		dataSource: {
			description: "連結清單",
			control: { type: "object" },
			table: {
				type: {
					summary: '{ label: string; href: string; order: number; }[]',
				}
			}
		},
		logoSrc: {
			description: 'Logo 圖片連結',
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
		dataSource: [
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
				:dataSource="args.dataSource"
				:logoSrc="args.logoSrc"
				:className="args.className"
			></Navbar>
            `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['objectFit', 'src', 'value', 'name' ],
		},
		docs: {
		    source: {
		        transform: (src, storyContext) => {
		            const { args } = storyContext;
		            const dataSourceString = formatDataSource(args.dataSource);
		            return [
		                '<Navbar',
		                `  :datasource="${dataSourceString}"`,
		                `  :logoSrc="${args.logoSrc}"`,
		                `  className="${args.className}"`,
		                '>',
		                '</Navbar>',
		            ].join('\n').trim();
		        }
		    }
		}
	},
};