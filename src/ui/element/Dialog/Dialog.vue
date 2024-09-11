<script setup>
import Button from "@/ui/element/Button/Button.vue";

// 調用 composable
import {useDialog} from "@/composables/useDialog.js";
const dialog = useDialog();

// 定義 Props
const props = defineProps({
	// --  基礎接口 -- //
	themeColor: {
		type: String,
		default: "primary",
		validator: (value) =>
			[
				"primary",
				"secondary",
				"tertiary",
				"success",
				"warning",
				"error",
				"info",
			].includes(value),
	},
	// --  資料接口 -- //
	title: {
		type: String,
		default: 'Dialog title'
	},
	message: {
		type: String,
		default: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard '
	},
});

</script>

<template>
	<Teleport to="#dialog">
		<transition name="dialog">
			<div class="dialog-mask" v-if="dialog.showDialogStatus.value" @click="dialog.closeDialog()">
				<div class="dialog-wrapper">
					<div class="dialog-container">

						<div class="dialog-header">
							<slot name="dialogHeader">
								<h3 class="dialog-title">{{ props.title }}</h3>
							</slot>
						</div>

						<div class="dialog-body">
							<slot name="dialogBody">
								<p class="dialog-message">{{ props.message }}</p>
							</slot>
						</div>

						<div class="dialog-footer">
							<slot name="dialogFooter">
								<Button :themeColor="props.themeColor" variant="text" @click="dialog.closeDialog()">
									Cancel</Button>
								<Button :themeColor="props.themeColor" @click="dialog.closeDialog()">Enable</Button>
							</slot>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</Teleport>
</template>

<style scoped lang="scss">

</style>