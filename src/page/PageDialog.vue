<script setup>
import { ref } from "vue";
import { useDialog } from "@/ui/element/Dialog/useDialog.js";
import Dialog from "@/ui/element/Dialog/Dialog.vue";
import Button from "@/ui/element/Button/Button.vue";

const dialog = useDialog();
const dialogData = ref({
	title: "Replace File?",
	message:
		'A file named "example.png" already exist! Do you what to replace it?',
});

</script>

<template>
	<Dialog :title="dialogData.title" :message="dialogData.message">
		<template #dialogFooter>
			<Button variant="text" @click="handleAction1">Cancel</Button>
			<Button @click="handleAction2">Replace</Button>
		</template>
	</Dialog>
	<br />
	<Button @click="dialog.showDialog">open modal</Button>
</template>

<style scoped lang="scss">

</style>