<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick, computed } from 'vue'
import { Datepicker, DateRangePicker } from 'vanillajs-datepicker'
import 'vanillajs-datepicker/css/datepicker-foundation.css'
import Input from '@/ui/element/Input/Input.vue'

const props = defineProps({
    format: {
        type: String,
        default: "yyyy/mm/dd"
    },
    isRange: {
        type: Boolean,
    },
    placeholder: {
        type: String,
        default: ""
    },
    className: {
        type: String,
        default: ""
    },
})

const emit = defineEmits(['update:modelValue', 'change', 'clearSingleDate', 'clearRangeStart', 'clearRangeEnd'])
const modelValue = defineModel()

const singleInputRef = ref(null)
const startInputRef = ref(null)
const endInputRef = ref(null)
const dateRangeWrapperRef = ref(null)
const datepickerRef = ref(null)

onMounted(() => initDatepicker())
onUnmounted(() => datepickerRef.value?.destroy())

function initDatepicker() {
    if (props.isRange) {
        initRangePicker()
    } else {
        initSinglePicker()
    }
}

function initRangePicker() {
    if (!dateRangeWrapperRef.value) return

    const picker = new DateRangePicker(dateRangeWrapperRef.value, {
        format: props.format, // 設定格式
        autohide: true, // 自動關閉
        todayHighlight: true, // 高亮當天日期
        container: document.body,
    })
    datepickerRef.value = picker

    dateRangeWrapperRef.value.addEventListener('changeDate', () => {
        updateModelValue(picker.getDates()) // 直接回傳格式化後的日期陣列
    })

    if (Array.isArray(modelValue.value) && modelValue.value.length === 2) {
        picker.setDates(...modelValue.value)
    }

    startInputRef.value?.input.addEventListener('input', updateRangeFromInput)
    endInputRef.value?.input.addEventListener('input', updateRangeFromInput)
}

function initSinglePicker() {
    const inputDom = singleInputRef.value?.input
    if (!inputDom) return

    const picker = new Datepicker(inputDom, {
        format: props.format, // 設定格式
        autohide: true, // 自動關閉
        todayHighlight: true, // 高亮當天日期
        container: document.body,
    })
    datepickerRef.value = picker

    picker.element.addEventListener('changeDate', () => {
        updateModelValue(picker.getDate()) // 直接回傳格式化日期
    })

    inputDom.addEventListener('input', (e) => {
        modelValue.value = e.target.value
    })

    if (modelValue.value) {
        picker.setDate(modelValue.value)
    }
}

function updateModelValue(value) {
    if (Array.isArray(value)) {
        // 日期區間模式
        modelValue.value = value.map(date => formatDate(date));
    } else {
        // 單日期模式
        modelValue.value = formatDate(value);
    }

    emit('update:modelValue', modelValue.value);
    emit('change', modelValue.value);
}

function updateRangeFromInput() {
    if (!startInputRef.value?.input || !endInputRef.value?.input) return

    updateModelValue([startInputRef.value.input.value, endInputRef.value.input.value])
}

function clearSingleDate() {
    datepickerRef.value?.setDate(null)
    updateModelValue('')
    emit('clearSingleDate')
}

function clearRangeStart() {
    datepickerRef.value?.setDates(null, modelValue.value?.[1] || null)
    updateModelValue(['', modelValue.value?.[1] || ''])
    emit('clearRangeStart')
}

function clearRangeEnd() {
    datepickerRef.value?.setDates(modelValue.value?.[0] || null, null)
    updateModelValue([modelValue.value?.[0] || '', ''])
    emit('clearRangeEnd')
}

function formatDate(date) {
    if (!date) return '';

    const dateObj = date instanceof Date ? date : new Date(date);
    if (isNaN(dateObj.getTime())) return '';

    const y = dateObj.getFullYear();
    const m = String(dateObj.getMonth() + 1).padStart(2, '0');
    const d = String(dateObj.getDate()).padStart(2, '0');

    // 根據 props.format 返回不同格式
    switch (props.format.toLowerCase()) {
        case "yyyy/mm/dd":
            return `${y}/${m}/${d}`;
        case "dd/mm/yyyy":
            return `${d}/${m}/${y}`;
        case "mm/dd/yyyy":
            return `${m}/${d}/${y}`;
        case "yyyy-mm-dd":
            return `${y}-${m}-${d}`;
        case "dd-mm-yyyy":
            return `${d}-${m}-${y}`;
        case "mm-dd-yyyy":
            return `${m}-${d}-${y}`;
        default:
            return `${y}/${m}/${d}`; // 預設 yyyy/mm/dd
    }
}

watch(modelValue, (newValue) => {
    if (!datepickerRef.value) return

    if (props.isRange) {
        const validValues = Array.isArray(newValue) ? newValue : [null, null]
        datepickerRef.value.setDates(...validValues)
    } else {
        datepickerRef.value.setDate(newValue)
    }
}, { immediate: true })

watch(() => props.isRange, (newIsRange) => {
    datepickerRef.value?.destroy()
    datepickerRef.value = null

    modelValue.value = newIsRange ? ["", ""] : ""

    nextTick(() => {
        initDatepicker()
        if (!newIsRange && singleInputRef.value?.input) {
            singleInputRef.value.input.value = "" // 清空單選輸入框的值
        }
    })
}, { immediate: true })

const safeModelValue = computed({
    get: () => Array.isArray(modelValue.value) ? modelValue.value : ["", ""],
    set: (newValue) => {
        modelValue.value = Array.isArray(newValue) ? newValue : ["", ""]
    }
})
</script>

<template>
    <div :class="className">
        <Input
            v-if="!props.isRange"
            ref="singleInputRef"
            :placeholder="props.placeholder"
            v-model="modelValue"
            prefix="SvgCalendar"
            type="text"
            @clearInput="clearSingleDate"
        />
        <div v-else ref="dateRangeWrapperRef" class="ded-date-pick-range">
            <Input
                ref="startInputRef"
                placeholder="Start Date"
                prefix="SvgCalendar"
                type="text"
                v-model="safeModelValue[0]"
                @clearInput="clearRangeStart"
            />
            <Input
                ref="endInputRef"
                placeholder="End Date"
                prefix="SvgCalendar"
                type="text"
                v-model="safeModelValue[1]"
                @clearInput="clearRangeEnd"
            />
        </div>
    </div>
</template>

<style scoped>

</style>
