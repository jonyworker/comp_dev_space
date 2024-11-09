<script setup>
const emits = defineEmits(['selectedItem']);

// 定義 Props
const props = defineProps({
	label: {
		type: String,
		default: "標題一"
	},
	value: {
		type: String,
		default: "value1"
	},
	href: {
		type: String,
	},
	className: {
		type: String,
	},
	openInNewTab: {
		type: Boolean,
		default: false
	},
});

// 點擊事件處理
const handleClick = () => {
	if (!props.href) {
		emits('selectedItem', props.value);  // 如果沒有 href，直接觸發事件，傳遞 value
	} else {
		// 檢查 openInNewTab 的值，決定是否在新分頁開啟
		if (props.openInNewTab) {
			window.open(props.href, '_blank');  // 開新分頁
		} else {
			window.location.href = props.href;  // 在當前分頁開啟
		}
		emits('selectedItem', props.value);  // 開啟連結後觸發事件，傳遞 value
	}
};
</script>

<template>
	<div
		:class="{
			item: true,
			'menu-link': props.href,
			[props.className]: !!props.className
		}"
		@click="handleClick">

		<slot name="listPrefix"></slot>

		<div class="item-label">{{ props.label }}</div>

		<slot name="listSuffix"></slot>
	</div>
</template>

<style scoped lang="scss">
/* 在此處加入必要的樣式 */
</style>
