<!-- DemoPage.vue (範例父層) -->
<script setup>
import { ref } from 'vue'
import DatePicker from '@/ui/element/DatePicker/DatePicker.vue'
// 上面這行請依實際路徑匯入「支援單日 / 區間」的 DatePicker

const options = {
	format: 'yyyy-mm-dd',
	todayHighlight: true,
	autohide: true,
};

// 單日模式 => 字串
const singleDate = ref("")

// 區間模式 => 陣列 [開始日期, 結束日期]
const rangeDate = ref(["",""])
</script>

<template>
    <div style="margin: 16px;">
        <h1>日期選擇範例</h1>

        <!-- 單日模式 -->
        <h2>單日模式</h2>
        <DatePicker
	        :isRange="false"
	        placeholder="Placeholder"
	        :options="options"
	        className=""
	        v-model="singleDate"
        />
        <p>單日選擇結果：{{ singleDate }}</p>

        <hr />

        <!-- 區間模式 -->
        <h2>區間模式</h2>
        <!-- 傳入 :range="true" 使之進入區間模式 -->
        <DatePicker
	        :isRange="true"
	        :options="options"
	        className=""
	        v-model="rangeDate"
        />
        <p>區間選擇結果：{{ rangeDate }}</p>
    </div>
</template>



<style scoped>

</style>
