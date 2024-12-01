<script setup>
import Icon from "@/ui/element/Icon/Icon.vue";
import { ref } from "vue";

let router;

// 嘗試引入 Vue Router
try {
	router = require("vue-router").useRouter();
} catch (e) {
	router = null; // 如果未安裝 Vue Router，設置為 null
}

// 定義 Props
const props = defineProps({
	dataSource: {
		type: Array,
		required: true,
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
	useRouter: {
		type: Boolean,
		default: false, // 默認不啟用路由
	},
});

const emit = defineEmits(["navItemClick", "expandedNav"]);

// 追踪展開的子菜單
const expandedItems = ref({});

// 處理項目點擊
const handleItemClick = (item, event) => {
	emit("navItemClick", item); // 告知被點擊的 item
	emit("expandedNav"); // 告知展開導航

	if (item.children) {
		// 阻止跳轉並展開或收起子菜單
		event.preventDefault();
		expandedItems.value[item.path] = !expandedItems.value[item.path];
	} else if (item.path && props.useRouter && router) {
		// 僅在啟用 Router 且無子菜單時執行路由跳轉
		router.push(item.path);
	}
};


// 獲取導航組件類型（根據是否啟用 Router 切換）
const getComponentType = (item) => {
	return props.useRouter && router && item.path ? "router-link" : "a";
};
</script>



<template>
	<div :class="{
		'ded-nav-container': true,
		[props.className]: !!props.className
	}">
		<nav class="ded-nav">
			<ul class="ded-nav-list">
				<li class="ded-nav-item" v-for="item in props.dataSource" :key="item.path">
					<!-- 動態組件切換 router-link 或 a -->
					<component
						:is="getComponentType(item)"
						:to="props.useRouter && router ? item.path : undefined"
						:href="!props.useRouter || !router ? item.path : undefined"
						class="ded-list-item-link"
						@click.stop="handleItemClick(item, $event)"
						:style="`color:${props.color}`"
					>
						<!-- 圖標 -->
						<template v-if="item.prefix">
							<div class="ded-list-icon">
								<Icon :name="item.prefix"></Icon>
							</div>
						</template>

						<!-- 標題 -->
						<span
							class="ded-list-item-label"
							:style="!props.isCollapsed ? 'opacity: 1; display: block' : 'opacity: 0; display: none'"
						>
							{{ item.title }}
						</span>

						<!-- 展開圖標 -->
						<template v-if="!props.isCollapsed && item.children">
							<Icon
								class="ded-list-icon"
								:name="expandedItems[item.path] ? 'chevronUp' : 'chevronDown'"
							></Icon>
						</template>
					</component>

					<!-- 子菜單 -->
					<ul
						class="ded-nav-subitem"
						:class="{ 'expanded': expandedItems[item.path] }"
						v-show="
						!props.isCollapsed &&
						item.children &&
						expandedItems[item.path]
					"
					>
						<li class="ded-nav-item" v-for="child in item.children" :key="child.path">
							<component
								:is="getComponentType(child)"
								:to="props.useRouter && router ? child.path : undefined"
								:href="!props.useRouter || !router ? child.path : undefined"
								class="ded-list-item-link"
								@click.stop="handleItemClick(child, $event)"
							>
								<!-- 子項目圖標 -->
								<template v-if="child.prefix">
									<div class="ded-list-icon">
										<Icon :name="child.prefix"></Icon>
									</div>
								</template>

								<!-- 子項目標題 -->
								<span class="ded-list-item-label">
								{{ child.title }}
							</span>
							</component>
						</li>
					</ul>


				</li>
			</ul>
		</nav>
	</div>
</template>



<style scoped lang="scss">

</style>
