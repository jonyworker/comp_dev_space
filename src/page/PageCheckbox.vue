<script setup>
import { ref } from "vue";
import Checkbox from "@/ui/element/Checkbox/Checkbox.vue";
import CheckboxGroup from "@/ui/element/Checkbox/CheckboxGroup.vue";

// checkbox 所需資料
const isCheckboxChecked = ref(false);
const checkboxOptions = ref([
	{ label: "選項一", value: "option1", name: "option" },
	{ label: "選項二", value: "option2", name: "option" },
	{ label: "選項三", value: "option3", name: "option" },
	{ label: "選項四", value: "option4", name: "option" },
]);
const checkedCheckboxOptions = ref([]);

</script>

<template>
	<div>
		{{ isCheckboxChecked }}
		<br />
		<Checkbox
			label="我已詳細閱讀新規定"
			name="agreeStatement"
			v-model="isCheckboxChecked"
		></Checkbox>
		<br/>
		{{ checkedCheckboxOptions }}
		<Checkbox-Group>
			<Checkbox
				v-for="(item, index) in checkboxOptions"
				:key="index"
				:label="item.label"
				:value="item.value"
				:name="item.name"
				v-model="checkedCheckboxOptions"
			></Checkbox>
		</Checkbox-Group>
	</div>
</template>

<style scoped lang="scss">

</style>