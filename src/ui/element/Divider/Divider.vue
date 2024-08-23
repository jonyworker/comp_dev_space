<script setup>

const props = defineProps({
    layout: {
        //線條方向
        type: String,
        default: "horizontal",
        validator: (value) => ["horizontal", "vertical"].includes(value),
    },
    type: {
        //線條種類
        type: String,
        default: "solid",
        validator: (value) => ["solid", "dashed", "dotted"].includes(value),
    },
    themeColor: {
        //線條顏色
        type: String,
        validator: (value) =>
            [
                "primary",
                "secondary",
                "tertiary",
                "success",
                "warning",
                "error",
                "info",
            ].includes(value),
    },
    width: {
        //線條粗細
        type: String,
        default: "xsmall",
        validator: (value) =>
            ["xsmall", "small", "medium", "large", "xlarge"].includes(value),
    },
    align: {
        //文字位置
        type: String,
        validator: (value) => ["start", "center", "end"].includes(value),
    },
});
</script>

<template>
    <div
        :class="[
            'divider',
            `divider-${props.layout}`,
            `divider-width-${props.width}`,
            `divider-${props.type}`,
            props.themeColor? `divider-${props.themeColor}` : '',
            $slots.default ? `divider-${props.align}` : '',
        ]">
        <!-- divider - 分隔線文字 -->
        <div v-if="$slots.default" class="divider-content">
            <b><slot></slot></b>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
