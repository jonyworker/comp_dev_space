<script setup>
import { ref } from 'vue';
import Toggle from '@/ui/element/Toggle/Toggle.vue'
import Image from '@/ui/element/Image/Image.vue'
import Checkbox from '@/ui/element/Checkbox/Checkbox.vue'
import CheckboxGroup from '@/ui/element/Checkbox/CheckboxGroup.vue'

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
  { label: '選項四', value: 'option4', name: 'option' },
]);

const checkedList = ref([])
const checked =  ref(false)
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
    {{checked}}

<!--    <Checkbox :options="checkOptions" v-model="checkedList"></Checkbox>-->
    <Checkbox value="true" label="我已詳細閱讀新規定" name="newRule" v-model="checked"></Checkbox>

    <checkbox-group >
      <Checkbox   v-for="(item, index) in checkOptions"
                  :key="index"
                  :value="item.value"
                  :label="item.label"
                  :name="item.name"
                  v-model="checkedList"></Checkbox>
    </checkbox-group>
  </div>

</template>

<style scoped>
  .container {
    padding: 40px;
  }
</style>
