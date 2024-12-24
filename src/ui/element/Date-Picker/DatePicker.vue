<!-- DatePicker.vue -->
<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { Datepicker, DateRangePicker } from 'vanillajs-datepicker'
import 'vanillajs-datepicker/css/datepicker-foundation.css'
import Input from '@/ui/element/Input/Input.vue'

const modelValue = defineModel()

const props = defineProps({
    placeholder: { type: String, default: '' },
    range: { type: Boolean, default: false },
    options: { type: Object, default: () => ({}) },
    className: { type: String, default: '' },
    onChange: { type: Function },
})

const singleInputRef = ref(null)
const startInputRef = ref(null)
const endInputRef = ref(null)
const dateRangeWrapperRef = ref(null)
const datepickerRef = ref(null)

onMounted(() => {
    initDatepicker()
})

onUnmounted(() => {
    if (datepickerRef.value) {
        datepickerRef.value.destroy()
    }
})

watch(
    () => props.options,
    () => {
        if (datepickerRef.value) {
            datepickerRef.value.destroy()
        }
        initDatepicker()
    }
)

watch(modelValue, (newVal) => {
    if (!datepickerRef.value) return

    if (props.range) {
        if (Array.isArray(newVal) && newVal.length === 2) {
            datepickerRef.value.setDates(newVal[0], newVal[1])
        }
    } else {
        if (typeof newVal === 'string') {
            datepickerRef.value.setDate(newVal)
        }
    }
})

function initDatepicker() {
    if (props.range) {
        if (!startInputRef.value?.input || !endInputRef.value?.input) {
            console.warn('DateRangePicker 模式下，找不到兩個 <Input> 元素。')
            return
        }
        if (!dateRangeWrapperRef.value) {
            console.warn('DateRangePicker 需要一個容器。請確認 ref="dateRangeWrapperRef"')
            return
        }
        try {
            const picker = new DateRangePicker(dateRangeWrapperRef.value, {
                ...props.options,
                format: 'yyyy-mm-dd',
                autohide: true,
            })
            datepickerRef.value = picker

            dateRangeWrapperRef.value.addEventListener('changeDate', () => {
                const dates = picker.getDates() || [] // 使用 getDates() 方法來獲取日期

                // 格式化日期
                const startDateStr = dates[0] ? formatDate(dates[0]) : ''
                const endDateStr = dates[1] ? formatDate(dates[1]) : ''

                // 更新響應式數據
                modelValue.value = [startDateStr, endDateStr]

                if (props.onChange) props.onChange([startDateStr, endDateStr])
            })

            if (Array.isArray(modelValue.value) && modelValue.value.length === 2) {
                const [startDate, endDate] = modelValue.value
                if (startDate && endDate) {
                    picker.setDates(startDate, endDate)
                }
            }

            // 添加手動輸入同步
            startInputRef.value.input.addEventListener('input', updateRangeFromInput)
            endInputRef.value.input.addEventListener('input', updateRangeFromInput)
        } catch (error) {
            console.error('Error in initDatepicker (range):', error)
        }
    } else {
        if (!singleInputRef.value?.input) {
            console.warn('單日模式下，找不到 <Input> 元素。')
            return
        }
        try {
            const inputDom = singleInputRef.value.input
            const picker = new Datepicker(inputDom, {
                ...props.options,
                format: 'yyyy-mm-dd',
                autohide: true,
            })
            datepickerRef.value = picker

            picker.element.addEventListener('changeDate', () => {
                const date = picker.getDate()
                const dateStr = date ? formatDate(date) : ''
                modelValue.value = dateStr
                if (props.onChange) props.onChange(dateStr)
            })

            inputDom.addEventListener('input', (e) => {
                modelValue.value = e.target.value
            })

            if (typeof modelValue.value === 'string' && modelValue.value) {
                picker.setDate(modelValue.value)
            }
        } catch (error) {
            console.error('Error in initDatepicker (single):', error)
        }
    }
}

function updateRangeFromInput() {
    if (!startInputRef.value?.input || !endInputRef.value?.input) return

    const startDate = startInputRef.value.input.value
    const endDate = endInputRef.value.input.value

    modelValue.value = [startDate, endDate]
}

/**
 * 格式化日期為 'yyyy-mm-dd' 字串
 * @param {Date|string} date Date 對象或日期字串
 * @returns {string} 'yyyy-mm-dd' 格式的日期字串
 */
function formatDate(date) {
    // 如果輸入是字串且符合 yyyy-mm-dd 格式，直接返回
    if (typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date)) {
        return date
    }

    // 確保我們有一個有效的 Date 對象
    const dateObj = date instanceof Date ? date : new Date(date)

    // 檢查是否為有效日期
    if (isNaN(dateObj.getTime())) {
        console.warn('Invalid date:', date)
        return ''
    }

    const y = dateObj.getFullYear()
    const m = String(dateObj.getMonth() + 1).padStart(2, '0')
    const d = String(dateObj.getDate()).padStart(2, '0')
    return `${y}-${m}-${d}`
}
</script>

<template>
    <div :class="className">
        <template v-if="!range">
            <Input
                ref="singleInputRef"
                :placeholder="placeholder"
                :initValue="modelValue"
                prefix="calendar"
                type="text"
            />
        </template>

        <div v-else ref="dateRangeWrapperRef" style="display: inline-block;">
            <Input
                ref="startInputRef"
                placeholder="開始日期"
                prefix="calendar"
                type="text"
                :initValue="modelValue?.[0]"
            />
            <Input
                ref="endInputRef"
                placeholder="結束日期"
                prefix="calendar"
                type="text"
                :initValue="modelValue?.[1]"
                style="margin-left: 8px;"
            />
        </div>
    </div>
</template>