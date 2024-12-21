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
	orderSm: {
		type: String,
		required: false,
		default: null,
		validator: (value) => ['first', '0', '1', '2', '3', '4', '5', 'last'].includes(value),
	},
	orderMd: {
		type: String,
		required: false,
		default: null,
		validator: (value) => ['first', '0', '1', '2', '3', '4', '5', 'last'].includes(value),
	},
	orderLg: {
		type: String,
		required: false,
		default: null,
		validator: (value) => ['first', '0', '1', '2', '3', '4', '5', 'last'].includes(value),
	},
	orderXl: {
		type: String,
		required: false,
		default: null,
		validator: (value) => ['first', '0', '1', '2', '3', '4', '5', 'last'].includes(value),
	},
	orderXxl: {
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
const prefix =  "ded-"
const dynamicClasses = computed(() => {
	return {
        // col
        [`${prefix}col`]:!isValidCol(props.col) && !props.sm && !props.md && !props.lg && !props.xl && !props.xxl,
		[`${prefix}col-${props.col}`]:isValidCol(props.col),
		[`${prefix}col-sm-${props.sm}`]:isValidCol(props.sm),
		[`${prefix}col-md-${props.md}`]:isValidCol(props.md),
		[`${prefix}col-lg-${props.lg}`]:isValidCol(props.lg),
		[`${prefix}col-xl-${props.xl}`]:isValidCol(props.xl),
		[`${prefix}col-xxl-${props.xxl}`]:isValidCol(props.xxl),

        // align-self
        [`${prefix}align-self-${props.alignSelf}`]: props.alignSelf,
        [`${prefix}align-self-sm-${props.alignSelfSm}`]: props.alignSelfSm,
        [`${prefix}align-self-md-${props.alignSelfMd}`]: props.alignSelfMd,
        [`${prefix}align-self-lg-${props.alignSelfLg}`]: props.alignSelfLg,
        [`${prefix}align-self-xl-${props.alignSelfXl}`]: props.alignSelfXl,
        [`${prefix}align-self-xxl-${props.alignSelfXxl}`]: props.alignSelfXxl,

        // order
        [`${prefix}order-${props.order}`]: props.order,
		[`${prefix}order-${props.orderSm}`]: props.orderSm,
		[`${prefix}order-${props.orderMd}`]: props.orderMd,
		[`${prefix}order-${props.orderLg}`]: props.orderLg,
		[`${prefix}order-${props.orderXl}`]: props.orderXl,
		[`${prefix}order-${props.orderXxl}`]: props.orderXxl,

		// 自定義 class
        [props.className]: !!props.className
	};
});

</script>

<template>
	<div :class="dynamicClasses">
		<slot></slot>
	</div>
</template>

<style lang="scss" scoped></style>