<script setup>
// 定義 Props
const props = defineProps({
	// --  資料接口 -- //
	label: {
		type: String,
	},
	href: {
		type: String,
	},
	isCurrentPage: {
		type: Boolean,
	}
});
</script>

<template>
	<a :class="props.isCurrentPage ? 'breadcrumb-item-label': 'breadcrumb-item-link'"
		:href="props.href"
	>{{props.label}}</a>
</template>

<style scoped lang="scss">

</style>