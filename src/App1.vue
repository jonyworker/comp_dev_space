<script setup>
import checkbox from "@/ui/element/checkbox/checkbox.vue";
import { ref } from "vue";
const datasource = [
	{ label: "選項ㄧ", id: "option1", value: "option1", name: "group1" },
	{ label: "選項二", id: "option2", value: "option2", name: "group1" },
	{ label: "選項三", id: "option3", value: "option3", name: "group1" },
]
const initValue = ["option1", "option3"]
const checkedCheckboxOptions = ref([]);
</script>

<template>
<checkbox
	themeColor="error"
	:data-source="datasource"
	direction="row"
	:initValue="initValue"
	v-model="checkedCheckboxOptions"></checkbox>
	{{checkedCheckboxOptions}}
</template>

<style scoped lang="scss">

</style>