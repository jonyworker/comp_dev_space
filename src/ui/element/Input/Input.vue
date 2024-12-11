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
	type: {
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
	size: {
		type: String,
		default: "medium",
		validator: (value) => ["small", "medium", "large"].includes(value),
	},
	initValue: {
		type: String,
		required: true,
	},
	hint: {
		type: Object,
		default: () => ({ error: "", description: "" }),
	},
	isDisabled: {
		type: Boolean,
		default: false,
	},
	isOpen: {
		type: Boolean,
		default: undefined,
	},
	className: {
		type: String,
		default: "",
	},
});

// 計算屬性
const hintClass = computed(() => {
	if (props.hint.error) return "error";
	if (props.hint.description) return "desc";
	return "";
});

// 初始化 modelValue
modelValue.value = props.initValue;

// 監聽 initValue 的變化
watch(() => props.initValue, (newValue) => {
	modelValue.value = newValue;
});

// 功能: 清除輸入框
const clearInput = () => {
	modelValue.value = "";
};

// 功能: 控制密碼顯示/隱藏
const showPassword = ref(false);
const togglePasswordVisibility = () => {
	showPassword.value = !showPassword.value;
};

// 功能: 下拉控制箭頭
const toggleDropdown = () => {
	if (props.isOpen !== undefined) {
		modelValue.value = ""; // 可選擇性操作
	}
};
</script>

<template>
	<div :class="{'ded-input-container':true, [ props.className ]: !!props.className}">
		<!-- 標籤 -->
		<label
			v-if="label"
			:for="inputId"
			:class="isDisabled ? 'ded-input-disable' : 'ded-input-label'"
		>
			{{ label }}
		</label>

		<!-- 輸入框組 -->
		<div
			:class="[
		        'ded-input-group',
		        `ded-component-${props.size}`,
		        `ded-input-border-${hintClass}`,
		        { 'ded-input-disable': props.isDisabled }
	        ]"
		>
			<!-- Prefix Icon -->
			<label
				v-if="prefix"
				:for="inputId"
				:class="[
		          `ded-icon-${props.size}`,
		          'ded-input-icon'
		        ]"
					>
				<Icon :name="props.prefix" />
			</label>

			<!-- Input -->
			<input
				:id="inputId"
				:type="showPassword && props.type === 'password' ? 'text' : props.type"
				v-model="modelValue"
				:placeholder="props.placeholder"
				:class="['ded-input', `text-${props.size}`, props.prefix ? 'ded-input-prefix' : '']"
				:disabled="props.isDisabled"
			/>

			<!-- 功能圖示 -->
			<div class="ded-input-feat-icon">
				<!-- 清除按鈕 -->
				<div
					v-if="modelValue && props.type !== 'password'"
					:class="`ded-icon-${props.size}`"
					@click="clearInput"
					style="cursor: pointer"
				>
					<Icon name="close" />
				</div>

				<!-- 密碼顯示/隱藏 -->
				<div
					v-if="props.type === 'password'"
					:class="`ded-icon-${props.size}`"
					@click="togglePasswordVisibility"
					style="cursor: pointer"
				>
					<Icon :name="showPassword ? 'visibility' : 'visibility_off'" />
				</div>

				<!-- 下拉箭頭 -->
				<div
					v-if="props.isOpen !== undefined"
					:class="`ded-icon-${props.size}`"
					@click="toggleDropdown"
					style="cursor: pointer"
				>
					<Icon
						:name="props.isOpen ? 'chevronUp' : 'chevronDown'"
						class="ded-dropdown-arrow"
					/>
				</div>
			</div>
		</div>

		<!-- 提示文字 -->
		<small
			:class="[
        'ded-input-hint',
        `ded-input-hint-${hintClass}`,
        { 'ded-input-disable': props.isDisabled }
      ]"
		>
			{{ hint.error || hint.description }}
		</small>
	</div>
</template>

<style scoped lang="scss">

</style>
