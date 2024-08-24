<script setup>
import { computed } from "vue";

// 定義 Props
const props = defineProps({
  themeColor: {
    type: String,
    default: "primary",
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
    default: "label"
  },
  percent: { //進度
    type: Number,
    default: 66,
  },
  strokeWidth: { //線條寬度
    type: Number,
    default: 10,
  }
})

// 計算屬性 - 進度條進度，並且限制 0-100 之間
const normalizedProgress = computed(() => Math.min(Math.max(props.percent, 0), 100));

</script>

<template>
    <!-- LineProgress - 文字顯示 -->
    <div class="progress-line-label">{{props.label}}</div>
    <!-- LineProgress - 圖表 -->
    <div class="progress-line">
        <div class="progress-line-track" :style="{ height: `${props.strokeWidth}px` }">
            <div class="progress-line-percent-primary" :style="{ width: `${normalizedProgress}%` }">
            </div>
        </div>
        <!-- LineProgress - 進度 -->
        <div class="progress-line-percent">{{`${normalizedProgress}%`}}</div>
    </div>
</template>

<style scoped lang="scss">

</style>