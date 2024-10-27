import Menu from "@/ui/element/Menu/Menu.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Design System/Menu",
	component: Menu,
	tags: ["autodocs"],
	argTypes: {
		menuData: {
			description: "Menu 對應的資料陣列",
			control: { type: "object" },
		},
	},
	isExpanded: {
		description: "Menu 展開收合",
		control: { type: "boolean" },
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

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== 主要項目 ====//
export const MenuDefault = {
	name: "主要項目",
	args: {
		menuData: [
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
		components: { Menu },
		setup() {
			return {
				args,
			};
		},
		template: `
			<div style="width: 400px">
				<Menu
					:menuData="args.menuData"
					:isExpanded="true"
				></Menu>
			</div>
			
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			include: ['menuData'],
		},
	},
};



