<script setup>
import { ref } from "vue";
import Toggle from "@/ui/element/Toggle/Toggle.vue";
import Checkbox from "@/ui/element/Checkbox/Checkbox.vue";
import CheckboxGroup from "@/ui/element/Checkbox/CheckboxGroup.vue";
import Radio from "@/ui/element/Radio/Radio.vue";
import RadioGroup from "@/ui/element/Radio/RadioGroup.vue";
import Divider from "@/ui/element/Divider/Divider.vue";
import Textarea from "@/ui/element/Textarea/Textarea.vue"
import CircleProgress from "@/ui/element/Progress/CircleProgress/CircleProgress.vue"
import LineProgress from  "@/ui/element/Progress/LineProgress/LineProgress.vue"
import Tabs from  "@/ui/module/Tabs/Tabs.vue"

// toggle 所需資料
const isChecked = ref(true);
const handleToggle = () => {
    isChecked.value = !isChecked.value;
};

// checkbox 所需資料
const checkboxOptions = ref([
    { label: "選項一", value: "option1", name: "option" },
    { label: "選項二", value: "option2", name: "option" },
    { label: "選項三", value: "option3", name: "option" },
    { label: "選項四", value: "option4", name: "option" },
]);
const checkedCheckboxOptions = ref([]);
const isCheckboxChecked = ref(false);

// radio 所需資料
const radioList = [
    {
        inputId: "meals01",
        name: "Meals",
        value: "Pak Nasser's Nasi Lemak",
        label: "帕南薩馬來椰漿飯",
    },
    {
        inputId: "meals02",
        name: "Meals",
        value: "Hyderabadi Vegetable Biryani",
        label: "海德拉巴素食印度香飯",
    },
    {
        inputId: "meals03",
        name: "Meals",
        value: "Uncle Chin's Chicken Rice",
        label: "秦叔叔海南雞飯",
    },
];
const isRadioPicked = ref("");

// textarea 所需資料
const textareaHint = ref({ error: '', description: '' });
const textareaModelValue =ref("");

// Tabs 所需資料
const TabsData = ref([
  {
    "title": "頁籤 1",
    "content": "內容一"
  },
  {
    "title": "頁籤 2",
    "content": "內容二"
  },
  {
    "title": "頁籤 3",
    "content": "內容三"
  }
]);
</script>

<template>
    <div class="container">
        <!-- Toggle -->
        <div>
            <Toggle
                checkChildren="on"
                unCheckChildren="off"
                :isChecked="isChecked"
                @toggleIsChecked="handleToggle"
            >
            </Toggle>
        </div>

        <!-- Checkbox -->
        <div>
            {{ isCheckboxChecked }}
            {{ checkedCheckboxOptions }}
            <br />
            <Checkbox
                label="我已詳細閱讀新規定"
                name="agreeStatement"
                v-model="isCheckboxChecked"
            ></Checkbox>

            <Checkbox-Group>
                <Checkbox
                    v-for="(item, index) in checkboxOptions"
                    :key="index"
                    :value="item.value"
                    :label="item.label"
                    :name="item.name"
                    v-model="checkedCheckboxOptions"
                ></Checkbox>
            </Checkbox-Group>
        </div>

        <!-- Radio -->
        <div>
            isRadioPicked>>> {{ isRadioPicked }}
            <br />
            <Radio-Group>
                <Radio
                    v-for="item in radioList"
                    :inputId="item.inputId"
                    :name="item.name"
                    :value="item.value"
                    :label="item.label"
                    v-model="isRadioPicked"
                ></Radio>
            </Radio-Group>
        </div>

        <!-- Divider -->
        <div class="">
            <Divider
                layout="horizontal"
                type="dashed"
                width="small"
                align="center"
                >OR</Divider
            >
        </div>

        <!-- Textarea -->
        <div>
            <p>textarea model value: {{textareaModelValue}}</p>
            <Textarea
                label="訂單備註"
                placeholder="請輸入此筆訂單備註"
                :hint="textareaHint"
                v-model="textareaModelValue"
            ></Textarea>
        </div>

        <!-- CircleProgress -->
        <div>
            <CircleProgress
                label="Something"
                :percent="66"
                :size="120"
                :strokeWidth="10"
                themeColor="primary"
            ></CircleProgress>
        </div>

        <!-- LineProgress -->
        <div>
            <LineProgress
                label="Complete"
                :percent="66"
                :strokeWidth="10"
                themeColor="primary"
            ></LineProgress>
        </div>

        <!-- Tabs -->
        <div>
            <Tabs
                themeColor="primary"
                type="default"
                :tabsData="TabsData"
                :activeIndex="0"
            ></Tabs>
          isDisabled
        </div>
    </div>
</template>

<style scoped>
.container {
    padding: 40px;
}
</style>
