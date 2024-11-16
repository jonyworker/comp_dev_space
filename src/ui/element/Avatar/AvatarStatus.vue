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
		<div  :class="['avatar-icon', `avatar-icon-${props.avatarSize}`, `avatar-icon-${props.avatarStatus}`]">
			<Icon :name="props.avatarStatus"></Icon>
		</div>
	</template>

</template>

<style scoped lang="scss">

</style>