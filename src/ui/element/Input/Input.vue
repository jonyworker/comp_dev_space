<script setup>
import { ref, computed, watch } from 'vue';
import Icon from '@/ui/element/Icon/Icon.vue';

// 定義 Model
const modelValue = defineModel();

// 定義 Props
const props = defineProps({
	label: {
		type: String,
		default: "",
	},
	type: { // input type
		type: String,
		default: "text",
	},
	placeholder: {
		type: String,
		default: "Placeholder...",
	},
	prefix: {
		type: String,
		default: "",
	},
	// suffix: {
	// 	type: String,
	// 	default: "",
	// },
	size: {
		type: String,
		default: "medium",
		validator: (value) => ["small", "medium", "large"].includes(value),
	},
	initValue: { // 預設值
		type: String,
		required: true,
	},
	hint: { // 錯誤提示
		type: Object,
		default: () => ({ error: "", description: "" }),
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


// 根據 hint 的值，計算屬性
const hintClass = computed(() => {
	if (props.hint.error.length > 0) {
		return 'error';
	}
	if (props.hint.description.length > 0) {
		return 'desc';
	}
	return "";
});

// 初始化 modelValue 的值
modelValue.value = props.initValue;

// 監聽 initValue 的變化，必要時更新 modelValue
watch(() => props.initValue, (newValue) => {
	modelValue.value = newValue;
});

// 清除輸入框資料
const clearInput = () => {
	modelValue.value = "";
};

// 功能 - 控制顯示或隱藏密碼
const showPassword = ref(false);
const togglePasswordVisibility = () => {
	showPassword.value = !showPassword.value;
};
</script>

<template>
	<div :class="{'ded-input-container': true, [props.className]: !!props.className}">
		<!-- 輸入框標題 -->
		<label v-if="props.label" class="ded-input-label">{{props.label}}</label>
		<div :class="['ded-input-group', `ded-component-${size}`, `ded-input-border-${hintClass}`, { 'ded-input-disable':
		props.isDisabled }, ]">
			<!-- 輸入框 prefix icon -->
			<template v-if="prefix">
				<div :class="`ded-icon-${props.size}`">
					<Icon :name="props.prefix" ></Icon>
				</div>
			</template>

			<!-- 輸入框 -->
			<input
				:type="showPassword && props.type === 'password' ? 'text' : props.type"
				:class="['ded-input', `text-${size}`]"
				:placeholder="props.placeholder"
				v-model="modelValue">

			<!-- Suffix Icons -->
			<template v-if=" modelValue || props.type === 'password'">
				<!-- input type 等於 text -->
				<div v-if="modelValue && props.type === 'text'" :class="`ded-icon-${props.size}`"
				     @click="clearInput">
					<Icon name="close" />
				</div>

				<!-- input type 等於 password -->
				<div v-if="props.type === 'password'" :class="`ded-icon-${props.size}`"
				     @click="togglePasswordVisibility" >
					<Icon :name="showPassword ? 'visibility' : 'visibility_off'" />
				</div>
			</template>
		</div>

		<!-- 輸入框說明文字 -->
		<small :class="['ded-input-hint', `ded-input-hint-${hintClass}`, { 'ded-input-disable': props.isDisabled }]">
			{{ hint.error.length > 0 ? hint.error : hint.description }}
		</small>
	</div>
</template>

<style scoped lang="scss">
</style>
