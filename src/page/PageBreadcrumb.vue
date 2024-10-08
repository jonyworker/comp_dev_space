<script setup>
import { ref } from "vue";
import Breadcrumb from "@/ui/element/Breadcrumb/Breadcrumb.vue";

// Breadcrumb 所需資料
const breadcrumbData = ref([
	{
		label: "首頁",
		href: "/",
	},
	{
		label: "第一層",
		href: "/1st",
	},
	{
		label: "第二層",
		href: "/2nd",
	},
	{
		label: "第三層",
		href: "/3rd",
	},
	{
		label: "第n層",
		href: "/nPages",
	},
	{
		label: "當前頁",
	},
]);
</script>

<template>
	<Breadcrumb :breadcrumbData="breadcrumbData"></Breadcrumb>
</template>

<style scoped lang="scss">

</style>