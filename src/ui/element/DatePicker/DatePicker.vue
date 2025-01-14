<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { Datepicker, DateRangePicker } from 'vanillajs-datepicker'
import 'vanillajs-datepicker/css/datepicker-foundation.css'
import Input from '@/ui/element/Input/Input.vue'

const props = defineProps({
    initValue: { // 修改名稱為 initValue
        type: [String, Array],
        default: () => null, // 預設為 null 或空
    },
	isRange: {
		type: Boolean,
	},
	placeholder: {
		type: String,
		default: ""
	},
	options: {
		type: Object,
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
	const picker = new DateRangePicker(dateRangeWrapperRef.value, {
		...props.options,
		container: document.body,
	})
	datepickerRef.value = picker

	dateRangeWrapperRef.value.addEventListener('changeDate', () => {
		const dates = picker.getDates() || []
		const [startDate, endDate] = dates.map(date => formatDate(date))
		updateModelValue([startDate, endDate])
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
		...props.options,
		container: document.body,
	})
	datepickerRef.value = picker

	picker.element.addEventListener('changeDate', () => {
		const dateStr = formatDate(picker.getDate())
		updateModelValue(dateStr)
	})

	inputDom.addEventListener('input', (e) => {
		modelValue.value = e.target.value
	})

	if (modelValue.value) {
		picker.setDate(modelValue.value)
	}
}

function updateModelValue(value) {
	modelValue.value = value
	emit('update:modelValue', value)
	emit('change', value)
}

function updateRangeFromInput() {
	if (!startInputRef.value?.input || !endInputRef.value?.input) return
	updateModelValue([
		startInputRef.value.input.value,
		endInputRef.value.input.value
	])
}

function clearSingleDate() {
	datepickerRef.value?.setDate(null)
	updateModelValue('')
	emit('clearSingleDate')
}

function clearRangeStart() {
	datepickerRef.value?.setDates(null, modelValue.value?.[1] || null)
	const newValue = ['', modelValue.value?.[1] || '']
	updateModelValue(newValue)
	emit('clearRangeStart', newValue)
}

function clearRangeEnd() {
	datepickerRef.value?.setDates(modelValue.value?.[0] || null, null)
	const newValue = [modelValue.value?.[0] || '', '']
	updateModelValue(newValue)
	emit('clearRangeEnd', newValue)
}

function formatDate(date) {
	if (!date) return ''
	if (typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date)) return date

	const dateObj = date instanceof Date ? date : new Date(date)
	if (isNaN(dateObj.getTime())) return ''

	const y = dateObj.getFullYear()
	const m = String(dateObj.getMonth() + 1).padStart(2, '0')
	const d = String(dateObj.getDate()).padStart(2, '0')
	return `${y}-${m}-${d}`
}

watch(
	() => props.options,
	() => {
		datepickerRef.value?.destroy()
		initDatepicker()
	}
)

watch(modelValue, (newValue) => {
	if (!datepickerRef.value) return
	props.isRange
		? datepickerRef.value.setDates(...(Array.isArray(newValue) ? newValue : [null, null]))
		: datepickerRef.value.setDate(newValue)
}, { immediate: true })

watch(
    () => props.initValue,
    (newInitValue) => {
        // 確保 initValue 的變化更新到 modelValue
        modelValue.value = newInitValue;
    },
    { immediate: true } // 在初始化時也立即執行
);


onMounted(() => {
    if (!modelValue.value && props.initValue) {
        modelValue.value = props.initValue
    }
    initDatepicker()
})

</script>

<template>
	<div :class="className">
		<Input
			v-if="!props.isRange"
			ref="singleInputRef"
			:placeholder="props.placeholder"
			:initValue="modelValue"
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
				:initValue="modelValue?.[0]"
				@clearInput="clearRangeStart"
			/>
			<Input
				ref="endInputRef"
				placeholder="End Date"
				prefix="SvgCalendar"
				type="text"
				:initValue="modelValue?.[1]"
				@clearInput="clearRangeEnd"
			/>
		</div>
	</div>
</template>

<style scoped>

</style>