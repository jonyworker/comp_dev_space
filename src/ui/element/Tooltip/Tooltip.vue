<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue';

// 定義 Props
const props = defineProps({
	placement: {
		type: String,
		default: 'top',
		validator: value => [
			'top-left', 'top', 'top-right',
			'right-top', 'right', 'right-bottom',
			'bottom-right', 'bottom', 'bottom-left',
			'left-top','left','left-bottom'
		].includes(value)
	},
	showArrow: {
		type: Boolean,
		default: true
	}
});

const tooltipTriggerRef = ref(null);
const tooltipContentRef = ref(null);
const tooltipStyles = ref({});

// 功能 - 生成 tooltip id
const tooltipId = `tooltip-${Math.random().toString(36).substring(2, 9)}`;

// 功能 - 控制 tooltip 的顯示及隱藏
const visible = ref(false);
const showTooltip = () => {
	visible.value = true;
	nextTick(updateTooltipPosition);
};
const hideTooltip = () => {
	visible.value = false;
};

// 功能 計算位置
const updateTooltipPosition = () => {
	if (!tooltipTriggerRef.value || !tooltipContentRef.value || !visible.value) return;


	const triggerElement = tooltipTriggerRef.value.getBoundingClientRect();
	const tooltipElement = tooltipContentRef.value.getBoundingClientRect();

	let top, left;

	switch (props.placement) {
		//-- [ top ] --//
		case 'top-right':
			top = (triggerElement.top - tooltipElement.height - 12);
			left = triggerElement.right - tooltipElement.width;
			break;
		case 'top':
			top = (triggerElement.top - tooltipElement.height - 12);
			left = triggerElement.left + (triggerElement.width / 2) - (tooltipElement.width / 2);
			break;
		case 'top-left':
			top = (triggerElement.top - tooltipElement.height - 12);
			left = triggerElement.left;
			break;

		//-- [ right ] --//
		case 'right-top':
			top = triggerElement.top;
			left = (triggerElement.right + 12);
			break;
		case 'right':
			top = triggerElement.top + (triggerElement.height / 2) - (tooltipElement.height / 2);
			left = (triggerElement.right + 12);
			break;
		case 'right-bottom':
			top = (triggerElement.bottom - tooltipElement.height);
			left = (triggerElement.right + 12);
			break;

		//-- [ bottom ] --//
		case 'bottom-right':
			top = (triggerElement.bottom + 12);
			left = triggerElement.right - tooltipElement.width;
			break;
		case 'bottom':
			top = (triggerElement.bottom + 12);
			left = triggerElement.left + (triggerElement.width / 2) - (tooltipElement.width / 2);
			break;
		case 'bottom-left':
			top = (triggerElement.bottom + 12);
			left = triggerElement.left;
			break;

		//-- [ left ] --//
		case 'left-top':
			top = triggerElement.top;
			left = (triggerElement.left - tooltipElement.width - 12);
			break;
		case 'left':
			top = triggerElement.top + (triggerElement.height / 2) - (tooltipElement.height / 2);
			left = (triggerElement.left - tooltipElement.width - 12);
			break;
		case 'left-bottom':
			top = (triggerElement.bottom - tooltipElement.height);
			left = (triggerElement.left - tooltipElement.width - 12);
			break;
	}

	tooltipStyles.value = {
		top: `${top}px`,
		left: `${left}px`,
		position: 'fixed'
	};
};

onMounted(() => {
	window.addEventListener('scroll', updateTooltipPosition);
	window.addEventListener('resize', updateTooltipPosition);
});

onBeforeUnmount(() => {
	window.removeEventListener('scroll', updateTooltipPosition);
	window.removeEventListener('resize', updateTooltipPosition);
});
</script>

<template>
	<div
		ref="tooltipTriggerRef"
		class="tooltip-trigger"
		@mouseenter="showTooltip"
		@mouseleave="hideTooltip"
		:aria-describedby="tooltipId"
	>
		<slot></slot>
	</div>

	<Teleport to="body">
		<Transition name="fade">
			<div
				v-if="visible"
				:id="tooltipId"
				ref="tooltipContentRef"
				:style="tooltipStyles"
				class="tooltip-content"
				:class="props.placement"
			>
				<slot name="content"></slot>
				<div v-if="showArrow" :class="`tooltip-arrow ${props.placement}`"></div>
			</div>
		</Transition>
	</Teleport>
</template>

<style lang="scss" scoped>
.tooltip-trigger {
	display: inline-block;
}

.tooltip-content {
	background-color: black;
	color: white;
	padding: 4px 8px;
	border-radius: 4px;
	z-index: 1000;
	position: absolute  ;
}

.tooltip-arrow {
	width: 0;
	height: 0;
	border-style: solid;
	position: absolute;
}

/*--- TOOLTIP 箭頭位置 TOP ---*/
.tooltip-arrow.top,
.tooltip-arrow.top-left,
.tooltip-arrow.top-right {
	border-width: 5px 5px 0 5px;
	border-color: black transparent transparent transparent;
	bottom: -5px;
}
.tooltip-arrow.top {
	left: 50%;
	transform: translateX(-50%);
}
.tooltip-arrow.top-left {
	left: 10px;
}
.tooltip-arrow.top-right {
	right: 10px;
}

/*--- TOOLTIP 箭頭位置 RIGHT ---*/
.tooltip-arrow.right,
.tooltip-arrow.right-top,
.tooltip-arrow.right-bottom {
	border-width: 5px 5px 5px 0;
	border-color: transparent black transparent transparent;
	left: -5px;
}
.tooltip-arrow.right {
	top: 50%;
	transform: translateY(-50%);
}
.tooltip-arrow.right-top{
	top: 5px;
}
.tooltip-arrow.right-bottom {
	bottom: 5px;
}

/*--- TOOLTIP 箭頭位置 BOTTOM ---*/
.tooltip-arrow.bottom,
.tooltip-arrow.bottom-left,
.tooltip-arrow.bottom-right {
	border-width: 0 5px 5px 5px;
	border-color: transparent transparent black transparent;
	top: -5px;
}
.tooltip-arrow.bottom {
	left: 50%;
	transform: translateX(-50%);
}
.tooltip-arrow.bottom-left {
	left: 10px;
}
.tooltip-arrow.bottom-right {
	right: 10px;
}

/*--- TOOLTIP 箭頭位置 LEFT ---*/
.tooltip-arrow.left,
.tooltip-arrow.left-top,
.tooltip-arrow.left-bottom {
	border-width: 5px 0 5px 5px;
	border-color: transparent transparent transparent black;
	right: -5px;
}
.tooltip-arrow.left {
	top: 50%;
	transform: translateY(-50%);
}
.tooltip-arrow.left-top {
	top: 5px;
}
.tooltip-arrow.left-bottom {
	bottom: 5px;
}


/*--- TRANSITION 動畫 ---*/
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>