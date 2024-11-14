<script setup>
import MenuMain from '@/ui/element/Menu_Recursive_Jony/Menu_Main.vue'

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
            { label: "用戶設置", path: "/users/settings",children: [
                    { label: "用戶列表", path: "/users/list" },
                    { label: "用戶設置", path: "/users/settings" },
                ], },
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
    {
        icon: "mail",
        label: "訊息中心",
        path: "/messages",
    },
    {
        icon: "setting",
        label: "系統設置",
        path: "/settings",
    },
];
</script>

<template>
<MenuMain
    :dataSource="dataSource">

</MenuMain>

<!--    <Menu :dataSource="dataSource"></Menu>-->

</template>

<style scoped lang="scss">

</style>