<script setup>
import { ref, defineProps, defineEmits } from "vue";
import Icon from "@/ui/element/Icon/Icon.vue";

const isExpandedModelValue = defineModel('isExpanded')

const props = defineProps({
	// 導航項目列表
	navItems: {
		type: Array,
		required: true,
		default: () => [],
	},

	// 當前路徑
	activePath: {
		type: String,
		default: "",
	},
});

const emit = defineEmits(["navItemClick","expandedNav"]);

// 追踪展開的子菜單
const expandedItems = ref({});

// 處理項目點擊
const handleItemClick = (item) => {
	emit("navItemClick", item); // 告知被點擊item
	emit("expandedNav"); // 告知展開導航
	if (item.children) {
		// 切換子菜單的展開狀態
		expandedItems.value[item.path] = !expandedItems.value[item.path];
	}
};

</script>

<template>
	<nav class="nav-content">
		<div v-for="item in navItems" :key="item.path" class="nav-item-wrapper">
			<button
				class="nav-item"
				:class="{
                    centered: !isExpandedModelValue,
                    active: props.activePath === item.path,
                }"
				@click.stop="handleItemClick(item)"
			>
				<div class="nav-item-content">
					<!-- 選單 Icon -->
					<Icon v-if="item.icon" class="nav-item-icon" :name="item.icon" size="20"></Icon>

					<!-- 選單標題 -->
                    <span v-if="isExpandedModelValue" class="nav-item-label">
                        {{item.label }}
                    </span>
				</div>

				<!-- 子選單提示箭頭 -->
				<Icon v-if="isExpandedModelValue && item.children"
				      class="nav-item-icon"
				      :name="expandedItems[item.path]
                                    ? 'chevronDown'
                                    : 'chevronRight'"
				      size="16"></Icon>
			</button>

			<!-- 子選單 Item -->
			<div
				v-if="
                    isExpandedModelValue &&
                    item.children &&
                    expandedItems[item.path]
                "
				class="subNav-content"
			>
				<button
					v-for="child in item.children"
					:key="child.path"
					class="subNav-item"
					:class="{ active: props.activePath === child.path }"
					@click.stop="handleItemClick(child)"
				>

					<Icon v-if="child.icon" class="nav-item-icon" :name="child.icon" size="20"></Icon>
					<span class="subNav-item-label">{{ child.label }}</span>
				</button>
			</div>

		</div>
	</nav>
</template>

<style lang="scss" scoped>

/* 側邊導航欄 - 導航列表 */
.nav-content {
	padding: 8px;
}

/* 側邊導航欄 - 導航選項 */
.nav-item {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px;
	margin: 4px 0;
	border-radius: 8px;
	cursor: pointer;
	border: none;
	background: transparent;
}

.nav-item:hover {
	background-color: #f3f4f6;
}

.nav-item.active {
	background-color: #e5e7eb;
}

.nav-item.centered {
	justify-content: center;
}

/* 側邊導航欄 - 導航選項內容容器 */
.nav-item-content {
	display: flex;
	align-items: center;
	overflow: hidden;
	gap: 8px;
}

.nav-item-icon {
	color: #4b5563;
	flex-shrink: 0;
}

.nav-item-label {
	//margin-left: 12px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}


/* 側邊導航欄 - 導航選項子項目 */
.subNav-content {
	margin-left: 24px;
	margin-top: 4px;
}

.subNav-icon {
	color: #9ca3af;
	width: 16px;
	height: 16px;
}

.subNav-item {
	width: 100%;
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 8px;
	font-size: 0.875rem;
	color: #4b5563;
	border-radius: 8px;
	border: none;
	background: transparent;
	cursor: pointer;
}

.subNav-item:hover {
	background-color: #f3f4f6;
}

.subNav-item.active {
	background-color: #e5e7eb;
}

.subNav-item-label {
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}

</style>
