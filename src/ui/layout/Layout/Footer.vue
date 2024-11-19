<script setup>
	// 定義 Props
	const defineProps = defineProps({
		className: {
			type: String,
			default: "",
		}
	})
</script>

<template>
	<footer :class="{'ded-footer': true, [props.className]: !!props.className}">
		<slot></slot>
	</footer>
</template>

<style scoped lang="scss">

</style>