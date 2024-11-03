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

	// column row gap 設定
	g: {
		type: String,
		required: false,
		validator: (value) => ['0', '1', '2', '3', '4', '5',].includes(value),
	},
	gx: {
		type: String,
		required: false,
		validator: (value) => ['0', '1', '2', '3', '4', '5',].includes(value),
	},
	gy: {
		type: String,
		required: false,
		validator: (value) => ['0', '1', '2', '3', '4', '5',].includes(value),
	},
	className: {
		type: String,
		default: '',
	}
})
const prefix =  "ded-"
const dynamicClasses = computed(() => {
	return {
		// align-items
		[`${prefix}align-items-${props.align}`]: props.align,
		[`${prefix}align-items-sm-${props.alignSm}`]: props.alignSm,
		[`${prefix}align-items-md-${props.alignMd}`]: props.alignMd,
		[`${prefix}align-items-lg-${props.alignLg}`]: props.alignLg,
		[`${prefix}align-items-xl-${props.alignXl}`]: props.alignXl,
		[`${prefix}align-items-xxl-${props.alignXxl}`]: props.alignXxl,

		// justify-content
		[`${prefix}justify-content-${props.justify}`]: props.justify,
		[`${prefix}justify-content-sm-${props.justifySm}`]: props.justifySm,
		[`${prefix}justify-content-md-${props.justifyMd}`]: props.justifyMd,
		[`${prefix}justify-content-lg-${props.justifyLg}`]: props.justifyLg,
		[`${prefix}justify-content-xl-${props.justifyXl}`]: props.justifyXl,
		[`${prefix}justify-content-xxl-${props.justifyXxl}`]: props.justifyXxl,

		// align-content
		[`${prefix}align-content-${props.alignContent}`]: props.alignContent,
		[`${prefix}align-content-sm-${props.alignContentSm}`]: props.alignContentSm,
		[`${prefix}align-content-md-${props.alignContentMd}`]: props.alignContentMd,
		[`${prefix}align-content-lg-${props.alignContentLg}`]: props.alignContentLg,
		[`${prefix}align-content-xl-${props.alignContentXl}`]: props.alignContentXl,
		[`${prefix}align-content-xxl-${props.alignContentXxl}`]: props.alignContentXxl,

		// gap 控制 column 間距
		[`${prefix}g-${props.g}`]: props.g,
		[`${prefix}gx-${props.gx}`]: props.gx,
		[`${prefix}gy-${props.gy}`]: props.gy,

		// 自定義 class
		[props.className]: !!props.className
	};
});

</script>

<template>
	<div class="ded-row" :class="dynamicClasses">
		<slot></slot>
	</div>
</template>

<style lang="scss" scoped></style>