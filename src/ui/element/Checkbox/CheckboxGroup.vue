<script setup>
// 定義 Props
const props = defineProps({
	direction: {
		type: String,
		validator: (value) => ['row', 'column'].includes(value),
		default: 'row',
	},
	className: {
		type: String,
		default: '',
	},
})
</script>

<template>
	<div :class="{
		'checkbox-container': true,
		[`checkbox-container-${props.direction}`]: true,
		[props.className]: !!props.className
		}">

		<slot></slot>

	</div>
</template>
