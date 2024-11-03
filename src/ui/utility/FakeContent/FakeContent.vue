<script setup>
import { computed } from "vue";

const props = defineProps({
	height: {
		type: String,
	},
});

const computedHeight = computed(() => {
	if (props.height) {
		return `${props.height}px`;
	} else {
		return `auto`;
	}
});

</script>

<template>
	<div :style="{ height: computedHeight }">
		<div class="fakeContent" role="presentation" aria-hidden="true">
			<p class="fakeContent--text">
				<slot></slot>
			</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>

</style>
