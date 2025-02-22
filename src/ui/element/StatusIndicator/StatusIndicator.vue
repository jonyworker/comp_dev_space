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
		<template v-if="props.prefix">
			<div style="line-height: 1;">
				<Icon :name="props.prefix" size="20"></Icon>
			</div>
		</template>

        <template v-else>
            <div class="status-indicator-content">
			    <span :class="{
                    'status-indicator-dot': true,
                    'status-indicator-dot-white': props.variant=== 'filled',
			        [`status-indicator-dot-${props.themeColor}`]:props.variant=== 'text' && props.themeColor
                }"></span>
            </div>
        </template>


		<div :class="`ded-text-${props.size}`">
			<slot></slot>
		</div>
	</div>


</template>

<style scoped lang="scss">

</style>