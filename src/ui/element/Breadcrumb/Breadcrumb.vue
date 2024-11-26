<script setup>
import { computed, ref, watch, onMounted, onBeforeUnmount } from "vue";
import BreadcrumbItem from "@/ui/element/Breadcrumb/BreadcrumbItem.vue";
import List from "@/ui/element/List/List.vue";
import ListItem from "@/ui/element/List/ListItem.vue";

const props = defineProps({
	dataSource: {
		type: Array,
		required: true,
	},
	className: {
		type: String,
		default: "",
	},
});

const copyBreadcrumbsData = ref([...props.dataSource]);

watch(() => props.dataSource, (newData) => {
	copyBreadcrumbsData.value = [...newData];
});

const truncatedBreadcrumbs = computed(() => {
	const data = copyBreadcrumbsData.value;
	return data.length > 3 ? [data[0], { label: '...', href: '#' }, ...data.slice(-2)] : data;
});

const restBreadcrumbs = computed(() => {
	const data = copyBreadcrumbsData.value;
	return data.length > 3 ? data.slice(1, -2) : [];
});

const isOpen = ref(false);
const dropdownPosition = ref({ top: 0, left: 0 });

const handleClick = (event) => {
	isOpen.value = !isOpen.value;
	if (isOpen.value) {
		const rect = event.target.getBoundingClientRect();
		dropdownPosition.value = {
			top: rect.bottom + window.scrollY + 8,
			left: rect.left + window.scrollX
		};
		document.addEventListener("click", handleClickOutside);
	} else {
		document.removeEventListener("click", handleClickOutside);
	}
};

// 點擊外部時關閉下拉選單
const handleClickOutside = (event) => {
	const dropdownElement = document.querySelector('.rest');
	const triggerElement = document.querySelector('.rest-label');

	if (dropdownElement && triggerElement && !dropdownElement.contains(event.target) && !triggerElement.contains(event.target)) {
		isOpen.value = false;
		document.removeEventListener("click", handleClickOutside);
	}
};

// 監聽視窗大小變化，重新計算下拉選單位置
const updatePositionOnResize = () => {
	if (isOpen.value) {
		const restLabelElement = document.querySelector('.rest-label');
		if (restLabelElement) {
			const rect = restLabelElement.getBoundingClientRect();
			dropdownPosition.value = {
				top: rect.bottom + window.scrollY + 8,
				left: rect.left + window.scrollX
			};
		}
	}
};

onMounted(() => {
	window.addEventListener('resize', updatePositionOnResize);
});

onBeforeUnmount(() => {
	window.removeEventListener('resize', updatePositionOnResize);
	document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
	<nav :class="['ded-breadcrumb-container', props.className]">
		<ol class="ded-breadcrumb">
			<li class="ded-breadcrumb-item" v-for="(item, index) in truncatedBreadcrumbs" :key="index">
				<template v-if="item.label === '...'">
					<div class="ded-rest">
						<span class="ded-rest-label" @click="handleClick">...</span>
						<teleport to="body">
							<List v-if="isOpen" class="ded-col-3 ded-rest" :style="{ top: `${dropdownPosition.top}px`,
							left:
							`${dropdownPosition.left}px`, position: 'absolute' }">
								<ListItem
									v-for="(restItem, index) in restBreadcrumbs"
									:key="index"
									:label="restItem.label"
									:href="restItem.href"
									:openInNewTab="false"
								/>
							</List>
						</teleport>
					</div>
				</template>
				<template v-else>
					<BreadcrumbItem
						:label="item.label"
						:href="item.href"
						:isCurrentPage="index === truncatedBreadcrumbs.length - 1"
					/>
				</template>
			</li>
		</ol>
	</nav>
</template>

<style scoped lang="scss">
</style>
