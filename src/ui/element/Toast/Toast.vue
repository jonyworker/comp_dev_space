<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
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
	title: {
		type: String,
        default: "Title",
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
			<Button class="ded-close-button" variant="text" themeColor="neutral" @click="handleClose">
				<Icon name="SvgClose" size="20"></Icon>
			</Button>
			<!-- toast - 標題及說明文字 -->
            <div class="ded-toast-header">
                <div :class="['ded-toast-header-message', `ded-toast-header-message-${props.themeColor}`]">
                    <Icon :name="props.prefix" size="20"></Icon>
                    <Title :themeColor="props.themeColor" level="5">
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
