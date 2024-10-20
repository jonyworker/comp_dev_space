<script setup>
import {computed, watch} from 'vue';
import Slider from '@/ui/element/Slider/Slider.vue';
import Button from '@/ui/element/Button/Button.vue';
import Icon from '@/ui/element/Icon/Icon.vue';

// 定義 Model
const modelValue = defineModel()

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
		default: 27,
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
});

const value = computed({
    get: () => modelValue.value ?? props.initValue ?? props.min,
    set: (newValue) => {
        modelValue.value = newValue;
    }
});

// 處理加法
const handleIncreaseClick = () => {
    value.value = Math.min(value.value + Number(props.step), props.max);
};

// 處理減法
const handleDecreaseClick = () => {
    value.value = Math.max(value.value - Number(props.step), props.min);
};

// 監聽 initValue 的變更
watch(() => props.initValue, (newValue) => {
    if (modelValue.value === undefined) {
        value.value = newValue;
    }
});

</script>

<template>
	<div :class="{'button-slider':true, [props.className]:!!modelValue.value}">
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
            v-model="value"
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


