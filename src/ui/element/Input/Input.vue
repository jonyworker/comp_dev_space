<script setup>
import { ref, computed } from 'vue';
import Icon from '@/ui/element/Icon/Icon.vue';

// 定義 Model (改成最新寫法)
const modelValue = defineModel()

// 定義 Props
const props = defineProps({
	// -- input 基礎接口 -- //
	type: { // input type
		type: String,
		default: 'text',
	},
	placeholder: {
		type: String,
	},
	// -- 客製化接口 -- //
	label: {
		type: String,
	},
	size: {
		type: String,
		validator: (value) => ['small', 'medium', 'large'].includes(value),
	},
	prefix: {
		type: String,
	},
	suffix: {
		type: String,
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
	},
})

// 根據 hint 的值，計算屬性
const hintClass = computed(() => {
  if (props.hint.error.length > 0) {
    return 'error';
  }
  if (props.hint.description.length > 0) {
    return 'desc';
  }
  return '';
});

// 清除輸入框資料
const clearInput = () => {
	modelValue.value = '';
};

// 功能 - 控制顯示或隱藏密碼
const showPassword =  ref(false);
const togglePasswordVisibility = () => {
	showPassword.value = !showPassword.value;
};
</script>


<template>
	<div class="input-container ">
		<!-- 輸入框標題 -->
		<label v-if="props.label" class="input-label">{{props.label}}</label>
		<div :class="['input-group', `component-${size}`, `input-border-${hintClass}`, { 'input-disable': isDisable }, ]">
			<!-- 輸入框 prefix icon -->
			<template v-if="prefix">
			<Icon :class="`icon-${size}`" :name="props.prefix" ></Icon>
			</template>

			<!-- 輸入框 -->
			<input
				 :type="showPassword && props.type === 'password' ? 'text' : props.type"
			     :class="['input', `text-${size}`]"
			     :placeholder="props.placeholder"
			     v-model="modelValue">

			<!-- 輸入框 suffix icon -->
			<template v-if="suffix">
			<Icon :class="`icon-${size}`" :name="props.suffix" ></Icon>
			</template>

			<!-- Suffix Icons -->
			<template v-if="props.suffix || modelValue || props.type === 'password'">
			    <Icon v-if="props.suffix" :class="`icon-${props.size}`" :name="props.suffix"></Icon>

				<!-- input type 等於 text -->
			    <button v-if="modelValue && props.type === 'text'" class="clear-button" @click="clearInput">
				    <Icon name="close" :class="`icon-${props.size}`" />
			    </button>

				<!-- input type 等於 password -->
				<button v-if="props.type === 'password'" class="clear-button" @click="togglePasswordVisibility">
					<Icon :name="showPassword ? 'visibility' : 'visibility_off'" :class="`icon-${props.size}`" />
				</button>

			</template>
		</div>

		<!-- 輸入框說明文字 -->
		<small :class="['input-hint', `input-hint-${hintClass}`, { 'input-disable': props.isDisable }]">
		  {{hint.error.length > 0 ? hint.error : hint.description}}
		</small>
	</div>

</template>

<style scoped lang="scss">
.clear-button {
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	color: grey;
}
</style>