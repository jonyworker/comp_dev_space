<script setup>
import Input from '@/ui/element/Input/Input.vue';
import Button from '@/ui/element/Button/Button.vue';

// 定義 Model
const modelValue = defineModel()

// 定義 Props
const props = defineProps({
	btnVariant: {
		type: String,
		default: 'contained',
		validator: (value) => ['contained', 'outlined', 'text'].includes(value),
	},
	btnColor: {
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
	placeholder: {
		type: String,
	},
	size: {
		type: String,
		default: 'medium',
		validator: (value) => ['small', 'medium', 'large'].includes(value),
	},
	hint: {
		type: Object,
		default: () => ({ error: '', description: '' }),
	},
	isDisable: {
		type: Boolean,
		default: false,
	},
	customClass: {
		type: String,
		default: '',
	},
});
</script>

<template>
	<!-- 輸入框標題 -->
	<label v-if="props.inputLabel" class="input-label">{{props.inputLabel}}</label>
	<div class="search">
		<Input
			prefix="search"
			:placeholder="props.placeholder"
			:size="props.size"
			:hint="props.hint"
			:isDisable="props.isDisable"
			v-model="modelValue"
		></Input>
		<Button
			:themeColor="props.btnColor"
			:size="props.size"
			:variant="props.btnVariant"
			:isDisable="props.isDisable"
		>搜尋</Button>
	</div>
</template>

<style scoped lang="scss">

</style>