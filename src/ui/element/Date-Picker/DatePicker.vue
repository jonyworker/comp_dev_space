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
		default: "",
	},
	options: {
		type: Object,
		default: () => ({})
	},
	className: {
		type: String,
		default: "",
	},
})

const emit = defineEmits(['update:modelValue', 'change'])

const singleInputRef = ref(null)
const startInputRef = ref(null)
const endInputRef = ref(null)
const dateRangeWrapperRef = ref(null)
const datepickerRef = ref(null)

const modelValue = defineModel()

// 修改：添加定位相關的樣式
const datePickerStyles = {
	position: 'fixed',
	zIndex: 1000,
	// marginTop: '8px'
}

onMounted(() => {
	initDatepicker()
	// 添加全局點擊事件監聽器，用於處理點擊外部關閉日曆
	document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
	if (datepickerRef.value) {
		// 確保清理日曆元素
		const pickerElement = document.querySelector('.datepicker')
		if (pickerElement) {
			document.body.removeChild(pickerElement)
		}
		datepickerRef.value.destroy()
	}
	if (props.isRange) {
		startInputRef.value?.input?.removeEventListener('input', updateRangeFromInput)
		endInputRef.value?.input?.removeEventListener('input', updateRangeFromInput)
	}
	document.removeEventListener('click', handleClickOutside)
})

function handleClickOutside(event) {
	const pickerElement = document.querySelector('.datepicker')
	const inputElement = props.isRange
		? dateRangeWrapperRef.value
		: singleInputRef.value?.input

	if (pickerElement &&
		!pickerElement.contains(event.target) &&
		!inputElement.contains(event.target)) {
		// pickerElement.style.display = 'none'
	}
}

function updatePickerPosition() {
	const pickerElement = document.querySelector('.datepicker');
	if (!pickerElement) return;

	const inputElement = props.isRange
		? startInputRef.value?.input
		: singleInputRef.value?.input;

	if (inputElement) {
		const rect = inputElement.getBoundingClientRect();

		// 調整 left 和 top
		const adjustedLeft = rect.left - 13; // 減少 13px
		const adjustedTop = rect.top + 8;   // 增加 8px

		// 更新樣式
		pickerElement.style.left = `${adjustedLeft}px`;
		pickerElement.style.top = `${adjustedTop}px`;

		console.log('Adjusted position:', adjustedLeft, adjustedTop);
	}
}

// 修改初始化函數，添加 Teleport 相關邏輯
function initDatepicker() {
	if (props.isRange) {
		if (!startInputRef.value?.input || !endInputRef.value?.input) {
			console.warn('DateRangePicker 模式下，找不到兩個 <Input> 元素。')
			return
		}

		try {
			const picker = new DateRangePicker(dateRangeWrapperRef.value, {
				...props.options,
				container: document.body
			})
			datepickerRef.value = picker

			// 設置日曆樣式
			const pickerElement = document.querySelector('.datepicker')
			if (pickerElement) {
				Object.assign(pickerElement.style, datePickerStyles)
				updatePickerPosition()
			}

			dateRangeWrapperRef.value.addEventListener('changeDate', () => {
				const dates = picker.getDates() || []
				const startDateStr = dates[0] ? formatDate(dates[0]) : ''
				const endDateStr = dates[1] ? formatDate(dates[1]) : ''

				modelValue.value = [startDateStr, endDateStr]
				emit('update:modelValue', [startDateStr, endDateStr])
				emit('change', [startDateStr, endDateStr])
			})

			if (Array.isArray(modelValue.value) && modelValue.value.length === 2) {
				picker.setDates(...modelValue.value)
			}

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
				container: document.body
			})
			datepickerRef.value = picker

			// 設置日曆樣式
			const pickerElement = document.querySelector('.datepicker')
			if (pickerElement) {
				Object.assign(pickerElement.style, datePickerStyles)
				updatePickerPosition()
			}

			picker.element.addEventListener('changeDate', () => {
				const date = picker.getDate()
				const dateStr = date ? formatDate(date) : ''
				modelValue.value = dateStr
				emit('update:modelValue', dateStr)
				emit('change', dateStr)
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

// 監聽視窗調整大小，更新日曆位置
window.addEventListener('resize', updatePickerPosition)

watch(
	() => props.options,
	() => {
		if (datepickerRef.value) {
			datepickerRef.value.destroy()
		}
		initDatepicker()
	}
)

watch(modelValue, (newValue) => {
	if (!datepickerRef.value) return;

	if (props.isRange) {
		if (Array.isArray(newValue) && newValue.length === 2) {
			datepickerRef.value.setDates(newValue[0], newValue[1]);
		}
	} else {
		datepickerRef.value.setDate(newValue);
	}
}, {immediate: true});

function updateRangeFromInput() {
	if (!startInputRef.value?.input || !endInputRef.value?.input) return

	const startDate = startInputRef.value.input.value
	const endDate = endInputRef.value.input.value

	modelValue.value = [startDate, endDate]
}

function formatDate(date) {
	if (!date) {
		return ''
	}
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

function clearSingleDate() {
	if (datepickerRef.value) {
		datepickerRef.value.setDate(null);
	}
	modelValue.value = '';
	emit('update:modelValue', '');
	emit('clearSingleDate');
}

function clearRangeStart() {
	if (datepickerRef.value) {
		datepickerRef.value.setDates(null, modelValue.value?.[1] || null);
	}
	const newValue = ['', modelValue.value?.[1] || ''];
	modelValue.value = newValue;
	emit('update:modelValue', newValue);
	emit('clearRangeStart', newValue);
}

function clearRangeEnd() {
	if (datepickerRef.value) {
		datepickerRef.value.setDates(modelValue.value?.[0] || null, null);
	}
	const newValue = [modelValue.value?.[0] || '', ''];
	modelValue.value = newValue;
	emit('update:modelValue', newValue);
	emit('clearRangeEnd', newValue);
}
</script>

<template>
	<div :class="className">
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
.ded-date-pick-range {
	display: flex;
	gap: 8px;
}
</style>