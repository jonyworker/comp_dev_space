<script setup>
import Button from "@/ui/element/Button/Button.vue";
import Icon from '@/ui/element/Icon/Icon.vue';

// 定義 Props
const props = defineProps({
	// --  樣式接口 -- //
	themeColor: {
		type: String,
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
	type: {
		type: String,
		validator: (value) =>
			[ "default", "card"].includes(value),
	},
    prefix: {
        type: String,
    },
	// --  內容接口 -- //
	title: {
		type: String,
		default: "頁籤 1",
	},
	index: {
		type: Number,
	},
	// --  狀態接口 -- //
	isActive: {
		type: Boolean,
	},
	isDisabled: {
		type: Boolean,
		default: false,
	},
	// --  事件接口 -- //
	onClick: {
		type: Function,
	},
	className: {
		type: String,
		default: "",
	},
});


// 處理 tab 點擊事件
const handleClick = (event) => {
  if (!props.isDisabled && props.onClick) {
    props.onClick(event);
  }
};
</script>

<template>
    <!-- Tabs - 按鈕 -->
    <Button
        :themeColor="props.themeColor"
        variant="text"
        :isDisabled="props.isDisabled"
        :class="{
			'ded-tab ': true,
			[`ded-tab-${props.themeColor}`]: props.themeColor && props.type === 'default',
			[`ded-tab-${props.themeColor}-active`]: props.isActive && props.type === 'default',
			[`ded-tab-card-${props.themeColor}`]: props.themeColor && props.type === 'card',
			[`ded-tab-card-${props.themeColor}-active`]: props.isActive && props.type === 'card',
        }"
        @click="handleClick"
        :data-index="props.index"
    >
        <template v-if="props.prefix">
            <div class="ded-icon">
                <Icon name="SvgArrowDown"></Icon>
            </div>
        </template>

		<div class="ded-text-medium"> {{ props.title }}</div>
    </Button>

</template>

<style scoped lang="scss">

</style>