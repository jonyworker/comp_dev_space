<script setup>
import Icon from "@/ui/element/Icon/Icon.vue";

const emits = defineEmits(['remove']);
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
    label: {
        type: String,
    },
	icon: {
		type: [String, null],
	},
    removable: {
        type: Boolean,
        default: false,
    },
});

const closeTag = () => {
	emits('remove');
};
</script>

<template>
    <span :class="['tag__container', `tag-${props.themeColor}`]">

	    <template v-if="props.icon">
		    <Icon size="14" :name="props.icon"></Icon>
	    </template>
	    <span class="tag__label">{{ props.label }}</span>

        <Icon
            v-if="props.removable"
            name="close"
            size="14"
            @click="closeTag()"
        ></Icon>
    </span>
</template>

<style lang="scss" scoped></style>
