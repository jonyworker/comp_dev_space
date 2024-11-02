<script setup>
import { computed } from "vue";

// 定義 props
const props = defineProps({
	//響應式 align-items 設定，控制 column 內容對齊方式
	align: {
		type: String,
		required: false,
		default: null,
		validator: (value) => ['start', 'end', 'center', 'baseline', 'stretch'].includes(value),
	},
	alignSm: {
		type: String,
		required: false,
		default: null,
		validator: (value) => ['start', 'end', 'center', 'baseline', 'stretch'].includes(value),
	},
	alignMd: {
		type: String,
		required: false,
		default: null,
		validator: (value) => ['start', 'end', 'center', 'baseline', 'stretch'].includes(value),
	},
	alignLg: {
		type: String,
		required: false,
		default: null,
		validator: (value) => ['start', 'end', 'center', 'baseline', 'stretch'].includes(value),
	},
	alignXl: {
		type: String,
		required: false,
		default: null,
		validator: (value) => ['start', 'end', 'center', 'baseline', 'stretch'].includes(value),
	},
	alignXxl: {
		type: String,
		required: false,
		default: null,
		validator: (value) => ['start', 'end', 'center', 'baseline', 'stretch'].includes(value),
	},

	//響應式 justify-content 設定，讓內容在水平方向上分配空間
	justify: {
		type: String,
		required: false,
		default: null,
		validator: (value) => ['start', 'end', 'center', 'stretch', 'space-between', 'space-around', 'space-evenly',].includes(value),
	},
	justifySm: {
		type: String,
		required: false,
		default: null,
		validator: (value) => ['start', 'end', 'center', 'stretch', 'space-between', 'space-around', 'space-evenly',].includes(value),
	},
	justifyMd: {
		type: String,
		required: false,
		default: null,
		validator: (value) => ['start', 'end', 'center', 'stretch', 'space-between', 'space-around', 'space-evenly',].includes(value),
	},
	justifyLg: {
		type: String,
		required: false,
		default: null,
		validator: (value) => ['start', 'end', 'center', 'stretch', 'space-between', 'space-around', 'space-evenly',].includes(value),
	},
	justifyXl: {
		type: String,
		required: false,
		default: null,
		validator: (value) => ['start', 'end', 'center', 'stretch', 'space-between', 'space-around', 'space-evenly',].includes(value),
	},
	justifyXxl: {
		type: String,
		required: false,
		default: null,
		validator: (value) => ['start', 'end', 'center', 'stretch', 'space-between', 'space-around', 'space-evenly',].includes(value),
	},
	//響應式 align-content 設定，適用於多行內容的分配
	alignContent: {
		type: String,
		required: false,
		default: null,
		validator: (value) => ['start', 'end', 'center', 'stretch', 'space-between', 'space-around', 'space-evenly',].includes(value),
	},
	alignContentSm: {
		type: String,
		required: false,
		default: null,
		validator: (value) => ['start', 'end', 'center', 'stretch', 'space-between', 'space-around', 'space-evenly',].includes(value),
	},
	alignContentMd: {
		type: String,
		required: false,
		default: null,
		validator: (value) => ['start', 'end', 'center', 'stretch', 'space-between', 'space-around', 'space-evenly',].includes(value),
	},
	alignContentLg: {
		type: String,
		required: false,
		default: null,
		validator: (value) => ['start', 'end', 'center', 'stretch', 'space-between', 'space-around', 'space-evenly',].includes(value),
	},
	alignContentXl: {
		type: String,
		required: false,
		default: null,
		validator: (value) => ['start', 'end', 'center', 'stretch', 'space-between', 'space-around', 'space-evenly',].includes(value),
	},
	alignContentXxl: {
		type: String,
		required: false,
		default: null,
		validator: (value) => ['start', 'end', 'center', 'stretch', 'space-between', 'space-around', 'space-evenly',].includes(value),
	},
	className: {
		type: String,
		default: '',
	}
})

const dynamicClasses = computed(() => {
	return {
		[`align-items-${props.align}`]: props.align,
		[`align-items-sm-${props.alignSm}`]: props.alignSm,
		[`align-items-md-${props.alignMd}`]: props.alignMd,
		[`align-items-lg-${props.alignLg}`]: props.alignLg,
		[`align-items-xl-${props.alignXl}`]: props.alignXl,
		[`align-items-xxl-${props.alignXxl}`]: props.alignXxl,

		[`justify-content-${props.justify}`]: props.justify,
		[`justify-content-sm-${props.justifySm}`]: props.justifySm,
		[`justify-content-md-${props.justifyMd}`]: props.justifyMd,
		[`justify-content-lg-${props.justifyLg}`]: props.justifyLg,
		[`justify-content-xl-${props.justifyXl}`]: props.justifyXl,
		[`justify-content-xxl-${props.justifyXxl}`]: props.justifyXxl,

		[`align-content-${props.alignContent}`]: props.alignContent,
		[`align-content-sm-${props.alignContentSm}`]: props.alignContentSm,
		[`align-content-md-${props.alignContentMd}`]: props.alignContentMd,
		[`align-content-lg-${props.alignContentLg}`]: props.alignContentLg,
		[`align-content-xl-${props.alignContentXl}`]: props.alignContentXl,
		[`align-content-xxl-${props.alignContentXxl}`]: props.alignContentXxl,

		[props.className]: !!props.className
	};
});

</script>

<template>
	<div class="row" :class="dynamicClasses">
		<slot></slot>
	</div>
</template>

<style lang="scss" scoped></style>