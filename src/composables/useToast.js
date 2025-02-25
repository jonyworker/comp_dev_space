import { ref } from 'vue';

// 🔹 保持 `toasts` 為單例，讓所有組件共享
const toasts = ref([]);

// 🔹 儲存計時器，用於手動刪除時清除 `setTimeout`
const timers = new Map();

// function - 刪除指定 id 的 Toast
const removeToastById = (id) => {
	if (timers.has(id)) {
		clearTimeout(timers.get(id)); // 清除 `setTimeout`
		timers.delete(id);
	}
	toasts.value = toasts.value.filter(toast => toast.id !== id);
};

// function - 新增 Toast，並綁定唯一 ID 與計時器
const addToast = (toast) => {
	const id = Date.now();
	const newToast = { ...toast, id };
	toasts.value.push(newToast);

	// 如果有 duration，則自動刪除
	if (toast.duration && toast.duration > 0) {
		const timer = setTimeout(() => {
			removeToastById(id);
		}, toast.duration);

		timers.set(id, timer);
	}
};

// function - 清除所有 Toast
const clearAllToasts = () => {
	// 清除所有計時器
	timers.forEach((timer) => clearTimeout(timer));
	timers.clear();

	// 清空 Toast 列表
	toasts.value = [];
};

// 🔹 讓 `useToast()` 成為單例，確保所有組件使用相同的 `toasts`
export const useToast = () => {
	return {
		add: addToast,
		remove: removeToastById,
		clear: clearAllToasts,
		toasts
	};
};
