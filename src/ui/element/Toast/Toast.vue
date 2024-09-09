<script setup>
import {ref, onUnmounted, watch} from 'vue'
import Icon from "@/ui/element/Icon/Icon.vue";

// 定義 Emits
const emits = defineEmits(['close'])

// 定義 Props
const props = defineProps({
	themeColor: {
		type: String,
		default: 'primary',
		validator: (value) =>
			[
				'primary',
				'secondary',
				'tertiary',
				'success',
				'warning',
				'error',
				'info',
			].includes(value),
	},
	severity:{
		type: String,
		default: 'success',
		validator: (value) =>
			['success', 'warning', 'error', 'info'].includes(value),
	},
	title: {
		type: String,
		required: true
	},
	message: {
		type: String,
		required: true
	},
	duration: {
		type: Number,
		default: 3000
	},
	id:{
		type: String,
	},
	show: {
		type: Boolean,
		default: false
	}
})
// 控制 關閉
const handleClose = () => {
	emits('close');
};

// 控制 自動關閉
const isVisible = ref(props.show)
let timer = ref(null)
const show = () => {
	isVisible.value = true
	timer = setTimeout(() => {
		isVisible.value = false
		emits('update:show')
	}, 3000)
}

// 有新值則設定新的關閉時間
watch(() => props.show, (newVal) => {
	if (newVal) show();
});

// 卸載 setTimeout
onUnmounted(() => {
	if (timer) clearTimeout(timer)
})
</script>

<template>
	<teleport to="#toast">
		<div class="toast" :class="`toast-border-${props.themeColor}`">
			<!-- toast - 關閉按鈕 -->
			<button class="close-button" @click="handleClose">
				<Icon name="close" size="20"></Icon>
			</button>
			<!-- toast - 標題及說明文字 -->
			<p class="message">
			    <span class="icon-wrapper" :class="`toast-${props.themeColor}`">
				    <template v-if="props.severity ==='success'">
					    <Icon  name="check" size="14"></Icon>
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