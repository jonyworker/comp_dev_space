import Menu from "@/ui/element/Menu/Menu.vue";
function formatDataSource(dataSource) {
	return `[
	    ${dataSource.map(item => `{
	        label: '${item.label}',
	        path: '${item.path}',
	        prefix: '${item.prefix}',
	        order: '${item.order}',
	        ${item.children ? `children: [
	            ${item.children.map(child => `{
	                label: '${child.title}',
	                path: '${child.path}',
	                prefix: '${child.prefix}',
	                order: '${child.order}',
	            }`).join(',\n            ')}
	        ]` : ''}
	    }`).join(',\n    ')}
	]`;
}

export default {
	title: "Component/Menu",
	component: Menu,
	tags: ["autodocs"],
	argTypes: {
		dataSource: {
			description: "資料來源",
			control: { type: "object" },
			table: {
				type: {
					summary: "{ label: string; path: string; prefix: string; order: string; children?: [" +
						" title:string; path:string; prefix:string; order: string;] }[]"
				}
			}
		},
		isCollapsed: {
			description: "是否收合",
			control: { type: "boolean" },
		},
		color: {
			description: "顏色",
			control: { type: "color" },
		},
		hasDivider: {
			description: '是否有分隔線',
			control: { type: "boolean" },
		},
		className: {
			description: "客製化樣式",
			control: { type: "text" },
		},
		useRouter: {
			description: "使用 VueRouter",
			control: { type: "boolean" },
			table: { disable: true },
		}
	},
	parameters: {
		// 自動文件
		docs: {
			title: "Menu",
			description: {
				component: "選單組件的呈現及說明。",
			},
		},
	},
};

//==== 預設項目 ====//
export const MenuDefault = {
	name: "預設項目",
	args: {
		dataSource: [
			{
				label: "Dashboard",
				path: "/",
				prefix: "SvgHome",
				order: "1",
			},
			{
				label: "Profile",
				path: "/users",
				prefix: "SvgUser",
				order: "2",
				children: [
					{ label: "Contact", path: "/users/Contact", prefix: "SvgMail", order: "1", },
					{ label: "Password", path: "/users/Password", prefix: "SvgLock", order: "2", },
				],
			},
			{
				label: "Setting",
				path: "/settings",
				prefix: "SvgSettings",
				order: "3",
			},
		],
		isCollapsed: false,
		color:'#000000',
		hasDivider: false,
		className: ""
	},
	render: (args) => ({
		components: { Menu },
		setup() {
			return {
				args,
			};
		},
		template: `
				<Menu
					:dataSource="args.dataSource"
					:isCollapsed="args.isCollapsed"
					:color="args.color"
					:hasDivider="args.hasDivider"
					:className="args.className"
				></Menu>
		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ["dataSource", "isExpanded"],
			exclude: ["navItemClick", "expandedNav"],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					const dataSourceString = formatDataSource(args.dataSource);
					return [
						'  <Menu',
						`    :dataSource="${dataSourceString}"`,
						`    :isCollapsed="${args.isCollapsed}"`,
						`    color="${args.color}"`,
						`    :hasDivider="${args.hasDivider}"`,
						`    className="${args.className}"`,
						'  ></Menu>',
					].join('\n').trim();
				}
			}
		}
	},
};