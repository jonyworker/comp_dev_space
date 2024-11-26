<script setup>
import { ref, watch, computed } from 'vue';
import { useToggleCVAClass } from './useToggleCVAClass';
// 定義 Emit
const emit = defineEmits(['toggleIsChecked']);

// 定義 Props
const props = defineProps({
	themeColor: {
		type: String,
		default: "primary",
		validator: (value) =>
			[
				"primary",
				"secondary",
				"tertiary",
				"success",
				"warning",
				"error",
				"info",
			].includes(value),
	},
	checkLabel: {
		type: String,
		default: "on",
	},
	unCheckLabel: {
		type: String,
		default: "off",
	},
	isChecked: {
		type: Boolean,
		default: false,
	},
	isDisabled: {
		type: Boolean,
		default: false,
	},
	className: {
		type: String,
		default: "",
	},
});


// 引入 CVA Class
const toggleCVAClass = useToggleCVAClass(props);

// 計算包括 CVA Class 與自定義 customClass 的按鈕樣式
const finalToggleClass = computed(() => {
  return [toggleCVAClass.value, props.className].filter(Boolean).join(' ');
});

// 監聽 isChecked 的值，有改動即觸發 isToggle
const isToggle = ref(props.isChecked);
watch(() => props.isChecked, (newValue) => {
  isToggle.value = newValue;
});

// 處理 toggle 事件
const handleToggle = () => {
  isToggle.value = !isToggle.value;
  // 發射 toggleIsCheck 事件呼叫父層修改 isChecked 值
  emit('toggleIsChecked');
}
</script>

<template>
	<div :class="[finalToggleClass, {'ded-toggle-on': isToggle, 'ded-toggle-off': !isToggle}]"
	   @click.prevent="handleToggle">

		<!-- Toggle 按鈕 -->
		<div class="ded-toggle-thumb" :class="{'ded-toggle-thumb-on': isToggle, 'ded-toggle-thumb-off': !isToggle}"></div>

		<!-- Toggle 文字 -->
		<label class="ded-toggle-label" :class="{'ded-toggle-label-on': isToggle, 'ded-toggle-label-off': !isToggle}">
		  {{ isToggle === true ? props.checkLabel : props.unCheckLabel}}
		</label>
	</div>
</template>

<style scoped lang="scss">

</style>