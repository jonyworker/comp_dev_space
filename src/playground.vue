<script setup>
import Toast from "@/ui/element/Toast/Toast.vue";
import Button from "@/ui/element/Button/Button.vue";
import { useToast } from '@/composables/useToast.js';
import { computed } from "vue";

const { add, toasts, remove } = useToast();

const showRightToast = () => {
    add({
        themeColor: "success",
        position: "bottom-right",
        title: "showRightToast",
        content: "Content",
        prefix: "SvgSuccessCircle",
        duration: 50000, // 5 秒
    });
};

const showCenterToast = () => {
    add({
        themeColor: "error",
        position: "bottom-center",
        title: "Notification Title ",
        content: "Content",
        prefix: "SvgErrorCircle",
        duration: 5000,
    });
};


// 取得所有 position keys，避免硬編碼
const positions = computed(() => Object.keys(toasts));
</script>

<template>
    <!-- 根據不同位置渲染 Toast 容器 -->
    {{toasts}}
    <div v-for="position in positions" :key="position" class="toast-wrapper" :class="`toast-${position}`">
        <Toast
            v-for="toast in toasts[position]"
            :key="toast.id"
            :themeColor="toast.themeColor"
            :position="toast.position"
            :title="toast.title"
            :content="toast.content"
            :prefix="toast.prefix"
            :duration="toast.duration"
            @onClose="remove(toast.id, position)"
        >
            <template #action>
                <div>Action</div>
            </template>
        </Toast>
    </div>

    <Button themeColor="primary" variant="filled" radius="4px" @click="showRightToast">
        bottom-right
    </Button>
    <Button themeColor="primary" variant="filled" radius="4px" @click="showCenterToast">
        bottom-center
    </Button>
</template>


