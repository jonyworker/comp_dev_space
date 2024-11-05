<script setup>
import { ref, watch } from "vue";
import Icon from "@/ui/element/Icon/Icon.vue";

// 定義 Model
const modelValue = defineModel();

// 定義 Props
const props = defineProps({
	label: {
		type: String,
	},
	value: {
		type: [String, Boolean],
	},
	name: {
		type: String,
	},
	id: {
		type: String,
	},
	themeColor: {
		type: String,
		default: "primary",
		validator: (value) =>
			["primary", "secondary", "tertiary", "success", "warning", "error", "info"].includes(value),
	},
	className: {
		type: String,
		default: "",
	},
	isChecked: {
		type: Boolean,
		default: false,
	},
	isMultiple: {
		type: Boolean,
		default: false,
	},
});

// 處理 check 狀態顯示
const isCheck = ref(false);

// 根據傳入的 isChecked 和 modelValue 設置初始值
watch(
	() => props.isChecked,
	(newVal) => {
		if (props.isMultiple) {
			// 多選模式下，將值加入陣列中
			if (newVal && Array.isArray(modelValue.value) && !modelValue.value.includes(props.value)) {
				modelValue.value.push(props.value);
			}
		} else {
			// 單選模式下，直接設定為 value
			if (newVal) {
				modelValue.value = props.value;
			}
		}
		isCheck.value = newVal;
	},
	{ immediate: true }
);

// 切換選中狀態
const handleCheck = () => {
	if (props.isMultiple) {
		if (Array.isArray(modelValue.value)) {
			if (isCheck.value) {
				// 如果已勾選，取消勾選並從陣列中移除
				modelValue.value = modelValue.value.filter((item) => item !== props.value);
			} else {
				// 否則將值加入陣列
				modelValue.value.push(props.value);
			}
		}
	} else {
		// 單選模式，直接設定或清除值
		modelValue.value = isCheck.value ?  props.value : true;
	}
	isCheck.value = !isCheck.value;
};

</script>

<template>
	<label :for="props.id" :class="{'checkbox': true, [props.className]: !!props.className}">
		<input
			class="checkbox-input"
			type="checkbox"
			:id="props.id"
			:name="props.name"
			:value="props.value"
			:checked="isCheck"
			@change="handleCheck"
		/>
		<!-- checkbox - 選擇框樣式 -->
		<div
			:class="[
                'checkbox-icon',
                isCheck
                    ? `checkbox-checked-${props.themeColor}`
                    : `checkbox-unchecked-${props.themeColor}`,
            ]"
		>
			<Icon v-if="isCheck" name="check" color="#fff"></Icon>
		</div>
		<!-- checkbox - 選項文字 -->
		<span class="checkbox-text">{{ props.label }}</span>
	</label>
</template>

<style scoped lang="scss"></style>
