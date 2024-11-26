<script setup>
import { computed } from 'vue';
import { useButtonCVAClass } from './useButtonCVAClass';
import Icon from '@/ui/element/Icon/Icon.vue';

// 定義 Props
const props = defineProps({
	themeColor: {
		type: String,
		default: "primary",
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
	variant: {
		type: String,
		required: true,
		validator: (value) => ["contained", "outlined", "text"].includes(value),
	},
	prefix: {
		type: String,
	},
	suffix: {
		type: String,
	},
	size: {
		type: String,
		default: "medium",
		validator: (value) => ["small", "medium", "large"].includes(value),
	},
	width: {
		type: String,
		default: "fit",
		validator: (value) => ["fit", "fluid"].includes(value),
	},
	isDisabled: {
		type: Boolean,
		default: false,
	},
	className: {
		type: String,
		default: "",
	},
});


// 引入 CVA Class
const buttonCVAClass = useButtonCVAClass(props);

// 計算包括 CVA Class 與自定義 className 的按鈕樣式
const finalButtonClass = computed(() => {
	return [buttonCVAClass.value, props.className].filter(Boolean).join(' ');
});
</script>

<template>
	<button :class="finalButtonClass">
		<template v-if="prefix">
			<div :class="`ded-icon-${props.size}`">
				<Icon :name="props.prefix"></Icon>
			</div>
		</template>
		<div :class="`ded-text-${props.size}`">
			<slot></slot>
		</div>
		<template v-if="suffix">
			<div :class="`ded-icon-${props.size}`">
				<Icon :name="props.suffix"></Icon>
			</div>
		</template>
	</button>
</template>

<style lang="scss" scoped>
</style>
