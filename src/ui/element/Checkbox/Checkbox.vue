<script setup>
import { ref, watch } from "vue";
import Icon from "@/ui/element/Icon/Icon.vue";

// 定義 Model
const modelValue = defineModel();

// 定義 Props
const props = defineProps({
	themeColor: {
		type: String,
		default: "primary",
		validator: (value) =>
			["primary", "secondary", "tertiary", "success", "warning", "error", "info"].includes(value),
	},
	dataSource: {
		type: Object,
		required: true,
	},
	initValue: {
		type: Object,
		required: true,
	},
	direction: {
		type: String,
		default: "row",
		validator: (value) =>
			["row", "column"].includes(value),
	},
	className: {
		type: String,
		default: "",
	},
});

// 用於儲存每個選項的選中狀態
const isCheck = ref([]);

// 根據傳入的 initValue 和 modelValue 設置初始值
watch(
	() => props.initValue,
	(newVal) => {
		const checkedValues = newVal;
		// 初始化選中狀態
		isCheck.value = props.dataSource.map((item) => checkedValues.includes(item.value));
		modelValue.value = [...checkedValues];
	},
	{immediate: true}
);

// 切換選中狀態
const handleCheck = (item, index) => {
	const isMultiple = Array.isArray(modelValue.value);

	if (isMultiple) {
		if (isCheck.value[index]) {
			modelValue.value = modelValue.value.filter((value) => value !== item.value);
		} else {
			modelValue.value.push(item.value);
		}
	} else {
		modelValue.value = !isCheck.value[index];
	}
	isCheck.value[index] = !isCheck.value[index];
};
</script>

<template>
	<div :class="{
		'ded-checkbox-container': true,
		[`ded-checkbox-container-${props.direction}`]: props.direction,
		[props.className]: !!props.className
		}">
		<label
			v-for="(item, index) in props.dataSource"
			:key="item.id"
			:for="item.id"
			:class="{'ded-checkbox': true}"
		>
			<input
				class="ded-checkbox-input"
				type="checkbox"
				:id="item.id"
				:name="item.name"
				:value="item.value"
				:checked="isCheck[index]"
				@change="handleCheck(item, index)"
			/>
			<!-- checkbox - 選擇框樣式 -->
			<div
				:class="[
					'ded-checkbox-icon',
					isCheck[index]
						? `ded-checkbox-checked-${props.themeColor}`
						: `ded-checkbox-unchecked-${props.themeColor}`,
				]"
			>
				<Icon v-if="isCheck[index]" name="check"></Icon>
			</div>
			<!-- checkbox - 選項文字 -->
			<span class="ded-checkbox-text">{{ item.label }}</span>
		</label>
	</div>
</template>

<style scoped lang="scss">
</style>
