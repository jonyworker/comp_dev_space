<script setup>
import { ref } from 'vue';
import slider from "@/ui/element/slider/slider.vue";

const sliderValue = ref(-10);
</script>

<template>
	<slider
		themeColor="primary"
		:min="-100"
		:max="100"
        :initValue
		step="1"
		unit="℃"
		:isDisabled="false"
        v-model="sliderValue"
	></slider>
</template>

<style scoped lang="scss">

</style>