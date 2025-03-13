<script setup>
import { h, computed } from "vue";
import AccordionItem from "@/ui/element/Accordion/AccordionItem.vue";

const props = defineProps({
	dataSource: {
		type: Array,
		required: true,
	},
	prefix: {
		type: String,
	},
	borderStyle: {
		type: String,
		default: "highlight",
		validator: (value) => ["solid", "highlight"].includes(value),
	},
	isSmallSize: {
		type: Boolean,
		default: false,
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

// 處理 dataSource，檢查並執行函數型的 label
const sanitizedDataSource = computed(() => {
    return props.dataSource.map((item) => ({
        ...item,
        label: typeof item.label === "function" ? item.label(h) : item.label,
        detail: typeof item.detail === "function" ? item.detail(h) : item.detail,
    }));
});
</script>

<template>
	<div class="ded-accordion-container">
		<ul
			:class="{
				'ded-accordion': true,
				[`ded-accordion-${props.borderStyle}`]: props.borderStyle,
				[props.className]: !!props.className,
			}"
		>
			<AccordionItem
				v-for="item in sanitizedDataSource"
				:key="item.id"
				:prefix="props.prefix"
				:borderStyle="props.borderStyle"
				:isSmallSize="props.isSmallSize"
				:isOpen="allOpen"
			>
				<template #label>
					<template v-if="item.label">
						<component v-if="typeof item.label === 'object'" :is="item.label"/>
						<span v-else>{{ item.label }}</span>
					</template>
				</template>
				<template #detail>
					<template v-for="(detailItem, index) in item.detail" :key="index">
						<component
							v-if="typeof detailItem === 'object' && detailItem.type"
							:is="detailItem"
						/>
						<template v-else>
							{{ detailItem }}
						</template>
					</template>
				</template>
			</AccordionItem>
		</ul>
	</div>
</template>
