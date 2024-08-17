<script setup lang="ts">
import { getThemeClass } from './style';

interface ButtonProps {
  variant?: string;
  theme?: string;
  content?: string;
}

withDefaults(defineProps<ButtonProps>(), {
  variant: 'contained',
  theme: 'primary',
  content: '送出',
});

interface ClickEvent {
  /** 點擊事件 */
  (event: 'click', id: string): void;
}

defineEmits<ClickEvent>();
</script>

<template>
  <button
    :class="`button ${getThemeClass(variant, theme)}`"
    @click="$emit('click', '點擊事件')"
  >
    <slot></slot>
  </button>
</template>

<style></style>
