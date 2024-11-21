<script setup>
import { computed, onMounted, watch, useTemplateRef } from "vue";
import { Datepicker, DateRangePicker } from "vanillajs-datepicker";
import Icon from "@/ui/element/Icon/Icon.vue";

// 定義 Props
const props = defineProps({
	label: {
		type: String,
		default: "",
	},
	placeholder: {
		type: String,
		default: "",
	},
	size: {
		type: String,
		default: "medium",
		validator: (value) => ["small", "medium", "large"].includes(value),
	},
	language: {
		type: String,
		default: "zh-TW", // 空字串表示使用系統語言
	},
	range: {
		type: Boolean,
		default: false,
	},
	rangeStartLabel: {
		type: String,
		default: "開始日期",
	},
	rangeStartPlaceholder: {
		type: String,
		default: "請輸入開始日期",
	},
	rangeEndLabel: {
		type: String,
		default: "結束日期",
	},
	rangeEndPlaceholder: {
		type: String,
		default: "請輸入結束日期",
	},
	className: {
		type: String,
		default: "",
	},
});

const datepickerRef = useTemplateRef("datepicker");
const dateRangeRef = useTemplateRef("dateRange");
const calendarWrapperRef = useTemplateRef("calendarWrapper");

// 取得系統語言
const userLanguage = navigator.language || navigator.languages[0];
const supportedLanguages = ["en", "zh-TW", "fr", "ja"];

// 判斷語言，預設使用系統語言
const language = computed(() => {
	if (props.language.trim() === "") {
		return supportedLanguages.includes(userLanguage) ? userLanguage : "en";
	}
	return supportedLanguages.includes(props.language) ? props.language : "en";
});

// 初始化和更新日曆
let datepickerInstance = null;
let dateRangeInstance = null;

const initializeDatepicker = () => {
	if (props.range) {
		dateRangeInstance = new DateRangePicker(dateRangeRef.value, {
			format: "yyyy/mm/dd",
			language: language.value,
			container: calendarWrapperRef.value,
		});
	} else {
		datepickerInstance = new Datepicker(datepickerRef.value, {
			format: "yyyy/mm/dd",
			language: language.value,
			container: calendarWrapperRef.value,
		});
	}
};

const updateDatepickerLanguage = () => {
	if (props.range && dateRangeInstance) {
		dateRangeInstance.setOptions({
			language: language.value,
		});
	} else if (!props.range && datepickerInstance) {
		datepickerInstance.setOptions({
			language: language.value,
		});
	}
};

// 掛載時初始化
onMounted(() => {
	initializeDatepicker();
});

// 監聽 props.language 變化
watch(
	() => props.language,
	() => {
		updateDatepickerLanguage();
	}
);


(function () {
	// 中文日曆設定
	Datepicker.locales["zh-TW"] = {
		days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
		daysShort: ["日", "一", "二", "三", "四", "五", "六"],
		daysMin: ["日", "一", "二", "三", "四", "五", "六"],
		months: [
			"01",
			"02",
			"03",
			"04",
			"05",
			"06",
			"07",
			"08",
			"09",
			"10",
			"11",
			"12",
		],
		monthsShort: [
			"一月",
			"二月",
			"三月",
			"四月",
			"五月",
			"六月",
			"七月",
			"八月",
			"九月",
			"十月",
			"十一月",
			"十二月",
		],
		today: "Today",
		clear: "Clear",
		titleFormat: "y年MM月",
		format: "yyyy/mm/dd",
		weekStart: 0,
	};
	// 法文日曆設定
	Datepicker.locales["fr"] = {
		days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
		daysShort: ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"],
		daysMin: ["D", "L", "M", "M", "J", "V", "S"],
		months: [
			"janvier",
			"février",
			"mars",
			"avril",
			"mai",
			"juin",
			"juillet",
			"août",
			"septembre",
			"octobre",
			"novembre",
			"décembre",
		],
		monthsShort: [
			"janv.",
			"févr.",
			"mars",
			"avr.",
			"mai",
			"juin",
			"juil.",
			"août",
			"sept.",
			"oct.",
			"nov.",
			"déc.",
		],
		today: "Aujourd'hui",
		clear: "Effacer",
		titleFormat: "MM yyyy",
		format: "dd/mm/yyyy",
		weekStart: 1,
	};
	// 註冊日文語系
	Datepicker.locales["ja"] = {
		days: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
		daysShort: ["日", "月", "火", "水", "木", "金", "土"],
		daysMin: ["日", "月", "火", "水", "木", "金", "土"],
		months: [
			"1月", "2月", "3月", "4月", "5月", "6月",
			"7月", "8月", "9月", "10月", "11月", "12月",
		],
		monthsShort: [
			"1月", "2月", "3月", "4月", "5月", "6月",
			"7月", "8月", "9月", "10月", "11月", "12月",
		],
		today: "今日",
		clear: "クリア",
		titleFormat: "yyyy年MM月",
		format: "yyyy/mm/dd",
		weekStart: 0,
	};
})();
</script>

<template>
	<div
		:class="[
      'input-container',
      ...props.className.split(' ').filter((c) => c), // 分割並過濾空白
    ]"
	>
		<template v-if="range">
			<div ref="dateRange">
				<div style="display: flex; gap: 8px">
					<!-- 時間區間 - 開始 -->
					<div style="width: 100%;">
						<label v-if="props.rangeStartLabel" class="ded-input-label">{{ props.rangeStartLabel }}</label>
						<div :class="['ded-input-group', `ded-component-${size}`]">
							<Icon :class="`ded-icon-${size}`" name="calendar"/>
							<input type="text" name="start" :placeholder="props.rangeStartPlaceholder"/>
						</div>
					</div>

					<!-- 時間區間 - 結束 -->
					<div style="width: 100%;">
						<label v-if="props.rangeEndLabel" class="ded-input-label">{{ props.rangeEndLabel }}</label>
						<div :class="['ded-input-group', `ded-component-${size}`]">
							<Icon :class="`ded-icon-${size}`" name="calendar"/>
							<Input type="text" name="end" :placeholder="props.rangeEndPlaceholder"/>
						</div>
					</div>
				</div>
			</div>
		</template>

		<template v-else>
			<label v-if="props.label" class="ded-input-label">{{ props.label }}</label>
			<div :class="['ded-input-group', `ded-component-${size}`]">
				<Icon :class="`ded-icon-${size}`" name="calendar"/>
				<Input type="text" ref="datepicker" :placeholder="props.placeholder"/>
			</div>
		</template>

		<!-- Teleport 將日曆渲染到 body -->
		<teleport to="body">
			<div ref="calendarWrapper" class="calendar-wrapper"></div>
		</teleport>
	</div>
</template>

<style lang="scss" scoped>
</style>
