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
	<div :class="{'ded-footer': true, [props.className]: !!props.className}"></div>
</template>

<style scoped lang="scss">

</style>