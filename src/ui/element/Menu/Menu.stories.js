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
				title: "Dashboard",
				prefix: "home",
				path: "/",
			},
			{
				title: "Profile",
				prefix: "users",
				path: "/users",
				children: [
					{ title: "Contact", prefix: "mail", path: "/users/Contact" },
					{ title: "Password", prefix: "lock", path: "/users/Password" },
				],
			},
			{
				title: "Setting",
				prefix: "setting",
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