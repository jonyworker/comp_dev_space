<script setup>
import Button from '@/ui/element/button/Button.vue'
import Icon from '@/ui/element/Icon/Icon.vue';
</script>

<template>
<Button prefix="home" size="medium" customClass="">button text</Button>
  <Icon  name="folder" ></Icon>

</template>

<style scoped>
  .custom-button {
    background: #000;
    padding: 50px;
  }
</style>
