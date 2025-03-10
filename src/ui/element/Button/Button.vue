<script setup lang="ts">
import Icon from '@/ui/element/Icon/Icon.vue';

// 定義一個 Props 介面
interface Props {
    themeColor?: "primary" | "secondary" | "neutral" | "info" | "success" | "warning" | "danger"
    variant: "text" | "filled" | "ghost" | "soft"
    prefix?: string
    suffix?: string
    size?: "small" | "medium" | "large"
    width?: "fluid" | "fit"
    borderWidth?: "none" | "1px" | "2px" | "3px" | "4px" | "5px"
    radius?: "none" | "2px" | "4px" | "8px" | "12px" | "16px" | "32px" | "full"
    isDisabled?: boolean
    className?: string
}

// 定義 Props default 值
const props = withDefaults(defineProps<Props>(),{
    themeColor: "primary",
    size: "medium",
    width: "fit",
    isDisabled: false,
    className: "",
});

</script>

<template>
    <!--	<button :class="finalButtonClass">-->
    <button :class="{
        'ded-button': true,
        [`ded-button-${props.width}`]: props.width,
        [`ded-text-${props.size}`]: props.size,
        [`ded-button-${props.variant}`]: props.variant,
        [`ded-button-${props.variant}-${props.themeColor}`]: props.variant && props.themeColor,
        [`ded-button-${props.variant}-disabled`]: props.variant && props.isDisabled,
        [`ded-button-border-width-${props.borderWidth}`]: props.borderWidth,
        [`ded-button-radius-${props.radius}`]: props.radius,
        [props.className]: !!props.className,
        // 'ded-button-only-icon' : !slot
    }">
        <template v-if="prefix">
            <div :class="`ded-icon-${props.size}`">
                <Icon :name="props.prefix"></Icon>
            </div>
        </template>

        <template v-if="$slots.default" >
            <div class="ded-button-content">
                <slot></slot>
            </div>
        </template>

        <template v-if="suffix">
            <div :class="`ded-icon-${props.size}`">
                <Icon :name="props.suffix"></Icon>
            </div>
        </template>
    </button>
</template>

<style lang="scss" scoped>
</style>
