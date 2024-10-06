<script setup>
import { computed } from 'vue';

const props = defineProps({
	label: {
		type: String,
	},
	placeholder: {
		type: String,
		default: "placeholder text",
	},
	total: {
		type: Number,
		default: 100,
	},
	isDisabled: {
		type: Boolean,
		default: false,
	},
	hint: {
		type: Object,
		default: () => ({ error: '', description: '' }),
	},
	modelValue: {
		type: [String],
	},
	customClass: {
		type: String,
		default: '',
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
  <div class="textarea-container ">
    <!-- 多行輸入框標題 -->
    <template v-if="props.label">
		<label :class="['textarea-label', {'textarea-disable': props.isDisabled}]" for="id">
			{{ props.label }}
		</label>
    </template>

    <div :class="['textarea-group',
                  {'textarea-disable': props.isDisabled},
                  ( props.hint.error.length > 0 && `textarea-border-${hintClass}`)]">
      <!-- 多行輸入框 -->
      <textarea id="id"
                :class="['textarea', {'textarea-disable': props.isDisabled}]"
                :maxlength="props.total"
                :placeholder="props.placeholder"
                @input="handleInput"></textarea>

      <!-- 多行輸入字數提示 -->
      <template v-if="modelValue.length > 0">
        <small :class="['textarea-hint-count', {'textarea-disable': props.isDisabled}]">
          {{ (modelValue.length > 0 ? `${modelValue.length} / ${props.total}` : '') }}
        </small>
      </template>
    </div>

    <!-- 多行輸入說明文字與提示 -->
    <template v-if="props.hint.error.length > 0 || props.hint.description.length > 0">
      <small :class="['textarea-hint',{'textarea-disable': props.isDisabled},`textarea-hint-${hintClass}`]">
        {{props.hint.error.length > 0 ? props.hint.error : props.hint.description}}
      </small>
    </template>
  </div>
</template>

<style lang="scss">
</style>