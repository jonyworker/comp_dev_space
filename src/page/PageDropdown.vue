<script setup>
import Dropdown from "@/ui/element/Dropdown/Dropdown.vue";
import { ref } from "vue";
const options = ref([
	{
		"label": "選項一",
		"value": "option1",
	},
	{
		"label": "選項二",
		"value": "option2",
	},
	{
		"label": "選項三",
		"value": "option3",
	}
])
</script>

<template>
  <Dropdown :options="options"></Dropdown>
</template>

<style scoped lang="scss">

</style>