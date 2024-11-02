<script setup>
import { computed } from "vue";

// 定義 props
const props = defineProps({
	// 最大寬度限制
	size: {
		type: String,
		required: false,
		default: "",
		validator: (value) =>
			["sm", "md", "lg", "xl", "xxl"].includes(value),
	},
	fluid: {
		type: Boolean,
		required: false,
		default: false,
	},
	className: {
		type: String,
		default: '',
	}
})
const containerClass = computed(() => {
	return {
		[`container${props.size ? '-' + props.size : ''}`]: !props.fluid,
		"container-fluid": props.fluid,
		[props.className]: !!props.className
	};
});
</script>

<template>
	<div :class="containerClass">
		<slot></slot>
	</div>
</template>