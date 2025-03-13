<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import Icon from "@/ui/element/Icon/Icon.vue";

const props = defineProps({
    prefix: String,
    borderStyle: {
        type: String,
        default: "",
        validator: (value) => ["solid", "highlight"].includes(value),
    },
    isSmallSize: {
        type: Boolean,
        default: true,
    },
    isOpen: {
        type: Boolean,
        default: false,
    },
    className: String,
});

// 本地狀態
const isItemOpen = ref(props.isOpen);
const detailsRef = ref(null); // 綁定 <details> 元素
const contentRef = ref(null); // 綁定內容區塊

watch(
    () => props.isOpen,
    (newVal) => {
        isItemOpen.value = newVal;
    }
);

// 單項目開關
const handleToggle = (event) => {
    isItemOpen.value = event.target.open;
};

// 動畫處理
const addAnimation = () => {
    if (detailsRef.value && contentRef.value) {
        const content = contentRef.value;

        if (detailsRef.value.open) {
            content.animate(
                [
                    { opacity: 0, height: "0px" },
                    { opacity: 1, height: `${content.scrollHeight}px` },
                ],
                {
                    duration: 500,
                    easing: "ease-in-out",
                }
            );
        } else {
            content.animate(
                [
                    { opacity: 1, height: `${content.scrollHeight}px` },
                    { opacity: 0, height: "0px" },
                ],
                {
                    duration: 500,
                    easing: "ease-in-out",
                }
            );
        }
    }
};


// 監聽 toggle 事件
onMounted(() => {
    if (detailsRef.value) {
        detailsRef.value.addEventListener("toggle", addAnimation);
    }
});

onBeforeUnmount(() => {
    if (detailsRef.value) {
        detailsRef.value.removeEventListener("toggle", addAnimation);
    }
});
</script>

<template>
    <li class="ded-accordion-item" :class="`ded-accordion-item-${props.borderStyle}`">
        <details
            ref="detailsRef"
            :open="isItemOpen"
            :class="{ 'ded-accordion-detail': true, [props.className]: !!props.className }"
            @toggle="handleToggle"
        >
            <summary
                class="ded-accordion-title"
                :class="props.isSmallSize ? 'ded-accordion-title-small' : 'ded-accordion-title-default'"
            >
                <span class="ded-accordion-title-content">
                    <template v-if="props.prefix">
                        <span class="ded-accordion-title-icon">
                            <Icon :name="props.prefix" />
                        </span>
                    </template>
                    <span
                        :class="
                            props.isSmallSize
                              ? 'ded-accordion-title-content-small'
                              : 'ded-accordion-title-content-default'
                        "
                    >
                        <slot name="label"></slot>
                    </span>
                </span>
                <span
                    :class="isItemOpen ? 'ded-accordion-item-open' : 'ded-accordion-item-close'"
                    class="ded-icon-medium"
                >
                    <Icon size="24" name="SvgArrowDown" />
                </span>
            </summary>
            <div ref="contentRef" class="ded-accordion-detail-content">
                <slot name="detail"></slot>
            </div>
        </details>
    </li>
</template>
