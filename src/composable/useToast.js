import { reactive, computed } from "vue";

// 按照 position 分組存儲 Toast
const toasts = reactive({
	"top-right": [],
	"top-left": [],
	"top-center": [],
	"bottom-right": [],
	"bottom-left": [],
	"bottom-center": [],
});

// 計算所有 position keys，避免硬編碼
const positions = computed(() => Object.keys(toasts));

// 儲存計時器，用於手動刪除時清除 `setTimeout`
const timers = new Map();

// 儲存 `toast` 容器的 Map（key: position, value: DOM element）
const toastContainers = new Map();

// function - 取得或創建 `toast` 容器
const getToastContainer = (position) => {
	if (toastContainers.has(position)) {
		return toastContainers.get(position);
	}

	const container = document.createElement("div");
	container.id = `toast-container-${position}`;
	container.classList.add("ded-toast-container", `ded-toast-${position}`);

	document.body.appendChild(container);
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

	const index = toasts[position].findIndex((toast) => toast.id === id);
	if (index !== -1) {
		toasts[position].splice(index, 1);
	}
};

// function - 新增 Toast
const addToast = (toast) => {
	const id = `toast-${crypto.randomUUID()}`;
	const position = toast.position || "top-right";

	if (!Array.isArray(toasts[position])) {
		toasts[position] = reactive([]);
	}

	getToastContainer(position);

	const newToast = {
		...toast,
		id,
		action: toast.action || null,
	};

	toasts[position].push(newToast);

	if (toast.duration && toast.duration > 0) {
		const timer = setTimeout(() => {
			removeToastById(id, position);
		}, toast.duration);

		timers.set(id, timer);
	}
};

// function - 清除所有 Toast
const clearAllToasts = () => {
	timers.forEach((timer) => clearTimeout(timer));
	timers.clear();

	Object.keys(toasts).forEach((position) => {
		toasts[position].splice(0, toasts[position].length);
	});
};

// 讓 `useToast()` 成為單例
export const useToast = () => {
	return {
		add: addToast,
		remove: removeToastById,
		clear: clearAllToasts,
		toasts,
		positions, // 讓組件可以直接取得 positions
	};
};
