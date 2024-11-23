<script setup>

// 調用 composable
import {useDialog} from "@/ui/element/Dialog/useDialog.js";
const dialog = useDialog();

// 定義 Props
const props = defineProps({
	className: {
		type: String,
		default: "",
	},
});

</script>

<template>
	<Teleport to="#dialog">
		<transition name="dialog">
			<div class="dialog-mask" v-if="dialog.showDialogStatus.value" @click="dialog.closeDialog()">
				<div class="dialog-wrapper">
					<div :class="{'dialog-container': true, [props.className]: !!props.className}">

						<div class="dialog-header">
							<slot name="dialogHeader"></slot>
						</div>

						<div class="dialog-body">
							<slot name="dialogBody"></slot>
						</div>

						<div class="dialog-footer">
							<slot name="dialogFooter"></slot>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</Teleport>
</template>

<style scoped lang="scss">

</style>