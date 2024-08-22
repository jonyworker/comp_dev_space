<script setup>
import { ref } from "vue";
import Toggle from "@/ui/element/Toggle/Toggle.vue";
import Image from "@/ui/element/Image/Image.vue";
import Checkbox from "@/ui/element/Checkbox/Checkbox.vue";
import CheckboxGroup from "@/ui/element/Checkbox/CheckboxGroup.vue";

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
</script>

<template>
    <div class="container">
        <Toggle
            checkChildren="on"
            unCheckChildren="off"
            :isChecked="isChecked"
            @toggleIsChecked="handleToggle"
        >
        </Toggle>

        {{ checkedCheckboxOptions }}
        {{ isCheckboxChecked }}

        <!--  作為單選時，value不帶值 -->
        <Checkbox
            label="我已詳細閱讀新規定"
            name="agreeStatement"
            v-model="isCheckboxChecked"
        ></Checkbox>

        <!--  作為復選時， value須帶值 -->
        <checkbox-group>
            <Checkbox
                v-for="(item, index) in checkboxOptions"
                :key="index"
                :value="item.value"
                :label="item.label"
                :name="item.name"
                v-model="checkedCheckboxOptions"
            ></Checkbox>
        </checkbox-group>
    </div>
</template>

<style scoped>
.container {
    padding: 40px;
}
</style>
