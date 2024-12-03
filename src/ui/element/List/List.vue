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
		'ded-outline': props.hasOutline,
		[props.className]: !!props.className }"
	>
		<slot></slot>
	</ul>
</template>

<style scoped lang="scss">

</style>