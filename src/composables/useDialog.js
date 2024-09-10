import { ref } from 'vue';

// 删除指定 id 的 Toast 函数
const showDialogStatus = ref(false);

export const useDialog = () => {
	return {
		showDialogStatus,
		showDialog: () => {
			showDialogStatus.value = true;
		},
		closeDialog: () => {
			showDialogStatus.value = false;
		},
	};
};
