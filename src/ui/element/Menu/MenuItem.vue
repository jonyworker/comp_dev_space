<script setup>
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
    hasDivider: {
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
    // isSideNavLink: {
    //     type: Boolean,
    //     default: false,
    // }
});

const emit = defineEmits(["itemClick", "toggleExpand"]);

// 獲取導航組件類型
const getComponentType = (item) => {
	return props.useRouter && item.path ? "router-link" : "a";
};

// 點擊項目時觸發，傳遞 item 與 event 參數
const onItemClick = (event) => {
    emit("itemClick", { item: props.item, event });
};

// 切換展開/收起狀態
const toggleExpand = (item) => {
    emit("toggleExpand", item);
};
</script>

<script>
export default {
    name: "MenuItem"
};
</script>

<template>
	<li :class="{'ded-nav-item': true, 'ded-nav-item-side': props.hasDivider }">
		<!-- 動態組件切換 router-link 或 a -->
		<component
			:is="getComponentType(props.item)"
			:to="props.useRouter ? props.item.path : undefined"
			:href="!props.useRouter ? props.item.path : undefined"
			class="ded-nav-item-link"
			:style="`color:${props.color}`"
            @click="onItemClick"
		>
			<!-- 圖標 -->
			<template v-if="props.item.prefix">
				<div class="ded-nav-item-icon">
					<Icon :name="props.item.prefix"></Icon>
				</div>
			</template>

			<!-- 標題 -->
            <template v-if="!props.isCollapsed">
                <span class="ded-nav-item-label">
                    {{ props.item.label }}
                </span>
            </template>
		</component>

		<!-- 展開圖標 -->
		<template v-if="!props.isCollapsed && props.item.children">
			<div
				class="ded-nav-item-arrow"
				@click.stop="toggleExpand(props.item)"
			>
				<Icon
					size="24"
					name="SvgArrowDown"
					:style="{
						color: props.color,
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
                @toggleExpand="emit('toggleExpand', $event)"
			/>
		</ul>
	</li>
</template>
