<script setup>

// 定義 props
const props = defineProps({
	text: {
		type: String,
		default: "Card Header Title",
	},
	divider: {
		type: Boolean,
		default: false,
	}
})
</script>

<template>
	<div class="card__header" :class="{'card__header-border': props.divider}">
		<slot>
			<p class="card__text">{{props.text}}</p>
		</slot>
	</div>
</template>

<style scoped lang="scss">

</style>