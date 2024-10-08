<script setup>
import { computed, ref } from "vue";
import BreadcrumbItem from "@/ui/element/Breadcrumb/BreadcrumbItem.vue";

// 定義 Props
const props = defineProps({
	items: {
		type: Array,
		default: () => []
	},
	// --  資料接口 -- //
	label: {
		type: String,
	},
	href: {
		type: String,
	},
	isCurrentPage: {
		type: Boolean,
		default: false,
	}
});
const copyBreadcrumbsData = ref([...props.items])
console.log(copyBreadcrumbsData.value.length)

const truncatedBreadcrumbs = computed(() => {
	const data = copyBreadcrumbsData.value;
	if (data.length > 3) {
		return [data[0], { label: '...', href: '#' }, ...data.slice(-2)];
	} else {
		return data;
	}
});

const restBreadcrumbs = computed(() => {
	const data = copyBreadcrumbsData.value;
	if (data.length > 3) {
		return data.slice(1, -2);
	} else {
		return [];
	}
});

console.log("1st",truncatedBreadcrumbs.value)
console.log("2nd",restBreadcrumbs.value)

// 控制顯示剩餘未顯示數據
const isOpen =ref(false)
const handleClick = () => {
	isOpen.value = !isOpen.value
}
</script>

<template>
	<nav class="breadcrumb-container undefined">
		<ul class="breadcrumb">
			<li class="breadcrumb-item" v-for="(item, index) in truncatedBreadcrumbs">
				<!-- breadcrumb - 等於...時折疊數據 -->
				<template v-if="item.label === '...'">
					<div class="rest">
						<span class="rest-label" @click="handleClick()">...</span>
						<ul class="rest-dropdown-menu" v-if="isOpen">
							<li class="drop-item" v-for="(restItem) in restBreadcrumbs">
								<a class="drop-item-link" :href="restItem.href">{{ restItem.label }}</a>
							</li>
						</ul>
					</div>
				</template>
				<!-- breadcrumb - 其餘非折疊數據 -->
				<template v-else>
					<BreadcrumbItem
						:label="item.label"
						:href="item.href"
						:isCurrentPage="index === truncatedBreadcrumbs.length - 1">
					</BreadcrumbItem>
				</template>
			</li>
		</ul>
	</nav>
</template>

<style scoped lang="scss">

</style>