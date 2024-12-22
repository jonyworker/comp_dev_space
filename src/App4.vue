<script setup>
import Pagination from "@/ui/element/Pagination/Pagination.vue"



</script>

<template>
	<Pagination
		:totalItems="100"
		:currentPage="1"
		:itemsPerPageOptions="[10, 20, 50]"
		:defaultItemsPerPage="5"
		:isShowPageInfo="true"
		className=""
	>
	</Pagination>
</template>

<style scoped lang="scss">

</style>