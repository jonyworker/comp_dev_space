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

const iconComponent = shallowRef(null); // 🚀 確保 Vue 不會轉換成 Proxy
let icons = import.meta.glob('@/assets/icons/*.svg', { eager: true, import: 'default' });

const loadIconComponent = async () => {
    if (!props.name) return;

    // 🔥 如果使用者有提供 `src`，讓 `<img>` 處理
    if (props.src) {
        iconComponent.value = null;
        return;
    }

    try {
        // 先嘗試使用 `import.meta.glob()` 載入的圖標
        if (icons[`/src/assets/icons/${props.name}.svg`]) {
            iconComponent.value = markRaw(icons[`/src/assets/icons/${props.name}.svg`]);
            return;
        }

        // 如果沒有找到，動態嘗試載入 SVG（確保是 Vue 組件）
        const response = await fetch(`/src/assets/icons/${props.name}.svg`);
        if (response.ok) {
            const svgText = await response.text();

            // 建立 Vue 組件來渲染 SVG（直接插入 `<svg>`）
            iconComponent.value = markRaw({
                template: svgText,
            });

            // 更新 `icons`，未來可直接載入
            icons = {
                ...icons,
                [`/src/assets/icons/${props.name}.svg`]: iconComponent.value,
            };
        } else {
            console.warn(`⚠️ 找不到圖標 "${props.name}"，請確認 icons/*.svg 是否存在`);
            iconComponent.value = null;
        }
    } catch (error) {
        console.warn(`⚠️ 無法載入圖標 "${props.name}"，請改用 src`, error);
        iconComponent.value = null;
    }
};

// 🚀 監聽 `name` 或 `src` 變更
watch([() => props.name, () => props.src], loadIconComponent, { immediate: true });
</script>

<template>
<!--    <p>{{ iconComponent?.render ? '✅ 這是一個 Vue 元件' : '❌ iconComponent 解析失敗' }}</p>-->
    <img
        v-if="props.src"
        :src="props.src"
        :width="props.size || props.width"
        :height="props.size || props.height"
        :style="{ fill: props.color }"
        :alt="props.name"
    >
    <component
        v-else-if="iconComponent"
        :is="iconComponent"
        :width="props.size || props.width"
        :height="props.size || props.height"
        :style="{ fill: props.color }"
    />
</template>
