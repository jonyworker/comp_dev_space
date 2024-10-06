<script setup>
import { ref, computed, onMounted, watch } from "vue";

// 定義 Props
const props = defineProps({
	label: {
		type: String,
		default: "label"
	},
	percent: { //進度
		type: Number,
		default: 66,
	},
	size: { //直徑
		type: Number,
		default: 120,
	},
	strokeWidth: { //線條寬度
		type: Number,
		default: 10,
	},
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
})

const textRef = ref(null);
const contentLength = ref(0);

// 取得 <text> 寬度
onMounted(() => {
  if (textRef.value) {
    contentLength.value = textRef.value.getComputedTextLength();
  }
});

// 監聽 label 長度即時更新 <text> 寬度
watch(() => props.label, () => {
  if (textRef.value) {
    contentLength.value = textRef.value.getComputedTextLength();
  }
});

// 計算屬性 - 計算進度條半徑
const radius = computed(()=>(props.size - props.strokeWidth) / 2);

// 計算屬性 - 計算進度條圓周長度
const circumference = computed(()=> 2 * Math.PI * radius.value);

// 計算屬性 - 計算進度條長度
const offset = computed(()=> circumference.value - (props.percent / 100) * circumference.value);

// 計算屬性 - 進度條進度，並且限制 0-100 之間
const normalizedProgress = computed(() => Math.min(Math.max(props.percent, 0), 100));

// 計算屬性 - 計算 [ label ] 及 [ 進度顯示 ]
const getLimitBorder = computed(() => {
  if (!contentLength.value) return 64;
  return contentLength.value + props.strokeWidth + 30;
});

</script>

<template>
    <div class="progress-circle-container">
        <svg class="progress" :width="props.size" :height="props.size">
            <!-- CircleProgress - 圖表 -->
            <circle class="progress-circle-track"
                    fill="transparent"
                    :stroke-width="props.strokeWidth"
                    :r="radius"
                    :cx="props.size / 2"
                    :cy="props.size / 2">
            </circle>
            <circle :class="`progress-circle-percent-${props.themeColor}`"
                    fill="transparent"
                    :stroke-width="props.strokeWidth"
                    :stroke-dasharray="circumference"
                    :stroke-dashoffset="offset"
                    stroke-linecap="round"
                    :r="radius"
                    :cx="props.size / 2"
                    :cy="props.size / 2"
                    :transform="`rotate(-90 ${props.size / 2} ${props.size / 2})`"
                    style="transition: stroke-dashoffset 0.35s;">
            </circle>

            <!-- CircleProgress - 文字顯示 -->
            <text
                v-if="props.size >= getLimitBorder"
                ref="textRef"
                x="50%"
                y="45%"
                text-anchor="middle"
                font-size="1em"
                fill="black">{{props.label}}</text>
            <text
                v-if="props.size >= getLimitBorder"
                x="50%"
                :y="label ? '60%' : '50%'"
                text-anchor="middle"
                dy=".3em"
                font-size="1.5em"
                fill="black">{{ `${normalizedProgress}%` }}</text>
        </svg>

        <!-- CircleProgress - 文字顯示（空間不夠時顯示） -->
        <template v-if="size < getLimitBorder">
            <div class="progress-circle-label">
                <span>{{ props.label }}</span>
                <span>{{ `${normalizedProgress}%` }}</span>
            </div>
        </template>
    </div>
</template>

<style scoped lang="scss">
</style>