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
				"tertiary",
				"success",
				"warning",
				"error",
				"info",
			].includes(value),
	},
	label: {
		type: String,
		required: true,
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
    <span
	    :class="[
            'ded-tag',
            { 'ded-tag-contained': props.themeColor && !props.isDisabled },
            { 'ded-tag-outlined': props.themeColor && props.isDisabled },
            { [`ded-tag-contained-${props.themeColor}`]: props.themeColor && !props.isDisabled },
            { [`ded-tag-outlined-${props.themeColor}`]: props.themeColor && props.isDisabled },
            { 'ded-tag-contained-disabled': props.isDisabled },
            { 'ded-tag-outlined-disabled': props.isDisabled },
            props.className && props.className.split(' '),
        ]"
    >
        <template v-if="props.prefix">
            <span class="ded-tag-icon">
                <Icon :name="props.prefix" size="18" />
            </span>
        </template>
        <span class="ded-tag-text">{{ props.label }}</span>
        <template v-if="props.closable">
            <span
	            class="ded-tag-close"
	            :class="{ 'ded-tag-close-disabled': props.isDisabled }"
	            @click="closeTag"
            >
                <Icon name="close" size="18" />
            </span>
        </template>
    </span>
</template>

<style lang="scss" scoped>

</style>
