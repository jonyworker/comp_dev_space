<script setup>
import { ref, defineModel, onMounted, watch } from "vue";
import Icon from "@/ui/element/Icon/Icon.vue";

// 使用 defineModel 正确定义模型值
const modelValue = defineModel({
	default: []
});

// 定义 Props
const props = defineProps({
	themeColor: {
		type: String,
		default: "primary",
		validator: (value) =>
			["primary", "secondary", "tertiary", "success", "warning", "error", "info"].includes(value),
	},
	dataSource: {
		type: Array,
		required: true,
	},
	initValue: {
		type: Array,
		default: () => [],
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
	}
});

// Use a unique identifier generation method
const generateId = (value) => {
	return `checkbox-${value}`;
};

// 初始化选中状态
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



// 初始化时同步 modelValue
onMounted(() => {
	modelValue.value = props.initValue;
});

// 切换选中状态
const handleCheck = (item, index) => {
	// 切换当前项的选中状态
	isCheck.value[index] = !isCheck.value[index];

	// 更新 modelValue
	if (isCheck.value[index]) {
		// 如果选中，添加到 modelValue
		modelValue.value = [...modelValue.value, item.value];
	} else {
		// 如果取消选中，从 modelValue 移除
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
			<!-- checkbox 选择框样式 -->
			<div
				:class="[
          'ded-checkbox-icon',
          isCheck[index]
            ? `ded-checkbox-checked-${themeColor}`
            : `ded-checkbox-unchecked-${themeColor}`,
        ]"
			>
				<Icon v-if="isCheck[index]" name="check"></Icon>
			</div>
			<!-- checkbox 选项文字 -->
			<span class="ded-checkbox-text">{{ item.label }}</span>
		</label>
	</div>
</template>