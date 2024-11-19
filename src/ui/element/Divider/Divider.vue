<script setup>
// 定義 Props
const props = defineProps({
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
	type: {
		//線條種類
		type: String,
		default: "solid",
		validator: (value) => ["solid", "dashed", "dotted"].includes(value),
	},
    direction: {
        //線條方向
        type: String,
        default: "horizontal",
        validator: (value) => ["horizontal", "vertical"].includes(value),
    },
    align: {
        //文字位置
        type: String,
	    default: "center",
        validator: (value) => ["start", "center", "end"].includes(value),
    },
	className: {
		type: String,
		default: "",
	},
});
</script>

<template>
    <div
        :class="[
            'ded-divider',
            `ded-divider-${props.direction}`,
            `ded-divider-width-${props.width}`,
            `ded-divider-${props.type}`,
            props.themeColor ? `ded-divider-${props.themeColor}` : '',
            $slots.default ? `ded-divider-${props.align}` : '',
            ...props.className.split(' ')
        ]"
    >
        <!-- divider - 分隔線文字 -->
        <div v-if="$slots.default?.()" class="ded-divider-content">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
