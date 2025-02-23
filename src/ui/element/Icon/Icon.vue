<script setup>
import { watch, ref, markRaw } from 'vue';
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

// 載入所有 SVG，Vite 會自動解析
const icons = import.meta.glob('../../../assets/icon/*.svg', { eager: true });

const loadIconComponent = () => {
	if (props.name && icons[`../../../assets/icon/${props.name}.svg`]) {
		iconComponent.value = markRaw(icons[`../../../assets/icon/${props.name}.svg`].default);
	} else {
		console.warn(`Icon "${props.name}" not found.`);
		iconComponent.value = null;
	}
};



// 監聽 name 改變並載入本地的 SVG
watch(() => props.name, loadIconComponent, { immediate: true });

// 載入初始本地 icon
loadIconComponent();
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
        v-else
        :is="iconComponent"
        :width="props.size ? props.size : props.width"
        :height="props.size ? props.size : props.height"
        :style="{ fill: props.color }"
    />
</template>

<style lang="scss" scoped></style>
