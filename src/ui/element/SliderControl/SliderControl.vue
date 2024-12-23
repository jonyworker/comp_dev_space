<script setup>
import { computed, watch } from 'vue';
import Slider from '@/ui/element/Slider/Slider.vue';
import Button from '@/ui/element/Button/Button.vue';
import Icon from '@/ui/element/Icon/Icon.vue';

// 定義 Model
const modelValue = defineModel('modelValue');

// 定義 Props
const props = defineProps({
	// themeColor: {
	// 	type: String,
	// 	default: "primary",
	// 	validator: (value) =>
	// 		[
	// 			"primary",
	// 			"secondary",
	// 			"neutral",
	// 			"info",
	// 			"success",
	// 			"warning",
	// 			"error",
	// 		].includes(value),
	// },
	min: {
		type: Number,
		default: 0,
	},
	max: {
		type: Number,
		default: 100,
	},
	step: {
		type: Number,
		default: 1,
	},
	initValue: {
		type: Number,
		required: true,
		default: 0,
	},
	label: {
		type: String,
		default: "",
	},
	prefix: {
		type: String,
		default: "",
	},
	suffix: {
		type: String,
		default: "",
	},
	isDisabled: {
		type: Boolean,
		default: false,
	},
	className: {
		type: String,
		default: "",
	},
});

// 修正後的 computedValue
const computedValue = computed({
	get: () => {
		if (modelValue.value !== undefined) {
			return modelValue.value;
		}
		if (props.initValue !== undefined) {
			return props.initValue;
		}
		return props.min;
	},
	set: (newValue) => {
		modelValue.value = newValue;
	}
});

// 處理加法
const handleIncreaseClick = () => {
	computedValue.value = Math.min(computedValue.value + Number(props.step), props.max);
};

// 處理減法
const handleDecreaseClick = () => {
	computedValue.value = Math.max(computedValue.value - Number(props.step), props.min);
};

// 監聽 initValue 的變更
watch(() => props.initValue, (newValue) => {
	if (modelValue.value === undefined || modelValue.value === null) {
		computedValue.value = newValue;
	}
});
</script>

<template>
	<div :class="{'ded-slider-control': true, [props.className]: !!props.className}">
		<Button
			variant="text"
			themeColor="primary"
			:isDisabled="props.isDisabled"
			@click="handleDecreaseClick"
		>
			<slot name="prefix">
				<Icon v-if="props.prefix" :name="props.prefix" size="32"/>
			</slot>
		</Button>

		<Slider
			:themeColor="props.themeColor"
			:min="props.min"
			:max="props.max"
			:step="props.step"
			:label="props.label"
            :isShowRange="false"
            :isShowCurrValue="true"
			:initValue="props.initValue"
			:isDisabled="props.isDisabled"
			v-model="computedValue"
		/>

		<Button
			variant="text"
            themeColor="primary"
			:isDisabled="props.isDisabled"
			@click="handleIncreaseClick"
		>
			<slot name="suffix">
				<Icon v-if="props.suffix" :name="props.suffix" size="32"/>
			</slot>
		</Button>
	</div>
</template>
