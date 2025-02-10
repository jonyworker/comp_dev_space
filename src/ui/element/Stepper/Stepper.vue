<script setup>
import { computed } from 'vue';

const props = defineProps({
	dataSource: {
		type: Array,
		required: true,
	},
	currentStep: {
		type: Number,
		required: true,
	},
	direction: {
		type: String,
		default: "horizontal",
		validator: (value) => ["horizontal", "vertical"].includes(value),
	},
	className: {
		type: String,
		default: "",
	},
});


const getStepClass = computed(() => {
	return (index) => {
		if (index === props.currentStep) return "ded-step-active";
		if (index < props.currentStep) return "ded-step-completed";
		return "";
	};
});
</script>


<template>
	<div
		:class="{
			'ded-stepper': true,
			[`ded-stepper-${props.direction}`]: props.direction,
			[props.className]: !!props.className
		}"
	>
		<div class="ded-stepper-header">
			<div
				v-for="(step, index) in props.dataSource"
				:key="index"
				:class="['ded-step', getStepClass(index)]"
			>
				<div class="ded-step-circle">{{ index + 1 }}</div>
				<div class="ded-step-group">
					<div class="ded-step-title">{{ step.title }}</div>
					<div v-if="step.desc" class="ded-step-description">{{ step.desc }}</div>
				</div>
				<div
					v-if="direction === 'vertical' && index !== dataSource.length - 1"
					class="ded-step-connector"
				></div>
			</div>
		</div>
		<div class="ded-stepper-content">
			{{ dataSource[currentStep]?.content || 'No content available for this step.' }}
		</div>
	</div>
</template>

<style scoped lang="scss">

</style>