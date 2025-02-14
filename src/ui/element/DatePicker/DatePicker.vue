<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { Datepicker, DateRangePicker } from 'vanillajs-datepicker'
import 'vanillajs-datepicker/css/datepicker-foundation.css'
import Input from '@/ui/element/Input/Input.vue'

const props = defineProps({
    format: {
        type: String,
        default: "yyyy/mm/dd"
    },
    isRange: {
        type: Boolean,
    },
    placeholder: {
        type: String,
        default: ""
    },
    className: {
        type: String,
        default: ""
    },
})

// const emit = defineEmits(['update:modelValue', 'change', 'clearSingleDate', 'clearRangeStart', 'clearRangeEnd'])
const modelValue = defineModel()

// const startInputRef = ref(null)
// const endInputRef = ref(null)

const dateRangeInputRef = ref(null)
const singleDateInputRef = ref(null)

const dateSingleIns = ref(null)
const dateRangeIns = ref(null)


function initDatepicker() {
    if (props.isRange) {
        initRangePicker()
    } else {
        initSinglePicker()
    }
}

// 初始化單日期選擇
function initSinglePicker() {
    const inputDom = singleDateInputRef.value?.input
    if (!inputDom) return
    const picker = new Datepicker(inputDom, {
        format: props.format, // 設定格式
        autohide: false, // 自動關閉
        todayHighlight: true, // 高亮當天日期
        container: document.body,
    })
    dateSingleIns.value = picker

    // 監聽 - 變更日期時更新 modelValue 的值
    picker.element.addEventListener('changeDate', () => {
        modelValue.value = formatDate(picker.getDate())
    })

    // 監聽 - 手動輸入時更新 modelValue 的值
    inputDom.addEventListener('input', (e) => {
        modelValue.value = e.target.value
        console.log('手動更新後的 dateSingleIns:', dateSingleIns.value.getDate());
    })

    // 如果 modelValue 有值，將設定為初始日期
    if (modelValue.value) {
        picker.setDate(modelValue.value)
    }
}

// 初始化範圍日期選擇
function initRangePicker() {
    if (!dateRangeInputRef.value) return;
    console.log("初始前", dateRangeIns.value)

    const picker = new DateRangePicker(dateRangeInputRef.value, {
        format: props.format, // 設定格式
        autohide: true, // 自動關閉
        todayHighlight: true, // highlight 當天日期
        container: document.body,
        allowOneSidedRange: true, // 允許單邊選擇
        clear: true
    });

    dateRangeIns.value = picker;
    console.log("初始後", dateRangeIns.value)

    // 監聽 - 變更日期時更新 modelValue 的值
    picker.element.addEventListener('changeDate', () => {
        const selectedDates = picker.getDates();

        // 確保 selectedDates 是有效的日期陣列
        if (Array.isArray(selectedDates)) {
            const formattedDates = selectedDates.map(
                date => date ? formatDate(date) : null
            );

            modelValue.value = formattedDates;
            console.log('選擇的日期範圍mo:', formattedDates);
            picker.setDates(...formattedDates);
            console.log("設定中", dateRangeIns.value)
        } else {
            modelValue.value = [];
            picker.setDates(...modelValue.value);
        }
    });

    // 如果 modelValue 有值，將設定為初始日期
    if (Array.isArray(modelValue.value)) {
        picker.setDates(...modelValue.value);
    }
}

//格式化 VanillaJS 返回的 Date 物件
function formatDate(date) {
    if (!date) return '';

    const dateObj = date instanceof Date ? date : new Date(date);
    if (isNaN(dateObj.getTime())) return '';

    const y = dateObj.getFullYear();
    const m = String(dateObj.getMonth() + 1).padStart(2, '0');
    const d = String(dateObj.getDate()).padStart(2, '0');

    // 根據 props.format 返回不同格式
    switch (props.format.toLowerCase()) {
        case "yyyy/mm/dd":
            return `${y}/${m}/${d}`;
        case "dd/mm/yyyy":
            return `${d}/${m}/${y}`;
        case "mm/dd/yyyy":
            return `${m}/${d}/${y}`;
        case "yyyy-mm-dd":
            return `${y}-${m}-${d}`;
        case "dd-mm-yyyy":
            return `${d}-${m}-${y}`;
        case "mm-dd-yyyy":
            return `${m}-${d}-${y}`;
        default:
            return `${y}/${m}/${d}`; // 預設 yyyy/mm/dd
    }
}

//
// function handleUpdateRangePicker() {
//     // if (!dateRangeIns.value || !modelValue.value) return;
//
//     const picker = dateRangeIns.value; // 取得 DateRangePicker
//     const updatedValues = modelValue.value.map(value => value === "" ? null : value);
//
//     // if (JSON.stringify(updatedValues) !== JSON.stringify(modelValue.value)) {
//     //     modelValue.value = updatedValues;
//     // }
//     console.log('刪除鍵的日期範圍ud:', updatedValues);
//     console.log('刪除鍵的日期範圍mo:', modelValue.value);
//     picker.setDates(...updatedValues); // 更新日期選擇器
//
//
//
//     console.log("刪除鍵",picker)
// }

function clearSingleDate() {
    console.log('更新前的 dateSingleIns:', dateSingleIns.value.getDate());
    dateSingleIns.value.refresh('picker', true)
    console.log('更新後的 dateSingleIns:', dateSingleIns.value.pickerElement);
}
function clearRangeStart() {
    if (!modelValue.value || !Array.isArray(modelValue.value) || !dateRangeIns.value) return;

    // 清除起始日期
    modelValue.value[0] = null;

    // 強制觸發 Vue reactivity
    modelValue.value = [...modelValue.value];

    // 等待 Vue 完成 DOM 更新
    // await nextTick();
    console.log('更新前的 DateRangePicker:', dateRangeIns.value.getDates());
    // dateRangeIns.value.setDates(null, modelValue.value?.[1] || null)
    dateRangeIns.value.update(modelValue.value)
    // dateRangeIns.value.setDates(null, null);
    // console.log('清空實例 DateRangePicker:', dateRangeIns.value.getDates());
    // dateRangeIns.value.setDates(null, modelValue.value[1] || null);
    console.log('更新後的 DateRangePicker:', dateRangeIns.value.getDates());

    console.log('刪除鍵的日期範圍 mo:', modelValue.value);

}




// function updateModelValue(value) {
//     if (Array.isArray(value)) {
//         // 日期區間模式
//         modelValue.value = value.map(date => formatDate(date));
//     } else {
//         // 單日期模式
//         modelValue.value = formatDate(value);
//     }
//
//     emit('update:modelValue', modelValue.value);
//     emit('change', modelValue.value);
// }

// function updateRangeFromInput() {
//     if (!startInputRef.value?.input || !endInputRef.value?.input) return
//
//     updateModelValue([startInputRef.value.input.value, endInputRef.value.input.value])
// }

// function clearSingleDate() {
//     dateSingleIns.value?.setDate(null)
//     updateModelValue('')
//     emit('clearSingleDate')
// }

// function clearRangeStart() {
//     dateSingleIns.value?.setDates(null, modelValue.value?.[1] || null)
//     updateModelValue(['', modelValue.value?.[1] || ''])
//     emit('clearRangeStart')
// }

// function clearRangeEnd() {
//     dateSingleIns.value?.setDates(modelValue.value?.[0] || null, null)
//     updateModelValue([modelValue.value?.[0] || '', ''])
//     emit('clearRangeEnd')
// }



// watch(modelValue, (newValue) => {
//     console.log("newValue",newValue)
//
//     dateRangeIns.value.setDates(...newValue)
//     console.log("dateRangeIns.value",dateRangeIns.value)
//
//     // if (props.isRange) {
//     //     const validValues = Array.isArray(newValue) ? newValue : [null, null]
//     //     dateRangeIns.value.setDates(...validValues)
//     // } else {
//     //     dateSingleIns.value.setDate(newValue)
//     // }
// }, )

// watch(() => props.isRange, (newIsRange) => {
//     dateSingleIns.value?.destroy()
//     dateSingleIns.value = null
//
//     modelValue.value = newIsRange ? ["", ""] : ""
//
//     nextTick(() => {
//         initDatepicker()
//         if (!newIsRange && singleDateInputRef.value?.input) {
//             singleDateInputRef.value.input.value = "" // 清空單選輸入框的值
//         }
//     })
// }, { immediate: true })

// const safeModelValue = computed({
//     get: () => Array.isArray(modelValue.value) ? modelValue.value : ["", ""],
//     set: (newValue) => {
//         modelValue.value = Array.isArray(newValue) ? newValue : ["", ""]
//     }
// })

onMounted(() => initDatepicker())
onUnmounted(() => {
    dateSingleIns.value?.destroy();

    dateRangeIns.value?.destroy();
    console.log('銷毀 dateSingleIns:', dateSingleIns.value.getDate());
    console.log('銷毀 dateRangeIns:', dateRangeIns.value.getDates());
})
</script>

<template>
    {{modelValue}}
    <div :class="className">
        <Input
            v-if="!props.isRange"
            ref="singleDateInputRef"
            type="text"
            :placeholder="props.placeholder"
            prefix="SvgCalendar"
            v-model="modelValue"
            @clearDatePicker="clearSingleDate()"
        />
        <div v-else ref="dateRangeInputRef" class="ded-date-pick-range">
            <Input
                ref="startInputRef"
                type="text"
                placeholder="Start Date"
                prefix="SvgCalendar"
                v-model="modelValue[0]"
                @clearDatePicker="clearRangeStart()"
            />
            <Input
                ref="endInputRef"
                type="text"
                placeholder="End Date"
                prefix="SvgCalendar"
                v-model="modelValue[1]"

            />
        </div>
    </div>
</template>

<style scoped>

</style>
