<script setup>

import Accordion from '@/ui/element/Accordion/Accordion.vue';

// 定義手風琴項目的數據源
const accordionData = [
	{
		"id": "1",
		"label": "Q1. What is Vue?",
		"detail": "Vue is a progressive JavaScript framework for building user interfaces."
	},
	{
		"id": "2",
		"label": "Q2. What are the features of Vue?",
		"detail": "The features of Vue include reactive data binding, component-based architecture, directives, and a virtual DOM."
	},
	{
		"id": "3",
		"label": "Q3. What is included in the Vue ecosystem?",
		"detail": "The Vue ecosystem includes tools like Vue Router (for routing), Pinia (for state management), and Vite (for fast and modern development)."
	},
	{
		"id": "4",
		"label": "Q4. What are the advantages of using Vue?",
		"detail": "The advantages of using Vue include a gentle learning curve, high flexibility, small size, and comprehensive documentation, making it easy for developers to gradually adopt and integrate into existing projects."
	}
];


</script>

<template>

	<Accordion
		:dataSource="accordionData"

	/>


</template>

<style scoped lang="scss">

</style>