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
				"tertiary",
				"success",
				"warning",
				"error",
				"info",
			].includes(value),
	},
	type: {
		type: String,
		default: "dot",
		validator: (value) => ["dot", "number"].includes(value),
	},
	value: {
		type: Number,
	},
	limit: {
		type: Number,
		default: Infinity,
	},
	className: {
		type: String,
		default: "",
	},
});


// 計算是否大於對大設定值
const computedValue = computed(() => {
	const isNumBadgeLabel = typeof(+props.value) === 'number' || !isNaN(+props.value);
	if (isNumBadgeLabel) {
		return (props.value > props.limit) ? props.limit : props.value
	}
	return props.value
})
</script>

<template>
	<div :class="{'ded-badge__container': true,[props.className]: !!props.className,}">
		<!-- Badge - slot -->
		<slot></slot>
		<!-- Badge - 實體 -->
	    <div
		    class="ded-badge__content ded-badge__position-top-right"
		    :class="[
			  `ded-badge-color-${props.themeColor}`,
			  props.type === 'dot' ? 'ded-badge__content-isDot': '']"
	    >
		    <template v-if="props.type !== 'dot'">
			    <span class="ded-badge-text">{{ computedValue }}</span>
			    <span v-if="props.value > props.limit" class="ded-badge-text">+</span>
		    </template>
	    </div>
    </div>
</template>

<style scoped lang="scss">

</style>