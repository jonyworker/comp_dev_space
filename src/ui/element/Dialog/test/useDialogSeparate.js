import {ref} from "vue";

const dialogSeparateShow = ref(false);

const component = ref()

export function useDialogSeparate() {
	return {
		component,
		dialogSeparateShow,
		showDialogSeparate: () => {
			dialogSeparateShow.value = true;
		},
		hideDialogSeparate: () => {
			dialogSeparateShow.value = false;
		}
	}
}
