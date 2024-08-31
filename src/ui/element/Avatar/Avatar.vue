<script setup>
import Image from  "@/ui/element/Image/Image.vue"
import AvatarStatus from  "@/ui/element/Avatar/AvatarStatus.vue"
import { getInitialsOrDefault } from '@/utils/string-utils.js';

// 定義 Props
const props = defineProps({
    // --  樣式接口 -- //
    size: {
		type: String,
		default: "large",
		validator: (value) =>
			["xsmall", "small", "medium", "large"].includes(value),
    },
    shape: {
        type: String,
        default: "circle",
        validator: (value) =>
          ["circle", "square"].includes(value),
    },
    customClass: {
        type: String,
        default: '',
    },
    imageSrc: {
        type: String,
    },
    imageAlt: {
        type: String,
        default: 'avatar image',
    },
    username: {
        type: String,
    },
    // --  狀態接口 -- //
    status: {
        type: String,
        validator: (value) =>
            ["default", "online", "idle", "busy", "offline"].includes(value),
    },

})
</script>

<template>
    <div :class="['avatar-container', `avatar-container-${props.size}`]">
        <div :class="['avatar', `avatar-${props.shape}`]">
            <template v-if="props.imageSrc">
                <Image :src="props.imageSrc" :alt="props.imageAlt" ratio="11" objectFit="cover" ></Image>
            </template>
            <template v-else>
                <span :class="['avatar-text', `text-${props.size}`]">{{getInitialsOrDefault(props.username, 2)}}</span>
            </template>
        </div>
        <AvatarStatus :avatarStatus="props.status" :avatarSize="props.size"></AvatarStatus>
    </div>
</template>

<style scoped lang="scss">

</style>