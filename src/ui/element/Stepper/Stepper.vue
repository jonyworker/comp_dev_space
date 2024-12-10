<script setup>
import { computed } from 'vue';

const props = defineProps({
	steps: {
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
		if (index === props.currentStep) return "active";
		if (index < props.currentStep) return "completed";
		return "";
	};
});
</script>


<template>
	<div
		:class="{
			'ded-stepper': true,
			[props.direction]: true,
			[props.className]: !!props.className
		}"
	>
		<div class="ded-stepper-header">
			<div
				v-for="(step, index) in props.steps"
				:key="index"
				:class="['ded-stepper-step', getStepClass(index)]"
			>
				<div class="ded-step-circle">{{ index + 1 }}</div>
				<div class="ded-step-group">
					<div class="ded-step-title">{{ step.title }}</div>
					<div v-if="step.desc" class="ded-step-description">{{ step.desc }}</div>
				</div>
				<div
					v-if="direction === 'vertical' && index !== steps.length - 1"
					class="ded-step-connector"
				></div>
			</div>
		</div>
		<div class="ded-stepper-content">
			<slot name="ded-step-content" :step="steps[props.currentStep]">
				{{ steps[props.currentStep]?.content || 'No content available for this step.' }}
			</slot>
		</div>
	</div>
</template>

<style scoped lang="scss">

</style>