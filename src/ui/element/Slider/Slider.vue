<script setup>
import SliderSingle from "@/ui/element/Slider/SliderSingle.vue";
import SliderDouble from "@/ui/element/Slider/SliderDouble.vue";

// 定義 Model
const modelValue = defineModel()
const modelCurrentSliderMinValue = defineModel('currentSliderMinValue')
const modelCurrentSliderMaxValue = defineModel('currentSliderMaxValue')

const props = defineProps({
	sliderMinVal:{
		type: Number,
		default: 0
	},
	sliderMaxVal: {
		type: Number,
		default: 5000
	},
	thumbSize: {
		type: [Number, String],
		default: '20',
	},
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
	range: {
		type: Boolean,
		default: false
	},
})
</script>

<template>
	<template v-if="!props.range">
		<SliderSingle
			:sliderMinVal="props.sliderMinVal"
			:sliderMaxVal="props.sliderMaxVal"
			:themeColor="props.themeColor"
			:thumbSize="props.thumbSize"
			v-model="modelValue"
		></SliderSingle>
	</template>
	<template v-else>
		<SliderDouble
			:sliderMinVal="props.sliderMinVal"
			:sliderMaxVal="props.sliderMaxVal"
			:themeColor="props.themeColor"
			:thumbSize="props.thumbSize"
			v-model:currentSliderMinValue="modelCurrentSliderMinValue"
			v-model:currentSliderMaxValue="modelCurrentSliderMaxValue"
		></SliderDouble>
	</template>
</template>



<style>

</style>
