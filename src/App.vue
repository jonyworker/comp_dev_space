<script setup>
import { ref } from 'vue';
import Button from '@/ui/element/Button/Button.vue'
import Icon from '@/ui/element/Icon/Icon.vue';
import Toggle from '@/ui/element/Toggle/Toggle.vue'
import Image from '@/ui/element/Image/Image.vue'

// toggle 所需資料
const isChecked = ref(true)
const handleToggle = () => {
  isChecked.value = !isChecked.value;
};
</script>

<template>
{{isChecked}} <br>
<Toggle
    checkChildren="on"
    unCheckChildren="off"
    :isChecked="isChecked"
    @toggleIsChecked="handleToggle" >
</Toggle>
  <Image ratio="43" objectFit="cover"></Image>
</template>

<style scoped>
  .custom-button {
    background: #000;
    padding: 50px;
  }
</style>
