<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
	columns: {
		type: Array,
		required: true,
	},
	dataSource: {
		type: Array,
		required: true,
	},
	showCheckbox: {
		type: Boolean,
		default: false,
	},
	showVerticalBorders: {
		type: Boolean,
		default: false,
	},
	className: {
		type: String,
		default: "",
	},
	// onRowClick: Function,
	// onSelect: Function,
});

// Reactive State
const selectedRowKeys = ref([]);

// Computed Properties
const allSelected = computed(
	() => selectedRowKeys.value.length === props.dataSource.length
);
const someSelected = computed(
	() =>
		selectedRowKeys.value.length > 0 &&
		selectedRowKeys.value.length < props.dataSource.length
);

// Methods
const handleClick = (record) => {
	props.onRowClick && props.onRowClick(record);
};

const handleSelectRow = (key) => {
	if (selectedRowKeys.value.includes(key)) {
		selectedRowKeys.value = selectedRowKeys.value.filter((rowKey) => rowKey !== key);
	} else {
		selectedRowKeys.value.push(key);
	}
	props.onSelect && props.onSelect([...selectedRowKeys.value]);
};

const handleSelectAll = (event) => {
	if (event.target.checked) {
		selectedRowKeys.value = props.dataSource.map((item) => item.head);
	} else {
		selectedRowKeys.value = [];
	}
	props.onSelect && props.onSelect([...selectedRowKeys.value]);
};
</script>

<template>
	<div :class="{ 'ded-table-container': true, [props.className]: !!props.className,}" style="overflow-x: auto">
		<table class="ded-table">
			<thead class="ded-table-thead">
				<tr class="ded-table-thead-tr">
					<th
						v-if="showCheckbox"
						style="width: 30px; align-items: center"
						class="ded-table-thead-tr-th"
						:class="{ 'ded-table-thead-tr-th-border': showVerticalBorders }"
					>
						<input
							type="checkbox"
							class="ded-table-checkbox"
							@change="handleSelectAll"
							:checked="allSelected"
							:indeterminate="someSelected"
						/>
					</th>
					<th
						v-for="col in props.columns"
						:key="col.key"
						:style="{ width: col.width, textAlign: col.align || 'left' }"
						class="ded-table-thead-tr-th"
						:class="{ 'ded-table-thead-tr-th-border': showVerticalBorders }"
					>
						{{ col.title }}
					</th>
				</tr>
			</thead>
			<tbody class="ded-table-tbody">
				<tr
					v-for="(item, rowIndex) in props.dataSource"
					:key="rowIndex"
					class="ded-table-tbody-tr"
					@click="() => handleClick(item)"
				>
					<td
						v-if="showCheckbox"
						style="width: 30px; align-items: center"
						class="ded-table-tbody-tr-td"
						:class="{ 'ded-table-tbody-tr-td-border': showVerticalBorders }"
					>
						<input
							type="checkbox"
							class="ded-table-checkbox"
							:checked="selectedRowKeys.includes(item.head)"
							@change="() => handleSelectRow(item.head)"
						/>
					</td>
					<td
						v-for="col in props.columns"
						:key="col.key"
						:style="{ width: col.width, textAlign: col.align || 'left' }"
						class="ded-table-tbody-tr-td"
						:class="{ 'ded-table-tbody-tr-td-border': showVerticalBorders }"
					>
						<slot :name="col.key" :item="item">
							{{ item[col.key] }}
						</slot>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<style scoped>
</style>
