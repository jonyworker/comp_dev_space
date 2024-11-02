<script setup>
import { computed } from "vue";

// 定義 props
const props = defineProps({
	col: {
		type: [Number, String],
		required: false,
	},
	sm: {
		type: [Number, String],
		required: false,
	},
	md: {
		type: [Number, String],
		required: false,
	},
	lg: {
		type: [Number, String],
		required: false,
	},
	xl: {
		type: [Number, String],
		required: false,
	},
	xxl: {
		type: [Number, String],
		required: false,
	},
	alignSelf: {
		type: String,
		required: false,
		default: null,
		validator: (value) => ['start', 'end', 'center', 'baseline', 'stretch'].includes(value),
	},
	className: {
		type: String,
		default: '',
	}
})

const colNum = Number.parseInt(props.col);
const smColNum = Number.parseInt(props.sm);
const mdColNum = Number.parseInt(props.md);
const lgColNum = Number.parseInt(props.lg);
const xlColNum = Number.parseInt(props.xl);
const xxlColNum = Number.parseInt(props.xxl)

const dynamicClasses = computed(() => {
	return {
		col: !isNaN(colNum) && colNum > 0 && colNum < 13,
		[`col-${colNum}`]: !isNaN(colNum) && colNum > 0 && colNum < 13,
		[`col-sm-${smColNum}`]:
		!isNaN(smColNum) && smColNum > 0 && smColNum < 13,
		[`col-md-${mdColNum}`]:
		!isNaN(mdColNum) && mdColNum > 0 && mdColNum < 13,
		[`col-lg-${lgColNum}`]:
		!isNaN(lgColNum) && lgColNum > 0 && lgColNum < 13,
		[`col-xl-${xlColNum}`]:
		!isNaN(xlColNum) && xlColNum > 0 && xlColNum < 13,
		[`col-xxl-${xlColNum}`]:
		!isNaN(xxlColNum) && xxlColNum > 0 && xxlColNum < 13,
	};
});

</script>

<template>
	<div :class="dynamicClasses">
		<slot></slot>
	</div>
</template>
