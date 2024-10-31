<script setup>
import { computed } from "vue";

// 定義 props
const props = defineProps({
	hasGap:{
		type: Boolean,
		default: false,
	},
	justify: {
		type: String,
		validator: (value) =>
			['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'].includes(value),
		default: 'flex-start',
	},
	alignItems: {
		type: String,
		validator: (value) =>
			['stretch', 'center', 'flex-start', 'flex-end', 'baseline'].includes(value),
		default: 'stretch',
	},
	rowGap: {
		type: String,
		default: '16',
	},
})

const styles = computed(() => ({
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: props.justify,
	alignItems: props.alignItems,
	rowGap: `${props.rowGap}px`
}));

</script>

<template>
	<div :class="{'row': true, 'gap-0':!props.hasGap}"
		:style="styles">
		<slot></slot>
	</div>
</template>

<style lang="scss" scoped></style>