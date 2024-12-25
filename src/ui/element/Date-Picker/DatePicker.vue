<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { Datepicker, DateRangePicker } from 'vanillajs-datepicker'
import 'vanillajs-datepicker/css/datepicker-foundation.css'
import Input from '@/ui/element/Input/Input.vue'

const props = defineProps({
    isRange: {
        type: Boolean,
        default: false
    },
    placeholder: {
        type: String,
        default: ""
    },
    options: {
        type: Object,
        default: () => ({})
    },
    className: {
        type: String,
        default: ""
    },
})

const emit = defineEmits(['update:modelValue', 'change', 'clearSingleDate', 'clearRangeStart', 'clearRangeEnd'])

const singleInputRef = ref(null)
const startInputRef = ref(null)
const endInputRef = ref(null)
const dateRangeWrapperRef = ref(null)
const datepickerRef = ref(null)

// 透過 defineModel() 與外部雙向綁定
const modelValue = defineModel()

onMounted(() => {
    initDatepicker()
})

onUnmounted(() => {
    if (datepickerRef.value) {
        datepickerRef.value.destroy()
    }
})

function initDatepicker() {
    // 區間模式
    if (props.isRange) {
        if (!startInputRef.value?.input || !endInputRef.value?.input) {
            console.warn('DateRangePicker 模式下，找不到兩個 <Input> 元素。')
            return
        }

        try {
            const picker = new DateRangePicker(dateRangeWrapperRef.value, {
                ...props.options,
                // 關鍵：將日曆容器指向 body
                container: document.body,
            })
            datepickerRef.value = picker

            // 監聽套件事件，更新 Vue 的 modelValue
            dateRangeWrapperRef.value.addEventListener('changeDate', () => {
                const dates = picker.getDates() || []
                const startDateStr = dates[0] ? formatDate(dates[0]) : ''
                const endDateStr = dates[1] ? formatDate(dates[1]) : ''

                modelValue.value = [startDateStr, endDateStr]
                emit('update:modelValue', [startDateStr, endDateStr])
                emit('change', [startDateStr, endDateStr])
            })

            // 若父層傳入已有初始值，則設定到套件
            if (Array.isArray(modelValue.value) && modelValue.value.length === 2) {
                picker.setDates(...modelValue.value)
            }

            // 監聽使用者在 input 中直接輸入
            startInputRef.value.input.addEventListener('input', updateRangeFromInput)
            endInputRef.value.input.addEventListener('input', updateRangeFromInput)
        } catch (error) {
            console.error('Error in initDatepicker (range):', error)
        }

        // 單日模式
    } else {
        if (!singleInputRef.value?.input) {
            console.warn('單日模式下，找不到 <Input> 元素。')
            return
        }

        try {
            const inputDom = singleInputRef.value.input
            const picker = new Datepicker(inputDom, {
                ...props.options,
                // 關鍵：將日曆容器指向 body
                container: document.body,
            })
            datepickerRef.value = picker

            // 監聽套件事件，更新 Vue 的 modelValue
            picker.element.addEventListener('changeDate', () => {
                const date = picker.getDate()
                const dateStr = date ? formatDate(date) : ''
                modelValue.value = dateStr
                emit('update:modelValue', dateStr)
                emit('change', dateStr)
            })

            // 監聽使用者在 input 中直接輸入
            inputDom.addEventListener('input', (e) => {
                modelValue.value = e.target.value
            })

            // 若父層傳入已有初始值，則設定到套件
            if (typeof modelValue.value === 'string' && modelValue.value) {
                picker.setDate(modelValue.value)
            }
        } catch (error) {
            console.error('Error in initDatepicker (single):', error)
        }
    }
}

// 監聽 props.options 異動，重新初始化套件
watch(
    () => props.options,
    () => {
        if (datepickerRef.value) {
            datepickerRef.value.destroy()
        }
        initDatepicker()
    }
)

// 監聽 modelValue 異動，讓外部修改能即時反映在套件上
watch(modelValue, (newValue) => {
    if (!datepickerRef.value) return

    if (props.isRange) {
        if (Array.isArray(newValue) && newValue.length === 2) {
            datepickerRef.value.setDates(newValue[0], newValue[1])
        }
    } else {
        datepickerRef.value.setDate(newValue)
    }
}, { immediate: true })

// 區間模式，手動輸入時更新
function updateRangeFromInput() {
    if (!startInputRef.value?.input || !endInputRef.value?.input) return

    const startDate = startInputRef.value.input.value
    const endDate = endInputRef.value.input.value
    modelValue.value = [startDate, endDate]
}

// 清除單日日期
function clearSingleDate() {
    if (datepickerRef.value) {
        datepickerRef.value.setDate(null)
    }
    modelValue.value = ''
    emit('update:modelValue', '')
    emit('clearSingleDate')
}

// 清除區間開始日期
function clearRangeStart() {
    if (datepickerRef.value) {
        datepickerRef.value.setDates(null, modelValue.value?.[1] || null)
    }
    const newValue = ['', modelValue.value?.[1] || '']
    modelValue.value = newValue
    emit('update:modelValue', newValue)
    emit('clearRangeStart', newValue)
}

// 清除區間結束日期
function clearRangeEnd() {
    if (datepickerRef.value) {
        datepickerRef.value.setDates(modelValue.value?.[0] || null, null)
    }
    const newValue = [modelValue.value?.[0] || '', '']
    modelValue.value = newValue
    emit('update:modelValue', newValue)
    emit('clearRangeEnd', newValue)
}

// 將日期物件或字串格式化為 YYYY-MM-DD
function formatDate(date) {
    if (!date) {
        return ''
    }
    // 若已經是 'YYYY-MM-DD' 格式字串，直接回傳
    if (typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date)) {
        return date
    }

    const dateObj = date instanceof Date ? date : new Date(date)
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
        <!-- 單日模式 -->
        <template v-if="!props.isRange">
            <Input
                ref="singleInputRef"
                :placeholder="props.placeholder"
                :initValue="modelValue"
                prefix="calendar"
                type="text"
                @clearInput="clearSingleDate"
            />
        </template>

        <!-- 區間模式 -->
        <div v-else ref="dateRangeWrapperRef" class="ded-date-pick-range">
            <Input
                ref="startInputRef"
                placeholder="Start Date"
                prefix="calendar"
                type="text"
                :initValue="modelValue?.[0]"
                @clearInput="clearRangeStart"
            />
            <Input
                ref="endInputRef"
                placeholder="End Date"
                prefix="calendar"
                type="text"
                :initValue="modelValue?.[1]"
                @clearInput="clearRangeEnd"
            />
        </div>
    </div>
</template>

<style scoped>
/* 根據需求自行調整，若想自訂日曆位置或 z-index，可在這裡加上自定義樣式 */
.ded-date-pick-range {
    display: flex;
    gap: 8px;
}
</style>
