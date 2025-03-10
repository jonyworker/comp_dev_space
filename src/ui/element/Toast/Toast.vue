<script setup>
if (!document.getElementById("toast")) {
	const toastContainer = document.createElement("div");
	toastContainer.id = "toast";
	toastContainer.classList.add("ded-toast-container");
	document.body.appendChild(toastContainer);
}

import { ref, onMounted, onUnmounted, watch } from 'vue';
import Icon from '@/ui/element/Icon/Icon.vue';
import Button from '@/ui/element/Button/Button.vue';
import Title from '@/ui/element/Title/Title.vue';

// 定義 Emits
const emit = defineEmits(['onClose']);

// 定義 Props
const props = defineProps({
    themeColor: {
        type: String,
        validator: (value) =>
            [
                "primary",
                "secondary",
                "neutral",
                "info",
                "success",
                "warning",
                "error",
            ].includes(value),
        default: "primary",
    },
	position: {
		type: String,
		default: "top-right",
		validator: value => [
			"top-right", "top-left", "top-center",
			"bottom-right", "bottom-left", "bottom-center",
		].includes(value)
	},
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
        default: "Content",
	},
    prefix: {
        type: String,
        default: "",
    },
	duration: {
		type: Number,
		default: 1000,
	},
	className: {
		type: String,
		default: "",
	},
});


// 控制 關閉
const handleClose = () => {
	emit('onClose');
};

// 控制 自動關閉
let timer = ref(null);
const show = () => {
	if (timer.value) clearTimeout(timer.value);
	timer.value = setTimeout(() => {
		handleClose();
	}, props.duration);
};

// 動態建立 Toast 容器
const updateToastContainer = () => {
	let toastContainer = document.getElementById("toast");

	if (!toastContainer) {
		toastContainer = document.createElement("div");
		toastContainer.id = "toast";
		toastContainer.classList.add("ded-toast-container", `ded-toast-${props.position}`);

		document.body.appendChild(toastContainer);
	} else {
		// 確保 className 被正確更新
		toastContainer.className = `ded-toast-container ded-toast-${props.position}`;
	}
};

// 監聽 `props.position`，當變更時更新 `toastContainer`
watch(() => props.position, () => {
	updateToastContainer();
});

// 元件掛載時 setTimeout
onMounted(() => {
	updateToastContainer();
	console.log(props.position)
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
			<Button class="ded-close-button" variant="text" themeColor="neutral" @click="handleClose">
				<Icon name="SvgClose" size="20"></Icon>
			</Button>
			<!-- toast - 標題及說明文字 -->
            <div class="ded-toast-header">
                <div :class="['ded-toast-header-message', `ded-toast-header-message-${props.themeColor}`]">
                    <Icon :name="props.prefix" size="20"></Icon>
                    <Title :themeColor="props.themeColor" :level="5">
                        {{ props.title }}
                    </Title>
                </div>
                <div class="ded-toast-header-action">
                    <slot name="action"></slot>
                </div>
            </div>
			<p class="ded-description">{{ props.content }}</p>
		</div>
	</teleport>
</template>

<style scoped>

</style>
