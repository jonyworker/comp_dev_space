<script setup>
// 定義 Props
const props = defineProps({
	direction: {
		type: String,
		validator: (value) => ['row', 'column'].includes(value),
		default: 'row',
	},
	customClass: {
		type: String,
		default: '',
	},
})
</script>

<template>
  <div :class="['checkbox-container', `checkbox-container-${props.direction}`]">
    <slot></slot>
  </div>
</template>
