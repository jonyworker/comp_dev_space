<script setup>
import { ref, computed } from "vue";
import Icon from "@/ui/element/Icon/Icon.vue";

// 定義 Props
const props = defineProps({
    // --  基礎接口 -- //
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
    customClass: {
        type: String,
        default: "",
    },
    // --  資料接口 -- //
    label: {
        type: String,
    },
    value: {
        type: [Boolean, Object],
    },
    name: {
        type: String,
    },
    modelValue: {
        type: [Array, Boolean],
    },
});
// 處理雙向綁定
const emits = defineEmits(["update:modelValue"]);
const computedModel = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emits("update:modelValue", value);
    },
});
// 處理 check 狀態顯示
const isCheck = ref(false);
const handleCheck = (index, event) => {
    isCheck.value = !isCheck.value;
};
</script>

<template>
    <label :for="props.value" class="checkbox">
        <input
            class="checkbox-input"
            type="checkbox"
            :id="props.value"
            :name="props.name"
            :value="props.value"
            v-model="computedModel"
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
