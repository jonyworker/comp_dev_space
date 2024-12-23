<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { Datepicker, DateRangePicker } from 'vanillajs-datepicker';
import 'vanillajs-datepicker/css/datepicker-foundation.css';
import Input from "@/ui/element/Input/Input.vue";

const props = defineProps({
    value: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    range: { type: Boolean, default: false },
    options: { type: Object, default: () => ({}) },
    className: { type: String, default: '' },
    onChange: { type: Function },
});

const inputRef = ref(null);
const datepickerRef = ref(null);

const initDatepicker = () => {
    if (!inputRef.value?.$refs.input) return;

    const inputDom = inputRef.value.$refs.input;

    if (props.range) {
        datepickerRef.value = new DateRangePicker(inputDom, {
            ...props.options,
        });
    } else {
        datepickerRef.value = new Datepicker(inputDom, {
            ...props.options,
        });
    }

    inputDom.addEventListener('changeDate', (e) => {
        if (props.onChange && typeof props.onChange === 'function') {
            props.onChange(e.detail.date);
        }
    });
};

onMounted(() => {
    initDatepicker();
});

onUnmounted(() => {
    datepickerRef.value?.destroy();
});

watch(
    () => props.options,
    () => {
        datepickerRef.value?.destroy();
        initDatepicker(); // 直接初始化
    }
);
</script>

<template>
    <Input
        ref="inputRef"
        :placeholder="placeholder"
        :initValue="value"
        prefix="calendar"
        type="text"
        :class="className"
    />
</template>
