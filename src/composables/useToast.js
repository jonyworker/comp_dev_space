// import { ref } from 'vue';
//
// // 🔹 保持 `toasts` 為單例，讓所有組件共享
// const toasts = ref([]);
//
// // 🔹 儲存計時器，用於手動刪除時清除 `setTimeout`
// const timers = new Map();
//
// // function - 刪除指定 id 的 Toast
// const removeToastById = (id) => {
// 	if (timers.has(id)) {
// 		clearTimeout(timers.get(id)); // 清除 `setTimeout`
// 		timers.delete(id);
// 	}
// 	toasts.value = toasts.value.filter(toast => toast.id !== id);
// };
//
// // function - 新增 Toast，並綁定唯一 ID 與計時器
// const addToast = (toast) => {
// 	const id = Date.now();
// 	const newToast = { ...toast, id };
// 	toasts.value.push(newToast);
//
// 	// 如果有 duration，則自動刪除
// 	if (toast.duration && toast.duration > 0) {
// 		const timer = setTimeout(() => {
// 			removeToastById(id);
// 		}, toast.duration);
//
// 		timers.set(id, timer);
// 	}
// };
//
// // function - 清除所有 Toast
// const clearAllToasts = () => {
// 	// 清除所有計時器
// 	timers.forEach((timer) => clearTimeout(timer));
// 	timers.clear();
//
// 	// 清空 Toast 列表
// 	toasts.value = [];
// };
//
// // 🔹 讓 `useToast()` 成為單例，確保所有組件使用相同的 `toasts`
// export const useToast = () => {
// 	return {
// 		add: addToast,
// 		remove: removeToastById,
// 		clear: clearAllToasts,
// 		toasts
// 	};
// };


import { ref } from "vue";

// 🔹 保持 `toasts` 為單例，讓所有組件共享
const toasts = ref([]);

// 🔹 儲存計時器，用於手動刪除時清除 `setTimeout`
const timers = new Map();

// 🔹 儲存 `toast` 容器的 Map（key: position, value: DOM element）
const toastContainers = new Map();

// function - 取得或創建 `toast` 容器
const getToastContainer = (position) => {
	// 如果該位置的 `toast` 容器已經存在，直接返回
	if (toastContainers.has(position)) {
		return toastContainers.get(position);
	}

	// 創建一個新的 `div`
	const container = document.createElement("div");
	container.id = `toast-${position}`;
	container.classList.add("ded-toast-container", `ded-toast-${position}`);

	// 追加到 `body`
	document.body.appendChild(container);

	// 存入 `toastContainers`
	toastContainers.set(position, container);

	return container;
};

// function - 刪除指定 id 的 Toast
const removeToastById = (id) => {
	if (timers.has(id)) {
		clearTimeout(timers.get(id)); // 清除 `setTimeout`
		timers.delete(id);
	}

	// 移除 `toasts` 陣列中的該 `toast`
	const toastIndex = toasts.value.findIndex((toast) => toast.id === id);
	if (toastIndex !== -1) {
		const toast = toasts.value[toastIndex];
		const position = toast.position;
		toasts.value.splice(toastIndex, 1);

		// 同時刪除 DOM 元素
		const container = toastContainers.get(position);
		if (container) {
			const toastElement = container.querySelector(`[data-id="${id}"]`);
			if (toastElement) {
				toastElement.remove();
			}

			// 如果該 `position` 下沒有 `toast`，則刪除 `container`
			if (container.children.length === 0) {
				container.remove();
				toastContainers.delete(position);
			}
		}
	}
};

// function - 新增 Toast，並綁定唯一 ID 與計時器
const addToast = (toast) => {
	const id = Date.now();
	const position = toast.position || "top-right"; // 預設位置
	const newToast = { ...toast, id, position };
	toasts.value.push(newToast);

	// 取得該 `position` 的 `toast` 容器（如不存在則創建）
	const container = getToastContainer(position);

	// 建立 `toast` 元素
	const toastElement = document.createElement("div");
	toastElement.classList.add("ded-toast");
	toastElement.textContent = toast.message;
	toastElement.dataset.id = id;

	// 加入 `toast` 容器
	container.appendChild(toastElement);

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

	// 移除所有 `toast` 容器
	toastContainers.forEach((container) => container.remove());
	toastContainers.clear();
};

// 🔹 讓 `useToast()` 成為單例，確保所有組件使用相同的 `toasts`
export const useToast = () => {
	return {
		add: addToast,
		remove: removeToastById,
		clear: clearAllToasts,
		toasts,
	};
};
