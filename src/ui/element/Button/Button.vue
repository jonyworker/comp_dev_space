<script setup>
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
				"neutral",
				"info",
				"success",
				"warning",
				"error",
			].includes(value),
	},
	variant: {
		type: String,
		required: true,
		validator: (value) => ["text", "filled", "ghost", "soft"].includes(value),
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
		validator: (value) => ["fluid", "fit"].includes(value),
	},
	borderWidth: {
		type: String,
		validator: (value) => ["none", "1px", "2px", "3px", "4px", "5px"].includes(value),
	},
	radius: {
		type: String,
		validator: (value) => ["none", "2px", "4px", "8px", "12px", "16px", "32px", "full"].includes(value),
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

</script>

<template>
<!--	<button :class="finalButtonClass">-->
	<button :class="{
        'ded-button': true,
        [`ded-button-${props.width}`]: props.width,
        [`ded-text-${props.size}`]: props.size,
        [`ded-button-${props.variant}`]: props.variant,
        [`ded-button-${props.variant}-${props.themeColor}`]: props.variant && props.themeColor,
        [`ded-button-${props.variant}-disabled`]: props.variant && props.isDisabled,
        [`ded-button-border-width-${props.borderWidth}`]: props.borderWidth,
        [`ded-button-radius-${props.radius}`]: props.radius,
        [props.className]: !!props.className,
        'ded-button-only-icon' : !slot
    }">
		<template v-if="prefix">
			<div :class="`ded-icon-${props.size}`">
				<Icon :name="props.prefix"></Icon>
			</div>
		</template>

		<template v-if="$slots.default" >
			<div class="ded-button-content">
				<slot></slot>
			</div>
		</template>

		<template v-if="suffix">
			<div :class="`ded-icon-${props.size}`">
				<Icon :name="props.suffix"></Icon>
			</div>
		</template>
	</button>
</template>

<style lang="scss" scoped>
</style>
