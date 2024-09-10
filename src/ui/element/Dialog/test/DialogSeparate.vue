<script setup>
import {ref, computed, markRaw} from "vue";
import Icon from "@/ui/element/Icon/Icon.vue";
import {useDialogSeparate} from "@/ui/element/Dialog/test/useDialogSeparate.js";
import ModalConfirm from "@/ui/element/Dialog/test/ModalConfirm.vue";
import ModalOverview from "@/ui/element/Dialog/test/ModalOverview.vue";
const dialog = useDialogSeparate();

// 定義 Props
// const props = defineProps({
// 	// --  基礎接口 -- //
// 	themeColor: {
// 		type: String,
// 		default: "primary",
// 		validator: (value) =>
// 			[
// 				"primary",
// 				"secondary",
// 				"tertiary",
// 				"success",
// 				"warning",
// 				"error",
// 				"info",
// 			].includes(value),
// 	},
// 	customClass: {
// 		type: String,
// 		default: "",
// 	},
// 	// --  資料接口 -- //
// 	label: {
// 		type: String,
// 	},
// 	value: {
// 		type: [ String, Boolean ],
// 	},
// 	name: {
// 		type: String,
// 	},
// 	modelValue: {
// 		type: [Array, Boolean],
// 	},
// });

</script>

<template>
	<Teleport to="#dialog">
		<Transition>
			<component
				:is="dialog.component.value"
				v-if="dialog.dialogSeparateShow.value"
				@close="dialog.hideDialogSeparate()"/>
		</Transition>
	</Teleport>
</template>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
	opacity: 0;
}

</style>