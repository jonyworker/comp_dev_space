<script setup>
import Icon from '@/ui/element/Icon/Icon.vue';

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
	variant: {
		type: String,
		default: "text",
		validator: (value) => ["text", "filled"].includes(value),
	},
	prefix: {
		type: String,
		required: true,
	},
	size: {
		type: String,
		validator: (value) => ["small", "medium", "large"].includes(value),
	},
	className: {
		type: String,
		default: "",
	},
});

</script>

<template>
	<div
		class="status-indicator"
		:class="{
			[`status-indicator-${props.variant}-${props.themeColor}`]: props.variant && props.themeColor,
			[props.className]: !!props.className
		}"
		role="status">
		<template v-if="props.variant === 'text'">
			<div style="line-height: 1;">
				<Icon :name="props.prefix" size="20"></Icon>
			</div>
		</template>
		<template v-else>
			<span class="status-indicator-dot" :class="`status-indicator-${props.themeColor}`"></span>
		</template>

		<div class="status-indicator-text" :class="`status-indicator-text-${props.variant}`">
			<slot></slot>
		</div>
	</div>


</template>

<style scoped lang="scss">

</style>