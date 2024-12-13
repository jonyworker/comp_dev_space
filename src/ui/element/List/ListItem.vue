<script setup>
import Icon from "@/ui/element/Icon/Icon.vue";

const emits = defineEmits(['selectedItem']);

// 定義 Props
const props = defineProps({
    label: {
        type: String,
        default: ""
    },
    value: {
        type: String,
        default: "value1"
    },
    href: {
        type: String,
    },
    prefix: {
        type: String,
        default: "",
    },
    className: {
        type: String,
    },
    openInNewTab: {
        type: Boolean,
        default: false
    },
});

// 點擊事件處理
const handleClick = () => {
    if (!props.href) {
        emits('selectedItem', props.value); // 如果沒有 href，直接觸發事件，傳遞 value
    } else {
        // 檢查 openInNewTab 的值，決定是否在新分頁開啟
        if (props.openInNewTab) {
            window.open(props.href, '_blank'); // 開新分頁
        } else {
            window.location.href = props.href; // 在當前分頁開啟
        }
        emits('selectedItem', props.value); // 開啟連結後觸發事件，傳遞 value
    }
};
</script>

<template>
    <div
        :class="{
			'ded-list-item': true,
			[props.className]: !!props.className
		}"
        @click="handleClick">

        <template v-if="props.href !== ''">
            <a :href="props.href" class="ded-list-item-text ded-list-item-link">
                <div class="ded-list-icon" v-if="props.prefix || $slots.default">
                    <slot>
                        <template v-if="props.prefix">
                            <Icon :name="props.prefix"></Icon>
                        </template>
                    </slot>
                </div>
                <div class="item-label">{{ props.label }}</div>
            </a>
        </template>

        <template v-else>
            <div class="ded-list-item-text">
                <div class="ded-list-icon" v-if="props.prefix || $slots.default">
                    <slot>
                        <template v-if="props.prefix">
                            <Icon :name="props.prefix"></Icon>
                        </template>
                    </slot>
                </div>
                <div class="ded-list-item-label">{{ props.label }}</div>
            </div>
        </template>
    </div>
</template>

<style scoped lang="scss">
/* 在此處加入必要的樣式 */
</style>
