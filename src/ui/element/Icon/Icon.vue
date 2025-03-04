<script setup>
import { watch, shallowRef, markRaw } from 'vue';

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

const iconComponent = shallowRef(null);
const icons = shallowRef(null); // 初始為 `null`，確保 `icons.js` 載入後才觸發 `loadIconComponent()`

// 動態載入 `icons.js`
const loadIcons = async () => {
    try {
        const module = await import('@/assets/icons/icons.js');
        icons.value = markRaw(module.default); // 確保 `icons` 內的元件不會變成響應式物件
        loadIconComponent(); // 🚀 `icons.js` 載入後再執行 `loadIconComponent`
        // eslint-disable-next-line no-unused-vars
    } catch (error) {
        console.warn("⚠️ 無法載入 `icons.js`，請確認已下載並放入 `src/assets/icons/`。");
    }
};

// 設定圖標
const loadIconComponent = () => {
    if (!icons.value) return; // 🚀 icons.js 尚未載入時不執行

    if (props.name && icons.value[props.name]) {
        iconComponent.value = icons.value[props.name]; // 🚀 `icons` 已經是 `markRaw`
    } else {
        console.warn(`⚠️ 找不到圖標 "${props.name}"，請確認 \`icons.js\` 內是否有此圖標。`);
        iconComponent.value = null;
    }
};

// 🚀 等 `icons.js` 加載完成後再監聽 `props.name`
watch(() => props.name, () => {
    if (icons.value) {
        loadIconComponent();
    }
}, { immediate: false });

loadIcons();
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
