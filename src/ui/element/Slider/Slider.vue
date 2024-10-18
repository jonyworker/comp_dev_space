<script setup>
import { ref, watch, onMounted, onBeforeUnmount, useTemplateRef } from 'vue';

// 定義 Model
const modelValue = defineModel()

// 定義 Props
const props = defineProps({
    themeColor: {
        type: String,
        default: 'primary',
        validator: (value) =>
            [
                'primary',
                'secondary',
                'tertiary',
                'success',
                'warning',
                'error',
                'info',
            ].includes(value),
    },
    min: {
        type: Number,
        default: 0,
    },
    max: {
        type: Number,
        default: 100,
    },
    step: {
        type: [Number, String],
        default: 1,
    },
    initValue: {
        type: Number,
        default: 50,
    },
    unit: {
        type: String,
        default: '%',
    },
    isDisabled: {
        type: Boolean,
        default: false,
    },
    className: {
        type: String,
        default: '',
    },
});

const rangeRef = useTemplateRef("rangeRef");
const containerRef = useTemplateRef("containerRef");

// 設定值為初始值或是最小值
const value = ref(modelValue.value || props.initValue || props.min);

// thumb 位置
const thumbPosition = ref(0);
const thumbWidth = 20;
const tooltipWidth = 40;

// 更新 thumb 位置
const updateThumbPosition = (val) => {
    if (!rangeRef.value) return;
    const rangeWidth = rangeRef.value.offsetWidth - thumbWidth;
    thumbPosition.value = ((val - props.min) / (props.max - props.min)) * rangeWidth;
};

// 更新 Range 顏色
const updateRangeBackground = (val) => {
    const valuePercentage = ((val - props.min) / (props.max - props.min)) * 100;
    if (containerRef.value) {
        containerRef.value.style.setProperty('--progress', `${valuePercentage}%`);
    }
};

// thumb 拖動時處裡事件
const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    value.value = newValue;

    updateRangeBackground(newValue);
    updateThumbPosition(newValue);

    modelValue.value = newValue;
};

// 監聽 modelValue 的變更
watch(() => modelValue.value, (newValue) => {
    value.value = newValue;
});

// 監聽 props initValue 的變更
watch(() => props.initValue, (newValue) => {
    value.value = newValue;
});

// 監聽 value 的變更，更新 thumb 位置及 Range 顏色
watch(value, (newValue) => {
    updateRangeBackground(newValue);
    updateThumbPosition(newValue);
});

// 設定初始值
onMounted(() => {
    updateRangeBackground(value.value);
    updateThumbPosition(value.value);
    const handleResize = () => {
        updateRangeBackground(value.value);
        updateThumbPosition(value.value);
    };

    window.addEventListener('resize', handleResize);

    onBeforeUnmount(() => {
        window.removeEventListener('resize', handleResize);
    });
});
</script>

<template>
    <div class="slider-container" ref="containerRef">
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 8px;">
            <input
                ref="rangeRef"
                type="range"
                :min="props.min"
                :max="props.max"
                :step="props.step"
                :disabled="props.isDisabled"
                @input="handleChange"
                v-model="value"
                :class="['slider', props.isDisabled ? 'slider-disable' : `slider-${props.themeColor}`]"
            />
        </div>

        <div
            :class="['tooltip', props.isDisabled ? 'tooltip-disable' : `tooltip-${props.themeColor}`]"
            :style="{ left: `calc(${ thumbPosition }px + ${ thumbWidth / 2 }px - ${ tooltipWidth / 2 }px)` }"
        >
            <span>{{ value }}</span>
            <span v-if="props.unit">{{ props.unit }}</span>
        </div>
    </div>

</template>