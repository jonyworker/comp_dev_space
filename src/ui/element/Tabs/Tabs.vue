<script setup>
import { ref, watch } from 'vue';
import TabItem from "./TabItem.vue";

// 定義 Props
const props = defineProps({
	themeColor: {
		type: String,
		default: "primary",
		validator: (value) =>
			[
				"primary",
				"secondary",
				"neutral",
				"info",
				"success",
				"warning",
				"error",
			].includes(value),
	},
	dataSource: {
		type: Array,
		required: true,
		validator: (value) =>
			value.every(
				(item) => typeof item.title === "string" && typeof item.content === "string"
			),
	},
	activeIndex: {
		type: Number,
		default: 0,
	},
	type: {
		type: String,
		default: "default",
		validator: (value) =>
			[ "default", "card"].includes(value),
	},
    prefix: {
        type: String,
    },
	isDisabled: {
		type: Boolean,
		default: false
	},
	className: {
		type: String,
		default: "",
	}
});

const activeTabIndex = ref(props.activeIndex || 0);

//取得 dataset 的值
const handleClick = (event) => {
    activeTabIndex.value = parseInt(event.currentTarget.dataset.index, 10);
};

watch(() => props.activeIndex, (newIndex) => {
    activeTabIndex.value = newIndex || 0;
});
</script>

<template>
    <div :class="{'ded-tabs-container': true, [props.className]: !!props.className }">
        <!-- Tabs - 按鈕 -->
        <div class="ded-tabs">
            <TabItem
                v-for="(item, index) in props.dataSource"
                :key="index"
                :themeColor="props.themeColor"
                :title="item.title"
                :type="props.type"
                :prefix="props.prefix"
                :index="index"
                :isActive="index === activeTabIndex"
                :isDisabled="props.isDisabled || item.isDisabled"
                @click="handleClick"
            ></TabItem>
        </div>
        <!-- Tabs - 內容顯示 -->
        <div :class="['ded-tab-content', {'ded-tab-disable': props.isDisabled} ]">
            {{ props.dataSource[activeTabIndex]?.content }}
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>