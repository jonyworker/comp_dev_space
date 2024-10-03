<script setup>
import {computed} from "vue";
import {cva} from "class-variance-authority";

// 定義 props
const props = defineProps({
	//卡片樣式接口
	elevation: {
		type: String,
		default: "none",
		validator: (value) => ['none', 'low', 'high'].includes(value),
	},
	direction: {
		type: String,
		default: "row",
		validator: (value) => ['row', 'col'].includes(value),
	},
})

const cardContainerCVAClass = computed(()=>{
	return cva ("card__container",{
		variants: {
			elevation: {
				'none': "",
				'low': "shadow_2",
				'high': "shadow_5",
			},
			direction: {
				'row': "card__direction-row",
				'col': "card__direction-column",
			},
		},
	})({
		//這裡設定 variants名稱接收 props的值
		elevation: props.elevation,
		direction: props.direction
	})
})
</script>

<template>
	<div :class="cardContainerCVAClass">
		<slot></slot>
	</div>
</template>

<style scoped lang="scss">

</style>