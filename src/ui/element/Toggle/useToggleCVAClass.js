import { computed } from 'vue';
import { cva } from 'class-variance-authority';

export function useToggleCVAClass(props) {
    return computed(()=>{
        return cva ("toggle",{
            variants: {
                themeColor: {
                    primary: "toggle-primary",
                    secondary: "toggle-secondary",
                    tertiary: "toggle-tertiary",
                    success: "toggle-success",
                    warning: "toggle-warning",
                    error: "toggle-error",
                    info: "toggle-info"
                },
                isDisable: {
                    true: "button-container-disable",
                }
            },
            compoundVariants: [
                // [ Disable ]
                // {
                //   themeColor: 'contained',
                //   isDisable: true,
                //   class: 'button-container-disable',
                // },
                // {
                //   themeColor: 'outlined',
                //   isDisable: true,
                //   class: 'button-outline-disable',
                // },
                // {
                //   themeColor: 'text',
                //   isDisable: true,
                //   class: 'button-text-disable',
                // },
            ],
        })({
            //這裡設定 variants名稱接收 props的值
            themeColor: props.themeColor,
            isDisable: props.isDisable,
        })
    })
}