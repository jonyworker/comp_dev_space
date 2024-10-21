<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue';

// 定義 Props
const props = defineProps({
	content: {
		type: String,
	},
	showArrow: {
		type: Boolean,
		default: true
	},
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
	className: {
		type: String,
		default: '',
	},
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
		:class="{'tooltip-trigger': true, [props.className]: !!props.className}"
		@mouseenter="showTooltip"
		@mouseleave="hideTooltip"
		:aria-describedby="tooltipId"
	>
		<!-- Tooltip - slot 包裝 -->
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
				{{props.content}}
				<!-- Tooltip - 箭頭 -->
				<div v-if="props.showArrow" :class="`tooltip-arrow ${props.placement}`"></div>
			</div>
		</Transition>
	</Teleport>
</template>

<style lang="scss" scoped>

</style>