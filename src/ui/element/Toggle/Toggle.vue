<script setup>
import {ref, watch, defineEmits, computed} from 'vue';
import { useToggleCVAClass } from './useToggleCVAClass';
// 定義 Emit
const emit = defineEmits(['toggleIsChecked']);

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
  checkChildren: {
    type: String,
  },
  unCheckChildren: {
    type: String,
  },
  isChecked: {
    type: Boolean,
  },
  isDisable: {
    type: Boolean,
  },
  customClass: {
    type: String,
    default: '',
  },
})

// 引入 CVA Class
const toggleCVAClass = useToggleCVAClass(props);

// 計算包括 CVA Class 與自定義 customClass 的按鈕樣式
const finalToggleClass = computed(() => {
  return [toggleCVAClass.value, props.customClass].filter(Boolean).join(' ');
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

// [[ 父層所需資料示意 ]]
// const isChecked = ref(false)
// const handleToggle = () => {
//   isChecked.value = !isChecked.value;
// };
// <Toggle
//     checkChildren="on"
//     unCheckChildren="off"
//     :isChecked="isChecked"
//     @toggleIsChecked="handleToggle" >
// </Toggle>
</script>

<template>
  <div :class="[finalToggleClass, {'toggle-on': isToggle, 'toggle-off': !isToggle}]"
       @click.prevent="handleToggle" style="cursor: pointer">
    <div class="toggle-thumb" :class="{'toggle-thumb-on': isToggle, 'toggle-thumb-off': !isToggle}"></div>
    <label class="toggle-label" :class="{'toggle-label-on': isToggle, 'toggle-label-off': !isToggle}">
      {{ isToggle === true ? props.checkChildren : props.unCheckChildren}}
    </label>
  </div>
</template>

<style scoped lang="scss">

</style>