<script setup>

// 定義 props
const props = defineProps({
	text: {
		type: String,
		default: "Last updated 3 mins ago",
	},
	divider: {
		type: Boolean,
		default: false,
	}
})
</script>

<template>
	<div class="card__footer" :class="{'card__footer-border': props.divider}">
		<slot>
			<small class="card__subtitle">{{props.text}}</small>
		</slot>
	</div>
</template>

<style scoped lang="scss">

</style>