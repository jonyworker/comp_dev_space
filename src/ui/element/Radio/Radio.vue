<script setup>

// 使用唯一識別碼生成方法
const baseId = crypto.randomUUID()
const generateId = (index) => `${baseId}-radio-${index}`;

// 定義 Model
const modelValue = defineModel();

// 阻止 Vue 自動將 $attrs 綁定到最外層 <div>
defineOptions({ inheritAttrs: false });

// 定義 Props
const props = defineProps({
    dataSource: {
        type: Array,
        required: true,
    },
    direction: {
        type: String,
        default: "row",
        validator: (value) => ["row", "column"].includes(value),
    },
    size: {
        type: String,
        default: "medium",
        validator: (value) => ["small", "medium", "large"].includes(value),
    },
    className: {
        type: String,
        default: "",
    },
});
</script>

<template>
    <div
        :class="{
            'ded-radio-container': true,
            [`ded-radio-container-${props.direction}`]: props.direction,
            [props.className]: !!props.className,
        }"
    >
        <label
            v-for="(item, index) in props.dataSource"
            :key="index"
            class="ded-radio"
            :class="{
                'ded-radio-input-disabled': item.isDisabled,
                [`ded-text-${props.size}`]: props.size
            }"
            :for="generateId(index)"
        >
            <input
                class="ded-radio-input"
                type="radio"
                :value="item.value"
                :name="item.name"
                v-model="modelValue"
                v-bind="$attrs"
                :id="generateId(index)"
            />
            <!-- radio - 選擇框樣式 -->
            <div
                :class="{
                    'ded-radio-icon': true,
                    [`ded-icon-${props.size}`]: props.size,
                    'ded-radio-icon-disabled': item.isDisabled,
                    'ded-radio-checked': modelValue === item.value,
                    'ded-radio-unchecked': modelValue !== item.value
                }"
            >
            </div>
            <!-- radio - 選項文字 -->
            <span
                class="ded-radio-text"
                :class="item.isDisabled?'ded-radio-text-disabled':''"
            >
				{{ item.label }}
            </span>
        </label>
    </div>
</template>

<style scoped>

</style>
