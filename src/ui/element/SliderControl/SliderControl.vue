<script setup>
import { computed } from 'vue';
import Slider from '@/ui/element/Slider/Slider.vue';
import Button from '@/ui/element/Button/Button.vue';
import Icon from '@/ui/element/Icon/Icon.vue';

// 定義 Model
const modelValue = defineModel();

// 定義 Props
const props = defineProps({
    // themeColor: {
    //     type: String,
    //     default: "primary",
    //     validator: (value) =>
    //         [
    //             "primary",
    //             "secondary",
    //             "neutral",
    //             "info",
    //             "success",
    //             "warning",
    //             "error",
    //         ].includes(value),
    // },
    min: {
        type: Number,
        default: 0,
    },
    max: {
        type: Number,
        default: 100,
    },
    step: {
        type: Number,
        default: 1,
    },
    label: {
        type: String,
        default: "",
    },
    prefix: {
        type: String,
        default: "",
    },
    suffix: {
        type: String,
        default: "",
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

// 計算值，確保 modelValue 有預設值
const computedValue = computed({
    get: () => modelValue.value ?? props.min,
    set: (newValue) => {
        modelValue.value = newValue;
    },
});

// 處理加法
const handleIncreaseClick = () => {
    computedValue.value = Math.min(computedValue.value + Number(props.step), props.max);
};

// 處理減法
const handleDecreaseClick = () => {
    computedValue.value = Math.max(computedValue.value - Number(props.step), props.min);
};

const prefixIcon = computed(() => {
    if (props.prefix === 'increase') {
        return 'SvgPlus';
    } else if (props.prefix === 'decrease') {
        return 'SvgMinus';
    }
    return '';
})
const suffixIcon = computed(() => {
    if (props.suffix === 'increase') {
        return 'SvgPlus';
    } else if (props.suffix === 'decrease') {
        return 'SvgMinus';
    }
    return '';
})
</script>

<template>
    <div :class="{'ded-slider-control': true, [props.className]: !!props.className}">
        <Button
            variant="text"
            :themeColor="props.themeColor"
            :isDisabled="props.isDisabled"
            @click="handleDecreaseClick"
        >
            <slot name="prefix">
                <Icon v-if="props.prefix" :name="prefixIcon" size="32"/>
            </slot>
        </Button>

        <Slider
            :themeColor="props.themeColor"
            :min="props.min"
            :max="props.max"
            :step="props.step"
            :label="props.label"
            :isShowRange="false"
            :isShowCurrValue="true"
            :isDisabled="props.isDisabled"
            v-model="computedValue"
        />

        <Button
            variant="text"
            :themeColor="props.themeColor"
            :isDisabled="props.isDisabled"
            @click="handleIncreaseClick"
        >
            <slot name="suffix">
                <Icon v-if="props.suffix" :name="suffixIcon" size="32"/>
            </slot>
        </Button>
    </div>
</template>
