import { computed } from 'vue';
import { cva } from 'class-variance-authority';

export function useButtonCVAClass(props) {
    return computed(() => {
        return cva('button', {
            variants: {
                variant: {
                    contained: 'button-contained',
                    outlined: 'button-outlined',
                    text: 'button-text',
                },
                size: {
                    small: 'component-small',
                    medium: 'component-medium',
                    large: 'component-large',
                },
                width: {
                    fit: 'button-fit',
                    full: 'button-full',
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
            // 設定 variants 名稱接收 props 的值
            variant: props.variant,
            size: props.size,
            isDisable: props.isDisable,
            themeColor: props.themeColor,
            width: props.width,
        });
    });
}
