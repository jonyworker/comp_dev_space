import SideNav from "./SideNav.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Design System/SideNav",
	component: SideNav,
	tags: ["autodocs"],
	argTypes: {
		navItems: {
			description: "SideNav 對應的資料陣列",
			control: { type: "object" },
		},
		themeColor: {
			description: '主題顏色',
			control: { type: 'select' },
			options: ['None', 'blue', 'yellow', 'grape', 'black'],
			// mapping: {
			// 	'None': null,
			// },
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "SideNav",
			description: {
				component: "SideNav 組件的呈現及說明。",
			},
		},
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== 預設項目 ====//
export const SideNavDefault = {
	name: "預設項目",
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
					{ label: "用戶列表 ", path: "/users/list" },
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
		],
		themeColor: "blue"
	},
	render: (args) => ({
		components: { SideNav },
		setup() {
			return {
				args,
			};
		},
		template: `
			<div style="height: 480px; overflow: hidden">
				<SideNav
					:navItems="args.navItems"
					:themeColor="args.themeColor"
				></SideNav>
			</div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};



