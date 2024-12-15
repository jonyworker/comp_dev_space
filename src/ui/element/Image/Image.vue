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
		validator: (value) => ["1x1", "4x3", "5x4", "16x9"].includes(value),
	},
	objectFit: {
		type: String,
		required: true,
		validator: (value) => ["none", "cover", "contain", "fill" ].includes(value),
	},
	className: {
		type: String,
		default: "",
	}
});

const imageContainerCVAClass = computed(() => {
	return cva("ded-image-cover-container", {
		variants: {
			ratio: {
				'1x1': "ratio-1x1",
				'4x3': "ratio-4x3",
				'5x4': "ratio-5x4",
				'16x9': "ratio-16x9",
			},
		},
	})({
		ratio: props.ratio,
	});
});

const imageObjectFitCVAClass = computed(() => {
	return cva("ded-image-cover", {
		variants: {
			objectFit: {
				cover: "cover",
				contain: "contain",
				fill: "fill",
				none: "none",
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
