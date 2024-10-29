
<script setup>
import { ref, reactive } from "vue";
import SideNavMenu from "@/ui/element/SideNavMenu/SideNavMenu.vue";

const props = defineProps({
	navItems: {
		type: Array,
		default: () => [],
	},
})

const isExpanded = ref(false);
const expandedItems = reactive({});
const activePath = ref("/");

// (父)處理 - 收合導航欄
const handleNavClose = () => {
	if (isExpanded.value) {
		isExpanded.value = false;
	}
};

// (父)處理 - 展開導航欄
const handleNavExpanded = () => {
	if (!isExpanded.value) {
		isExpanded.value = true;
	}
};

// (父)處理 - 點擊選單項目
const handleItemClick = (item) => {
	if (item.children) {
		expandedItems[item.path] = !expandedItems[item.path];
	}
	activePath.value = item.path;
};

// (子) emit 處理 - 子物件被點擊時
const navItemClick = (value) => {
	activePath.value = value.path;
}
</script>

<template>
	<div class="sideNav-container">
		<!-- 左側導航欄 -->
		<div
			class="sideNav-drawer"
			:class="{ expanded: isExpanded }"
			@click="handleNavExpanded"
		>
			<!-- Drawer Header -->
			<div class="sideNav-drawer-header">
				<span v-if="isExpanded" class="sideNav-drawer-header-title">LOGO</span>
			</div>

			<!-- Navigation Items -->
			<SideNavMenu
				:navItems="props.navItems"
				:activePath="activePath"
				@expandedNav="handleNavExpanded"
				@navItemClick="navItemClick"
				v-model:isExpanded="isExpanded"
				v-model:navItemActivePath="activePath"
			></SideNavMenu>

		</div>

		<!-- 右側內容區域 可刪 -->
		<div class="content-area" @click="handleNavClose">

			<div class="demo-section">
				<h2>當前狀態：</h2>
				<div class="status-info">
					<p>導航欄狀態：{{ isExpanded ? "展開" : "收合" }}</p>
					<p>當前路徑：{{ activePath }}</p>
				</div>
			</div>

			<div class="demo-section">
				<h2>操作指南：</h2>
				<ul class="instructions">
					<li>點擊收合狀態的導航欄可以展開</li>
					<li>點擊導航欄以外的區域會自動收合</li>
					<li>點擊選單項目可以選中該項目</li>
					<li>帶有子選單的項目可以點擊展開/收合子選單</li>
				</ul>
			</div>

		</div>
	</div>
</template>

<style lang="scss" scoped>
/* 側邊導航欄容器 */
.sideNav-container {
	display: flex;
	min-height: 100vh;
	background-color: #f9fafb;
}

/* 側邊導航欄 */
.sideNav-drawer {
	height: 100vh;
	background-color: white;
	border-right: 1px solid #e5e7eb;
	transition: width 0.2s ease;
	width: 64px;
	cursor: pointer;
}
/* 側邊導航欄 - 展開寬度 */
.sideNav-drawer.expanded {
	width: 256px;
	cursor: default;
}
/* 側邊導航欄 - Header */
.sideNav-drawer-header {
	height: 64px;
	border-bottom: 1px solid #cccccc;
	display: flex;
	align-items: center;
	padding: 0 16px;
}

.sideNav-drawer-header-title {
	font-weight: 600;
	font-size: 1.125rem;
}


/* 內容區域樣式 */
.content-area {
	flex: 1;
	padding: 24px;
	overflow-y: auto;
}

.demo-section {
	background-color: white;
	padding: 24px;
	border-radius: 8px;
	margin-bottom: 24px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.demo-section h2 {
	font-size: 1.25rem;
	font-weight: 600;
	color: #374151;
	margin-bottom: 16px;
}

.status-info p {
	margin-bottom: 8px;
	color: #4b5563;
}

.instructions {
	list-style-type: disc;
	padding-left: 20px;
}

.instructions li {
	margin-bottom: 8px;
	color: #4b5563;
}

</style>
