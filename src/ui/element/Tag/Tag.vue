<script setup>
import Icon from "@/ui/element/Icon/Icon.vue";

const emits = defineEmits(['onClose']);

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
	variable: {
		type: String,
		validator: (value) => ["filled", "ghost",].includes(value),
	},
	label: {
		type: String,
		required: true,
	},
	href: {
		type: String,
		default: "",
	},
	prefix: {
		type: String,
	},
	closable: {
		type: Boolean,
		default: true,
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

const closeTag = () => {
	if (!props.isDisabled) emits('onClose');
};
</script>

<template>
    <div
	    :class="[
            'ded-tag',
            { [`ded-tag-${props.variable}`]: props.variable },
            { [`ded-tag-${props.variable}-${props.themeColor}`]: props.variable && props.themeColor &&
            !props.isDisabled },
            { [`ded-tag-${props.variable}-disabled`]: props.isDisabled },
			{'ded-tag-closable': props.closable},
            props.className && props.className.split(' '),
        ]"
    >
        <div class="ded-tag-text">
			<template v-if="props.prefix">
				<div class="ded-tag-icon">
					<Icon :name="props.prefix"/>
				</div>
			</template>
			{{ props.label }}
		</div>
		<template v-if="props.closable">
			<Icon name="close" class="ded-tag-close" @click="closeTag"/>

		</template>
    </div>
</template>

<style lang="scss" scoped>

</style>
