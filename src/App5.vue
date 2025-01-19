<!-- DemoPage.vue (範例父層) -->
<script setup>
import { ref } from 'vue'
import Navbar from '@/ui/element/Navbar/Navbar.vue'
const logoSrc = "https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg"
const links = ref([
    {
        "label": "Products",
        "href": "#products",
        "order": 1
    },
    {
        "label": "Solutions",
        "href": "#solutions",
        "order": 2
    },
    {
        "label": "About",
        "href": "#about",
        "order": 3
    },
    {
        "label": "Technologies",
        "href": "#technologies",
        "order": 4
    }
])

</script>

<template>
    <Navbar
        :links="links"
        :logoSrc="logoSrc"
    ></Navbar>
</template>



<style scoped>

</style>
