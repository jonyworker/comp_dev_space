<script setup>
import { computed } from 'vue';
import Avatar from  "@/ui/element/Avatar/Avatar.vue"
import { splitArrayAt } from '@/utils/array-utils.js';

// 定義 Props
const props = defineProps({
  // --  資料接口 -- //
  avatarsData: {
    type: Array,
    required: true,
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

// 計算剩餘未顯示數量
const restCount = computed(() => {
  const result = props.avatarsData.length - props.limit;
  if (result >= 99 ) {
    return 99
  }
  return result;
})

// 分割[顯示群組]與[未顯示群組]
const { currList, restList } = splitArrayAt(props.avatarsData, props.limit);

// 分割[avatarSize]與[avatarShape]
const avatarSize = computed(() => {
  return props.avatarsData[0].size;
})
const avatarShape = computed(() => {
  return props.avatarsData[0].shape;
})

</script>



<template>
  <div class="avatar-group">
    <!-- avatar group - 渲染 avatar  -->
    <Avatar
        v-for="(avatar) in currList"
        :size="avatar.size"
        :shape="avatar.shape"
        :imageSrc="avatar.imageSrc"
        imageAlt="alt text"
        :username="avatar.userName"
    ></Avatar>

    <!-- avatar group - 剩餘未顯示總數表示 -->
    <template v-if="restList.length > 0">
        <div class="rest-container">
            <div class="text-large">
                <button :class="['avatar-container', `avatar-container-${avatarSize}`]" @click="hendleclick()" style="cursor: pointer">
                    <div :class="['avatar', `avatar-${avatarShape}`]">
                        <span :class="['avatar-text', `text-${avatarSize}`]">{{`+${restCount}`}}</span>
                    </div>
                </button>
            </div>
        </div>
      <!--TODO: 需先完成 menu component-->

    </template>


  </div>
</template>

<style scoped lang="scss">

</style>