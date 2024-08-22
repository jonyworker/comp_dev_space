<script setup>
// 定義 Props
const props = defineProps({
  // --  基礎接口 -- //
  customClass: {
    type: String,
    default: '',
  },
  //--  layout 接口 -- //
  direction: {
    type: String,
    validator: (value) => ['row', 'column'].includes(value),
    default: 'row',
  },
})
</script>

<template>
  <div :class="['checkbox-container', `checkbox-container-${props.direction}`]">
    <slot></slot>
  </div>
</template>
