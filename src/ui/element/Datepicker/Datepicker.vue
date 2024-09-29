<script setup>
import { onMounted, useTemplateRef } from "vue";
import { Datepicker, DateRangePicker } from "vanillajs-datepicker";
import Icon from "@/ui/element/Icon/Icon.vue";

// 定義 Props
const props = defineProps({
	label: {
		type: String,
		default: "請輸入日期",
	},
	rangeStartLabel: {
		type: String,
		default: "開始日期",
	},
	rangeEndLabel: {
		type: String,
		default: "結束日期",
	},
	placeholder:{
		type: String,
		default: "請輸入日期",
	},
	rangeStartPlaceholder:{
		type: String,
		default: "請輸入開始日期",
	},
	rangeEndPlaceholder:{
		type: String,
		default: "請輸入結束日期",
	},
	size: {
		type: String,
		default: "medium",
		validator: (value) => ['small', 'medium', 'large'].includes(value),
	},
	language: {
		type: String,
		default: "zh-TW",
		validator: (value) => ['en', 'zh-TW'].includes(value),
	},
	range: {
		type: Boolean,
		default: false,
	},


});

const datepickerRef = useTemplateRef("datepicker");
const dateRangeRef = useTemplateRef("dateRange");

onMounted(() => {
	if (props.range) {
		new DateRangePicker(dateRangeRef.value, {
			format: "yyyy/mm/dd",
			language: props.language,
		});
	} else {
		new Datepicker(datepickerRef.value, {
			format: "yyyy/mm/dd", // Example format
			language: props.language,
		});
	}
});

// 中文日曆設定
(function () {
	Datepicker.locales["zh-TW"] = {
		days: [
			"星期日",
			"星期一",
			"星期二",
			"星期三",
			"星期四",
			"星期五",
			"星期六",
		],
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
})();
</script>

<template>
	<div class="input-container">

		<template v-if="range">
			<div ref="dateRange">
				<div style="display:flex; gap:8px">
					<!-- 時間區間 - 開始 -->
					<div style="width: 100%;">
						<label v-if="props.rangeStartLabel" class="input-label">{{props.rangeStartLabel}}</label>
						<div :class="['input-group', `component-${size}`, ]">
							<Icon :class="`icon-${size}`" name="calendar" ></Icon>
							<input type="text" name="start" :placeholder="props.rangeStartPlaceholder" />
						</div>
					</div>

					<!-- 時間區間 - 結束 -->
					<div  style="width: 100%;">
						<label v-if="props.rangeEndLabel" class="input-label">{{props.rangeEndLabel}}</label>
						<div :class="['input-group', `component-${size}`, ]">
							<Icon :class="`icon-${size}`" name="calendar" ></Icon>
							<input type="text" name="end" :placeholder="props.rangeEndPlaceholder" />
						</div>
					</div>
				</div>
			</div>
		</template>

		<template v-else>
			<label v-if="props.label" class="input-label">{{props.label}}</label>
			<div :class="['input-group', `component-${size}`, ]">
				<Icon :class="`icon-${size}`" name="calendar" ></Icon>
				<input type="text" ref="datepicker" :placeholder="props.placeholder"/>
			</div>
		</template>
	</div>
</template>

<style lang="scss">

</style>