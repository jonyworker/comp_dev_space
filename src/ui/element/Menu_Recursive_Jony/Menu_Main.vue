<script setup>
import RecursiveMenu from "./RecursiveMenu.vue";
import { ref } from "vue";

const dataSource = [
    {
        icon: "home",
        label: "首頁",
        path: "/",
    },
    {
        icon: "users",
        label: "用戶管理",
        path: "/users",
        children: [
            { label: "用戶列表", path: "/users/list" },
            {
                label: "用戶設置",
                path: "/users/settings",
                children: [
                    { label: "子菜單 1", path: "/users/settings/child1" },
                    { label: "子菜單 2", path: "/users/settings/child2" },
                ],
            },
        ],
    },
    {
        icon: "file",
        label: "文件管理",
        path: "/files",
        children: [
            { label: "所有文件", path: "/files/all" },
            { label: "已分享", path: "/files/shared" },
        ],
    },
];

const expandedItems = ref({}); // 全局管理展開狀態

// 切換展開狀態
const toggleExpand = (path) => {
    expandedItems.value[path] = !expandedItems.value[path];
};

// 處理菜單項點擊
const handleNavItemClick = (item) => {
    // console.log("菜單點擊：", item);
};
</script>

<template>
    <nav class="nav">
        <ul class="nav-menu">
            <RecursiveMenu
                v-for="item in dataSource"
                :key="item.path"
                :item="item"
                :isCollapsed="false"
                :color="'#000'"
                :expandedItems="expandedItems"
                @navItemClick="handleNavItemClick"
                @toggleExpand="toggleExpand"
            />
        </ul>
    </nav>
</template>

<style scoped lang="scss">
/* 適當樣式可以根據需要定義 */
</style>
