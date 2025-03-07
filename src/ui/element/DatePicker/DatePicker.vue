<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { Datepicker, DateRangePicker } from 'vanillajs-datepicker'
import Input from '@/ui/element/Input/Input.vue'

const modelValue = defineModel()

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

const isInitialized = ref(false);

const dateRangeInputRef = ref(null)
const singleDateInputRef = ref(null)

const dateSingleIns = ref(null)
const dateRangeIns = ref(null)

// 格式化日期為指定格式的字串
function formatDate(date) {
	if (!date) return '';

	const dateObj = date instanceof Date ? date : new Date(date);
	if (isNaN(dateObj.getTime())) return '';

	const y = dateObj.getFullYear();
	const m = String(dateObj.getMonth() + 1).padStart(2, '0');
	const d = String(dateObj.getDate()).padStart(2, '0');

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
			return `${y}/${m}/${d}`;
	}
}

// 將字串轉換為日期物件
function parseDate(dateStr) {
	if (!dateStr || dateStr === '') return null;

	const date = new Date(dateStr);
	if (!isNaN(date.getTime())) return date;

	// 處理各種格式
	// eslint-disable-next-line
	const formatParts = props.format.toLowerCase().split(/[\/\-.]/);
	// eslint-disable-next-line
	const dateParts = dateStr.split(/[\/\-.]/);

	if (formatParts.length !== dateParts.length) return null;

	let year, month, day;
	for (let i = 0; i < formatParts.length; i++) {
		if (formatParts[i].includes('y')) year = parseInt(dateParts[i]);
		if (formatParts[i].includes('m')) month = parseInt(dateParts[i]) - 1;
		if (formatParts[i].includes('d')) day = parseInt(dateParts[i]);
	}

	const newDate = new Date(year, month, day);
	return !isNaN(newDate.getTime()) ? newDate : null;
}

function initDatepicker() {
	if (props.isRange === true) {
		initRangePicker();
	} else {
		initSinglePicker();
	}
}

// 初始化單日期選擇
function initSinglePicker() {
	if (dateSingleIns.value) return;

	if (!singleDateInputRef.value?.input) return;

	const picker = new Datepicker(singleDateInputRef.value.input, {
		format: props.format, // 設定格式
		autohide: false, // 自動關閉
		todayHighlight: true, // highlight 當天日期
		container: document.body,
	});
	dateSingleIns.value = picker;

	// 監聽 - 變更日期時更新 modelValue 的值
	picker.element.addEventListener('changeDate', () => {
		const selectedDate = picker.getDate();
		modelValue.value = selectedDate ? formatDate(selectedDate) : '';
	});

	// 監聽 - 手動輸入時更新 modelValue 的值
	singleDateInputRef.value.input.addEventListener('input', (e) => {
		modelValue.value = e.target.value;
	});

	// 如果 modelValue 有值，將設定為初始日期
	if (modelValue.value) {
		const initialDate = parseDate(modelValue.value);
		picker.setDate(initialDate);
	}
}

// 初始化範圍日期選擇
function initRangePicker() {
	if (dateRangeIns.value) return;
	// 確保 modelValue 是陣列
	if (!Array.isArray(modelValue.value)) {
		modelValue.value = ["", ""];
	}

	const picker = new DateRangePicker(dateRangeInputRef.value, {
		format: props.format, // 設定格式
		autohide: true, // 自動關閉
		todayHighlight: true, // highlight 當天日期
		container: document.body,
		allowOneSidedRange: true, // 允許單邊選擇
	});

	dateRangeIns.value = picker;

	// 監聽 - 變更日期時更新 modelValue 的值
	picker.element.addEventListener('changeDate', () => {
		const selectedDates = picker.getDates();

		// 確保 selectedDates 是有效的日期陣列
		if (Array.isArray(selectedDates) && selectedDates.length > 0) {
			const formattedDates = selectedDates.map(
				date => date instanceof Date ? formatDate(date) : ""
			);

			if (formattedDates.length === 1) {
				formattedDates.push("");
			}

			// 只取得前兩個值
			modelValue.value = formattedDates.slice(0, 2);
		} else {
			modelValue.value = ["", ""];
		}
	});

	// 如果 modelValue 有值且是字串陣列，則設定 datepicker
	if (Array.isArray(modelValue.value) && modelValue.value.length === 2) {
		const parsedDates = modelValue.value.map(dateStr => parseDate(dateStr));
		picker.setDates(...parsedDates);
	}
}

// @clearDatePicker
function clearSingleDate() {
	if (!dateSingleIns.value) return;
	dateSingleIns.value.setDate({clear: true});
	modelValue.value = '';
}

function clearRangeStart() {
	if (!dateRangeIns.value) return;
	const currentDates = dateRangeIns.value.getDates();
	dateRangeIns.value.setDates({clear: true}, currentDates[1] || null);
	modelValue.value = ["", modelValue.value?.[1] || ""];
}

function clearRangeEnd() {
	if (!dateRangeIns.value) return;
	const currentDates = dateRangeIns.value.getDates();
	dateRangeIns.value.setDates(currentDates[0] || null, {clear: true});
	modelValue.value = [modelValue.value?.[0] || "", ""];
}

// 當 isRange 改變時
watch(() => props.isRange, (newIsRange) => {
	// 先銷毀現有的實例
	if (dateSingleIns.value) {
		dateSingleIns.value.destroy();
		dateSingleIns.value = null;
	}
	if (dateRangeIns.value) {
		dateRangeIns.value.destroy();
		dateRangeIns.value = null;
	}

	// 當 `isRange` 由 `false` 變為 `true`
	if (newIsRange === true) {
		if (typeof modelValue.value === 'string' && modelValue.value) {
			// 從單一日期轉為範圍，使用相同日期作為起始和結束
			modelValue.value = [modelValue.value, modelValue.value];
		} else if (!Array.isArray(modelValue.value)) {
			// 如果沒有值或不是陣列，初始化為空陣列
			modelValue.value = ["", ""];
		}
	}
	// 當 `isRange` 由 `true` 變為 `false`
	else {
		// 檢查 `modelValue` 是否是陣列且有值
		if (Array.isArray(modelValue.value)) {
			modelValue.value = modelValue.value[0] || "";
		}
	}

	// 在下一個 tick 初始化新的 datepicker
	nextTick(() => {
		initDatepicker();
	});
});

// 監聽 modelValue 變化
watch(modelValue, (newValue) => {
	if (props.isRange) {
		if (dateRangeIns.value) {
			if (Array.isArray(newValue) && newValue.length === 2) {
				const parsedDates = newValue.map(dateStr => parseDate(dateStr));
				dateRangeIns.value.setDates(...parsedDates);
			} else if (!Array.isArray(newValue)) {
				// 如果不是陣列，則初始化為空陣列
				modelValue.value = ["", ""];
				dateRangeIns.value.setDates(null, null);
			}
		}
	} else {
		if (dateSingleIns.value) {
			if (Array.isArray(newValue)) {
				const parsedDate = parseDate(newValue[0]);
				dateSingleIns.value.setDate(parsedDate);
				// 將 modelValue 轉換為非陣列形式
				modelValue.value = newValue[0] || "";
			} else {
				const parsedDate = parseDate(newValue);
				dateSingleIns.value.setDate(parsedDate);
			}
		}
	}
}, { deep: true });

onMounted(() => {
	if (!isInitialized.value) {
		nextTick(() => {
			initDatepicker();
			isInitialized.value = true;
		});
	}
});

onUnmounted(() => {
	if (dateSingleIns.value) {
		dateSingleIns.value.destroy();
	}
	if (dateRangeIns.value) {
		dateRangeIns.value.destroy();
	}
});
</script>

<template>
	<div :class="props.className">
		<Input
			v-if="!props.isRange"
			ref="singleDateInputRef"
			type="text"
			:placeholder="props.placeholder"
			prefix="SvgCalendar"
			v-model="modelValue"
			@clearDatePicker="clearSingleDate()"
		/>
		<div v-else ref="dateRangeInputRef" class="ded-date-pick-range">
			<Input
				ref="startInputRef"
				type="text"
				placeholder="Start Date"
				prefix="SvgCalendar"
				v-model="modelValue[0]"
				@clearDatePicker="clearRangeStart()"
			/>
			<Input
				ref="endInputRef"
				type="text"
				placeholder="End Date"
				prefix="SvgCalendar"
				v-model="modelValue[1]"
				@clearDatePicker="clearRangeEnd()"
			/>
		</div>
	</div>
</template>

<style scoped>
</style>