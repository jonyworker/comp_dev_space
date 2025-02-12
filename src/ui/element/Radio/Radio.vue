<script setup>
// import { watch } from "vue";

// 定義 Model
const modelValue = defineModel();

// 定義 Props
const props = defineProps({
    dataSource: {
        type: Array,
        required: true,
    },
    direction: {
        type: String,
        default: "row",
        validator: (value) => ["row", "column"].includes(value),
    },
    size: {
        type: String,
        default: "medium",
        validator: (value) => ["small", "medium", "large"].includes(value),
    },
    className: {
        type: String,
        default: "",
    },
});
</script>

<template>
    <div
        :class="{
            'ded-radio-container': true,
            [`ded-radio-container-${props.direction}`]: props.direction,
            [props.className]: !!props.className,
        }"
    >
        <label
            v-for="(item, index) in props.dataSource"
            :key="index"
            class="ded-radio"
            :class="{
                'ded-radio-input-disabled': item.isDisabled,
                [`ded-text-${props.size}`]: props.size
            }"
        >
            <input
                class="ded-radio-input"
                type="radio"
                :value="item.value"
                :name="item.name"
                v-model="modelValue"
            />
            <!-- radio - 選擇框樣式 -->
            <div
                :class="{
                    'ded-radio-icon': true,
                    [`ded-icon-${props.size}`]: props.size,
                    'ded-radio-icon-disabled': item.isDisabled,
                    'ded-radio-checked': modelValue === item.value,
                    'ded-radio-unchecked': modelValue !== item.value
                }"
            >
            </div>
            <!-- radio - 選項文字 -->
            <span
                class="ded-radio-text"
                :class="item.isDisabled?'ded-radio-text-disabled':''"
            >
				{{ item.label }}
            </span>
        </label>
    </div>
</template>

<style scoped>

</style>
