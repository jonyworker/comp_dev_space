<script setup>
import { ref, onMounted, onUnmounted, defineEmits, defineProps,watch } from 'vue'

// const emits = defineEmits(['update:show'])

const props = defineProps({
	message: {
		type: String,
		required: true
	},
	duration: {
		type: Number,
		default: 3000
	},
	type: {
		type: String,
		default: 'info',
		validator: (value) => ['info', 'success', 'warning', 'error'].includes(value)
	},
	themeColor: {
		type: String,
		default: 'primary',
		validator: (value) =>
			[
				'primary',
				'secondary',
				'tertiary',
				'success',
				'warning',
				'error',
				'info',
			].includes(value),
	},
	show: {
		type: Boolean,
		default: false
	}
})

const isVisible = ref(props.show)
let timer = ref(null)

const show = () => {
	isVisible.value = true
	// timer = setTimeout(() => {
	// 	isVisible.value = false
	// }, props.duration)
}

watch(() => props.show, (newVal) => {
	if (newVal) show();
});
onMounted(() => {
	if (props.show) show()
})
onUnmounted(() => {
	if (timer) clearTimeout(timer)
})
</script>

<template>
	<teleport to="body">
		<transition name="toast">
			<div v-if="isVisible" class="toast" :class="`toast-${props.themeColor}`">
				{{ message }}
			</div>
		</transition>
	</teleport>
</template>


<style scoped>

</style>