<script setup>
import { computed } from 'vue';

// 定義 Props
const props = defineProps({
	themeColor: {
		type: String,
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
	level: {
		type: Number,
		default: 0,
		validator: (value) => [ 0, 1, 2, 3, 4, 5, 6 ].includes(value),
	},
	className: {
		type: String,
		default: "",
	},
});


const headingCVAClass = computed(() => {
	return [
		`ded-title`,
		`ded-title-level-${props.level}`,
		props.themeColor ? `ded-title-${props.themeColor}` : ''
	].filter(Boolean).join(' ');
});

// 計算包括 CVA Class 與自定義 customClass 的按鈕樣式
const finalHeadingClass = computed(() => {
	return [headingCVAClass.value, props.className].filter(Boolean).join(' ');
});
</script>

<template>
	<div :class="finalHeadingClass">
		<slot></slot>
	</div>
</template>

<style scoped lang="scss">

</style>