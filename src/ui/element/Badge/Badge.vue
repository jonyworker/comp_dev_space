<script setup>
// 定義 Props
const props = defineProps({
	themeColor: {
		type: String,
		default: 'primary',
		validator: (value) =>
			[
				'primary',
				'secondary',
				'tertiary',
				'success',
				'warning',
				'error',
				'info',
			].includes(value),
	},
	max: {
		type: Number,

	},
	content: {
		type: [String, Number, null],
	},
	placement: {
		type: String,
		// default: 'top-right',
	},
	isDot: {
		type: Boolean,
		default: false,
	},
	isIcon: {
		type: Boolean,
		default: false,
	},
	layout:{
		type: String,
		default: 'inline',
		validator: (value) =>
			['inline', 'block',].includes(value),

	}
})
</script>

<template>
	<span class="badge__container">
		<slot/>

		<!-- Badge - 不含數值樣式 -->

<!--			<span-->
<!--				class="badge__content "-->
<!--				:class="`${props.placement}`">-->
<!--				{{content}}-->
<!--	        </span>-->
<!--		-->

		<!-- Badge - inline -->

		    <span
			    class="badge__content"
			    :class="{
			        'badge__content-isDot': props.isDot,
			        [`badge__content-${props.layout}`]: props.layout,
			        'badge__content-isIcon': props.isIcon
			    }">

                {{ !props.isDot ? content : '' }}
		    </span>


    </span>
</template>v

<style scoped lang="scss">

.badge__container {
	position: relative;
	display: inline-flex;
	//vertical-align: center;
}
// 基礎設定
.badge__content{
	background-color: #FF4C51;
	border-radius: 999px;
	color: #fff;
	text-align: center;
	white-space: nowrap;
	z-index: 5;

}
// layout 行內 - 顯示文字
.badge__content.badge__content-inline {
	display: inline-block;
	height: fit-content;
	margin-left: 4px;
	padding: 0 6px;

}
// layout 行內 - 顯示點點
.badge__content.badge__content-inline.badge__content-isDot {
	display: inline-block;
	width: 8px;
	height: 8px;
	margin-left: 4px;
	padding: 0;
}

// layout 區塊 - 顯示文字
.badge__content.badge__content-block {
	position: absolute;
	font-size: 12px;
	line-height: 1;
	padding: 2px 6px;
	bottom: calc(100% - 20.65%);
	left: calc(100% - 8.65%);
}

// layout 區塊 - 顯示文字 (isIcon)
.badge__content.badge__content-block.badge__content-isIcon {
	bottom: calc(100% - 38%);
	left: calc(100% - 15%);
}

// layout 區塊 - 顯示文字 (isIcon)
.badge__content.badge__content-block.badge__content-isIcon.badge__content-isDot {
	width: 8px;
	height: 8px;
	margin-left: 4px;
	padding: 0;
	bottom: calc(100% - 35%);
	left: calc(100% - 30%);
}








//
//.badge__content.badge__content-block.badge__content-isIcon {
//	position: absolute;
//	width: 8px;
//	height: 8px;
//	padding: 0;
//	bottom: calc(100% - 38%);
//	left: calc(100% - 15%);
//}






</style>