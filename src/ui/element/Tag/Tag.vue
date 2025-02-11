<script setup>
import { computed } from 'vue';
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
	variant: {
		type: String,
		validator: (value) => ["filled", "ghost",].includes(value),
        default: "filled",
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

const isValidHref = computed(() => {
	try {
		return !!props.href && new URL(props.href);
	} catch {
		return false;
	}
});
</script>

<template>
    <div
	    :class="[
            'ded-tag',
            { [`ded-tag-${props.variant}`]: props.variant },
            { [`ded-tag-${props.variant}-${props.themeColor}`]: props.variant && props.themeColor &&
            !props.isDisabled },
            { [`ded-tag-${props.variant}-disabled`]: props.isDisabled },
            props.className && props.className.split(' '),
        ]"
    >
	    <template v-if="props.href && isValidHref">
		    <a :href="props.href" class="ded-tag-text">
			    <template v-if="props.prefix">
				    <span class="ded-tag-icon">
					    <Icon :name="props.prefix"/>
				    </span>
			    </template>
			    {{ props.label }}
		    </a>
	    </template>

	    <template v-else>
		    <div class="ded-tag-text">
			    <template v-if="props.prefix">
				    <span class="ded-tag-icon">
					    <Icon :name="props.prefix"/>
				    </span>
			    </template>
			    {{ props.label }}
		    </div>
	    </template>



		<template v-if="props.closable">
			<Icon name="SvgClose" class="ded-tag-close" @click="closeTag"/>

		</template>
    </div>
</template>

<style lang="scss" scoped>

</style>
