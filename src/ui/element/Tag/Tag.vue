<script setup>
import { ref } from "vue";
import Icon from "@/ui/element/Icon/Icon.vue";

// 定義 Props
const props = defineProps({
    themeColor: {
        type: String,
        default: "primary",
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
    label: {
        type: String,
        required: true,
    },
    removable: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <div class="tag__container">
        <span class="tag__label">{{ props.label }}</span>
        <Icon
            v-if="props.removable"
            name="close"
            size="14"
            @click="$emit('remove')"
        ></Icon>
    </div>
</template>

<style lang="scss" scoped></style>
