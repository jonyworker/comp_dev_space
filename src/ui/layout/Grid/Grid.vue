<script setup>
import { computed } from "vue";

// 定義 props
const props = defineProps({
	fluid: {
		type: Boolean,
		default: false,
	},
	gap: {
		type: String,
		default: "16",
	},
	direction: {
		type: String,
		validator: (value) => ["row", "column"].includes(value),
		default: "column",
	},
	className: {
		type: String,
		default: '',
	}
})
const styles = computed(() => ({
	display: 'flex',
	flexDirection: props.direction,
	justifyContent: 'center',
	gap: `${props.gap}px`,
	[props.className]: !!props.className
}));

</script>

<template>

	<div :class="props.fluid ? 'container-fluid' : 'container'"
		:style="styles">
		<slot></slot>
	</div>

</template>