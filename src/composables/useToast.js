import { ref } from 'vue';

// Toast 儲存序列
const toasts = ref([]);

// function - 删除指定 id 的 Toast Component
const removeToastById = (id) => {
	toasts.value = toasts.value.filter(toast => toast.id !== id);
};

// function - 增加 Toast 並綁定時間 id
const addToast = (toast) => {
	const id = Date.now();
	const newToast = { ...toast, id };
	toasts.value.push(newToast);
};

export const useToast = () => {
	return {
		add: addToast,
		remove: removeToastById,
		toasts
	};
};
