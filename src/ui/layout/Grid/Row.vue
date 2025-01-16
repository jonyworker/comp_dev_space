<script setup>

// 定義 props
const props = defineProps({
	justify: {
		type: String,
		required: false,
		default: null,
		validator: (value) => ['flex-start', 'center', 'flex-end', 'space-between', 'space-around',
			'space-evenly'].includes(value),
	},
	alignItems: {
		type: String,
		required: false,
		default: null,
		validator: (value) => ['flex-start', 'center', 'flex-end', 'baseline', 'stretch'].includes(value),
	},
	hasGap: {
		type: Boolean,
		default: false,
	},
	rowGap: {
		type: String,
		default: "16px",
	},
	className: {
		type: String,
		default: "",
	}
})
// const prefix =  "ded-"
// const dynamicClasses = computed(() => {
// 	return {
// 		// align-items
// 		[`${prefix}align-items-${props.alignItems}`]: props.align,
//
// 		// justify-content
// 		[`${prefix}justify-content-${props.justify}`]: props.justify,
//
// 		[`${prefix}gap-0`]: props.hasGap,
//
// 		// 自定義 class
// 		[props.className]: !!props.className
// 	};
// });

</script>

<template>
	<div
		class="ded-row"
		:class="props.hasGap ? '' : 'ded-gap-0'"
		:style="{
			justifyContent: props.justify,
			alignItems: props.alignItems,
			rowGap: props.rowGap
		}">
		<slot></slot>
	</div>
</template>

<style lang="scss" scoped></style>