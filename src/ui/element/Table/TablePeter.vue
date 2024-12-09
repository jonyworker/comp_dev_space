<script setup>
import { ref, computed, useSlots } from "vue";
import Icon from "@/ui/element/Icon/Icon.vue";

// 定義 emits
const emits = defineEmits(["rowSelected"]);

// 定義 props
const props = defineProps({
	// 資料接口
	columnHeadData: {
		type: Array,
		default: () => [],
	},
	columnCellData: {
		type: Array,
		default: () => [],
	},

	header: {
		type: Object,
		default: () => null,
	},
	frozenTHead: {
		type: Boolean,
		default: false,
	},
	colSticky: {
		type: Array,
		default: () => [],
	},
	rowSticky: {
		type: Array,
		default: () => [],
	},
	// 樣式接口
	zebra: {
		//斑馬條紋顯示
		type: Boolean,
		default: true,
	},

	// 動作接口
	rowSelector: {
		//開啟 checkbox
		type: Boolean,
		required: false,
		default: false,
	},
});

// 複製一份傳入的 columnCellData
const copyColumnCellData = ref([...props.columnCellData]);

// 功能 - row 被點擊時該做的事
function rowSelected(item) {
	// console.log("child>>>", item);
	emits("rowSelected", item);
}

// 功能 - 全選
function selectAll(e) {
	const checked = e.target.checked;
	copyColumnCellData.value.forEach((item) => {
		item.selected = checked;
	});
}

// 爲每個 columnHead 初始默認排序狀態
const sortStates = computed(() => {
	return props.columnHeadData.reduce((acc, col) => {
		acc[col.key] = "default";
		return acc;
	}, {});
});

// 功能 - 排序
function sort(columnKey) {
	const currentSortState = sortStates.value[columnKey];
	// 重設非當前 key 的值
	for (const key in sortStates.value) {
		if (key !== columnKey) {
			sortStates.value[key] = "default";
		}
	}
	// 切換排序狀態
	if (currentSortState === "default") {
		sortStates.value[columnKey] = "asc";
	} else if (currentSortState === "asc") {
		sortStates.value[columnKey] = "desc";
	} else {
		sortStates.value[columnKey] = "default";
	}

	// 根據排序狀態進行排序
	if (sortStates.value[columnKey] === "asc") {
		copyColumnCellData.value.sort((a, b) =>
			a[columnKey] > b[columnKey] ? 1 : -1
		);
	} else if (sortStates.value[columnKey] === "desc") {
		copyColumnCellData.value.sort((a, b) =>
			a[columnKey] < b[columnKey] ? 1 : -1
		);
	} else {
		// 默認排序，恢復原始順序
		copyColumnCellData.value = [...props.columnCellData];
	}
}

// 功能 - 取得當前排序狀態
const getSortIconName = (columnKey) => {
	const sortState = sortStates.value[columnKey];
	return sortState === "asc"
		? "PrimeSortAlphaUp"
		: sortState === "desc"
			? "PrimeSortAlphaAltDown"
			: "PrimeSortAlt";
};

// 取得所有設定的 slot
const slots = useSlots();
// 功能 - 檢查父層有沒有設定具名 slot
function hasNamedSlot(slotName) {
	return !!slots[slotName];
}
</script>

<template>
	<div v-if="header">
		<!-- header id passed as a prop -->
		<h2>{{ header.title }}</h2>
		<p>{{ header.description }}</p>
	</div>
	<div class="table-container-medium">
		<div style="min-width: 100%">
			<table class="table table-striped text-left">
				<!--	            style="border-collapse: collapse"-->
				<!-- Table - 控制 column 寬度(對應) -->
				<colgroup>
					<col style="width: 100px" />
					<col />
					<col />
					<col />
					<col />
					<col />
				</colgroup>
				<!-- Table - 標題列 -->
				<thead>
				<tr>
					<!-- Table - 標題列 - 根據 props.rowSelector 渲染 checkbox -->
					<th
						class="table__header text--left"
						v-if="rowSelector"
						scope="col"
						:class="{ sticky_byHead: props.frozenTHead }"
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
						class="table-cell table-cell-medium table-text-medium"
						v-for="(
                                columnHeadItem, columnHeadIdx
                            ) in props.columnHeadData"
						:key="columnHeadIdx"
						:class="{ sticky_byHead: props.frozenTHead }"
					>
						<div
							v-if="
                                    !hasNamedSlot(
                                        `columnHead-${columnHeadItem.key}`
                                    )
                                "
							:item="columnHeadItem"
							style="
                                    display: flex;
                                    align-items: center;
                                    gap: 8px;
                                "
						>
							{{ columnHeadItem.label }}

							<!-- 排序控制按鈕 -->
							<button
								v-if="columnHeadItem.sort"
								@click.prevent="
                                        sort(`columnHead-${columnHeadItem.key}`)
                                    "
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
									color="gray"
									:name="
                                            getSortIconName(`columnHead-${columnHeadItem.key}`)
                                        "
								></Icon>
							</button>
						</div>
						<slot
							v-else
							:name="`columnHead-${columnHeadItem.key}`"
							:item="columnHeadItem"
						/>
					</th>
				</tr>
				</thead>


				<!-- Table - 單元格 -->
				<tbody>
				<tr
					class=""
					v-for="(
                            columnCellItem, columnCellIdx
                        ) in copyColumnCellData"
					:key="columnCellIdx"
				>
					<!-- Table - 單元格 - 根據 props.rowSelector 渲染 checkbox -->
					<td
						v-if="rowSelector"
						class="table-cell table-cell-medium table-text-medium"
					>
						<div
							style="
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                "
						>
							<input
								:id="`row-${columnCellIdx}`"
								v-model="columnCellItem.selected"
								type="checkbox"
								style="margin: 0"
							/>
						</div>
					</td>
					<!-- style="min-width: none; max-width: 200px" -->

					<!-- Table - 單元格 - 根據 fieldData 渲染單元格或透過 slot 客製化 -->
					<td
						v-for="(
                                columnHeadItem, columnHeadIdx
                            ) in props.columnHeadData"
						:key="columnHeadIdx"
						@click="rowSelected(columnCellItem)"
						class="table-cell table-cell-medium table-text-medium"
						style="min-width: 0; max-width: 200px"
					>

                            <span
	                            v-if="!hasNamedSlot(columnHeadItem.key)"
	                            :item="columnCellItem"
                            >
                                {{ columnCellItem[columnHeadItem.key] }}
                            </span>
						<slot
							v-else
							:name="columnHeadItem.key"
							:item="columnCellItem"
						/>
					</td>
				</tr>
				</tbody>
				<tfoot>
				<tr>
					<td class="table-cell table-cell-medium table-text-medium text-right" colspan="6">
						總共8筆資料
					</td>
				</tr>
				</tfoot>

			</table>
		</div>
	</div>
</template>

<style scoped>
/*
    table-layout: auto;（預設值）
    行為： 表格的列寬由內容決定。即，列的寬度會根據單元格內容自動調整。如果內容很長，列寬會變大以適應內容，這可能會導致表格渲染變慢，尤其是對於大型表格。
    應用： 這是 table-layout 的默認值，適合需要根據內容自動調整列寬的情境。


    table-layout: fixed;
    行為： 表格的列寬由第一行的單元格寬度決定。即，列的寬度根據表格的總寬度和列數來計算，而不依賴於內容的實際寬度。這使得表格渲染速度更快，因為瀏覽器可以立即計算列的寬度，而不必等待所有內容加載完畢。
    應用： 適合需要一致列寬且不依賴於內容寬度的情境，特別是當表格有大量數據時，可以提高性能和穩定性。
    */
</style>
