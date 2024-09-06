import {ref} from "vue";

const dialogShow = ref(false);

const component = ref()

export function useDialog() {
	return {
		component,
		dialogShow,
		showDialog: () => {
			dialogShow.value = true;
		},
		hideDialog: () => {
			dialogShow.value = false;
		}
	}
}
