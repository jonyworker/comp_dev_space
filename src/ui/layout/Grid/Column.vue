<script setup>
import { computed, toRef } from "vue";

// 定義 props
const props = defineProps({
	col: {
		type: [Number, String],
	},
	xs: {
		type: [Number, String],
	},
	sm: {
		type: [Number, String],
	},
	md: {
		type: [Number, String],
	},
	lg: {
		type: [Number, String],
	},
	xl: {
		type: [Number, String],
	},
	align: {
		type: String,
		validator: (value) =>
			['start', 'center', 'end' ].includes(value),
	},
})
const dynamicClasses = computed(() => {
	return {
		// col: !isNaN(colNum.value) && colNum > 0 && colNum < 13,
		// [`col-${props.col}`]: props.col && Number(props.col) > 0 && colNum < 13,
		[`col-xs-${props.xs}`]: props.xs && Number(props.xs) > 0 && Number(props.xs) < 13,
		[`col-sm-${props.sm}`]: props.sm && Number(props.xs) > 0 && Number(props.xs) < 13,
		[`col-md-${props.md}`]: props.md && Number(props.md) > 0 && Number(props.md) < 13,
		[`col-lg-${props.lg}`]: props.lg && Number(props.lg) > 0 && Number(props.lg) < 13,
		[`col-xl-${props.xl}`]: props.xl && Number(props.xl) > 0 && Number(props.xl) < 13
	};
});

const styles = computed(() => ({
	textAlign: props.align,
}));


</script>

<template>
	<div :class="dynamicClasses"
	     :style="styles">
		<slot></slot>
	</div>
</template>
