<script setup>
import { ref, watch } from 'vue';
import TabItem from "./TabItem.vue";

// 定義 Props
const props = defineProps({
    // --  樣式接口 -- //
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
    type: {
        type: String,
        default: "default",
        validator: (value) =>
            ["card", "default",].includes(value),
    },
    customClass: {
        type: String,
        default: '',
    },
    // --  狀態接口 -- //
    activeIndex: {
      type: Number,
      default:2
    },
    isDisabled: {
        type: Boolean,
    },
    // --  資料接口 -- //
    tabsData: {
        type: Array,
        required: true,
    },
})

const activeTabIndex = ref(props.activeIndex || 0);

//取得 dataset 的值
const handleClick = (event) => {
    activeTabIndex.value = parseInt(event.currentTarget.dataset.index, 10);
};

watch(() => props.activeIndex, (newIndex) => {
    activeTabIndex.value = newIndex || 0;
});
</script>

<template>
    <div class="tabs-container">
        <!-- Tabs - 按鈕 -->
        <div class="tabs">
            <TabItem
                v-for="(item, index) in props.tabsData"
                :key="index"
                :title="item.title"
                :themeColor="props.themeColor"
                :type="props.type"
                :isDisabled="props.isDisabled"
                :index="index"
                :isActive="index === activeTabIndex"
                @click="handleClick"
            ></TabItem>
        </div>
        <!-- Tabs - 內容顯示 -->
        <div :class="['tab-content', {'tab-disable': props.isDisabled} ]">
            {{ props.tabsData[activeTabIndex]?.content }}
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>