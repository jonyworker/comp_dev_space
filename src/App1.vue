<script setup>

import Table from '@/ui/element/Table/old/Table.vue';

const columnHeadData = [
	{ key: "id", label: "ID", sort: true },
	{ key: "name", label: "NAME", sort: true },
	{ key: "email", label: "EMAIL", sort: false },
	{ key: "sex", label: "SEX", sort: true },
];
const columnCellData = [
	{
		id: 1,
		name: "a",
		email: "sdkfjslkjflsjlfkasjfk,sfjsfks , , s, sfoasfdlalksflkaskdflsadlks, s, fdksakfdlasljdf ",
	},
	{
		id: 2,
		name: "b",
		email: "jane@example.com",
	},
	{
		id: 3,
		name: "c",
		email: "Jony@example.com",
		sex: "man",
	},
];

</script>

<template>

	<Table
		:columnHeadData="columnHeadData"
		:columnCellData="columnCellData"
		:row-selector="false"
		:rowSelector="true"
	>
		<template #name="{ item }">
            <span :style="{ color: item.name === 'John' ? 'red' : '' }">
                {{ item.name }}
                <button>典籍</button>
            </span>
		</template>
	</Table>

</template>

<style scoped lang="scss">

</style>