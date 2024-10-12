<script setup>
import { ref, computed } from "vue";

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
			<b class="fakeContent--text">
				<slot></slot>
			</b>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.fakeContent {
	flex-grow: 1;
	height: 100%;
	border: 2px solid #999;
	display: grid;
	place-items: center;
	border-radius: 8px;
	background-color: #e5e5f7;
	opacity: 0.2;
	background-size: 10px 10px;
	background-image: repeating-linear-gradient(
			45deg,
			#ababab 0,
			#ababab 1px,
			#e5e5f7 0,
			#e5e5f7 50%
	);
}
.fakeContent--text {
	padding: 4px 8px;
	border-radius: 2px;
	background-color: #e5e5f7;
}


</style>
