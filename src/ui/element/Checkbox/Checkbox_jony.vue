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
	initValue: {
		type: Array,
		default: () => [],
	},
	className: {
		type: String,
		default: "",
	},

});

// 處理 check 狀態顯示
const isCheck = ref(false);

// 根據傳入的 initValue 和 modelValue 設置初始值
watch(
	() => props.initValue,
	(newVal) => {
		// 判斷是否為多選
		const isMultiple = Array.isArray(modelValue.value);

		if (isMultiple) {
			// 如果初始值包含當前項目，則將其加入 modelValue
			if (newVal.includes(props.value) && !modelValue.value.includes(props.value)) {
				modelValue.value.push(props.value);
			} else if (!newVal.includes(props.value) && modelValue.value.includes(props.value)) {
				modelValue.value = modelValue.value.filter((item) => item !== props.value);
			}
		} else {
			modelValue.value = newVal.includes(props.value);
		}
		isCheck.value = newVal.includes(props.value);
	},
	{ immediate: true }
);

// 切換選中狀態
const handleCheck = () => {
	const isMultiple = Array.isArray(modelValue.value);

	if (isMultiple) {
		if (isCheck.value) {
			modelValue.value = modelValue.value.filter((item) => item !== props.value);
		} else {
			modelValue.value.push(props.value);
		}
	} else {
		modelValue.value = !isCheck.value;
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
