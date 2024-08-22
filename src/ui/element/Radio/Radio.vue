<script setup>
import { computed } from "vue";

// 定義 Props
const props = defineProps({
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
    inputId: {
        type: String,
    },
    name: {
        type: String,
    },
    value: {
        type: String,
    },
    label: {
        type: String,
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
            :id="props.inputId"
            :name="props.name"
            :value="props.value"
            :checked="isChecked"
            @change="handleChange"
        />
        <!-- radio - 選擇框樣式 -->
        <div
            :class="[
                'radio-icon',
                isChecked ? 'radio-checked-primary' : 'radio-unchecked-primary',
            ]"
        >
        </div>
        <!-- radio - 選項文字 -->
        <span class="radio-text">{{ props.label }}</span>
    </label>
</template>

<style lang="" scoped></style>
