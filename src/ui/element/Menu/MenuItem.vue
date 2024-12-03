<script setup>
import { ref } from "vue";
import Icon from "@/ui/element/Icon/Icon.vue";

// 定義 Props
const props = defineProps({
	item: {
		type: Object,
		required: true,
	},
	isCollapsed: {
		type: Boolean,
		default: false,
	},
	useRouter: {
		type: Boolean,
		default: false,
	},
	color: {
		type: String,
		default: "#000000",
	},
	expandedItems: {
		type: Object,
		required: true,
	},
});

const emit = defineEmits(["itemClick"]);

// 獲取導航組件類型
const getComponentType = (item) => {
	return props.useRouter && item.path ? "router-link" : "a";
};

// 項目點擊處理
const handleItemClick = (item, event) => {
	emit("itemClick", { item, event });
};
</script>

<template>
	<li class="ded-nav-item">
		<!-- 動態組件切換 router-link 或 a -->
		<component
			:is="getComponentType(props.item)"
			:to="props.useRouter ? props.item.path : undefined"
			:href="!props.useRouter ? props.item.path : undefined"
			class="ded-nav-item-link"
			@click.stop="handleItemClick(props.item, $event)"
			:style="`color:${props.color}`"
		>
			<!-- 圖標 -->
			<template v-if="props.item.prefix">
				<div class="ded-nav-item-icon">
					<Icon :name="props.item.prefix"></Icon>
				</div>
			</template>

			<!-- 標題 -->
			<span
				class="ded-nav-item-label"
				:style="!props.isCollapsed ? 'opacity: 1; display: block' : 'opacity: 0; display: none'"
			>
        {{ props.item.title }}
      </span>
		</component>

		<!-- 展開圖標 -->
		<template v-if="!props.isCollapsed && props.item.children">
			<div class="ded-nav-item-arrow">
				<Icon
					size="24"
					name="arrow_down"
					:style="{
						verticalAlign: 'middle',
			            transition: 'transform 0.3s',
			            transform: props.expandedItems[props.item.path] ? 'rotate(180deg)' : 'rotate(0deg)'
		            }"
				></Icon>
			</div>
		</template>

		<!-- 子菜單 -->
		<ul
			class="ded-nav-subitem"
			:class="{ 'expanded': props.expandedItems[props.item.path] }"
			v-show="
        !props.isCollapsed &&
        props.item.children &&
        props.expandedItems[props.item.path]
      "
		>
			<MenuItem
				v-for="child in props.item.children"
				:key="child.path"
				:item="child"
				:is-collapsed="props.isCollapsed"
				:use-router="props.useRouter"
				:color="props.color"
				:expanded-items="props.expandedItems"
				@itemClick="emit('itemClick', $event)"
			/>
		</ul>
	</li>
</template>
