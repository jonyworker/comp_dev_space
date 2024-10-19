<script setup>
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
})

// 新頁面開起網頁
const handleClick = () => {
	if (!props.href) {
		return;
	}else {
		window.open(props.href, '_blank');
	}
	props.onClick && props.onClick(props.value);
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

		<slot name="listPrefix">
		</slot>

		<div class="item-label">{{props.label}}</div>

		<slot name="listSuffix">
		</slot>
	</div>
</template>

<style scoped lang="scss">

</style>