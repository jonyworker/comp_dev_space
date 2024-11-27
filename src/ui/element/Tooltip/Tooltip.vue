<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue';
import { getTargetPosition } from '@/utils/positionUtils';

// 定義 Props
const props = defineProps({
	content: {
		type: String,
		default: "",
	},
	placement: {
		type: String,
		default: "top",
		validator: value => [
			"top-left", "top", "top-right",
			"right-top", "right", "right-bottom",
			"bottom-right", "bottom", "bottom-left",
			"left-top", "left", "left-bottom"
		].includes(value)
	},
	showArrow: {
		type: Boolean,
		default: true
	},
	className: {
		type: String,
		default: "",
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
const updateTooltipPosition = async () => {
	if (!tooltipTriggerRef.value || !tooltipContentRef.value || !visible.value) return;

	await nextTick();

	const triggerElement = tooltipTriggerRef.value.getBoundingClientRect();

	const position = {
		top: triggerElement.top,
		left: triggerElement.left,
	};

	const childrenSize = {
		width: triggerElement.width,
		height: triggerElement.height,
	};

	const gap ='6px';
	//觸發器位置 觸發器長寬 placement 與觸發器之間間距
	tooltipStyles.value = getTargetPosition(position, childrenSize, props.placement, gap, false);
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
		:class="{'ded-tooltip-container': true, [props.className]: !!props.className}"
		@mouseenter="showTooltip"
		@mouseleave="hideTooltip"
		:aria-describedby="tooltipId"
	>
		<slot></slot>
	</div>
	<Teleport to="body">
<!--		<Transition name="fade">-->
<!--			<div-->
<!--				v-if="visible"-->
<!--				:id="tooltipId"-->
<!--				ref="tooltipContentRef"-->
<!--				:style="tooltipStyles"-->
<!--				class="ded-tooltip ded-tooltip-content"-->
<!--				:class="`ded-tooltip-${props.placement}`"-->
<!--			>-->
<!--				{{ props.content }}-->
<!--				<div-->
<!--					v-if="props.showArrow"-->
<!--					class="ded-tooltip-arrow"-->
<!--					:class="`ded-tooltip-arrow-${props.placement}`"-->
<!--				>-->
<!--					<div class="ded-tooltip-arrow-shape"></div>-->
<!--				</div>-->
<!--			</div>-->
<!--		</Transition>-->
		<Transition name="fade">
			<div
				v-if="visible"
				:id="tooltipId"
				ref="tooltipContentRef"
				:style="tooltipStyles"
				class="ded-tooltip"
				:class="`ded-tooltip-${props.placement}`"
			>
				<div class="ded-tooltip-content">
					{{ props.content }}
					<div
						v-if="props.showArrow"
						class="ded-tooltip-arrow"
						:class="`ded-tooltip-arrow-${props.placement}`"
					>
						<div class="ded-tooltip-arrow-shape"></div>
					</div>
				</div>

			</div>
		</Transition>
	</Teleport>
</template>

<style lang="scss" scoped>

</style>