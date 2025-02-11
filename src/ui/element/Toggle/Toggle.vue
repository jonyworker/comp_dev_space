<script setup>
// 定義 modelValue
const isChecked = defineModel({ type: Boolean, default: false });

// 定義 Emit
// const emit = defineEmits(['toggleIsChecked']);

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
	checkLabel: {
		type: String,
		default: "on",
	},
	unCheckLabel: {
		type: String,
		default: "off",
	},
	// isChecked: {
	// 	type: Boolean,
	// 	default: false,
	// },
	isDisabled: {
		type: Boolean,
		default: false,
	},
	className: {
		type: String,
		default: "",
	},
});

// 處理 toggle 事件
const handleToggle = () => {
    isChecked.value = !isChecked.value;
}
</script>

<template>
	<div :class="{
			'ded-toggle': true,
			[`ded-toggle-${props.themeColor}`]: props.themeColor,
			'ded-toggle-on': isChecked,
		    'ded-toggle-off': !isChecked,
		    [props.className]: !!props.className
		}"
	    @click.prevent="handleToggle">

		<!-- Toggle 按鈕 -->
		<div class="ded-toggle-thumb" :class="{'ded-toggle-thumb-on': isChecked, 'ded-toggle-thumb-off': !isChecked}"></div>

		<!-- Toggle 文字 -->
		<label class="ded-toggle-label" :class="{'ded-toggle-label-on': isChecked, 'ded-toggle-label-off': !isChecked}">
		  {{ isChecked === true ? props.checkLabel : props.unCheckLabel}}
		</label>
	</div>
</template>

<style scoped lang="scss">

</style>