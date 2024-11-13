<script setup>
import Icon from "@/ui/element/Icon/Icon.vue";
import { ref } from "vue";

// 定義 Props
const props = defineProps({
	dataSource: {
		type: Array,
		default: () => [],
	},
	isCollapsed: {
		type: Boolean,
		default: false,
	},
	color: {
		type: String,
		default: "#000000",
	},
	className: {
		type: String,
		default: "",
	},
});

const emit = defineEmits(["navItemClick", "expandedNav"]);

// 追踪展開的子菜單
const expandedItems = ref({});

// 處理項目點擊
const handleItemClick = (item) => {
	emit("navItemClick", item); // 告知被點擊的 item
	emit("expandedNav"); // 告知展開導航
	if (item.children) {
		// 切換子菜單的展開狀態
		expandedItems.value[item.path] = !expandedItems.value[item.path];
	}
};
</script>

<template>
	<div :class="{
		'menu-container': true,
		[props.className]: !!props.className
	}">
		<nav class="nav">
			<ul class="nav-menu">
				<li v-for="item in props.dataSource" :key="item.path">
					<div class="menu-item" @click.stop="handleItemClick(item)" :style="`color:${props.color}`">
						<div class="menu-item-content" style="min-height: 24px;">
							<template v-if="item.icon">
								<Icon class="menu-item-content-icon" :name="item.icon" size="20"></Icon>
							</template>

							<span class="menu-item-content-title"
							      :style="!props.isCollapsed ? 'opacity: 1; display: block' : 'opacity: 0; display: none'">
								{{ item.label }}
							</span>

							<template v-if="!props.isCollapsed && item.children">
								<Icon
									class="menu-item-content-icon"
									:name="expandedItems[item.path] ? 'chevronUp' : 'chevronDown'"
									size="16"
								></Icon>
							</template>
						</div>
					</div>

					<!-- submenu -->
					<ul class="menu-subitem" v-if="
	                    !props.isCollapsed &&
	                    item.children &&
	                    expandedItems[item.path]
	                ">
						<li v-for="child in item.children" :key="child.path" @click.stop="handleItemClick(child)">
							<div class="menu-item">
								<div class="menu-item-content" :style="`color:${props.color}`">
									<template v-if="child.icon">
										<div class="menu-item-content-icon">
											<Icon class="nav-item-icon" :name="child.icon" size="20"></Icon>
										</div>
									</template>

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
