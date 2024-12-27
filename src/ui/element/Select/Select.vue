<script setup>
import { ref } from 'vue';

// 定義 Model
const modelValue = defineModel();

// 定義 props
const props = defineProps({
    options: {
        type: Array,
        required: true,
        default: () => [],
    },
    placeholder: {
        type: String,
        default: "Placeholder...",
    },
    className: {
        type: String,
        default: "",
    },
})

const selectedValue = ref(modelValue)
</script>

<template>
    <div :class="{'ded-select-container':true, [props.className]:!!props.className }">
        <select class="ded-select" v-model="selectedValue">
            <option value="">Select</option>
            <option v-for="item in props.options" :key="item.value" :value="item.value">
                {{ item.label }}
            </option>
        </select>
    </div>

</template>

<style scoped lang="scss">

</style>