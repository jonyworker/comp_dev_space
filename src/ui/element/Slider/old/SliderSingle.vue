<script setup>
import { computed, watch  } from 'vue';

// 定義 Model
const modelValue = defineModel()

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

// 單輸入範圍選取 - 計算選取範圍右側空間
const unSelectSpaceRatio = computed(() => {
	return 100 - (modelValue.value / props.sliderMaxVal) * 100 + "%"
})

// 監視 props.thumbSize 屬性變更 thumb 大小的 CSS 原生變數的值
watch(() => props.thumbSize, (newThumbSize) => {
	document.documentElement.style.setProperty('--thumbDiameter', `${newThumbSize}px`);
}, { immediate: true });
</script>

<template>
	<!-- Input - single-slider -->
	<div :class="['single-slider', `slider-${props.themeColor}`]">
		<div class="slide-track-container">
			<div class="slide-track" :style="{'left': 0, 'right': unSelectSpaceRatio }"></div>
		</div>
		<input
			type="range"
			:min="props.sliderMinVal"
			:max="props.sliderMaxVal"
			v-model="modelValue"
		/>
	</div>
</template>

<style scoped lang="scss">
</style>