<script setup>
import Table from "@/ui/element/Table/Table.vue"
import Button from "@/ui/element/Button/Button.vue"

const columns = [
	{ key: 'head', title: 'TH', width: '50px' },
	{ key: 'column1', title: 'TH', width: '100px' },
	{ key: 'column2', title: 'TH', width: '100px'},
	{ key: 'column3', title: 'TH', width: '100px' },
	{ key: 'column4', title: 'TH', width: '50px' },
	{ key: 'column5', title: 'TH', width: '50px', align: 'center' },
];
const dataSource = [
	{
		"head": "Head-1",
		"column1": "td1",
		"column2": "td2",
		"column3": "td3",
		"column4": "td4",
		"column5": "td5"
	},
	{
		"head": "Head-2",
		"column1": "td1",
		"column2": "td2",
		"column3": "td3",
		"column4": "td4",
		"column5": "td5"
	},
	{
		"head": "Head-3",
		"column1": "td1",
		"column2": "td2",
		"column3": "td3",
		"column4": "td4",
		"column5": "td5"
	},
	{
		"head": "Head-4",
		"column1": "td1",
		"column2": "td2",
		"column3": "td3",
		"column4": "td4",
		"column5": "td5"
	},
	{
		"head": "Head-5",
		"column1": "td1",
		"column2": "td2",
		"column3": "td3",
		"column4": "td4",
		"column5": "td5"
	},
	{
		"head": "Head-6",
		"column1": "td1",
		"column2": "td2",
		"column3": "td3",
		"column4": "td4",
		"column5": "td5"
	},
	{
		"head": "Head-7",
		"column1": "td1",
		"column2": "td2",
		"column3": "td3",
		"column4": "td4",
		"column5": "td5"
	}
];
</script>

<template>
	<Table
		:columns="columns"
		:dataSource="dataSource"
		:showCheckbox="true"
		:showVerticalBorders="true"
	>
		<template #column5="{item}">
			<Button
				themeColor="primary"
				variant="filled"
				size="small"
				width="fit"
				borderWidth="1px"
				radius="4px"
			>
				{{ item.column5 }}
			</Button>
		</template>
	</Table>
</template>

<style scoped lang="scss">

</style>