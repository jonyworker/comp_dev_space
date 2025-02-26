<script setup>
import { h, computed } from "vue";
import DOMPurify from 'dompurify';

import AccordionItem from "@/ui/element/Accordion/AccordionItem.vue";

// 內部化 `sanitizeHtml` 函式
const sanitizeHtml = (html) => {
    return DOMPurify.sanitize(html);
};

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
		// 如果 label 是一個函數，則傳入 h 函數
		label: typeof item.label === "function" ? item.label(h) : sanitizeHtml(item.label),
		detail: typeof item.detail === "function" ? item.detail(h) : sanitizeHtml(item.detail),
	}));
});
</script>

<template>
	<div class="ded-accordion-container">
		<ul
			:class="{
				'ded-accordion': true,
				[props.className]: !!props.className,
				[`ded-accordion-${props.borderStyle}`]: props.borderStyle,
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
						<!-- 渲染組件或 HTML -->
						<component v-if="typeof item.label === 'object'" :is="item.label"/>
						<span v-else v-html="item.label"></span>
					</template>
				</template>
				<template #detail>
					<template v-for="(detailItem, index) in item.detail" :key="index">
						<!-- 處理 h() 創建的 VNode -->
						<component
							v-if="typeof detailItem === 'object' && detailItem.type"
							:is="detailItem"
						/>

						<!-- 處理純文本或 HTML 字符串 -->
						<span v-else-if="typeof detailItem === 'string'" v-html="detailItem"></span>

						<!-- 處理其他類型 -->
						<template v-else>
							{{ detailItem }}
						</template>
					</template>
				</template>
			</AccordionItem>
		</ul>
	</div>
</template>

<style scoped lang="scss">
</style>