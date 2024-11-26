<script setup>
import Button from '@/ui/element/Button/Button.vue'

// 調用 composable
import {useDialog} from "@/ui/element/Dialog/useDialog.js";
const dialog = useDialog();

// 定義 Props
const props = defineProps({
	title: {
		type: String,
		required: true,
		default: "",
	},
	content: {
		type: String,
		required: true,
		default: "",
	},
	confirmText: {
		type: String,
		default: "OK",
	},
	cancelText: {
		type: String,
		default: "Cancel",
	},
	className: {
		type: String,
		default: "",
	},
});


</script>

<template>
	<Teleport to="#dialog">
		<transition name="dialog">
			<div class="ded-dialog-overlay" v-if="dialog.showDialogStatus.value" @click.self="dialog.closeDialog()">

				<div :class="{'ded-dialog-content': true, [props.className]: !!props.className}" >

					<div class="ded-dialog-header">
						<slot name="dialogHeader">
							<h2 class="ded-dialog-title">{{ props.title }}</h2>
						</slot>
					</div>

					<div class="ded-dialog-body">
						<slot name="dialogBody">
							<p>{{ props.content }}</p>
						</slot>
					</div>

					<div class="ded-dialog-footer">
						<slot name="dialogFooter">
							<Button variant="contained" themeColor="primary" size="medium" className="ded-cancel-btn">
								{{ props.cancelText }}
							</Button>
							<Button variant="contained" themeColor="error" size="medium">
								{{ props.confirmText }}
							</Button>
						</slot>
					</div>
				</div>
			</div>

		</transition>
	</Teleport>
</template>

<style scoped lang="scss">

</style>