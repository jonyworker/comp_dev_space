<script setup>
import { computed, watch, ref, defineAsyncComponent } from 'vue';
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
});

const iconComponent = ref(null);

const loadIconComponent = async () => {
  iconComponent.value = defineAsyncComponent(() =>
      import(`../../../assets/icons/${props.name}.svg`)
  );
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
