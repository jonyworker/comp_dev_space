<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import Icon from "@/ui/element/Icon/Icon.vue";

const props = defineProps({
	prefix: {
		type: String,
	},
	borderStyle: {
		type: String,
		default: "",
		validator: (value) => ["solid", "highlight",].includes(value),
	},
	isSmallSize: {
		type: Boolean,
		default: true,
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
	<li class="ded-accordion-item" :class="`ded-accordion-item-${props.borderStyle}`">
		<details :open="isItemOpen" :class="{'ded-accordion-detail ': true, [props.className]: !!props.className}" @toggle="handleToggle">
			<summary class="ded-accordion-title"
			         :class="props.isSmallSize ? 'ded-accordion-title-small':'ded-accordion-title-default'">
				<span  class="ded-accordion-title-content">
					<span  class="ded-accordion-title-icon">
						<Icon :name="props.prefix"></Icon>
					</span >
					<slot name="label"></slot>
				</span >
				<span  :class="isItemOpen ? 'ded-accordion-item-open' : 'ded-accordion-item-close'" class="ded-icon-medium">
					<Icon size="24" name="arrow_down"/>
				</span >
			</summary>
			<div class="ded-accordion-detail-content">
				<slot name="detail"></slot>
			</div>
		</details>
	</li>
</template>

<style scoped lang="scss">
</style>
