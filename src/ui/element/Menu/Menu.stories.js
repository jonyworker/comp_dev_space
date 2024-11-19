import Menu from "@/ui/element/Menu/Menu.vue";
function formatDataSource(dataSource) {
	return `[
    ${dataSource.map(item => `{
        icon: '${item.icon}',
        label: '${item.label}',
        path: '${item.path}',
        ${item.children ? `children: [
            ${item.children.map(child => `{
                label: '${child.label}',
                path: '${child.path}'
            }`).join(',\n            ')}
        ]` : ''}
    }`).join(',\n    ')}
]`;
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Design System/Menu",
	component: Menu,
	tags: ["autodocs"],
	argTypes: {
		dataSource: {
			description: "資料來源",
			control: { type: "object" },
			table: {
				type: {
					summary: "{ icon: string; label: string; path: string; children?: [ label: string; path: string;] }[]",
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
		className: {
			description: "客製化樣式",
			control: { type: "text" },
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "Menu",
			description: {
				component: "Menu 組件的呈現及說明。",
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
				icon: "home",
				label: "Dashboard",
				path: "/",
			},
			{
				icon: "users",
				label: "Profile",
				path: "/users",
				children: [
					{ label: "Edit Info", path: "/users/list" },
					{ label: "Password", path: "/users/settings" },
				],
			},
			// {
			// 	icon: "file",
			// 	label: "文件管理",
			// 	path: "/files",
			// 	children: [
			// 		{ label: "所有文件", path: "/files/all" },
			// 		{ label: "已分享", path: "/files/shared" },
			// 	],
			// },
			// {
			// 	icon: "mail",
			// 	label: "訊息中心",
			// 	path: "/messages",
			// },
			{
				icon: "setting",
				label: "Setting",
				path: "/settings",
			},
		],
		isCollapsed: false,
		color:'#000000',
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
			<div :style="args.isCollapsed ? 'width:40px' : 'width:auto'">
				<Menu
					:dataSource="args.dataSource"
					:isCollapsed="args.isCollapsed"
					:color="args.color"
					:className="args.className"
				></Menu>
			</div>
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
						'<div',
						`  :style="${args.isCollapsed ? 'width:40px' : 'width:auto'}"`,
						'>',
						'  <Menu',
						`    :dataSource="${dataSourceString}"`,
						`    :isCollapsed="${args.isCollapsed}"`,
						`    color="${args.color}"`,
						`    className="${args.className}"`,
						'  ></Menu>',
						'</div>',
					].join('\n').trim();
				}
			}
		}
	},
};