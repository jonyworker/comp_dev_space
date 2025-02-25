<script setup>
import { watch, ref, markRaw } from 'vue';
import icons from '@/icons'; // 確保 icons.js 存在，專門管理 SVG Icons

const props = defineProps({
    name: String,
    size: String,
    width: String,
    height: String,
    color: String,
    src: String,
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
