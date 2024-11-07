<script setup>
// 定義 Props
const props = defineProps({
	//--  layout 接口 -- //
	direction: {
		type: String,
		validator: (value) => ['row', 'column'].includes(value),
		default: 'row',
	},
	// --  基礎接口 -- //
	className: {
		type: String,
		default: '',
	},
})
</script>

<template>
	<div :class="{
		'radio-container': true,
		[`checkbox-container-${props.direction}`]: true,
		[ props.className ]: !!props.className,
	}">
		<slot></slot>
	</div>
</template>

<style scoped lang="scss">

</style>