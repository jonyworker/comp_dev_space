<script setup>
// 定義 Props
const props = defineProps({
	hasHeaderDivider: {
		type: Boolean,
		default: false
	},
	className: {
		type: String,
		default: "",
	},
})
</script>

<template>
	<div :class="{
		'ded-card':true,
		'ded-card-container': true,
		 [props.className]: !!props.className}
	">
		<div :class="{'ded-card-header': true, 'ded-card-header-divider': props.hasHeaderDivider }">
			<slot name="cardHeader">
			</slot>
		</div>

		<div class="ded-card-body">
			<slot>
			</slot>
		</div>

		<div class="ded-card-footer">
			<slot name="cardFooter">
			</slot>
		</div>

	</div>
</template>

<style scoped lang="scss">

</style>