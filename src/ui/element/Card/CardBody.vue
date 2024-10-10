<script setup>
import { computed } from "vue";
import Icon from "@/ui/element/Icon/Icon.vue";
import Title from "@/ui/element/Title/Title.vue";
import Button from "@/ui/element/Button/Button.vue";

// 定義 props
const props = defineProps({
	title: {
		type: String,
		default: "Card title",
	},
	subTitle: {
		type: String,
		default: "Card subtitle",
	},
	text: {
		type: String,
		default: "Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.",
	},
	clamp:{
		type: String,
		default: "2",
	}
})

const clampValue = computed(() => {
	return {
		'-webkit-line-clamp': props.clamp
	}
})
</script>

<template>
	<div class="card__body">
		<slot>
			<div style="display:flex; justify-content: space-between; align-items: center">
				<Title class="card__title" level="2">{{ props.title }}</Title>
				<Icon name="more_vert" size="24"></Icon>
			</div>

			<h6 class="card__subtitle" style="margin-bottom: 16px;">{{ props.subTitle }}</h6>
			<p class="card__text" :style="clampValue" style="margin-bottom: 16px;">{{ props.text }}</p>

			<Button
				variant="contained"
				size="medium"
				width="fit"
				style="margin-top: auto;"
			>
				Go somewhere
			</Button>
		</slot>
	</div>
</template>

<style scoped lang="scss">

</style>