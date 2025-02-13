<script setup>
import MenuItem from "./MenuItem.vue";
import { ref, computed } from "vue";
// eslint-disable-next-line vue/no-dupe-keys
import { useRouter } from "vue-router";

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
    hasDivider: {
       type: Boolean,
       default: false,
    },
	className: {
		type: String,
		default: "",
	},
	useRouter: {
		type: Boolean,
		default: false,
	},
});

const sortDataSource = computed(() =>
    [...props.dataSource].sort((a, b) => (a.order || 0) - (b.order || 0))
);

const emit = defineEmits(["navItemClick", "expandedNav"]);

// 在父元件中定義反應式的 expandedItems，並由事件更新
const expandedItems = ref({});

const computedWidth = computed(() => (props.isCollapsed ? 'auto' : '100%'));

// 若啟用 useRouter，則取得 router 實例
const router = props.useRouter ? useRouter() : null;

const handleItemClick = ({item, event}) => {
	emit("navItemClick", item);
	emit("expandedNav");

	if (item.children) {
		event.preventDefault();
        handleToggleExpand(item)
	} else if (item.path && props.useRouter && router) {
		router.push(item.path);
	}
};

// 處理箭頭點擊的展開切換事件
const handleToggleExpand = (item) => {
    expandedItems.value[item.path] = !expandedItems.value[item.path];
};
</script>

<template>
    <div :class="{ 'ded-nav-container': true, [props.className]: !!props.className }">
        <nav class="ded-nav" :style="{ width: computedWidth }">
            <ul class="ded-nav-list">
                <MenuItem
                    v-for="item in sortDataSource"
                    :key="item.path"
                    :item="item"
                    :isCollapsed="props.isCollapsed"
                    :useRouter="props.useRouter"
                    :color="props.color"
                    :hasDivider="props.hasDivider"
                    :expandedItems="expandedItems"
                    :isDisabled="item.isDisabled"
                    @itemClick="handleItemClick"
                    @toggleExpand="handleToggleExpand"
                />
            </ul>
        </nav>
    </div>
</template>
