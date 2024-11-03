<script setup>
import SliderControl from "@/ui/element/sliderWithButton/SliderControl.vue";

</script>

<template>
	<SliderControl
		themeColor="primary"
		:min="-100"
		:max="100"
		step="1"
		:initValue="19"
		unit="℃"
		:isDisabled="false"
		prefix="decrease"
		suffix="increase"
	></SliderControl>
</template>

<style scoped lang="scss">

</style>