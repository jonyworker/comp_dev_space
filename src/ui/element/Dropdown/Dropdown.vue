<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import List from "@/ui/element/List/List.vue";
import Input from "@/ui/element/Input/Input.vue";
import { getTargetPosition } from '@/utils/positionUtils';

// 定義 Model
const modelValue = defineModel();

// 定義 Props
const props = defineProps({
	dataSource: {
		type: Array,
		required: true,
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
	className: {
		type: String,
		default: "",
	},
});

// 狀態管理
const selectValue = ref(""); // 選擇的值
const isDropdownVisible = ref(false); // 下拉面板顯示控制
const dropdown = ref(null); // 綁定元素
const dropdownPosition = ref({}); // 儲存下拉菜單定位樣式
const gap = 8; // 下拉菜單間距
const placement = "bottom"; // 預設位置方向

// 選擇項目處理
const handleSelect = (value) => {
	selectValue.value = value;
	isDropdownVisible.value = false; // 選擇後關閉下拉菜單
};

// 點擊外部關閉處理
const handleClickOutside = (event) => {
	if (dropdown.value && !dropdown.value.contains(event.target)) {
		isDropdownVisible.value = false;
	}
};

// 更新下拉菜單位置
const updateDropdownPosition = () => {
	if (dropdown.value) {
		const triggerRect = dropdown.value.getBoundingClientRect();
		dropdownPosition.value = getTargetPosition(
            {
                top: triggerRect.top + window.scrollY, // 考慮垂直滾動偏移
                left: triggerRect.left + window.scrollX // 考慮水平滾動偏移
            },
			{ width: triggerRect.width, height: triggerRect.height },
			placement,
			`${gap}px`,
			true
		);
	}
};

// 註冊事件
onMounted(() => {
	document.addEventListener("click", handleClickOutside);
	window.addEventListener("resize", updateDropdownPosition);
    window.addEventListener("scroll", updateDropdownPosition);
	nextTick(() => updateDropdownPosition());
});

// 清除事件
onUnmounted(() => {
	document.removeEventListener("click", handleClickOutside);
	window.removeEventListener("resize", updateDropdownPosition);
    window.removeEventListener("scroll", updateDropdownPosition);
});
</script>

<template>

	<!-- 標籤 -->
	<label v-if="props.label" class="ded-input-label">{{ props.label }}</label>

	<!-- 下拉觸發區 -->
	<div
		ref="dropdown"
		class="ded-dropdown"
		role="listbox"
		tabindex="0"
		@click="() => { isDropdownVisible = !isDropdownVisible; updateDropdownPosition(); }"
	>
		<!-- 輸入框組件 -->
		<Input
			type="text"
			:size="props.size"
			:placeholder="props.placeholder"
			:initValue="selectValue"
			:isOpen="isDropdownVisible"
			className="ded-dropdown-input"
		/>
	</div>

	<!-- 下拉內容 -->
	<Teleport to="body">
		<div
			class="ded-tooltip"
			v-if="isDropdownVisible"
			:style="dropdownPosition"
		>
			<List
				:dataSource="props.dataSource"
				:hasOutline="true"
				@selectedItem="handleSelect"
			/>
		</div>
	</Teleport>

</template>

<style scoped lang="scss">

</style>
