<script setup>
import { computed } from 'vue';
import Icon from '@/ui/element/Icon/Icon.vue';

// 定義 Props
const props = defineProps({
  // -- input 基礎接口 -- //
  type: { // input type
    type: String,
    default: 'text',
  },
  modelValue: { // 雙向綁定
    type: [String, Number],
  },
  placeholder: {
    type: String,
  },

  // -- 客製化接口 -- //
  label: {
    type: String,
  },
  size: {
    type: String,
    validator: (value) => ['small', 'medium', 'large'].includes(value),
  },
  prefix: {
    type: String,
  },
  suffix: {
    type: String,
  },
  customClass: {
    type: String,
    default: '',
  },

  // -- 驗證與狀態接口 -- //
  hint: { // 錯誤提示
    type: Object,
    default: () => ({ error: '', description: '' }),
  },
  isDisable: {
    type: Boolean,
  },
})

// 處理 input 雙向綁定
const emits = defineEmits(['update:modelValue'])
const handleInput = event => {
  emits('update:modelValue', event.target.value)
}

// 根據 hint 的值，計算屬性
const hintClass = computed(() => {
  if (props.hint.error.length > 0) {
    return 'error';
  }
  if (props.hint.description.length > 0) {
    return 'desc';
  }
  return '';
});
</script>


<template>
  <div class="input-container ">
    <!-- 輸入框標題 -->
    <label v-if="props.label" class="input-label">{{props.label}}</label>
    <div :class="['input-group', `component-${size}`, `input-border-${hintClass}`, { 'input-disable': isDisable }, ]">
      <!-- 輸入框 prefix icon -->
      <template v-if="prefix">
        <Icon :class="`icon-${size}`" :name="props.prefix" ></Icon>
      </template>

      <!-- 輸入框 -->
      <input :type="props.type"
             :class="['input', `text-${size}`]"
             :placeholder="props.placeholder"
             @input="handleInput">

      <!-- 輸入框 suffix icon -->
      <template v-if="suffix">
        <Icon :class="`icon-${size}`" :name="props.suffix" ></Icon>
      </template>
    </div>

    <!-- 輸入框說明文字 -->
    <small :class="['input-hint', `input-hint-${hintClass}`, { 'input-disable': props.isDisable }]">
      {{hint.error.length > 0 ? hint.error : hint.description}}
    </small>
  </div>

</template>

<style scoped lang="scss">

</style>