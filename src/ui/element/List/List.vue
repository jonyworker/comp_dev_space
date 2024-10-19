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
})
</script>

<template>
	<ul
	    :class="{
		list: true,
		menu: props.isMenu,
		[props.className]: !!props.className }"
	>
		<slot></slot>
	</ul>
</template>

<style scoped lang="scss">

</style>