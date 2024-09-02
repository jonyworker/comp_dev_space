<script setup>
import { ref } from 'vue'

const props = defineProps({
	content: {
		type: String,
		required: true
	},
	placement: {
		type: String,
		default: 'top',
		validator: (value) =>
			[
				'top-left', 'top', 'top-right',
				'right-top', 'right', 'right-bottom',
				'bottom-right', 'bottom', 'bottom-left',
				'left-bottom', 'left', 'left-top'
			].includes(value),
	},
	showArrow: {
		type: Boolean,
		default: true
	}
})

// tooltip 顯示控制變數
const visible = ref(false)

// 功能 - 控制 tooltip 的顯示及隱藏
const showTooltip = () => {
	visible.value = true
}
const hideTooltip = () => {
	visible.value = false
}
</script>

<template>
	<div>
		<div
			class="tooltip-wrapper"
			@mouseenter="showTooltip"
			@mouseleave="hideTooltip"
		>
			<slot></slot>
			<!-- tooltip - 本體 -->
			<div v-if="visible" :class="['tooltip-content', `tooltip-${props.placement}`]">
				<div v-if="props.showArrow"
				     :class="['tooltip-arrow',`tooltip-arrow-${props.placement}`]"></div>
				{{ content }}
			</div>
		</div>
	</div>

</template>

<style lang="scss" scoped>
.tooltip-wrapper {
	position: relative;
	display: inline-block;
}

/*--- TOOLTIP 本體 ---*/
.tooltip-content {
	position: absolute;
	background-color: #333;
	color: #fff;
	padding: 4px 8px;
	border-radius: 4px;
	font-size: 13px;
	white-space: nowrap;
	z-index: 1000;
	opacity: 0;
	transition: opacity 0.2s;
}
.tooltip-wrapper:hover .tooltip-content {
	opacity: 1;
}

/*--- TOOLTIP 箭頭 ---*/
.tooltip-arrow {
	width: 0;
	height: 0;
	border-style: solid;
	position: absolute;
}

/*--- TOOLTIP 本體位置 TOP ---*/
.tooltip-top, .tooltip-top-left, .tooltip-top-right {
	bottom: calc(100% + 10px);
	left: 50%;
	transform: translateX(-50%);
}

.tooltip-top-left {
	left: 0;
	transform: translateX(0);
}

.tooltip-top-right {
	left: 100%;
	transform: translateX(-100%);
}

/*--- TOOLTIP 本體位置 RIGHT ---*/
.tooltip-right, .tooltip-right-top, .tooltip-right-bottom {
	top: 50%;
	left: calc(100% + 10px);
	transform: translateY(-50%);
}

.tooltip-right-top {
	top: 0;
	transform: translateY(0);
}

.tooltip-right-bottom {
	top: 100%;
	transform: translateY(-100%);
}

/*--- TOOLTIP 本體位置 BOTTOM ---*/
.tooltip-bottom, .tooltip-bottom-left, .tooltip-bottom-right {
	top: calc(100% + 10px);
	left: 50%;
	transform: translateX(-50%);
}

.tooltip-bottom-left {
	left: 0;
	transform: translateX(0);
}

.tooltip-bottom-right {
	left: 100%;
	transform: translateX(-100%);
}

/*--- TOOLTIP 本體位置 LEFT ---*/
.tooltip-left, .tooltip-left-top, .tooltip-left-bottom {
	top: 50%;
	right: calc(100% + 10px);
	transform: translateY(-50%);
}

.tooltip-left-top {
	top: 0;
	transform: translateY(0);
}

.tooltip-left-bottom {
	top: 100%;
	transform: translateY(-100%);
}

/*--- TOOLTIP 箭頭位置 TOP ---*/
.tooltip-arrow-top, .tooltip-arrow-top-left, .tooltip-arrow-top-right {
	bottom: -4px;
	left: 50%;
	transform: translateX(-50%);
	border-width: 5px 5px 0 5px;
	border-color: #333 transparent transparent transparent;
}

.tooltip-arrow-top-left {
	left: 10%;
	transform: translateX(-10%);
}

.tooltip-arrow-top-right {
	left: 90%;
	transform: translateX(-90%);
}

/*--- TOOLTIP 箭頭位置 RIGHT ---*/
.tooltip-arrow-right, .tooltip-arrow-right-top, .tooltip-arrow-right-bottom {
	left: -4px;
	top: 50%;
	transform: translateY(-50%);
	border-width: 5px 5px 5px 0;
	border-color: transparent #333 transparent transparent;
}

.tooltip-arrow-right-top {
	top: 20%;
	transform: translateY(-20%);
}

.tooltip-arrow-right-bottom {
	top: 80%;
	transform: translateY(-80%);
}

/*--- TOOLTIP 箭頭位置 BOTTOM ---*/
.tooltip-arrow-bottom, .tooltip-arrow-bottom-left, .tooltip-arrow-bottom-right {
	top: -4px;
	left: 50%;
	transform: translateX(-50%);
	border-width: 0 5px 5px 5px;
	border-color: transparent transparent #333 transparent;
}

.tooltip-arrow-bottom-left {
	left: 10%;
	transform: translateX(-10%);
}

.tooltip-arrow-bottom-right {
	left: 90%;
	transform: translateX(-90%);
}

/*--- TOOLTIP 箭頭位置 LEFT ---*/
.tooltip-arrow-left, .tooltip-arrow-left-top, .tooltip-arrow-left-bottom {
	right: -4px;
	top: 50%;
	transform: translateY(-50%);
	border-width: 5px 0 5px 5px;
	border-color: transparent transparent transparent #333;
}

.tooltip-arrow-left-top {
	top: 15%;
	transform: translateY(-15%);
}

.tooltip-arrow-left-bottom {
	top: 85%;
	transform: translateY(-85%);
}
</style>
