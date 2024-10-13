<script setup>
import {ref, onMounted, onUnmounted } from 'vue'
import Icon from "@/ui/element/Icon/Icon.vue";

// 定義 Emits
const emit = defineEmits(['close'])

// 定義 Props
const props = defineProps({
	title: {
		type: String,
	},
	message: {
		type: String,
	},
	severity:{
		type: String,
		default: 'success',
		validator: (value) =>
			['success', 'warning', 'error', 'info'].includes(value),
	},
	duration: {
		type: Number,
		default: 3000,
	},
})
// 控制 關閉
const handleClose = () => {
	emit('close');
};

// 控制 自動關閉
let timer = ref(null)
const show = () => {
	if (timer.value) clearTimeout(timer.value);
	timer.value = setTimeout(() => {
		handleClose()
	}, props.duration);
}

// 元件掛載時 setTimeout
onMounted(() => {
	show();
});

// 元件卸載時卸載 setTimeout
onUnmounted(() => {
	if (timer) clearTimeout(timer)
})
</script>

<template>
	<teleport to="#toast">
		<div class="toast" :class="`toast-border-${props.severity}`">
			<!-- toast - 關閉按鈕 -->
			<button class="close-button" style="cursor: pointer" @click="handleClose">
				<Icon name="close" size="20"></Icon>
			</button>
			<!-- toast - 標題及說明文字 -->
			<p class="message">
			    <span class="icon-wrapper" :class="`toast-${props.severity}`">
				    <template v-if="props.severity ==='success'">
					    <Icon name="check" size="14"></Icon>
				    </template>
				    <template v-if="props.severity ==='error'">
					    <Icon name="close" size="14"></Icon>
				    </template>
				    <template v-if="props.severity ==='warning'">
					    <Icon name="exclamation" size="14"></Icon>
				    </template>
				    <template v-if="props.severity ==='info'">
					    <Icon name="info" size="16"></Icon>
				    </template>
			    </span>
				<span>{{ props.title }}</span>
			</p>
			<p class="description">{{ props.message }}</p>
		</div>
	</teleport>
</template>


<style scoped>

</style>