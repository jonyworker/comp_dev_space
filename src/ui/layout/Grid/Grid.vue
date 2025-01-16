<script setup>
import { computed } from "vue";

// 定義 props
const props = defineProps({
	fluid: {
		type: Boolean,
		required: false,
		default: false,
	},
	gap: {
		type: Number,
		default: 0,
	},
	className: {
		type: String,
		default: "",
	}
})

const containerClass = computed(() => {
	const prefix = "ded-";
	const fluid = props.fluid;

	return {
		[fluid ? `${prefix}container-fluid` : `${prefix}container`]: true,
		[`ded-gap-${props.gap}`]: props.gap,
		[props.className]: !!props.className
	};
});
</script>

<template>
	<div :class="containerClass">
		<slot></slot>
	</div>
</template>