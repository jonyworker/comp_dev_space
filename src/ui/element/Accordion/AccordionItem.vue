<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import Icon from "@/ui/element/Icon/Icon.vue";

const props = defineProps({
	label: {
		type: String,
	},
	detail: {
		type: String,
	},
	isOpen: {
		type: Boolean,
		default: false,
	},
	className: {
		type: String,
		default: "",
	},
});

// 本地狀態控制
const isItemOpen = ref(props.isOpen);

// 監聽父層 isOpen 的變化，同步更新本地狀態
watch(
	() => props.isOpen,
	(newVal) => {
		isItemOpen.value = newVal;
	}
);

// 單項目開關
const handleToggle = (event) => {
	isItemOpen.value = event.target.open;
};

// 動畫處理
const addAnimation = (detailsElement) => {
	const content = detailsElement.querySelector(".detail-content");
	if (detailsElement.open && content) {
		content.animate(
			[
				{opacity: 0, height: "0px"},
				{opacity: 1, height: `${content.scrollHeight}px`},
			],
			{
				duration: 500,
				easing: "ease-in-out",
			}
		);
	}
};

onMounted(() => {
	const detailsElements = document.querySelectorAll("details");
	detailsElements.forEach((details) => {
		details.addEventListener("toggle", () => addAnimation(details));
	});
});

onBeforeUnmount(() => {
	const detailsElements = document.querySelectorAll("details");
	detailsElements.forEach((details) => {
		details.removeEventListener("toggle", () => {
		});
	});
});
</script>

<template>
	<li class="ded-accordion-item">
		<details :open="isItemOpen" :class="{'ded-accordion-detail ': true, [props.className]: !!props.className}" @toggle="handleToggle">
			<summary class="ded-accordion-title">
				<span>{{ label }}</span>
				<div :class="isItemOpen ? 'ded-accordion-item-open' : 'ded-accordion-item-close'" class="ded-icon-medium">
					<Icon size="24" name="arrow_down"/>
				</div>
			</summary>
			<div class="ded-detail-content">
				<p>{{ detail }}</p>
			</div>
		</details>
	</li>
</template>

<style scoped lang="scss">

</style>
