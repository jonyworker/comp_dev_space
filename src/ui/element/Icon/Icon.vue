<script setup>
import { computed, inject } from "vue";

const props = defineProps({
    name: {
        type: String,
    },
    size: {
        type: String,
    },
    width: {
        type: String,
    },
    height: {
        type: String,
    },
    color: {
        type: String,
        default: "currentColor",
    },
});
// 假設 `icons` 來自 Vue `provide()`
const icons = inject("icons", {});

// 根據 `name` 取得對應的 SVG Vue 元件或 Base64 編碼的圖片
const IconComponent = computed(() => icons[props.name] || null);

// 判斷 `IconComponent` 是否為 Base64 圖片 URL
const isSvgString = computed(() => {
    return typeof IconComponent.value === "string" && IconComponent.value.startsWith("data:image/svg+xml,");
});
</script>

<template>
    <!-- 如果是 Base64 SVG，用 <img> 來顯示 -->
    <img v-if="isSvgString" :src="IconComponent" :width="size || width" :height="size || height" :alt="name" />

    <!-- 如果是 Vue 元件，動態渲染 -->
    <component
        v-else-if="IconComponent"
        :is="IconComponent"
        :width="size || width"
        :height="size || height"
        :fill="color"
    />
</template>

