<script setup>
import Icon from '@/ui/element/Icon/Icon.vue';

// 定義 Props
const props = defineProps({
    // --  樣式接口 -- //
    avatarSize: {
        type: String,
        validator: (value) =>
            ["xsmall", "small", "medium", "large"].includes(value),
    },
    // --  狀態接口 -- //
    avatarStatus: {
        type: String,
        default: "default",
        validator: (value) =>
            ["default", "online", "idle", "busy", "offline"].includes(value),
    },
})
</script>

<template>
    <div v-if="props.avatarStatus !== 'default'" :class="['avatar-icon', `avatar-icon-${props.avatarSize}`, `avatar-icon-${props.avatarStatus}`]">
        <Icon :name="props.avatarStatus"></Icon>
    </div>
</template>

<style scoped lang="scss">

</style>