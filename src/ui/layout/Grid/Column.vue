<script setup>
import { computed } from "vue";

// 定義 props
const props = defineProps({
	col: {
		type: Number,
	},
	xs: {
		type: Number,
	},
	sm: {
		type: Number,
	},
	md: {
		type: Number,
	},
	lg: {
		type: Number,
	},
	xl: {
		type: Number,
	},
	align: {
		type: String,
		default: "start",
		validator: (value) => ['start', 'center', 'end'].includes(value),
	},
	className: {
		type: String,
		default: "",
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
		[`${prefix}col`]:!isValidCol(props.col) && !props.xs && !props.sm && !props.md && !props.lg && !props.xl,
		// [`${prefix}col-${props.col}`]:isValidCol(props.col),
		[`${prefix}col-xs-${props.xs}`]:isValidCol(props.xs),
		[`${prefix}col-sm-${props.sm}`]:isValidCol(props.sm),
		[`${prefix}col-md-${props.md}`]:isValidCol(props.md),
		[`${prefix}col-lg-${props.lg}`]:isValidCol(props.lg),
		[`${prefix}col-xl-${props.xl}`]:isValidCol(props.xl),

		// 自定義 class
		[props.className]: !!props.className
	};
});

</script>

<template>
	<div :class="dynamicClasses" :style="{ 'text-align': props.align }">
		<slot></slot>
	</div>
</template>

<style lang="scss" scoped></style>