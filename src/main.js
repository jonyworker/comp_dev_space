import { createApp } from 'vue'
import '@/style/globals.scss'
import App from './playground.vue'
import icons from "@/assets/icons/icons.js"; //👈 加入這行

//使用者要改成如下的寫法
const app = createApp(App);
app.provide("icons", icons); // 👈 提供全域 icons
app.mount("#app");
