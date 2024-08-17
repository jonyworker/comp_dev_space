<script setup>
import { computed, ref, defineAsyncComponent } from 'vue';
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

const iconComponent = defineAsyncComponent(() =>
  import(`../../../assets/icons/${props.name}.svg`)
);
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
