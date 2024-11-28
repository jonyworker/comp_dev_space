<script setup>
import { computed } from 'vue';
import { cva } from "class-variance-authority";

// 定義 Props
const props = defineProps({
	src: {
		type: String,
		required: true,
	},
	alt: {
		type: String,
		required: true,
	},
	ratio: {
		type: String,
		required: true,
		validator: (value) => ["11", "43", "54", "169"].includes(value),
	},
	objectFit: {
		type: String,
		required: true,
		validator: (value) => ["cover", "contain", "fill", "none"].includes(value),
	},
	className: {
		type: String,
		default: "",
	}
});

const imageContainerCVAClass = computed(() => {
	return cva("ded-image-container", {
		variants: {
			ratio: {
				11: "ratio-1x1",
				43: "ratio-4x3",
				54: "ratio-5x4",
				169: "ratio-16x9",
			},
		},
	})({
		ratio: props.ratio,
	});
});

const imageObjectFitCVAClass = computed(() => {
	return cva("ded-image", {
		variants: {
			objectFit: {
				cover: "ded-image-cover",
				contain: "ded-image-contain",
				fill: "ded-image-fill",
				none: "ded-image-none",
			},
		},
	})({
		objectFit: props.objectFit,
	});
});
</script>

<template>
	<div :class="[imageContainerCVAClass, ...(props.className ? props.className.split(' ') : [])]">
		<img
			:class="imageObjectFitCVAClass"
			:src="props.src"
			:alt="props.alt"
		/>
	</div>
</template>

<style scoped lang="scss">

</style>
