<script setup>
import { computed } from "vue";

// 定義 Props
const props = defineProps({
	label: {
		type: String,
	},
	value: {
		type: String,
	},
	inputId: {
		type: String,
	},
	name: {
		type: String,
	},
    themeColor: {
        type: String,
        default: "primary",
        validator: (value) =>
            [
                "primary",
                "secondary",
                "tertiary",
                "success",
                "warning",
                "error",
                "info",
            ].includes(value),
    },
	modelValue: {
		type: [Array, String],
	},
});

// 處理雙向綁定
const emits = defineEmits(["update:modelValue"]);
const handleChange = (event) => {
    emits("update:modelValue", event.target.value);
};
// 處理 checked 狀態顯示
const isChecked = computed(() => props.modelValue === props.value);
</script>

<template>
    <label :for="props.inputId" class="radio">
        <input
            class="radio-input"
            type="radio"
            :value="props.value"
            :id="props.inputId"
            :name="props.name"
            :checked="isChecked"
            @change="handleChange"
        />
        <!-- radio - 選擇框樣式 -->
        <div
            :class="[
                'radio-icon',
                isChecked ? `radio-checked-${props.themeColor}` : `radio-unchecked-${props.themeColor}`,
            ]"
        >
        </div>
        <!-- radio - 選項文字 -->
        <span class="radio-text">{{ props.label }}</span>
    </label>
</template>

<style lang="" scoped></style>
