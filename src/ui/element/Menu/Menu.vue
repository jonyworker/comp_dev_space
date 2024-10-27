<script setup>
import Icon from "@/ui/element/Icon/Icon.vue"
import { defineEmits, ref } from "vue";

const isExpandedModelValue = defineModel('isExpanded')
// 定義 Props
const props = defineProps({
	// --  資料接口 -- //
	menuData: {
		type: Array,
		required: true,
		default: () => [],
	},
	activePath: {
		type: String,
		default: "",
	},
	customClass: {
		type: String,
		default: '',
	},
})

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
	<!--改造成學長版-->
	<div class="menu-container">
		<nav class="nav">
			<ul class="nav-menu">
				<li v-for="item in menuData" :key="item.path">
					<div class="menu-item" @click.stop="handleItemClick(item)">
						<div class="menu-item-content" style="color: rgb(0, 0, 0)">
							<template v-if="item.icon" >
								<Icon class="menu-item-content-icon" :name="item.icon" size="20"></Icon>
							</template>

							<span class="menu-item-content-title" style="opacity: 1">{{item.label }}</span>

							<template v-if="isExpandedModelValue && item.children" >
								<Icon
									class="menu-item-content-icon"
									:name="expandedItems[item.path]
                                    ? 'chevronDown'
                                    : 'chevronRight'"
									size="16"
								></Icon>
							</template>

						</div>
					</div>

					<!-- submenu -->
					<ul class="menu-subitem" v-if="
	                    isExpandedModelValue &&
	                    item.children &&
	                    expandedItems[item.path]
	                ">
						<li v-for="child in item.children"
						    :key="child.path">
							<div class="menu-item">
								<div class="menu-item-content" style="color: rgb(0, 0, 0)">
									<div class="menu-item-content-icon">
										<Icon v-if="child.icon" class="nav-item-icon" :name="child.icon" size="20"></Icon>
									</div>
									<span class="menu-item-content-title" style="opacity: 1">{{ child.label }}</span>
								</div>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	</div>

</template>

<style scoped lang="scss">

</style>