<script setup>
// 定義 Props
const props = defineProps({
	//--  layout 接口 -- //
	direction: {
		type: String,
		validator: (value) => ['row', 'column'].includes(value),
		default: 'row',
	},
	// --  基礎接口 -- //
	customClass: {
		type: String,
		default: '',
	},
})
</script>

<template>
  <div :class="['radio-container', `radio-container-${props.direction}`]">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">

</style>