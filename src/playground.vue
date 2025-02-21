<script setup>
import Menu from "@/ui/element/Menu/Menu.vue";
</script>
<template>
    <Menu
        :dataSource="[
        {
            label: 'Dashboard',
            path: '/',
            prefix: 'SvgHome',
            order: '1',
            isDisabled: true,

        },
    {
            label: 'Profile',
            path: '/users',
            prefix: 'SvgUser',
            order: '2',

            children: [
                {
                    label: 'Contact',
                    path: '/users/Contact',
                    prefix: 'SvgMail',
                    order: '1',
                },
                {
                    label: 'Password',
                    path: '/users/Password',
                    prefix: 'SvgLock',
                    order: '2',
                }
            ]
        },
    {
            label: 'Setting',
            path: '/settings',
            prefix: 'SvgSettings',
            order: '3',


        }
    ]"
        :isCollapsed="false"
        color="#000000"
        :hasDivider="false"
    ></Menu>
</template>