<script setup>
import { ref } from "vue";
import Toggle from "@/ui/element/Toggle/Toggle.vue";
import Image from "@/ui/element/Image/Image.vue";
import Checkbox from "@/ui/element/Checkbox/Checkbox.vue";
import CheckboxGroup from "@/ui/element/Checkbox/CheckboxGroup.vue";
import Radio from "@/ui/element/Radio/Radio.vue";
import RadioGroup from "@/ui/element/Radio/RadioGroup.vue";
// toggle 所需資料
const isChecked = ref(true);
const handleToggle = () => {
    isChecked.value = !isChecked.value;
};
// const inputValue =  ref("")

const checkboxOptions = ref([
    { label: "選項一", value: "option1", name: "option" },
    { label: "選項二", value: "option2", name: "option" },
    { label: "選項三", value: "option3", name: "option" },
    { label: "選項四", value: "option4", name: "option" },
]);

const checkedCheckboxOptions = ref([]);
const isCheckboxChecked = ref(false);

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
    </div>
</template>

<style scoped>
.container {
    padding: 40px;
}
</style>
