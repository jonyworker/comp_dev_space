<script setup>
import { ref, watch, onMounted, onBeforeUnmount, useTemplateRef, nextTick, computed } from 'vue';

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
    //             "tertiary",
    //             "success",
    //             "warning",
    //             "error",
    //             "info",
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
    isShowRange: {
        type: Boolean,
        default: false,
    },
    isShowCurrValue: {
        type: Boolean,
        default: false,
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

const rangeRef = useTemplateRef("rangeRef");
const containerRef = useTemplateRef("containerRef");
const rangeWidth = ref(0);

// thumb 位置
const thumbPosition = ref(0);
const thumbWidth = 20;
const tooltipWidth = 0;

// 更新 thumb 位置
const updateThumbPosition = (val) => {
    if (rangeWidth.value === 0) return;
    const calculatedWidth = rangeWidth.value - thumbWidth;
    thumbPosition.value = ((val - props.min) / (props.max - props.min)) * calculatedWidth;
};

// 更新 Range 顏色
const updateRangeBackground = (val) => {
    const valuePercentage = ((val - props.min) / (props.max - props.min)) * 100;
    if (containerRef.value) {
        containerRef.value.style.setProperty('--progress', `${valuePercentage}%`);
    }
};

const tooltipPosition = computed(() => {
    if (rangeWidth.value === 0) return '0px';
    const calculatedWidth = rangeWidth.value - thumbWidth;
    const position = ((modelValue.value - props.min) / (props.max - props.min)) * calculatedWidth;
    const finalPosition = position + thumbWidth / 2 - tooltipWidth / 2;
    return `${finalPosition}px`;
});

// thumb 拖動時處理事件
const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    modelValue.value = newValue;
    updateRangeBackground(newValue);
    updateThumbPosition(newValue);
};

// 監聽 modelValue 的變更
watch(modelValue, (newValue) => {
    updateRangeBackground(newValue);
    updateThumbPosition(newValue);
});

// 監聽 min 和 max 變更
watch([() => props.min, () => props.max], () => {
    nextTick(() => {
        updateWidth();
    });
});

const updateWidth = () => {
    if (rangeRef.value) {
        rangeWidth.value = rangeRef.value.offsetWidth;
        updateThumbPosition(modelValue.value);
        updateRangeBackground(modelValue.value);
    }
};

let resizeObserver = null;

onMounted(() => {
    nextTick(() => {
        updateWidth();
        resizeObserver = new ResizeObserver(() => {
            updateWidth();
        });
        if (rangeRef.value) {
            resizeObserver.observe(rangeRef.value);
        }
    });
});

onBeforeUnmount(() => {
    if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
    }
});

defineExpose({ updateWidth });
</script>

<template>
    <div :class="{
            'ded-slider-container': true,
            [props.className]: !!props.className,
            'ded-slider-container-range': props.isShowRange,
            'ded-slider-container-fluid': !props.isShowRange,
        }"
         ref="containerRef"
    >
        <div class="ded-slider-wrapper">
            <template v-if="props.isShowRange">
                <div :class="{
                'ded-slider-range':true,
                'ded-slider-range-start': true,
                'ded-slider-range-disable': props.isDisabled, }">
                    {{ props.min }}
                </div>
            </template>
            <input
                ref="rangeRef"
                type="range"
                :min="props.min"
                :max="props.max"
                :step="props.step"
                :disabled="props.isDisabled"
                @input="handleChange"
                v-model="modelValue"
                :class="['ded-slider', props.isDisabled ? 'ded-slider-disable' : `ded-slider-${props.themeColor}`]"
            />
            <template v-if="props.isShowRange">
                <div :class="{
                'ded-slider-range':true,
                'ded-slider-range-end': true,
                'ded-slider-range-disable': props.isDisabled, }">
                    {{ props.max }}
                </div>
            </template>
        </div>
        <div
            id="tooltip"
            :class="['ded-slider-tooltip', props.isDisabled ?
                    'ded-slider-tooltip-disable' :
                    `ded-slider-tooltip-${props.themeColor}`]"
            :style="{ left: tooltipPosition, transform: `translate(-50%)` }"
        >
            <template v-if="props.isShowCurrValue">
                <div>
                    {{ modelValue }}<span v-if="props.label">{{ props.label }}</span>
                </div>
            </template>
        </div>
    </div>
</template>
