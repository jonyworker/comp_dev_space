<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Icon from '@/ui/element/Icon/Icon.vue';

// 定義 Emits
const emit = defineEmits(['close']);

// 定義 Props
const props = defineProps({
	themeColor: {
		type: String,
		default: "success",
		validator: (value) =>
			["success", "warning", "error", "info"].includes(value),
	},
	title: {
		type: String,
	},
	message: {
		type: String,
	},
	duration: {
		type: Number,
		default: 3000,
	},
	icon: {
		type: String,
		default: "",
	},
	className: {
		type: String,
		default: "",
	},
});


// 控制 關閉
const handleClose = () => {
	emit('close');
};

// 控制 自動關閉
let timer = ref(null);
const show = () => {
	if (timer.value) clearTimeout(timer.value);
	timer.value = setTimeout(() => {
		handleClose();
	}, props.duration);
};

// 元件掛載時 setTimeout
onMounted(() => {
	show();
});

// 元件卸載時卸載 setTimeout
onUnmounted(() => {
	if (timer.value) clearTimeout(timer.value);
});
</script>

<template>
	<teleport to="#toast">
		<div class="ded-toast" :class="[`ded-toast-border-${props.themeColor}`, props.className]">
			<!-- toast - 關閉按鈕 -->
			<button class="ded-close-button" style="cursor: pointer" @click="handleClose">
				<Icon name="close" size="20"></Icon>
			</button>
			<!-- toast - 標題及說明文字 -->
			<p class="ded-message">
				<span class="ded-icon-wrapper" :class="`ded-toast-${props.themeColor}`">
					<Icon
						:name="props.icon || getDefaultIcon(props.themeColor)"
						size="14"
					></Icon>
				</span>
				<span>{{ props.title }}</span>
			</p>
			<p class="ded-description">{{ props.message }}</p>
		</div>
	</teleport>
</template>

<script>
// 返回默認的 icon 名稱
function getDefaultIcon(themeColor) {
	switch (themeColor) {
		case 'success':
			return 'check';
		case 'error':
			return 'close';
		case 'warning':
			return 'exclamation';
		case 'info':
			return 'info';
		default:
			return '';
	}
}
</script>

<style scoped>

</style>
