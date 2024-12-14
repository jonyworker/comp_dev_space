<script setup>
import { ref } from "vue";
import Checkbox from "@/ui/element/Checkbox/Checkbox.vue";

const dataSource = [
	{ value: 'apple', label: '苹果' },
	{ value: 'banana', label: '香蕉' },
	{ value: 'cherry', label: '樱桃' }
];

const checkedCheckboxOptions = ref([]);
</script>

<template>
	<Checkbox
		themeColor="primary"
		:dataSource="dataSource"
		:initValue="['apple']"
		direction="row"
		v-model="checkedCheckboxOptions"
	/>
	<p>已选中的选项：{{ checkedCheckboxOptions }}</p>
</template>

<style scoped lang="scss">

</style>