<script setup>

const emits = defineEmits(['selectedItem'])
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
	onClick: {  // 建議加入 onClick prop 的定義
		type: Function,
	},
})

// 新頁面開起網頁
const handleClick = (value) => {
	if (!props.href) {
		emits('selectedItem', value)  // 如果沒有 href，直接觸發事件
	} else {
		window.open(props.href, '_blank');
		emits('selectedItem', value)  // 開啟新視窗後觸發事件
	}
	props.onClick?.(props.value);  // 使用可選鏈運算符
};
</script>

<template>
	<div
		:class="{
			item: true,
			'menu-link': props.href,
			[props.className]: !!props.className
		}"
		@click="handleClick(props.label)">

		<slot name="listPrefix">
		</slot>

		<div class="item-label">{{props.label}}</div>

		<slot name="listSuffix">
		</slot>
	</div>
</template>

<style scoped lang="scss">

</style>