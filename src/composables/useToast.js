import { reactive } from "vue";

// 按照 position 分組存儲 Toast
const toasts = reactive({
	"top-right": [],
	"top-left": [],
	"top-center": [],
	"bottom-right": [],
	"bottom-left": [],
	"bottom-center": [],
});

// 儲存計時器，用於手動刪除時清除 `setTimeout`
const timers = new Map();

// 儲存 `toast` 容器的 Map（key: position, value: DOM element）
const toastContainers = new Map();

// function - 取得或創建 `toast` 容器
const getToastContainer = (position) => {
	// 如果該位置的 `toast` 容器已經存在，直接返回
	if (toastContainers.has(position)) {
		return toastContainers.get(position);
	}

	// 創建一個新的 `div`
	const container = document.createElement("div");
	container.id = `toast-container-${position}`;
	container.classList.add("ded-toast-container", `ded-toast-${position}`);

	// 追加到 `body`
	document.body.appendChild(container);

	// 存入 `toastContainers`
	toastContainers.set(position, container);

	return container;
};

// function - 刪除指定 id 的 Toast
const removeToastById = (id, position) => {
	if (!toasts[position]) return;

	if (timers.has(id)) {
		clearTimeout(timers.get(id)); // 清除 `setTimeout`
		timers.delete(id);
	}

	// 直接修改陣列，而不是重新賦值
	const index = toasts[position].findIndex((toast) => toast.id === id);
	if (index !== -1) {
		toasts[position].splice(index, 1);
	}
};

// function - 新增 Toast，並綁定唯一 ID 與計時器
const addToast = (toast) => {
	const id = `toast-${crypto.randomUUID()}`;
	const position = toast.position || "top-right"; // 預設位置

	// 確保 `position` 內部是陣列
	if (!Array.isArray(toasts[position])) {
		toasts[position] = reactive([]);
	}

	// 確保 `toast` 容器存在
	getToastContainer(position);

	const newToast = { ...toast, id };
	toasts[position].push(newToast);

	// 如果有 `duration`，則自動刪除
	if (toast.duration && toast.duration > 0) {
		const timer = setTimeout(() => {
			removeToastById(id, position);
		}, toast.duration);

		timers.set(id, timer);
	}
};

// function - 清除所有 Toast
const clearAllToasts = () => {
	// 清除所有計時器
	timers.forEach((timer) => clearTimeout(timer));
	timers.clear();

	// 清空所有位置的 Toast
	Object.keys(toasts).forEach((position) => {
		toasts[position].splice(0, toasts[position].length);
	});
};

// 讓 `useToast()` 成為單例，確保所有組件使用相同的 `toasts`
export const useToast = () => {
	return {
		add: addToast,
		remove: removeToastById,
		clear: clearAllToasts,
		toasts,
	};
};
