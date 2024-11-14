<script setup>
import Radio from '@/ui/element/Radio/Radio.vue'
import { ref } from 'vue'

const dataSource = [
	{ label: "選項 1", value: "option1", name: "group1" },
	{ label: "選項 2", value: "option2", name: "group1" },
	{ label: "選項 3", value: "option3", name: "group1" },
];
const modelValue = ref("");
</script>

<template>

<Radio :dataSource="dataSource" v-model="modelValue"></Radio>
{{modelValue}}

</template>

<style scoped lang="scss">

</style>