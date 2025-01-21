<script setup>
import { ref } from "vue";
import Layout, { Header, Content, Side, Footer } from '@/ui/layout/Layout'
import Grid from "@/ui/layout/Grid/Grid.vue"
import Row from "@/ui/layout/Grid/Row.vue"
import Column from "@/ui/layout/Grid/Column.vue"
import Navbar from "@/ui/element/Navbar/Navbar.vue";
import SideNav from "@/ui/element/SideNav/SideNav.vue";

const dataSource = [
    {
        path: '/Home',
        prefix: 'SvgHome',
        title: 'Home',
    },
    {
        children: [
            {
                path: '/settings/profile',
                title: 'Profile',
            },
            {
                path: '/settings/account',
                title: 'Account',
            },
        ],
        path: '/User',
        prefix: 'SvgUser',
        title: 'User',
    },
    {
        children: [
            {
                path: '/settings/profile',
                title: 'Profile',
            },
            {
                path: '/settings/account',
                title: 'Account',
            },
            {
                path: '/settings/account',
                title: 'Account',
            },
            {
                path: '/settings/account',
                title: 'Account',
            },
        ],
        path: '/Chart',
        prefix: 'SvgBarChart',
        title: 'Chart',
    },
    {
        path: '/dashboard',
        prefix: 'SvgDatabase',
        title: 'Database',
    },
    {
        path: '/Favorite',
        prefix: 'SvgFavorite',
        title: 'Favorite',
    },
    {
        path: '/Calendar',
        prefix: 'SvgCalendar',
        title: 'Calendar',
    },
    {
        path: '/Notification',
        prefix: 'SvgNotification',
        title: 'Notification',
    },
    {
        path: '/Language',
        prefix: 'SvgLanguage',
        title: 'Language',
    },
];

// 定義 Model
// const modelValue = defineModel();

// 定義 props
const props = defineProps({
    isGridSystem: {
        type: Boolean,
        default: false,
    },
    className: {
        type: String,
        default: "",
    },
})
</script>

<template>
    <template v-if="props.isGridSystem">
        <Layout :class="{[ props.className ]: !!props.className}">
            <!-- Navbar -->
            <Grid fluid>
                <Row :hasGap="false">
                    <Column sm="12">
                        <Header>
                            <Navbar
                                :dataSource="[
                                {
                                    href: '#solutions',
                                    label: 'Solutions',
                                    order: 2,
                                },
                                {
                                    href: '#products',
                                    label: 'Products',
                                    order: 1,
                                },
                                {
                                    href: '#technologies',
                                    label: 'Technologies',
                                    order: 4,
                                },
                                {
                                    href: '#about',
                                    label: 'About',
                                    order: 3,
                                },
                            ]"
                                logoSrc="https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg"
                            >
                            </Navbar>
                        </Header>
                    </Column>
                </Row>
            </Grid>

            <!-- 下方區塊 -->
            <Layout>
                <Grid fluid>
                    <Row :hasGap="false">
                        <!-- Side Nav -->
                        <Column sm="3">
                            <Side>
                                <SideNav
                                    :dataSource="dataSource"
                                    :hasLogo="false"
                                    :hasRWD="false"
                                    hasSearch
                                    logo="SvgAuo"
                                    logoLink="https://www.auo.com"
                                    themeColor="blue"
                                    style="height: 100vh;"
                                />
                            </Side>
                        </Column>
                        <!-- Content -->
                        <Column sm="9">
                            <Content>
                                <div
                                    style="
                                    align-items: center;
                                    background-color: #0958d9;
                                    color: #fff;
                                    display: flex;
                                    height: 100vh;
                                    justify-content: center;
                                    width: 100%;"
                                >
                                    content
                                </div>
                            </Content>
                        </Column>
                    </Row>
                </Grid>
            </Layout>
        </Layout>
    </template>
    <template v-else>
        <Layout :class="{[ props.className ]: !!props.className}">
            <!-- Navbar -->
            <Header>
                <Navbar
                    :dataSource="[
                    {
                        href: '#solutions',
                        label: 'Solutions',
                        order: 2,
                    },
                    {
                        href: '#products',
                        label: 'Products',
                        order: 1,
                    },
                    {
                        href: '#technologies',
                        label: 'Technologies',
                        order: 4,
                    },
                    {
                        href: '#about',
                        label: 'About',
                        order: 3,
                    },
                ]"
                    logoSrc="https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg"
                >
                </Navbar>
            </Header>

            <!-- 下方區塊 -->
            <Layout>
                <!-- Side Nav -->
                <Side>
                    <SideNav
                        :dataSource="dataSource"
                        :hasLogo="false"
                        :hasRWD="false"
                        hasSearch
                        logo="SvgAuo"
                        logoLink="https://www.auo.com"
                        themeColor="blue"
                        style="height: 100vh;"
                    />
                </Side>

                <!-- Content -->
                <Content>
                    <div
                        style="
                        align-items: center;
                        background-color: #0958d9;
                        color: #fff;
                        display: flex;
                        height: 100vh;
                        justify-content: center;
                        width: 100%;"
                    >
                        content
                    </div>
                </Content>
            </Layout>
        </Layout>
    </template>
</template>

<style scoped lang="scss">

</style>