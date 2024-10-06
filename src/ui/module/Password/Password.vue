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
	// -- 驗證與狀態接口 -- //
	hint: { // 錯誤提示
		type: Object,
		default: () => ({ error: '', description: '' }),
	},
	isDisabled: {
		type: Boolean,
		default: false,
	},
	customClass: {
		type: String,
		default: '',
	}
})

</script>

<template>
	<Input
		type="password"
		prefix="lock"
		:placeholder="props.placeholder"
		:label="props.label"
		:size="props.size"
		:hint="props.hint"
		:isDisabled="props.isDisabled"
		v-model="modelValue"
	></Input>
</template>

<style scoped lang="scss">

</style>