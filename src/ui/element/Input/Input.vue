<script setup>
import { ref, computed } from 'vue';
import Icon from '@/ui/element/Icon/Icon.vue';

const modelValue = defineModel();
const emits = defineEmits(['clearDatePicker']);

// 阻止 Vue 自動將 $attrs 綁定到最外層 <div>
defineOptions({ inheritAttrs: false });

// 定義 Props
const props = defineProps({
	label: {
		type: String,
		default: "",
	},
	type: {
		type: String,
		default: "text",
	},
    hasClear: {
        type: Boolean,
        default: true,
    },
	placeholder: {
		type: String,
		default: "Placeholder",
	},
	prefix: {
		type: String,
		default: "",
	},
	size: {
		type: String,
		default: "medium",
		validator: (value) => ["small", "medium", "large"].includes(value),
	},
    maxLimit: {
        type: Number,
	    default: 0,
    },
	hint: {
		type: Object,
		default: () => ({ error: "", description: "" }),
	},
	isDisabled: {
		type: Boolean,
		default: false,
	},
	isOpen: {
		type: Boolean,
		default: undefined,
	},
	className: {
		type: String,
		default: "",
	},
});

// 暴露內部的 <input> 節點 (datepicker用)
const inputRef = ref(null);
defineExpose({
    input:inputRef
});

// 或其他唯一ID生成方式
const baseId = crypto.randomUUID()
const uniqueId = `${baseId}-input`;

// 計算屬性
const hintClass = computed(() => {
	if (props.hint.error) return "error";
	if (props.hint.description) return "desc";
	return "";
});

// 功能: 清除輸入框
const clearInput = () => {
	modelValue.value = "";
    // datepicker用
    emits('clearDatePicker');
};

// 功能: 控制密碼顯示/隱藏
const showPassword = ref(false);
const togglePasswordVisibility = () => {
	showPassword.value = !showPassword.value;
};

// 功能: 下拉控制箭頭
const toggleDropdown = () => {
	if (props.isOpen !== undefined) {
		modelValue.value = ""; // 可選擇性操作
	}
};
</script>

<template>
	<div :class="{'ded-input-container':true, [ props.className ]: !!props.className}">
		<!-- 標籤 -->
		<label
			v-if="label"
			:for="uniqueId"
			:class="props.isDisabled ? 'ded-input-disable' : 'ded-input-label'"
		>
			{{ label }}
		</label>

		<!-- 輸入框組 -->
		<div
			:class="{
		        'ded-input-group':true,
		        [`ded-text-${props.size}`]: props.size,
		        [`ded-input-border-${hintClass}`]:hintClass,
	            'ded-input-disable': props.isDisabled
	        }"
		>
			<!-- Prefix Icon -->
			<label
				v-if="prefix"
				:for="uniqueId"
				:class="{
		            'ded-input-icon':true,
					[`ded-icon-${props.size}`]:props.size,
					'ded-input-icon-disable': props.isDisabled,
					'ded-input-icon-error': props.hint.error.length > 0
				}"
					>
				<Icon :name="props.prefix" />
			</label>

			<!-- Input -->
			<input
                ref="inputRef"
				:id="uniqueId"
				:type="showPassword && props.type === 'password' ? 'text' : props.type"
				v-model="modelValue"
				:placeholder="props.placeholder"
                :maxlength="props.maxLimit > 0 ? props.maxLimit : undefined"
				:class="{
					'ded-input':true,
					[`ded-text-${props.size}`]: props.size,
					'ded-input-prefix': props.prefix,
					'ded-input-disable': props.isDisabled,
				}"
                v-bind="$attrs"
			/>

			<!-- 功能圖示 -->
			<div class="ded-input-feat-icon">
				<!-- 清除按鈕 -->
				<div
					v-if="modelValue && props.hasClear && !props.isDisabled"
					:class="`ded-icon-${props.size}`"
					@click="clearInput()"
					style="cursor: pointer"
				>
					<Icon name="SvgClose" />
				</div>

				<!-- 密碼顯示/隱藏 -->
				<div
					v-if="props.type === 'password' && modelValue"
					:class="`ded-icon-${props.size}`"
					@click="togglePasswordVisibility"
					style="cursor: pointer"
				>
					<Icon :name="showPassword ? 'SvgVisibility' : 'SvgVisibilityOff'" />
				</div>

				<!-- 下拉箭頭 -->
				<div
					v-if="props.isOpen !== undefined"
					:class="`ded-icon-${props.size}`"
					@click="toggleDropdown"
					style="cursor: pointer"
				>
					<Icon
						name="SvgArrowDown"
						class="ded-dropdown-arrow"
                        :class="props.isOpen ? 'ded-dropdown-open' : 'ded-dropdown-close'"
					/>
				</div>
			</div>
		</div>

		<!-- 提示文字 -->
		<small
			:class="{
				'ded-input-hint': true,
				[`ded-input-hint-${hintClass}`]: hintClass && !props.isDisabled,
				'ded-input-disable': props.isDisabled
			}"
		>
			{{ props.hint.error || props.hint.description }}
		</small>
	</div>
</template>

<style scoped lang="scss">

</style>
