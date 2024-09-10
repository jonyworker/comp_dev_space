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
							<slot name="dialog-header">
								<h3 class="dialog-title">{{ props.title }}</h3>
							</slot>
						</div>

						<div class="dialog-body">
							<slot name="dialog-body">
								<p class="dialog-message">{{ props.message }}</p>
							</slot>
						</div>

						<div class="dialog-footer">
							<slot name="dialog-footer">
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

.dialog-mask {
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, .6);
	backdrop-filter: blur(4px);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 2;
}

.dialog-wrapper {
	display:flex;
	align-items: center;
	justify-content:center;
}

.dialog-container {
	width: 500px;
	margin: 0 auto;
	padding: 16px;
	background-color: #fff;
	border-radius: 8px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}

.dialog-header{
	margin-bottom: 20px;
}
.dialog-body {
	margin-bottom: 20px;
}
.dialog-footer {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 16px;
}
.dialog-title {
	font-weight: 400;
	font-size: 30px;
	line-height: 45px;

}


/* Transition Classes */
.dialog-enter-active,
.dialog-leave-active {
	transition: opacity 0.5s ease;
}

.dialog-enter-from,
.dialog-leave-to {
	opacity: 0;
}

</style>