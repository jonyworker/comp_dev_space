
<script setup>
import { ref, reactive, computed } from "vue";
import Menu from "@/ui/element/Menu/Menu.vue";
import Input from "@/ui/element/Input/Input.vue"
import Icon from "@/ui/element/Icon/Icon.vue"

const props = defineProps({
	navItems: {
		type: Array,
		default: () => [],
	},
	themeColor: {
		type: String,
		default: "yellow",
	},
})

const isExpanded = ref(false);
const activePath = ref("/");
// const expandedItems = reactive({});

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

// (父)處理 - 切換導航列開啟收合
const toggleExpended = () => {
	isExpanded.value = !isExpanded.value;
	console.log(isExpanded.value)
	console.log("fuck")
};

// (父)處理 - 點擊選單項目
// const handleItemClick = (item) => {
// 	if (item.children) {
// 		expandedItems[item.path] = !expandedItems[item.path];
// 	}
// 	activePath.value = item.path;
// };



// (子) emit 處理 - 子物件被點擊時
const navItemClick = (value) => {
	activePath.value = value.path;
}

// 導航欄主題顏色
const computedThemeColor = computed(() => {
	switch (props.themeColor) {
		case "blue":
			return "background-color: #00467C;";
		case "yellow":
			return "background-color: #F4E069;";
		case "grape":
			return "background-color: #AB86D1;";
		case "black":
			return "background-color: #000000;";
		default:
			return "background-color: #ffffff";
	}
})

// 文字內容顏色
const computedContentColor = computed(() => {
	switch (props.themeColor) {
		case "blue":
			return "#ffffff";
		case "yellow":
			return "#004E81";
		case "grape":
			return "#004E81";
		case "black":
			return "#cccccc";
		default:
			return "#000000";
	}
})

</script>

<template>
	<div class="sideNav-container">
		<!-- 左側導航欄 -->
		<div
			class="sideNav-drawer"
			:class="{ expanded: isExpanded }"
			@click="handleNavExpanded"
			:style="computedThemeColor"

		>
			<button class="toggle-button"
			        :style="computedThemeColor"
			        style="cursor: pointer"
			        @click="toggleExpended()">
				<Icon :name="isExpanded
	                    ? 'chevronLeft'
	                    : 'chevronRight'"
				      size="16"></Icon>
			</button>
			<!-- Drawer Header -->
			<div class="sideNav-drawer-header">
				<span v-if="isExpanded" class="sideNav-drawer-header-title">LOGO</span>
			</div>

			<Input
				type="text"
				placeholder="輸入項目"
				size="medium"
				prefix="search"
				:style="isExpanded ? 'opacity: 1; display: block' : 'opacity:0; display: none;'"
			/>

			<!-- Navigation Items -->
			<Menu
				:menuData="props.navItems"
				:activePath="activePath"
				@expandedNav="handleNavExpanded"
				@navItemClick="navItemClick"
				v-model:isExpanded="isExpanded"
				v-model:navItemActivePath="activePath"
				:fontColor="computedContentColor"

			></Menu>

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

.toggle-button {
	position: absolute;
	left: 200%;
	top: 0;
	width: 20px;
	height: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	//background-color: #f00;
	border: none;

}
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
	padding: 12px;
	position: relative;
}

/* 側邊導航欄 - 展開寬度 */
.sideNav-drawer.expanded {
	width: 300px;
	cursor: default;
}

/* 側邊導航欄 - Header */
.sideNav-drawer-header {
	height: 64px;
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
