<script setup>
import Icon from "@/ui/element/Icon/Icon.vue";

// 定義 Props
const props = defineProps({
  // --  資料接口 -- //
  menuData: {
    type: Array,
  },
  // --  樣式接口 -- //
  limit: {
    type: Number,
    default: 1,
  },
  customClass: {
    type: String,
    default: '',
  },
})

</script>

<template>
<!--  TODO: Menu 還有細部沒做完-->
  <ul :class="['menu', customClass]">
    <template v-if="$slots.default">
      <slot></slot>
    </template>
    <template v-else>
      <li class="menu-item" v-for="(menu) in menuData">
        <div style="margin-right: auto;">{{ menu.userName }}</div>
        <Icon name="arrow_down" size="24" ></Icon>
      </li>
    </template>
  </ul>
</template>

<style scoped lang="scss">

</style>