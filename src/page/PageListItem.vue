<script setup>
import ListItem from "@/ui/element/ListItem/ListItem.vue";
import Icon from "@/ui/element/Icon/Icon.vue";
</script>

<template>
	<ListItem
		label="123"
		value="123"
		className="col-5"
	>
		<template #listPrefix>
			<Icon name="account_circle" size="24"></Icon>
		</template>
		<template #listSuffix>
			<Icon name="arrow_down" size="24"></Icon>
		</template>
	</ListItem>
</template>

<style scoped lang="scss">

</style>