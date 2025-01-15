<script setup>
import Button from '@/ui/element/Button/Button.vue'
import Icon from "@/ui/element/Icon/Icon.vue";
// 調用 composable
import {useDialog} from "@/ui/element/Dialog/useDialog.js";
const dialog = useDialog();

// 定義 Props
const props = defineProps({
	hasClose: {
		type: Boolean,
		default: false,
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
			<div class="mask-overlay" v-if="dialog.showDialogStatus.value" @click.self="dialog.closeDialog()">

				<div :class="{'ded-dialog-content': true, [props.className]: !!props.className}" >

					<template v-if="props.hasClose === true">
						<button class="ded-dialog-close-btn" @click="dialog.closeDialog()">
							<Icon name="SvgClose" size="20"></Icon>
						</button>
					</template>

					<div class="ded-dialog-header">
						<slot name="header">
						</slot>
					</div>

					<div class="ded-dialog-body">
						<slot name="content">
						</slot>
					</div>

					<div class="ded-dialog-footer">
						<slot name="footer">
							<Button variant="contained" size="medium" className="ded-cancel-btn">
								Cancel
							</Button>
							<Button variant="contained" themeColor="primary" size="medium">
								OK
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