<script setup>
import slider from "@/ui/element/slider/slider.vue";
</script>

<template>
	<slider
		themeColor="primary"
		:min="-100"
		:max="100"
		step="1"
		:initValue="50"
		unit="℃"
		:isDisabled="false"
	></slider>
</template>

<style scoped lang="scss">

</style>