<script setup>
// 定義 Props
const props = defineProps({
	isMenu: {
		type: Boolean,
		default: true,
	},
	className: {
		type: String,
	},
	maxHeight: {
		type: String,
	}
})
</script>

<template>
	<ul
	    :class="{
		list: true,
		menu: props.isMenu,
		[props.className]: !!props.className }"
	    :style="{'max-height': props.maxHeight ? `${props.maxHeight}px`: null }"
	>
		<slot></slot>
	</ul>
</template>

<style scoped lang="scss">

</style>