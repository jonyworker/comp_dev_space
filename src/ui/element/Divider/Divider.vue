<script setup>
// 定義 Props
const props = defineProps({
	width: {
		//線條粗細
		type: String,
		default: "",
		validator: (value) =>
			["1px", "2px", "3px", "4px", "5px"].includes(value),
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
            `ded-divider-${props.width}`,
            `ded-divider-${props.type}`,
            $slots.default ? `ded-divider-${props.align}` : '',
            ...props.className.split(' ')
        ]"
    >
        <!-- divider - 分隔線文字 -->
	    <template v-if="$slots.default && $slots.default().some(node => node.children?.trim())">
		    <div class="ded-divider-content">
			    <slot></slot>
		    </div>
	    </template>
    </div>
</template>

<style lang="scss" scoped></style>
