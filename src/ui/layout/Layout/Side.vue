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
	<aside :class="{'ded-side': true, [props.className]: !!props.className}">
		<slot></slot>
	</aside>
</template>

<style scoped lang="scss">

</style>