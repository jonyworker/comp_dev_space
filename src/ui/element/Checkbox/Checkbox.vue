<script setup>
import { ref, onMounted, watch } from "vue";
import Icon from "@/ui/element/Icon/Icon.vue";

// 使用 defineModel 正確定義模型值
const modelValue = defineModel({
	default: []
});

// 定義 Props
const props = defineProps({
	// themeColor: {
	// 	type: String,
	// 	default: "primary",
	// 	validator: (value) =>
	// 		[
	// 			"primary",
	// 			"secondary",
	// 			"neutral",
	// 			"info",
	// 			"success",
	// 			"warning",
	// 			"error",
	// 		].includes(value),
	// },
	dataSource: {
		type: Array,
		required: true,
	},
	initValue: {
		type: Array,
		required: true,
	},
	direction: {
		type: String,
		default: "row",
		validator: (value) =>
			["row", "column"].includes(value),
	},
    size: {
        type: String,
        default: "medium",
        validator: (value) =>
            ["small", "medium", "large"].includes(value),
    },
	className: {
		type: String,
		default: "",
	}
});

// 使用唯一識別碼生成方法
const generateId = (value) => {
	return `checkbox-${value}`;
};

// 初始化選取狀態
const isCheck = ref(
	props.dataSource.map((item) =>
		props.initValue.includes(item.value)
	)
);

// 監聽 modelValue
watch(
	modelValue, // 監聽 modelValue
	(newModelValue) => {
		// 當 modelValue 改變時，更新 isCheck
		isCheck.value = props.dataSource.map((item) =>
			newModelValue.includes(item.value)
		);
	},
	{ immediate: true }
);

// 初始化時同步 modelValue
onMounted(() => {
	modelValue.value = props.initValue;
});

// 切換選取狀態
const handleCheck = (item, index) => {
	// 切換當前項的選取狀態
	isCheck.value[index] = !isCheck.value[index];

	// 更新 modelValue
	if (isCheck.value[index]) {
		// 如果選取，加入到 modelValue
		modelValue.value = [...modelValue.value, item.value];
	} else {
		// 如果取消選取，從 modelValue 移除
		modelValue.value = modelValue.value.filter(
			(value) => value !== item.value
		);
	}
};
</script>

<template>
	<div
		:class="{
            'ded-checkbox-container': true,
            [`ded-checkbox-container-${direction}`]: direction,
            [className]: !!className
        }"
	>
		<label
			v-for="(item, index) in dataSource"
			:key="item.value"
			:for="generateId(item.value)"
			class="ded-checkbox"
            :class="{
                'ded-checkbox-input-disabled': item.isDisabled,
                [`ded-text-${props.size}`]: props.size
            }"
		>
			<input
				class="ded-checkbox-input"
				type="checkbox"
				:id="generateId(item.value)"
				:name="item.name"
				:value="item.value"
				:checked="isCheck[index]"
				@change="handleCheck(item, index)"
			/>
			<!-- checkbox 選擇框樣式 -->
			<div
				:class="[
					'ded-checkbox-icon',
					`ded-icon-${props.size}`,
					item.isDisabled?'ded-checkbox-icon-disabled':'',
					isCheck[index]
					? `ded-checkbox-checked`
					: `ded-checkbox-unchecked`,
				]"
			>
				<Icon v-if="isCheck[index]" name="SvgCheck"></Icon>
			</div>
			<!-- checkbox 選項文字 -->
			<span class="ded-checkbox-text"
			      :class="item.isDisabled?'ded-checkbox-text-disabled':''"
			>
				{{ item.label }}
			</span>
		</label>
	</div>
</template>

<style lang="scss" scoped>
</style>
