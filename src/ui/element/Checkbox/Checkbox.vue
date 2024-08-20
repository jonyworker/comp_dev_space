<script setup>
import Icon from '@/ui/element/Icon/Icon.vue';

// 定義 ModelValue
const checkedModel = defineModel()
// 定義 Props
const props = defineProps({
  // --  基礎接口 -- //
  themeColor: {
    type: String,
    default: 'primary',
    validator: (value) =>
        [
          'primary',
          'secondary',
          'tertiary',
          'success',
          'warning',
          'error',
          'info',
        ].includes(value),
  },
  customClass: {
    type: String,
    default: '',
  },
  //--  layout 接口 -- //
  direction: {
    type: String,
    validator: (value) => ['row', 'column'].includes(value),
  },
  //--  layout 接口 -- //
  options: {
    type: Array,
    default: () => [
      { label: '選項一', value: 'option1', name: 'option' },
      { label: '選項二', value: 'option2', name: 'option' },
      { label: '選項三', value: 'option3', name: 'option' },]
  },

})

// 為每個 option 加上 check
const updatedOptions = props.options.map(option => ({
  ...option,
  checked: false
}));

const handleCheck = (index) => {
  updatedOptions[index].checked = !updatedOptions[index].checked;
}

</script>

<template>
  <div class="checkbox-container checkbox-container-row">
    <label :for="item.value" class="checkbox " v-for="(item,index) in updatedOptions" >
      <input class="checkbox-input" :id="item.value" :name="item.name" type="checkbox" :value="item.value" v-model="checkedModel" @click="handleCheck(index)">
      <!-- checkbox - 選擇框 -->
      <div :class="['checkbox-icon', (item.checked ? `checkbox-checked-${props.themeColor}`:`checkbox-unchecked-${props.themeColor}`)]">
          <Icon v-if="item.checked" name="check" color="#fff"></Icon>
      </div>
      <!-- checkbox - label -->
      <span class="checkbox-text">{{ item.label }}</span>
    </label>
  </div>
</template>

<style scoped lang="scss">

</style>