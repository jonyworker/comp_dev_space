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
        default: "none",
        validator: (value) =>
            ["none", "online", "idle", "busy", "offline"].includes(value),
    },
})
</script>

<template>
	<template v-if="props.avatarStatus !== 'none'">
		<Icon :name="props.avatarStatus" :class="['ded-avatar-icon', `ded-avatar-icon-${props.avatarSize}`, `ded-avatar-icon-${props.avatarStatus}`]"></Icon>
	</template>

</template>

<style scoped lang="scss">

</style>