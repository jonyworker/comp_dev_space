<script setup>
	// 定義 Props
	const props = defineProps({
		className: {
			type: String,
			default: "",
		}
	})
</script>

<template>
	<div :class="{'ded-layout': true, [props.className]: !!props.className}">
		<slot></slot>
	</div>
</template>

<style scoped lang="scss">

</style>