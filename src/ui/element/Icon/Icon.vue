<script setup>
import { watch, ref, defineAsyncComponent, markRaw } from 'vue';
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
  },
  color: {
    type: String,
  },
});

const iconComponent = ref(null);

// 加上 markRaw 防止被響應式轉換
const loadIconComponent = async () => {
  iconComponent.value = markRaw(defineAsyncComponent(() =>
      import(`../../../assets/icons/${props.name}.svg`)
  ));
};

// 監聽 name一有改變調用 loadIconComponent
watch(() => props.name, loadIconComponent, { immediate: true });

// 載入初始 icon
loadIconComponent();
</script>

<template>
  <component
    :is="iconComponent"
    :width="props.size"
    :height="props.size"
    :style="{ color: props.color }"
  />
</template>

<style lang="scss" scoped></style>
