<script setup>

// 定義 Props
const props = defineProps({
    // --  樣式接口 -- //
    themeColor: {
        type: String,
        validator: (value) =>
            [
            "primary",
            "secondary",
            "tertiary",
            "success",
            "warning",
            "error",
            "info",
          ].includes(value),
    },
    type: {
        type: String,
        validator: (value) =>
            ["card", "default",].includes(value),
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
		default: '',
	},
})

// 處理 tab 點擊事件
const handleClick = (event) => {
  if (!props.isDisabled && props.onClick) {
    props.onClick(event);
  }
};
</script>

<template>
    <!-- Tabs - 按鈕 -->
    <button
        :class="['tab', 'button', 'component-medium', 'tab',
                props.type === 'default'
	                ? props.isActive ? `tab-${props.themeColor}-active` : `tab-${props.themeColor}`
	                : props.isActive ? `tab-card-${props.themeColor}-active` : `tab-card-${props.themeColor}`,
                props.isDisabled && 'tab-disable',
                props.className || '']"
        :disabled="props.isDisabled"
        @click="handleClick"
        :data-index="props.index"
    >
     <!-- Tabs - 按鈕文字 -->
     <div class="text-medium"> {{ props.title }}</div>
    </button>

</template>

<style scoped lang="scss">

</style>