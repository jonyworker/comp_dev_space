<script setup>
import { ref, computed } from 'vue';
import { cva } from 'class-variance-authority';
import AIcon from '@/ui/element/baseIcon/BaseIcon.vue';

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
});

const buttonCVAClass = computed(() => {
  return cva('button', {
    variants: {
      variant: {
        contained: 'button-contained',
        outlined: 'button-outlined',
        text: 'button-text',
      },
    },
    compoundVariants: [
      // [ ThemeColor ] - primary
      {
        variant: 'contained',
        themeColor: 'primary',
        class: 'button-contained-primary',
      },
      {
        variant: 'outlined',
        themeColor: 'primary',
        class: 'button-outlined-primary',
      },
      {
        variant: 'text',
        themeColor: 'primary',
        class: 'button-text-primary',
      },
      // [ ThemeColor ] - secondary
      {
        variant: 'contained',
        themeColor: 'secondary',
        class: 'button-contained-secondary',
      },
      {
        variant: 'outlined',
        themeColor: 'secondary',
        class: 'button-outlined-secondary',
      },
      {
        variant: 'text',
        themeColor: 'secondary',
        class: 'button-text-secondary',
      },
      // [ ThemeColor ] - tertiary
      {
        variant: 'contained',
        themeColor: 'tertiary',
        class: 'button-contained-tertiary',
      },
      {
        variant: 'outlined',
        themeColor: 'tertiary',
        class: 'button-outlined-tertiary',
      },
      {
        variant: 'text',
        themeColor: 'tertiary',
        class: 'button-text-tertiary',
      },
      // [ ThemeColor ] - success
      {
        variant: 'contained',
        themeColor: 'success',
        class: 'button-contained-success',
      },
      {
        variant: 'outlined',
        themeColor: 'success',
        class: 'button-outlined-success',
      },
      {
        variant: 'text',
        themeColor: 'success',
        class: 'button-text-success',
      },
      // [ ThemeColor ] - warning
      {
        variant: 'contained',
        themeColor: 'warning',
        class: 'button-contained-warning',
      },
      {
        variant: 'outlined',
        themeColor: 'warning',
        class: 'button-outlined-warning',
      },
      {
        variant: 'text',
        themeColor: 'warning',
        class: 'button-text-warning',
      },
      // [ ThemeColor ] - error
      {
        variant: 'contained',
        themeColor: 'error',
        class: 'button-contained-error',
      },
      {
        variant: 'outlined',
        themeColor: 'error',
        class: 'button-outlined-error',
      },
      {
        variant: 'text',
        themeColor: 'error',
        class: 'button-text-error',
      },
      // [ ThemeColor ] - info
      {
        variant: 'contained',
        themeColor: 'info',
        class: 'button-contained-info',
      },
      {
        variant: 'outlined',
        themeColor: 'info',
        class: 'button-outlined-info',
      },
      {
        variant: 'text',
        themeColor: 'info',
        class: 'button-text-info',
      },

      // [ Disable ]
      {
        variant: 'contained',
        isDisable: true,
        class: 'button-container-disable',
      },
      {
        variant: 'outlined',
        isDisable: true,
        class: 'button-outline-disable',
      },
      {
        variant: 'text',
        isDisable: true,
        class: 'button-text-disable',
      },
    ],
  })({
    //這裡設定 variants名稱接收 props的值
    variant: props.variant,
    isDisable: props.isDisable,
    themeColor: props.themeColor,
  });
});
</script>

<template>
  <button  :class="buttonCVAClass">
     <a-icon class="" :name="prefix" size="20" v-if="prefix"></a-icon>
    <a-icon
        class=""
        :name="prependIcon"
        size="20"
        v-if="prependIcon && !iconOnly"
    ></a-icon>
    <slot v-if="!iconOnly"></slot>
    <a-icon
        :name="appendIcon"
        size="20"
        v-if="appendIcon && !iconOnly"
    ></a-icon>

    <a-icon :name="iconOnly" size="20" v-if="iconOnly"></a-icon>
  </button>
  <!-- <button :class="buttonCVAClass">
    <a-icon
      class=""
      :name="prependIcon"
      size="20"
      v-if="prependIcon && !iconOnly"
    ></a-icon>
    <slot v-if="!iconOnly"></slot>
    <a-icon
      :name="appendIcon"
      size="20"
      v-if="appendIcon && !iconOnly"
    ></a-icon>

    <a-icon :name="iconOnly" size="20" v-if="iconOnly"></a-icon>
  </button> -->
</template>

<style lang="scss" scoped>
@import "src/style/_sassloader_test.scss";
.example {
  background-color: $sassloader_test-color;
}
</style>
