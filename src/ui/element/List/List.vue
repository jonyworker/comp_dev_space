<script setup>
import ListItem from "@/ui/element/List/ListItem.vue";
// 定義 Props
const props = defineProps({
    dataSource: {
        type: Object,
    },
    hasOutline: {
		type: Boolean,
		default: false,
	},
	className: {
		type: String,
	},
})
</script>

<template>
	<ul
	    :class="{
		'ded-list': true,
		'ded-list-outline': props.hasOutline,
		[props.className]: !!props.className }"
	>
		<template v-if="props.dataSource">
			<ListItem
				v-for="(item, index) in props.dataSource"
				:key="index"
				:label="item.label"
				:value="item.value"
				:href="item.href"
				:prefix="item.prefix"
			>
			</ListItem>
		</template>
		<template v-else>
			<slot></slot>
		</template>
	</ul>
</template>

<style scoped lang="scss">

</style>