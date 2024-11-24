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
	<header :class="{'ded-header': true, [props.className]: !!props.className}">
		<slot></slot>
	</header>
</template>

<style scoped lang="scss">

</style>