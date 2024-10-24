<script setup>
import List from "@/ui/element/List/List.vue";
import { reactive } from "vue";
import Icon from "@/ui/element/Icon/Icon.vue";
import ListItem from "@/ui/element/ListItem/ListItem.vue";
const options = reactive([
	{
		"content": {
			"label": "選項一",
			"value": "option1",
			"href": "https://www.google.com"
		}
	},
	{
		"content": {
			"label": "選項二",
			"value": "option2",
			"href": "https://www.google.com"
		}
	},
	{
		"content": {
			"label": "選項三",
			"value": "option3",
			"href": "https://www.google.com"
		}
	},
	{
		"content": {
			"label": "選項一",
			"value": "option1",
			"href": "https://www.google.com"
		}
	},
	{
		"content": {
			"label": "選項二",
			"value": "option2",
			"href": "https://www.google.com"
		}
	},
	{
		"content": {
			"label": "選項三",
			"value": "option3",
			"href": "https://www.google.com"
		}
	},{
		"content": {
			"label": "選項一",
			"value": "option1",
			"href": "https://www.google.com"
		}
	},
	{
		"content": {
			"label": "選項二",
			"value": "option2",
			"href": "https://www.google.com"
		}
	},
	{
		"content": {
			"label": "選項三",
			"value": "option3",
			"href": "https://www.google.com"
		}
	}
])
</script>

<template>
	<List
		className="col-5"
		:isMenu=true
		maxHeight="200"
	>
		<ListItem
			v-for="(item, index) in options"
			:key="index"
			:label="item.content.label"
			:value="item.content.value"
			:href="item.content.href"
		>
			<template #listPrefix>
				<Icon name="account_circle" size="24"></Icon>
			</template>
			<template #listSuffix>
				<Icon name="arrow_down" size="24"></Icon>
			</template>
		</ListItem>
	</List>

</template>

<style scoped lang="scss">

</style>