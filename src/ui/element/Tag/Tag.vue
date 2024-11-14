<script setup>
import Icon from "@/ui/element/Icon/Icon.vue";

const emits = defineEmits(['remove']);
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
    },
    prefix: {
        type: [String, null],
    },
    closeable: {
        type: Boolean,
        default: false,
    },
    isDisabled: {
        type: Boolean,
        default: false
    },
    className: {
        type: String,
        default: "",
    },
});


const closeTag = () => {
	emits('remove');
};
</script>

<template>
    <span :class="{
        [`tag-disable`]: props.isDisabled,
		'tag__container':true,
		 [`tag-${props.themeColor}`]:true,

		  [props.className]: !!props.className
	}">

	    <template v-if="props.prefix">
		    <Icon size="14" :name="props.prefix"></Icon>
	    </template>
	    <span class="tag__label">{{ props.label }}</span>

        <Icon
            v-if="props.closeable"
            name="close"
            size="14"
            @click="closeTag()"
        ></Icon>
    </span>
</template>

<style lang="scss" scoped></style>
