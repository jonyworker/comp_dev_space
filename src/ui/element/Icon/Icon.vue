<script setup>
import { watch, ref, defineAsyncComponent, markRaw } from 'vue';
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

// 動態載入本地的 SVG 檔案
const loadIconComponent = async () => {
	try {
		if (props.name) {
			iconComponent.value = markRaw(
				defineAsyncComponent(() =>
					import(`../../../assets/icon/${props.name}.svg`)
				)
			);
		} else {
			iconComponent.value = null;
		}
	} catch (error) {
		console.error(`Error loading icon: ${error.message}`);
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
