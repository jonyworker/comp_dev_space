<script setup>
import { watch } from "vue";

// 定義 Model
const modelValue = defineModel();

// 定義 Props
const props = defineProps({
	themeColor: {
		type: String,
		default: "primary",
		validator: (value) =>
			[
				"primary",
				"secondary",
				"neutral",
				"info",
				"success",
				"warning",
				"error",
			].includes(value),
	},
	dataSource: {
		type: Array,
		required: true,
	},
	initValue: {
		type: String,
		required: true,
	},
	direction: {
		type: String,
		default: "row",
		validator: (value) => ["row", "column"].includes(value),
	},
	className: {
		type: String,
		default: "",
	},
	// modelValue: {
	// 	type: String,
	// 	default: null,
	// 	validator: (value) => typeof value === 'string', // 驗證 modelValue 是否為字串
	// },
});

// 初始同步 modelValue 和 initValue
watch(
	() => props.initValue,
	(newValue) => {
		if (!modelValue.value) {
			modelValue.value = newValue;
		}
	},
	{ immediate: true }
);

// 處理 checked 狀態顯示
const isChecked = (value) => modelValue.value === value;
</script>

<template>
	<div
		:class="{
      'ded-radio-container': true,
      [`ded-radio-container-${props.direction}`]: props.direction,
      [props.className]: !!props.className,
    }"
	>
		<label
			v-for="(item, index) in props.dataSource"
			:key="index"
			class="ded-radio"
			:class="item.isDisabled?'ded-radio-input-disabled':''"
		>
			<input
				class="ded-radio-input"
				type="radio"
				:value="item.value"
				:name="item.name"
				:checked="isChecked(item.value)"
				v-model="modelValue"
			/>
			<!-- radio - 選擇框樣式 -->
			<div
				:class="[
					'ded-radio-icon',
					isChecked(item.value)
					? `ded-radio-checked-${props.themeColor}`
					: `ded-radio-unchecked-${props.themeColor}`,
				]"
			>
			</div>
			<!-- radio - 選項文字 -->
			<span
				class="ded-radio-text"
				:class="item.isDisabled?'ded-radio-text-disabled':''"
			>
				{{ item.label }}</span>
		</label>
	</div>
</template>

<style scoped>

</style>
