<script setup>
import { computed, watch } from 'vue';
import Slider from '@/ui/element/Slider/Slider.vue';
import Button from '@/ui/element/Button/Button.vue';
import Icon from '@/ui/element/Icon/Icon.vue';

// 定義 Model
const modelValue = defineModel('modelValue');

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
	prefix: {
		type: String,
		default: '',
	},
	suffix: {
		type: String,
		default: '',
	},
	isDisabled: {
		type: Boolean,
		default: false,
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
	unit: {
		type: String,
		default: '%',
	},
	initValue: {
		type: Number,
		required: true,
	},
	className: {
		type: String,
		default: '',
	},
});

const computedValue = computed({
	get: () => modelValue.value ?? props.initValue ?? props.min,
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
	if (modelValue.value === undefined) {
		computedValue.value = newValue;
	}
});
</script>

<template>
	<div :class="{'button-slider': true, [props.className]: !!props.className}">
		<Button
			variant="text"
			:themeColor="props.themeColor"
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
			:unit="props.unit"
			:step="props.step"
			:isDisabled="props.isDisabled"
			:initValue="props.initValue"
			v-model="computedValue"
		/>

		<Button
			variant="text"
			:themeColor="props.themeColor"
			:isDisabled="props.isDisabled"
			@click="handleIncreaseClick"
		>
			<slot name="suffix">
				<Icon v-if="props.suffix" :name="props.suffix" size="32"/>
			</slot>
		</Button>
	</div>
</template>
