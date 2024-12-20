<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Icon from '@/ui/element/Icon/Icon.vue';
import Button from '@/ui/element/Button/Button.vue';
import Title from '@/ui/element/Title/Title.vue';
import StatusIndicator from '@/ui/element/Status-Indicator/StatusIndicator.vue';

// 定義 Emits
const emit = defineEmits(['close']);

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
    },
	title: {
		type: String,
	},
	content: {
		type: String,
	},
    prefix: {
        type: String,
        default: "",
    },
	duration: {
		type: Number,
		default: 3000,
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
			<Button class="ded-close-button" variant="text" themeColor="neutral" @click="handleClose">
				<Icon name="close" size="20"></Icon>
			</Button>
			<!-- toast - 標題及說明文字 -->
			<div class="ded-message">
                <StatusIndicator
                    :themeColor="props.themeColor"
                    variant="text"
                    :prefix="props.prefix"
                >
                    <Title>{{ props.title }}</Title>
                </StatusIndicator>
			</div>
			<p class="ded-description">{{ props.content }}</p>
		</div>
	</teleport>
</template>

<style scoped>

</style>
