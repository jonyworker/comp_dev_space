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
    alignSelfSm: {
        type: String,
        required: false,
        default: null,
        validator: (value) => ['start', 'end', 'center', 'baseline', 'stretch'].includes(value),
    },
    alignSelfMd: {
        type: String,
        required: false,
        default: null,
        validator: (value) => ['start', 'end', 'center', 'baseline', 'stretch'].includes(value),
    },
    alignSelfLg: {
        type: String,
        required: false,
        default: null,
        validator: (value) => ['start', 'end', 'center', 'baseline', 'stretch'].includes(value),
    },
    alignSelfXl: {
        type: String,
        required: false,
        default: null,
        validator: (value) => ['start', 'end', 'center', 'baseline', 'stretch'].includes(value),
    },
    alignSelfXxl: {
        type: String,
        required: false,
        default: null,
        validator: (value) => ['start', 'end', 'center', 'baseline', 'stretch'].includes(value),
    },
    order: {
        type: String,
        required: false,
        default: null,
        validator: (value) => ['first', '0', '1', '2', '3', '4', '5', 'last'].includes(value),
    },
	className: {
		type: String,
		default: '',
	}
})

function isValidCol(value) {
    if (value){
        return value || parseInt(value) > 0 && parseInt(value) < 13;
    } else {
        return false;
    }
}

const dynamicClasses = computed(() => {
	return {
        // col
        'col':!isValidCol(props.col),
		[`col-${props.col}`]:isValidCol(props.col),

        // 'col-sm':!isValidCol(props.col),
		[`col-sm-${props.sm}`]:isValidCol(props.sm),

        // 'col-md':!isValidCol(props.col),
		[`col-md-${props.md}`]:isValidCol(props.md),

        // 'col-lg':!isValidCol(props.col),
		[`col-lg-${props.lg}`]:isValidCol(props.lg),

        // 'col-xl':!isValidCol(props.col),
		[`col-xl-${props.xl}`]:isValidCol(props.xl),
        //
        // 'col-xxl':!isValidCol(props.col),
		[`col-xxl-${props.xxl}`]:isValidCol(props.xxl),

        // align-self
        [`align-self-${props.alignSelf}`]: props.alignSelf,
        [`align-self-sm-${props.alignSelfSm}`]: props.alignSelfSm,
        [`align-self-md-${props.alignSelfMd}`]: props.alignSelfMd,
        [`align-self-lg-${props.alignSelfLg}`]: props.alignSelfLg,
        [`align-self-xl-${props.alignSelfXl}`]: props.alignSelfXl,
        [`align-self-xxl-${props.alignSelfXxl}`]: props.alignSelfXxl,

        // order
        [`order-${props.order}`]: props.order,

        [props.className]: !!props.className
	};
});

</script>

<template>
	<div :class="dynamicClasses">
        {{props.col}}
		<slot></slot>
	</div>
</template>
