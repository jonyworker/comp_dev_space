import SideNavMenu from "@/ui/element/SideNavMenu/SideNavMenu.vue";



// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Design System/SideNavMenu",
	component: SideNavMenu,
	tags: ["autodocs"],
	argTypes: {
		navItems: {
			description: "navItems 對應的資料陣列",
			control: { type: "object" },
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "SideNavMenu",
			description: {
				component: "SideNavMenu 組件的呈現及說明。",
			},
		},
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== 主要項目 ====//
export const SideNavMenuDefault = {
	name: "主要項目",
	args: {
		navItems: [
			{
				icon: "home",
				label: "首頁",
				path: "/",
			},
			{
				icon: "users",
				label: "用戶管理",
				path: "/users",
				children: [
					{ label: "用戶列表 (模擬帶 icon 效果)", path: "/users/list", icon: "users" },
					{ label: "用戶設置", path: "/users/settings" },
				],
			},
			{
				icon: "file",
				label: "文件管理",
				path: "/files",
				children: [
					{ label: "所有文件", path: "/files/all" },
					{ label: "已分享", path: "/files/shared" },
				],
			},
			{
				icon: "mail",
				label: "訊息中心",
				path: "/messages",
			},
			{
				icon: "setting",
				label: "系統設置",
				path: "/settings",
			},
		]
	},
	render: (args) => ({
		components: { SideNavMenu },
		setup() {
			return {
				args,
			};
		},
		template: `
			<SideNavMenu
				:navItems="args.navItems"
				:isExpanded="true"
			></SideNavMenu>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};



