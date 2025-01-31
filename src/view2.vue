<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Layout, { Header, Content, Side, Footer } from '@/ui/layout/Layout'
import Grid from "@/ui/layout/Grid/Grid.vue"
import Row from "@/ui/layout/Grid/Row.vue"
import Column from "@/ui/layout/Grid/Column.vue"
import Divider from "@/ui/element/Divider/Divider.vue"
import Title from "@/ui/element/Title/Title.vue"
import Navbar from "@/ui/element/Navbar/Navbar.vue"
import SideNav from "@/ui/element/SideNav/SideNav.vue"
import Icon from "@/ui/element/Icon/Icon.vue"

const NavbarItems = [
    {
        path: '#products',
        label: 'Products',
        order: 1,
    },
    {
        path: '#solutions',
        label: 'Solutions',
        order: 2,
    },
    {
        path: '#about',
        label: 'About',
        order: 3,
    },
    {
        path: '#technologies',
        label: 'Technologies',
        order: 4,
    },
];

const SideNavItems = [
    {
        label: 'Home',
        path: '/Home',
        prefix: 'SvgHome',
        order: '1',
    },
    {
        label: 'User',
        path: '/users',
        prefix: 'SvgUser',
        order: '2',
        children: [
            {
                label: 'Profile',
                path: '/user/profile',
                order: '1',
            },
            {
                label: 'Account',
                path: '/user/account',
                order: '2',
            }
        ]
    },
    {
        label: 'Chart',
        path: '/chart',
        prefix: 'SvgBarChart',
        order: '3',
        children: [
            {
                label: 'Profile',
                path: '/chart/profile',
                order: '1',
            },
            {
                label: 'Account',
                path: '/chart/account',
                order: '2',
            },
            {
                label: 'Account',
                path: '/chart/account',
                order: '3',
            },
            {
                label: 'Account',
                path: '/chart/account',
                order: '4',
            }
        ]
    },
    {
        label: 'Database',
        path: '/database',
        prefix: 'SvgDatabase',
        order: '4',
    },
    {
        label: 'Favorite',
        path: '/favorite',
        prefix: 'SvgFavorite',
        order: '5',
    },
    {
        label: 'Calendar',
        path: '/calendar',
        prefix: 'SvgCalendar',
        order: '6',
    },
    {
        label: 'Notification',
        path: '/notification',
        prefix: 'SvgNotification',
        order: '7',
    },
    {
        label: 'Language',
        path: '/language',
        prefix: 'SvgLanguage',
        order: '8',
    },
];

// 取得螢幕寬度
const screenWidth = ref(window.innerWidth);

const updateScreenWidth = () => {
    screenWidth.value = window.innerWidth;
};

onMounted(() => {
    window.addEventListener("resize", updateScreenWidth);
});

onUnmounted(() => {
    window.removeEventListener("resize", updateScreenWidth);
});

</script>

<template>
    <Layout style="height: 100%">
        <Side>
            <SideNav
                themeColor="blue"
                logoSrc="https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg"
                logo="SvgAuo"
                logoLink="https://www.auo.com"
                :hasSearch="true"
                :dataSource="SideNavItems"
            ></SideNav>
        </Side>
        <Layout >
            <Header>
                <Navbar
                    :dataSource="NavbarItems"
                    :hasLogo="screenWidth < 1024"
                    logoSrc="https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg"
                    className=""
                >
                </Navbar>
            </Header>
            <Content style="height: 100%">
                <div
                    style="display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                    background-color: #0958d9;
                    color: #fff;
                    font-size: 24px;"
                >
                    content
                </div>
            </Content>
        </Layout>
    </Layout>
</template>

<style scoped lang="scss">

</style>