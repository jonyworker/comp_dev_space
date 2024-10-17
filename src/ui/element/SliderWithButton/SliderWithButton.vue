<script setup>
import { ref, watch, defineProps } from 'vue';
import Slider from '@/ui/element/Slider/Slider.vue';
import Button from '@/ui/element/Button/Button.vue';
import Icon from '@/ui/element/Icon/Icon.vue';

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
})

const value = ref(props.initValue);

// 處理加法
const handleIncreaseClick = () => {
	value.value = Math.min(value.value + Number(props.step), props.max);
};

// 處理減法
const handleDecreaseClick = () => {
	value.value = Math.max(value.value - Number(props.step), props.min);
};

// 處理滑塊變更
const handleChange = (val) => {
	value.value = val;
	if (props.onChange) {
		props.onChange(val);
	}
};

// 監聽 initValue 的變更
watch(() => props.initValue, (newValue) => {
	value.value = newValue;
});

</script>

<template>
	<div :class="['button-slider', className]">
		<Button
			variant="text"
			:themeColor="props.themeColor"
			:isDisabled="props.isDisabled"
			@click="handleDecreaseClick"
		>
			<slot name="prefix">
				<Icon v-if="prefix" :name="prefix" size="32"/>
			</slot>
		</Button>

		<Slider
			:themeColor="props.themeColor"
			:min="min"
			:max="max"
			:unit="unit"
			:step="step"
			:isDisabled="isDisabled"
			:initValue="value"
			@change="handleChange"
		/>

		<Button
			variant="text"
			:themeColor="props.themeColor"
			:isDisabled="isDisabled"
			@click="handleIncreaseClick"
		>
			<slot name="suffix">
				<Icon v-if="suffix" :name="suffix" size="32"/>
			</slot>
		</Button>
	</div>
</template>

<style scoped lang="scss">
.button-slider {
	display: flex;
	align-items: center;
}
</style>
