<script setup>
import { ref, watch, onMounted, onBeforeUnmount, defineProps } from 'vue';

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
	min: {
		type: Number,
		default: -100,
	},
	max: {
		type: Number,
		default: 100,
	},
	step: {
		type: [Number, String],
		default: 1,
	},
	initValue: {
		type: Number,
		default: 50,
	},
	unit: {
		type: String,
		default: '%',
	},
	isDisabled: {
		type: Boolean,
		default: false,
	},
	className: {
		type: String,
		default: '',
	},
	onChange: {
		type: Function,
		default: null,
	}
});

const value = ref(props.initValue || props.min);
const thumbPosition = ref(0);
const rangeRef = ref(null);
const containerRef = ref(null);
const thumbWidth = 20;
const tooltipWidth = 40;

const updateThumbPosition = (val) => {
	if (!rangeRef.value) return;
	const rangeWidth = rangeRef.value.offsetWidth - thumbWidth;
	thumbPosition.value = ((val - props.min) / (props.max - props.min)) * rangeWidth;
};

const updateRangeBackground = (val) => {
	const valuePercentage = ((val - props.min) / (props.max - props.min)) * 100;
	if (containerRef.value) {
		containerRef.value.style.setProperty('--progress', `${valuePercentage}%`);
	}
};

const handleChange = (e) => {
	const newValue = parseInt(e.target.value, 10);
	value.value = newValue;

	updateRangeBackground(newValue);
	updateThumbPosition(newValue);

	if (props.onChange) {
		props.onChange(newValue);
	}
};

// Watch for changes to initValue and update value accordingly
watch(() => props.initValue, (newValue) => {
	value.value = newValue;
});

// Watch for changes to value and update UI accordingly
watch(value, (newValue) => {
	updateRangeBackground(newValue);
	updateThumbPosition(newValue);
});

// Initialize on mount
onMounted(() => {
	updateRangeBackground(value.value);
	updateThumbPosition(value.value);

	const handleResize = () => {
		updateRangeBackground(value.value);
		updateThumbPosition(value.value);
	};

	window.addEventListener('resize', handleResize);

	// Cleanup on before unmount
	onBeforeUnmount(() => {
		window.removeEventListener('resize', handleResize);
	});
});
</script>

<template>
	<div class="slider-container" ref="containerRef">
		<div style="display: flex; justify-content: space-between; align-items: center; gap: 8px;">
			<input
				ref="rangeRef"
				type="range"
				:min="props.min"
				:max="props.max"
				:step="props.step"
				:value="value"
				:disabled="props.isDisabled"
				@input="handleChange"
				:class="['slider', props.isDisabled ? 'slider-disable' : `slider-${props.themeColor}`]"
			/>
		</div>

		<div
			:class="['tooltip', props.isDisabled ? 'tooltip-disable' : `tooltip-${props.themeColor}`]"
			:style="{ left: `calc(${ thumbPosition }px + ${ thumbWidth / 2 }px - ${ tooltipWidth / 2 }px)` }"
		>
			<span>{{ value }}</span>
			<span v-if="props.unit">{{ props.unit }}</span>
		</div>
	</div>
</template>

<style scoped lang="scss">
//.slider-container {
//	position: relative;
//	width: 100%; /* Ensure the container takes full width */
//}
//
//.tooltip {
//	position: absolute;
//	bottom: 100%; /* Position tooltip above the slider */
//	transform: translateX(-50%); /* Center the tooltip */
//	background-color: #fff; /* Background color for tooltip */
//	border: 1px solid #ccc; /* Optional border */
//	border-radius: 4px; /* Rounded corners */
//	padding: 4px; /* Padding around text */
//	white-space: nowrap; /* Prevent text wrapping */
//}
</style>
