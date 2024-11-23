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
	// withIcon: { //先移除
	// 	type: Boolean,
	// 	default: false,
	// },
	// position:{ //固定右上角
	// 	type: String,
	// 	default: "default",
	// 	validator: (value) =>
	// 		["default", "top-right"].includes(value),
	// },
});


// 計算是否大於對大設定值
const computedValue = computed(() => {
	const isNumBadgeLabel = typeof(+props.value) === 'number' || !isNaN(+props.value);
	if (isNumBadgeLabel) {
		const badgeValue = props.value;
		return (badgeValue > props.limit) ? `${props.limit}+` : props.value
	}
	return props.value
})
</script>

<template>
	<span class="ded-badge__container">
		<!-- Badge - slot -->
		<slot></slot>

		<!-- Badge - 實體 -->
	    <span
		    class="ded-badge__content ded-badge__position-top-right"
		    :class="[
			  `ded-badge-color-${props.themeColor}`,
			  props.type === 'dot' ? 'ded-badge__content-isDot': '']"
	    >
            {{ props.type === 'number' ? computedValue : '' }}
	    </span>
    </span>
</template>

<style scoped lang="scss">

</style>