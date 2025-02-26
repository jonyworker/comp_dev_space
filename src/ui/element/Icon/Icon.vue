<script setup>
import { watch, ref, markRaw } from 'vue';
import icons from '@/assets/icons/icons.js'; // 引用 icons.js

const props = defineProps({
	name: {
		type: String,
	},
	size: {
		type: String,
	},
	width: {
		type: String
	},
	height: {
		type: String
	},
	color: {
		type: String,
	},
	src: {
		type: String,
	},
});

const iconComponent = ref(null);

const loadIconComponent = () => {
    if (props.name && icons[props.name]) {
        iconComponent.value = markRaw(icons[props.name]);
    } else {
        console.warn(`Icon "${props.name}" not found.`);
        iconComponent.value = null;
    }
};

watch(() => props.name, loadIconComponent, { immediate: true });
</script>

<template>
    <component
        v-if="props.src"
        :is="'img'"
        :src="props.src"
        :width="props.size ? props.size : props.width"
        :height="props.size ? props.size : props.height"
        :style="{ fill: props.color }"
    />
    <component
        v-else-if="iconComponent"
        :is="iconComponent"
        :width="props.size ? props.size : props.width"
        :height="props.size ? props.size : props.height"
        :style="{ fill: props.color }"
    />
</template>

<style lang="scss" scoped></style>
