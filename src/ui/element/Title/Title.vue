<script setup>
import { computed } from 'vue';

// 定義 Props
const props = defineProps({
	themeColor: {
		type: String,
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
	level: {
		type: String,
		default: '0',
		validator: (value) => ['0', '1', '2', '3', '4', '5', '6'].includes(value),
	},
	customClass: {
		type: String,
		default: '',
	},
})

const headingCVAClass = computed(() => {
	return [`title title-level-${props.level} title-${props.themeColor}`];
});

// 計算包括 CVA Class 與自定義 customClass 的按鈕樣式
const finalHeadingClass = computed(() => {
	return [headingCVAClass.value, props.customClass].filter(Boolean).join(' ');
});
</script>

<template>
	<div :class="finalHeadingClass">
		<slot></slot>
	</div>
</template>

<style scoped lang="scss">

</style>