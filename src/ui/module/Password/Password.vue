<script setup>
import Input from '@/ui/element/Input/Input.vue';

// 定義 Model
const modelValue = defineModel()

// 定義 Props
const props = defineProps({
	// -- input 基礎接口 -- //
	placeholder: {
		type: String,
		default: 'Enter Password',
	},
	// -- 客製化接口 -- //
	label: {
		type: String,
	},
	size: {
		type: String,
		default: 'medium',
		validator: (value) => ['small', 'medium', 'large'].includes(value),
	},
	customClass: {
		type: String,
		default: '',
	},
	// -- 驗證與狀態接口 -- //
	hint: { // 錯誤提示
		type: Object,
		default: () => ({ error: '', description: '' }),
	},
	isDisable: {
		type: Boolean,
		default: false,
	},
})

</script>

<template>
	<Input
		prefix="lock"
		type="password"
		:label="props.label"
		:placeholder="props.placeholder"
		:size="props.size"
		v-model="modelValue"
		:hint="props.hint"
	></Input>
</template>

<style scoped lang="scss">

</style>