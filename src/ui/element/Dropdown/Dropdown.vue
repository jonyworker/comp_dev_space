<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import Icon from '@/ui/element/Icon/Icon.vue';
import ListItem from "@/ui/element/List/ListItem.vue";
import List from "@/ui/element/List/List.vue";
import { getTargetPosition } from '@/utils/positionUtils';
import Input from "@/ui/element/Input/Input.vue";

// 定義 Model (改成最新寫法)
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

const selectValue = ref(""); // 選擇的值
const isDropdownVisible = ref(false); // 控制下拉面板顯示
const dropdown = ref(null); // 綁定 dropdown 元素
const dropdownPosition = ref({}); // 儲存下拉菜單的定位樣式
const gap = 8; // 下拉菜單間距
const placement = "bottom"; // 預設位置方向
const isContentFluid = true; // 是否自適應寬度

const handleSelect = (value) => {
	selectValue.value = value;
	isDropdownVisible.value = false; // 選擇後關閉下拉菜單
};

const handleClickOutside = (event) => {
	if (dropdown.value && !dropdown.value.contains(event.target)) {
		isDropdownVisible.value = false;
	}
};

const updateDropdownPosition = () => {
	if (dropdown.value) {
		const triggerRect = dropdown.value.getBoundingClientRect();
		const childrenSize = {
			width: triggerRect.width,
			height: triggerRect.height,
		};

		dropdownPosition.value = getTargetPosition(
			{ top: triggerRect.top, left: triggerRect.left },
			childrenSize,
			placement,
			`${gap}px`,
			isContentFluid
		);
	}
};

onMounted(() => {
	document.addEventListener('click', handleClickOutside);
	window.addEventListener('resize', updateDropdownPosition); // 視窗調整大小時重新計算位置
	nextTick(() => updateDropdownPosition()); // 初始掛載後更新位置
});

onUnmounted(() => {
	document.removeEventListener('click', handleClickOutside);
	window.removeEventListener('resize', updateDropdownPosition);
});
</script>

<template>
	<div class="ded-dropdown-container">
		<!-- 標籤 -->
		<label v-if="props.label" class="ded-input-label">{{ props.label }}</label>
		<!-- 下拉觸發區 -->
		<div
			ref="dropdown"
			class="ded-dropdown"
			role="listbox"
			tabindex="0"
			@click="isDropdownVisible = !isDropdownVisible"
		>
			<div class="ded-dropdown-input">
				<Input type="text" :size="props.size" :placeholder="props.placeholder" :initValue="selectValue" />
			</div>
			<Icon
				class="ded-icon-small"
				:name="isDropdownVisible ? 'chevronUp' : 'chevronDown'"
				:class="'ded-dropdown-close'"
			/>
		</div>

		<!-- Teleport 將 List 插入 body -->
		<Teleport to="body">
			<div class="ded-tooltip" :style="dropdownPosition" v-if="isDropdownVisible">
				<List
					:hasOutline="true"
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

		</Teleport>
	</div>
</template>

<style scoped lang="scss">

</style>
