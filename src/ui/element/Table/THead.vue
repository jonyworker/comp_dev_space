<script setup>
import { ref, computed, useSlots } from "vue";
import Icon from "@/ui/element/Icon/Icon.vue";

// 定義 emits
const emit = defineEmits(["sortColumn"]);

// 定義 props
const props = defineProps({
    // 資料接口
    columnHeadData: {
        type: Array,
        required: true,
        default: () => [],
    },
    sortStates: {
        type: Object,
        default: () => ({}),
    },

    // 樣式接口
    zebra: {
        //斑馬條紋顯示
        type: Boolean,
    },

    // 動作接口
    rowSelector: {
        //開啟 checkbox
        type: Boolean,
        required: false,
        default: false,
    },
});

// 爲每個 columnHead 初始默認排序狀態
// const sortStates = ref(
//     props.columnHeadData.reduce((acc, col) => {
//         acc[col.key] = "default";
//         return acc;
//     }, {})
// );

function getSortIconName(columnKey) {
    const sortState = props.sortStates[columnKey];
    return sortState === "asc"
        ? "PrimeSortAlphaUp"
        : sortState === "desc"
          ? "PrimeSortAlphaAltDown"
          : "PrimeSortAlt";

    console.log(sortState);
}

// 取得所有設定的 slot
const slots = useSlots();
// 功能 - 檢查父層有沒有設定具名 slot
function hasNamedSlot(slotName) {
    return !!slots[slotName];
}
</script>

<template>
    {{ props.sortStates }}
    <thead>
        <tr>
            <!-- Table - 標題列 - 根據 props.rowSelector 渲染 checkbox -->
            <th
                class="table__header text--left"
                v-if="props.rowSelector"
                scope="col"
            >
                <div
                    style="
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    "
                >
                    <input
                        id="contact-selectAll"
                        type="checkbox"
                        value=""
                        @change="selectAll"
                        style="margin: 0"
                    />
                </div>
            </th>
            <!-- Table - 標題列 - 根據 fieldData 渲染標題列或透過 slot 客製化 -->
            <th
                class="table__header text--left"
                v-for="(columnHeadItem, columnHeadIdx) in props.columnHeadData"
                :key="columnHeadIdx"
            >
                <div
                    v-if="!hasNamedSlot(`columnHead-${columnHeadItem.key}`)"
                    :item="columnHeadItem"
                    style="display: flex; align-items: center; gap: 8px"
                >
                    {{ columnHeadItem.label }}

                    <!-- 排序控制按鈕 -->
                    <button
                        v-if="columnHeadItem.sort"
                        @click="emit('sortColumn', columnHeadItem.key)"
                        style="
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 20px;
                            height: 20px;
                        "
                    >
                        <Icon
                            size="20"
                            :name="
                                getSortIconName(
                                    props.sortStates[columnHeadItem.key]
                                )
                            "
                        ></Icon>
                    </button>
                </div>
            </th>
        </tr>
    </thead>
</template>

<style lang="" scoped></style>
