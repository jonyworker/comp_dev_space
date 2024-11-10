<script setup>
import { ref } from 'vue'
import Icon from '@/ui/element/Icon/Icon.vue'
import ListItem from "@/ui/element/List/ListItem.vue";
import List from "@/ui/element/List/List.vue";

// 定義 Model (改成最新寫法)
const modelValue = defineModel()

// 定義 Props
const props = defineProps({
	dataSource: {
		type: Array,
		default: () => [],
	},
	label: {
		type: String,
	},
	placeholder: {
		type: String,
	},
	size: {
		type: String,
		validator: (value) => ['small', 'medium', 'large'].includes(value),
		default: 'medium',
	},
	maxHeight: {
		type: String,
	},
	className: {
		type: String,
		default: '',
	},
})

const selectValue =  ref(null)

const isDropdownVisible = ref(false) //控制下拉面板顯示

const handleSelect = (value) => {
	selectValue.value = value
	isDropdownVisible.value = !isDropdownVisible
}
</script>

<template>

	<div class="dropdown-container">
		<!-- 輸入框標題 -->
		<label v-if="props.label" class="input-label">{{props.label}}</label>
		<div ref="dropdown"
		     :class="['dropdown', `dropdown-${props.size}`]"
		     role="listbox"
		     tabindex="0"
		     @click="isDropdownVisible = !isDropdownVisible">
				<span :class="selectValue ? 'dropdown-selectValue-select' : 'dropdown-selectValue-unselect'">
					{{ selectValue || props.placeholder }}
				</span>

				<Icon :class="`icon-${size}`"  style="margin-left: auto;" name="arrow_down"></Icon>
		</div>

		<List
			className=""
			:isMenu=true
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
			>

			</ListItem>
		</List>
	</div>


</template>

<style scoped lang="scss">

</style>