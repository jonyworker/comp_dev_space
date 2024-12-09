<script setup>
import { computed } from "vue";
import AccordionItem from "@/ui/element/Accordion/AccordionItem.vue";

const props = defineProps({
	dataSource: {
		type: Array,
		required: true,
	},
	isOpenAll: {
		type: Boolean,
		default: false,
	},
	className: {
		type: String,
		default: "",
	},
});

// 用於全局控制每個 AccordionItem 的打開狀態
const allOpen = computed(() => props.isOpenAll);
</script>

<template>
	<div class="ded-accordion-container">
		<ul :class="{'ded-accordion': true, [props.className]: !!props.className}">
			<AccordionItem
				v-for="item in dataSource"
				:key="item.id"
				:label="item.label"
				:detail="item.detail"
				:isOpen="allOpen"
			/>
		</ul>
	</div>

</template>

<style scoped lang="scss">

</style>
