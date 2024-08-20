<script setup>
import { ref } from 'vue';
import Toggle from '@/ui/element/Toggle/Toggle.vue'
import Image from '@/ui/element/Image/Image.vue'
import Checkbox from '@/ui/element/Checkbox/Checkbox.vue'

// toggle 所需資料
const isChecked = ref(true)
const handleToggle = () => {
  isChecked.value = !isChecked.value;
};
// const inputValue =  ref("")

const checkOptions = ref([
  { label: '選項一', value: 'option1', name: 'option'  },
  { label: '選項二', value: 'option2', name: 'option'  },
  { label: '選項三', value: 'option3', name: 'option' },
]);

const checkedList = ref([])
</script>

<template>
  <div class="container">
    <Toggle
        checkChildren="on"
        unCheckChildren="off"
        :isChecked="isChecked"
        @toggleIsChecked="handleToggle" >
    </Toggle>
    <Image ratio="43" objectFit="cover"></Image>
    {{checkedList}}
    <Checkbox :options="checkOptions" v-model="checkedList"></Checkbox>
  </div>

</template>

<style scoped>
  .container {
    padding: 40px;
  }
</style>
