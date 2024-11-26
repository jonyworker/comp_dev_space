<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Icon from '@/ui/element/Icon/Icon.vue';
import ListItem from "@/ui/element/List/ListItem.vue";
import List from "@/ui/element/List/List.vue";

// 定義 Model (改成最新寫法)
const modelValue = defineModel();

// 定義 Props
const props = defineProps({
	dataSource: {
		type: Array,
		default: () => [],
	},
	label: {
		type: String,
		default: "",
	},
	placeholder: {
		type: String,
		default: "Placeholder...",
	},
	size: {
		type: String,
		validator: (value) => ["small", "medium", "large"].includes(value),
		default: "medium",
	},
	maxHeight: {
		type: String,
	},
	className: {
		type: String,
		default: "",
	},
});

const selectValue = ref(null);
const isDropdownVisible = ref(false); // 控制下拉面板顯示
const dropdown = ref(null); // 綁定 dropdown 元素

const handleSelect = (value) => {
	selectValue.value = value;
	isDropdownVisible.value = false; // 選擇後關閉下拉菜單
};

const handleClickOutside = (event) => {
	// 如果點擊的目標不是 dropdown 區域，則關閉
	if (dropdown.value && !dropdown.value.contains(event.target)) {
		isDropdownVisible.value = false;
	}
};

onMounted(() => {
	document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
	document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
	<div class="ded-dropdown-container">
		<!-- 輸入框標題 -->
		<label v-if="props.label" class="ded-input-label">{{ props.label }}</label>
		<div
			ref="dropdown"
			:class="['ded-dropdown', `ded-dropdown-${props.size}`]"
			role="listbox"
			tabindex="0"
			@click="isDropdownVisible = !isDropdownVisible"
		>
			<span :class="selectValue ? 'ded-dropdown-selectValue-select' : 'ded-dropdown-selectValue-unselect'">
				{{ selectValue || props.placeholder }}
			</span>

			<Icon :class="`ded-icon-${size}`" style="margin-left: auto;" name="arrow_down"></Icon>
		</div>

		<List
			className=""
			:isMenu="true"
			:maxHeight="props.maxHeight"
			v-if="isDropdownVisible"
		>
			<ListItem
				v-for="(item, index) in props.dataSource"
				:key="index"
				:label="item.label"
				:value="item.value"
				:href="item.href"
				@selectedItem="(value) => handleSelect(value)"
			/>
		</List>
	</div>
</template>

<style scoped lang="scss">
</style>
