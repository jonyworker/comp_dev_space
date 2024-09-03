import { reactive, ref } from 'vue';

// Toast 儲存序列
const state = reactive({
	toasts: []
});


const addToast = (toast) => {

	const id = Date.now(); // 用时间戳作为唯一 ID
	const newToast = { ...toast, id };
	state.toasts.push(newToast);

	setTimeout(() => {
		// 过滤掉需要移除的 Toast
		// state.toasts.shift();
		state.toasts.filter(t => t.id !== id);
	}, toast.life || 3000);


};

export const useToast = () => {
	return {
		add: addToast,
		toasts: ref(state.toasts)
	};
};