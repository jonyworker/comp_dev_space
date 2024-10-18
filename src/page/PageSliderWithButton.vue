<script setup>
import sliderWithButton from "@/ui/element/sliderWithButton/sliderWithButton.vue";

</script>

<template>
	<sliderWithButton
		themeColor="primary"
		:min="-100"
		:max="100"
		step="1"
		:initValue="19"
		unit="℃"
		:isDisabled="false"
		prefix="decrease"
		suffix="increase"
	></sliderWithButton>
</template>

<style scoped lang="scss">

</style>