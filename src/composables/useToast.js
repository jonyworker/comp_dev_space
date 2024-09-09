import { ref } from 'vue';

// Toast 儲存序列
const toasts = ref([]);

// 删除指定 id 的 Toast 函数
const removeToastById = (id) => {
	toasts.value = toasts.value.filter(toast => toast.id !== id);
};

// 加入Toast 並綁定 時間 id
const addToast = (toast) => {
	const id = Date.now();
	const newToast = { ...toast, id };
	toasts.value.push(newToast);

	setTimeout(() => {
		removeToastById(id);
	}, toast.life || 3000);
};

export const useToast = () => {
	return {
		add: addToast,
		remove: removeToastById,
		toasts
	};
};
