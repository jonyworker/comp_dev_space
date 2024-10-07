<script setup>
import {computed} from "vue"
// 定義 Props
const props = defineProps({
	isDot: {
		type: Boolean,
		default: false,
	},
	label: {
		type: [String, Number, null],
	},
	maxValue: {
		type: Number,
	},
	withIcon: {
		type: Boolean,
		default: false,
	},
	position:{
		type: String,
		default: 'default',
		validator: (value) =>
			["default", "top-right"].includes(value),
	},
	themeColor: {
		type: String,
		default: 'error',
		validator: (value) =>
			[
				'primary',
				'secondary',
				'tertiary',
				'success',
				'warning',
				'error',
				'info',
			].includes(value),
	},
})

// 計算是否大於對大設定值
const computedLabel = computed(() => {
	const isNumBadgeLabel = typeof(+props.label) === 'number' || !isNaN(+props.label);
	console.log(isNumBadgeLabel)
	if (isNumBadgeLabel) {
		const badgeValue = props.label;
		return (badgeValue > props.maxValue) ? `${props.maxValue}+` : props.label
	}
	return props.label
})
</script>

<template>
	<span class="badge__container">
		<!-- Badge - slot -->
		<slot></slot>

		<!-- Badge - 實體 -->
	    <span
		    class="badge__content"
		    :class="{
				[`badge-color-${props.themeColor}`]: props.themeColor,
		        'badge__content-isDot': props.isDot,
		        [`badge__position-${props.position}`]: props.position,
		        'badge__content-withIcon': props.withIcon
		    }">
            {{ !props.isDot ? computedLabel : '' }}
	    </span>
    </span>
</template>

<style scoped lang="scss">

</style>