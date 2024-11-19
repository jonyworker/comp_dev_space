import { computed } from 'vue';
import { cva } from 'class-variance-authority';

export function useToggleCVAClass(props) {
    return computed(()=>{
        return cva ("ded-toggle",{
            variants: {
                themeColor: {
                    primary: "ded-toggle-primary",
                    secondary: "ded-toggle-secondary",
                    tertiary: "ded-toggle-tertiary",
                    success: "ded-toggle-success",
                    warning: "ded-toggle-warning",
                    error: "ded-toggle-error",
                    info: "ded-toggle-info"
                },
                isDisabled: {
                    true: "ded-button-container-disable",
                }
            },
        })({
            //這裡設定 variants名稱接收 props的值
            themeColor: props.themeColor,
            isDisabled: props.isDisabled,
        })
    })
}