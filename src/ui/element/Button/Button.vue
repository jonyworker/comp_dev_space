<script setup>
import { computed } from 'vue';
import { useButtonCVAClass } from './useButtonCVAClass';
import { getSizeClass } from '@/utils/getStyleClass';
import Icon from '@/ui/element/Icon/Icon.vue';

// 定義 Props
const props = defineProps({
  variant: {
    type: String,
    default: 'contained',
    validator: (value) => ['contained', 'outlined', 'text'].includes(value),
  },
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
  isDisable: {
    type: Boolean,
  },
  size: {
    type: String,
    default: '',
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
});

// 引入 CVA Class
const buttonCVAClass = useButtonCVAClass(props);

// 計算各尺寸 icon class
const iconSizeClass = computed(() => {
  return getSizeClass('icon',props.size );
})

// 計算包括 CVA Class 與自定義 customClass 的按鈕樣式
const finalButtonClass = computed(() => {
  return [buttonCVAClass.value, props.customClass].filter(Boolean).join(' ');
});
</script>

<template>
  <button :class="buttonCVAClass">
      <template v-if="prefix">
          <Icon :class="iconSizeClass" :name="props.prefix" ></Icon>
      </template>
      <slot></slot>
      <template v-if="suffix">
        <Icon :class="iconSizeClass" :name="props.suffix" ></Icon>
      </template>
  </button>
</template>

<style lang="scss" scoped>
/* [樣本] - 如需直接調用 sass 請解鎖
@import "src/style/_sassloader_test.scss";
.example {
  background-color: $sassloader_test-color;
}
*/
</style>
