<script setup>
import Toast from "@/ui/element/Toast/Toast.vue";
import { useToast } from "@/ui/element/Toast/useToast.js";
import Button from "@/ui/element/Button/Button.vue";

// Toast 所需資料
const { add, toasts, remove } = useToast();
const showSuccess = () => {
	add({
		title: "Success Message",
		message: "Hello, world! This is a toast message.",
		severity: "success",
		showToast: true,
	});
};
const showError = () => {
	add({
		title: "Error Message",
		message: "Hello, world! This is a toast message.",
		severity: "error",
		showToast: true,
	});
};


</script>

<template>
	<!-- Toast -->
	<div style="display: flex; gap: 16px">
		<Button themeColor="success" variant="outlined" @click="showSuccess"
		>Show Success Toast</Button
		>
		<Button themeColor="error" variant="outlined" @click="showError"
		>Show Success Toast</Button
		>
	</div>

	<Toast
		v-for="toast in toasts"
		:key="toast.id"
		:title="toast.title"
		:message="toast.message"
		:severity="toast.severity"
		:duration= 1000
		@close="remove(toast.id)"
	></Toast>
</template>

<style scoped lang="scss">

</style>