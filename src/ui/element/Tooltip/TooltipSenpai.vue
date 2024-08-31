<template>
  <span
	  ref="childrenRef"
	  @mouseover="isVisible = true"
	  @mouseleave="isVisible = false"
	  class="tooltip-container"
  >
    <slot></slot>
  </span>
	<Portal v-if="isVisible">
		<div
			:style="tooltipStyle"
			:class="['tooltip', className]"
		>
			<div class="tooltip-content">
				<slot name="content">{{ content }}</slot>
				<div
					v-if="showArrow"
					:class="['tooltip-arrow', arrowPositionClass]"
				>
					<div class="tooltip-arrow-shape" />
				</div>
			</div>
		</div>
	</Portal>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
// import Portal from './Portal.vue'
// import { getTargetPosition } from '@src/utils/position'
// import { getArrowPositionClass } from './styled'

const props = defineProps({
	content: {
		type: [String, Object],
		required: true
	},
	showArrow: {
		type: Boolean,
		default: false
	},
	placement: {
		type: String,
		required: true,
		validator(value) {
			return [
				'top-left', 'top', 'top-right',
				'right-top', 'right', 'right-bottom',
				'bottom-right', 'bottom', 'bottom-left',
				'left-bottom', 'left', 'left-top'
			].includes(value)
		}
	},
	className: {
		type: String,
		default: ''
	}
})

const isVisible = ref(false)
const childrenRef = ref(null)
const childrenSize = ref({ width: 0, height: 0 })
const position = ref({ top: 0, left: 0 })

const handleOnResize = () => {
	if (childrenRef.value) {
		childrenSize.value = {
			width: childrenRef.value.offsetWidth,
			height: childrenRef.value.offsetHeight
		}
		position.value = {
			top: childrenRef.value.getBoundingClientRect().top,
			left: childrenRef.value.getBoundingClientRect().left
		}
	}
}

const tooltipStyle = computed(() => {
	return getTargetPosition(position.value, childrenSize.value, props.placement, '6px')
})

const arrowPositionClass = computed(() => {
	return getArrowPositionClass(props.placement)
})

onMounted(() => {
	handleOnResize()
	window.addEventListener('resize', handleOnResize)
})

onBeforeUnmount(() => {
	window.removeEventListener('resize', handleOnResize)
})
</script>

<style scoped>
.tooltip-container {
	/* Add your styles for the container if needed */
}

.tooltip {
	position: absolute;
	z-index: 999;
}



.tooltip-content {
	color: white;
	padding: 4px 8px;
	border-radius: 4px;
	background-color: black;
	font-size: 13px;
}

.tooltip-arrow {
	position: absolute;
}

.tooltip-top {
	transform: translateY(-100%);
}

.tooltip-bottom {
	transform: translate(-50%, 8px);
}

.tooltip-arrow-top-left {
	top: 0;
	left: 0;
	transform: translate(-50%, -100%);
}

.tooltip-arrow-top {
	top: 0;
	left: 50%;
	transform: translate(-50%, -100%);
}

.tooltip-arrow-top-right {
	top: 0;
	left: 100%;
	transform: translate(-50%, -100%);
}

.tooltip-arrow-right-top {
	top: 0;
	left: 100%;
	transform: translate(0%, -50%);
}

.tooltip-arrow-right {
	top: 50%;
	left: 100%;
	transform: translate(0%, -50%);
}

.tooltip-arrow-right-bottom {
	top: 100%;
	left: 100%;
	transform: translate(0%, -50%);
}

.tooltip-arrow-bottom-right {
	top: 100%;
	left: 100%;
	transform: translate(-50%, 0%);
}

.tooltip-arrow-bottom {
	top: 100%;
	left: 50%;
	transform: translate(-50%, 0%);
}

.tooltip-arrow-bottom-left {
	top: 100%;
	left: 0;
	transform: translate(-50%, 0%);
}

.tooltip-arrow-left-bottom {
	top: 100%;
	left: 0;
	transform: translate(-100%, -50%);
}

.tooltip-arrow-left {
	top: 50%;
	left: 0;
	transform: translate(-100%, -50%);
}

.tooltip-arrow-left-top {
	top: 0;
	left: 0;
	transform: translate(-100%, -50%);
}

.tooltip-arrow-shape {
	width: 10px;
	height: 6px;
	background: #000000;
	clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
}
</style>
