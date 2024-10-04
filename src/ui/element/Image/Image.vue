<script setup>
import { computed } from 'vue';
import { cva } from "class-variance-authority";

// 定義 Props
const props = defineProps({
  ratio: {
    type: String,
	default: '11',
    validator: (value) => ['11', '43', '54', '169'].includes(value),
  },
  objectFit: {
    type: String,
    default: 'cover',
    validator: (value) => ['cover', 'contain', 'fill', 'none'].includes(value),
  },
  src: {
    type: String,
  },
  alt: {
    type: String,
	  default: 'Image Alt Text',
  }
});

const imageContainerCVAClass = computed(()=>{
  return cva ("image-container",{
    variants: {
      ratio: {
        11: "ratio-1x1",
        43: "ratio-4x3",
        54: "ratio-5x4",
        169: "ratio-16x9",
      },
    },
  })({
    //這裡設定 variants名稱接收 props的值
    ratio: props.ratio
  })
})

const imageObjectFitCVAClass = computed(()=>{
  return cva ("image",{
    variants: {
      objectFit: {
        cover: "cover",
        contain: "contain",
        fill: "fill",
        none: "none",
      },
    },
  })({
    //這裡設定 variants名稱接收 props的值
    objectFit: props.objectFit
  })
})

</script>


<template>
  <div :class="imageContainerCVAClass">
    <img
        :class="imageObjectFitCVAClass"
        :src="props.src"
        :alt="props.alt"
    />
  </div>
</template>

<style scoped lang="scss">

</style>