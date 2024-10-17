<script setup>
import { computed, watch  } from 'vue';

// 定義 Model
const modelCurrentSliderMinValue = defineModel('currentSliderMinValue')
const modelCurrentSliderMaxValue = defineModel('currentSliderMaxValue')

// 定義 Props
const props = defineProps({
	//樣式接口
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
	// 數據接口
	sliderMinVal:{
		type: Number,
	},
	sliderMaxVal: {
		type: Number,
	},
	thumbSize: {
		type: [Number, String],
		default: '20',
	},
})

// 雙輸入範圍選取 - 計算選取範圍中的最大值與最小值
const rangeMinValue  = computed(() => Math.min(modelCurrentSliderMinValue.value, modelCurrentSliderMaxValue .value));
const rangeMaxValue  = computed(() => Math.max(modelCurrentSliderMinValue.value, modelCurrentSliderMaxValue .value));

// 雙輸入範圍選取 - 計算選取範圍左右兩側空間
const leftSpaceRatio = computed(() => {
	return (rangeMinValue .value / (props.sliderMaxVal)) * 100 + "%"
})
const rightSpaceRatio = computed(() => {
	return 100 - (rangeMaxValue .value / props.sliderMaxVal) * 100 + "%"
})

// 監視 props.thumbSize 屬性變更 thumb 大小的 CSS 原生變數的值
watch(() => props.thumbSize, (newThumbSize) => {
	document.documentElement.style.setProperty('--thumbDiameter', `${newThumbSize}px`);
}, { immediate: true });
</script>

<template>
	<div :class="['double-slider', `slider-${props.themeColor}`]">
		<div class="slide-track-container">
			<div class="slide-track" :style="{'left': leftSpaceRatio, 'right': rightSpaceRatio }"></div>
		</div>
		<input
			type="range"
			:min="props.sliderMinVal"
			:max="props.sliderMaxVal"
			v-model="modelCurrentSliderMinValue"
		/>
		<input
			type="range"
			:min="props.sliderMinVal"
			:max="props.sliderMaxVal"
			v-model="modelCurrentSliderMaxValue "
		/>
	</div>
</template>

<style scoped lang="scss">

</style>