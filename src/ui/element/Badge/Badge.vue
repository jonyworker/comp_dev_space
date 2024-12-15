<script setup>
import {computed} from "vue"
// 定義 Props
const props = defineProps({
	themeColor: {
		type: String,
		default: "error",
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
	isShowDot: {
		type: Boolean,
		default: "false",
	},
	value: {
		type: Number,
		default: 0,
	},
	limit: {
		type: Number,
		default: 0,
	},
	className: {
		type: String,
		default: "",
	},
});


// 計算是否大於對大設定值
const computedValue = computed(() => {
	if (props.value > props.limit) {
		return (props.value > props.limit) ? props.limit : props.value
	}
	return props.value
})
</script>

<template>
	<div :class="{'ded-badge-container': true,[props.className]: !!props.className,}">
		<!-- Badge - slot -->
		<slot></slot>
		<!-- Badge - 實體 -->
	    <div
		    class="ded-badge"
		    :class="[
			  `ded-badge-color-${props.themeColor}`,
			  props.isShowDot ? 'ded-badge-dot': '']"
	    >
		    <template v-if="props.isShowDot === false && props.value > 0">
			    <div class="ded-badge-content">
				    <span class="ded-badge-content-text">{{ computedValue }}</span>
				    <span v-if="props.value > props.limit" class="ded-badge-content-text">+</span>
			    </div>
		    </template>
	    </div>
    </div>
</template>

<style scoped lang="scss">
</style>