<script setup>
import { computed } from 'vue';
import Input from '@/ui/element/Input/Input.vue';
import Button from '@/ui/element/Button/Button.vue';

// 定義 Model (改成最新寫法)
const modelValue = defineModel()

// 定義 Props
const props = defineProps({
	// -- Button 接口 -- //
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
	size: {
		type: String,
		default: '',
		validator: (value) => ['small', 'medium', 'large'].includes(value),
	},
	// -- input 接口 -- //
	inputLabel: {
		type: String,
	},
	placeholder: {
		type: String,
	},
	hint: { // 錯誤提示
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
	<label v-if="props.label" class="input-label">{{props.label}}</label>
	<div class="search">
		<Input
			:placeholder="props.placeholder"
			:size="props.size"
			prefix="search"
			v-model="modelValue"
			:hint="props.hint"
			:isDisable="props.isDisable"
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