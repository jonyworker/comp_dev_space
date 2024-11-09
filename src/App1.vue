<script setup>
import BB from "@/ui/element/Breadcrumb/BB.vue";
const datasource = [
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
		label: "第四層",
		href: "/4th",
	},
	{
		label: "第五層",
		href: "/5th",
	},
	{
		label: "第六層",
		href: "/6th",
	},
	{
		label: "第七層",
		href: "/7th",
	},
	{
		label: "第八層",
		href: "/8th",
	},
	{
		label: "當前頁",
	},
]
</script>

<template>
<BB
	:dataSource="datasource"></BB>

</template>

<style scoped lang="scss">

</style>