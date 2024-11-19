import { computed } from 'vue';
import { cva } from 'class-variance-authority';

export function useButtonCVAClass(props) {
    return computed(() => {
        return cva('ded-button', {
            variants: {
                variant: {
                    contained: 'ded-button-contained',
                    outlined: 'ded-button-outlined',
                    text: 'ded-button-text',
                },
                size: {
                    small: 'ded-component-small',
                    medium: 'ded-component-medium',
                    large: 'ded-component-large',
                },
                width: {
                    fit: 'ded-button-fit',
                    fluid: 'ded-button-full',
                },
            },
            compoundVariants: [
                // [ ThemeColor ] - primary
                {
                    variant: 'contained',
                    themeColor: 'primary',
                    class: 'ded-button-contained-primary',
                },
                {
                    variant: 'outlined',
                    themeColor: 'primary',
                    class: 'ded-button-outlined-primary',
                },
                {
                    variant: 'text',
                    themeColor: 'primary',
                    class: 'ded-button-text-primary',
                },
                // [ ThemeColor ] - secondary
                {
                    variant: 'contained',
                    themeColor: 'secondary',
                    class: 'ded-button-contained-secondary',
                },
                {
                    variant: 'outlined',
                    themeColor: 'secondary',
                    class: 'ded-button-outlined-secondary',
                },
                {
                    variant: 'text',
                    themeColor: 'secondary',
                    class: 'ded-button-text-secondary',
                },
                // [ ThemeColor ] - tertiary
                {
                    variant: 'contained',
                    themeColor: 'tertiary',
                    class: 'ded-button-contained-tertiary',
                },
                {
                    variant: 'outlined',
                    themeColor: 'tertiary',
                    class: 'ded-button-outlined-tertiary',
                },
                {
                    variant: 'text',
                    themeColor: 'tertiary',
                    class: 'ded-button-text-tertiary',
                },
                // [ ThemeColor ] - success
                {
                    variant: 'contained',
                    themeColor: 'success',
                    class: 'ded-button-contained-success',
                },
                {
                    variant: 'outlined',
                    themeColor: 'success',
                    class: 'ded-button-outlined-success',
                },
                {
                    variant: 'text',
                    themeColor: 'success',
                    class: 'ded-button-text-success',
                },
                // [ ThemeColor ] - warning
                {
                    variant: 'contained',
                    themeColor: 'warning',
                    class: 'ded-button-contained-warning',
                },
                {
                    variant: 'outlined',
                    themeColor: 'warning',
                    class: 'ded-button-outlined-warning',
                },
                {
                    variant: 'text',
                    themeColor: 'warning',
                    class: 'ded-button-text-warning',
                },
                // [ ThemeColor ] - error
                {
                    variant: 'contained',
                    themeColor: 'error',
                    class: 'ded-button-contained-error',
                },
                {
                    variant: 'outlined',
                    themeColor: 'error',
                    class: 'ded-button-outlined-error',
                },
                {
                    variant: 'text',
                    themeColor: 'error',
                    class: 'ded-button-text-error',
                },
                // [ ThemeColor ] - info
                {
                    variant: 'contained',
                    themeColor: 'info',
                    class: 'ded-button-contained-info',
                },
                {
                    variant: 'outlined',
                    themeColor: 'info',
                    class: 'ded-button-outlined-info',
                },
                {
                    variant: 'text',
                    themeColor: 'info',
                    class: 'ded-button-text-info',
                },
                // [ Disable ]
                {
                    variant: 'contained',
                    isDisabled: true,
                    class: 'ded-button-container-disable',
                },
                {
                    variant: 'outlined',
                    isDisabled: true,
                    class: 'ded-button-outline-disable',
                },
                {
                    variant: 'text',
                    isDisabled: true,
                    class: 'ded-button-text-disable',
                },
            ],
        })({
            // 設定 variants 名稱接收 props 的值
            variant: props.variant,
            size: props.size,
            isDisabled: props.isDisabled,
            themeColor: props.themeColor,
            width: props.width,
        });
    });
}
