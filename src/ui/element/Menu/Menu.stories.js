import Menu from "@/ui/element/Menu/Menu.vue";
function formatDataSource(dataSource) {
	return `[
	    ${dataSource.map(item => `{
	        title: '${item.title}',
	        prefix: '${item.prefix}',
	        path: '${item.path}',
	        ${item.children ? `children: [
	            ${item.children.map(child => `{
	                title: '${child.title}',
	                prefix: '${child.prefix}',
	                path: '${child.path}'
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
					summary: "{ title: string; prefix: string; path: string; children?: [ title: string; prefix:" +
						" string; path:string;] }[]"
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
				title: "Dashboard",
				prefix: "SvgHome",
				path: "/",
			},
			{
				title: "Profile",
				prefix: "SvgUser",
				path: "/users",
				children: [
					{ title: "Contact", prefix: "SvgMail", path: "/users/Contact" },
					{ title: "Password", prefix: "SvgLock", path: "/users/Password" },
				],
			},
			{
				title: "Setting",
				prefix: "SvgSettings",
				path: "/settings",
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