<script setup>
import { computed } from "vue";

// 定義 Model
const modelValue = defineModel()

// 定義 Props
const props = defineProps({
	label: {
		type: String,
	},
	value: {
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
	className: {
		type: String,
		default: '',
	},
});

// 處理 checked 狀態顯示
const isChecked = computed(() => props.modelValue === props.value);
</script>

<template>
    <label :class="{ 'radio': true, [ props.className ]: !!props.className }">
        <input
            class="radio-input"
            type="radio"
            :value="props.value"
            :name="props.name"
            :checked="isChecked"
            v-model="modelValue"
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
