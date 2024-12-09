<script setup>
import ListItem from "@/ui/element/List/ListItem.vue";
// 定義 Props
const props = defineProps({
    dataSource: {
        type: Object,
	    required: true,
    },
    hasOutline: {
		type: Boolean,
		default: false,
	},
	className: {
		type: String,
		default: "",
	},
})
</script>

<template>
	<ul
	    :class="{
		'ded-list': true,
		'ded-outline': props.hasOutline,
		[props.className]: !!props.className }"
	>
		<ListItem
			v-for="(item, index) in props.dataSource"
			:key="index"
			:label="item.label"
			:value="item.value"
			:href="item.href"
			:prefix="item.prefix"
		></ListItem>
	</ul>
</template>

<style scoped lang="scss">

</style>