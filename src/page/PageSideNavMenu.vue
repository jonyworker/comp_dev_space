<script setup>
import SideNavMenu from "@/ui/element/SideNavMenu/SideNavMenu.vue"
const navItems = [
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
];
</script>

<template>
	<SideNavMenu
		:navItems="navItems"
		:isExpanded="true"
	></SideNavMenu>
</template>

<style lang="scss" scoped>

</style>