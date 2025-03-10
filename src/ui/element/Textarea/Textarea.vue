<script setup>
import { computed } from 'vue';

// 使用唯一識別碼生成方法
const baseId = crypto.randomUUID()
const generateId = `${baseId}-textarea`;

// 阻止 Vue 自動將 $attrs 綁定到最外層 <div>
defineOptions({ inheritAttrs: false });

// 定義 Model
const modelValue = defineModel();

// 定義 Props
const props = defineProps({
	label: {
		type: String,
	},
	placeholder: {
		type: String,
		default: "Placeholder",
	},
	limit: {
		type: Number,
		default: 30,
	},
	// initValue: {
	// 	type: String,
	// 	required: true,
	// }, //由 modelValue 取代
	hint: {
		type: Object,
		default: () => ({ error: "", description: "" }),
	},
	isDisabled: {
		type: Boolean,
		default: false,
	},
	className: {
		type: String,
		default: "",
	},
});

// 根據 hint 的值，計算屬性
const hintClass = computed(() => {
	if (props.hint.error.length > 0) {
		return 'error';
	}
	if (props.hint.description.length > 0) {
		return 'desc';
	}
	return '';
});
</script>

<template>
	<div :class="{'ded-textarea-container': true, [props.className]: !!props.className}">
		<!-- 多行輸入框標題 -->
		<template v-if="props.label">
			<label :class="['ded-textarea-label', {'ded-textarea-disable': props.isDisabled}]" :for="generateId">
				{{ props.label }}
			</label>
		</template>

		<div :class="['ded-textarea-group',
			{'ded-textarea-disable': props.isDisabled},
			( props.hint.error.length > 0 && `ded-textarea-border-${hintClass}`)]">
			<!-- 多行輸入框 -->
			<textarea :id="generateId"
			          :class="['ded-textarea', {'ded-textarea-disable': props.isDisabled}]"
			          :maxlength="props.limit > 0 ? props.limit : undefined"
			          :placeholder="props.placeholder"
			          v-model="modelValue"
			          v-bind="$attrs"
			></textarea>

			<!-- 輸入字數提示 -->
			<template v-if="modelValue.length > 0 && props.limit !== 0">
				<small :class="['ded-textarea-hint-count', {'ded-textarea-disable': props.isDisabled}]">
					{{ modelValue.length > 0 ? `${modelValue.length} / ${props.limit}` : '' }}
				</small>
			</template>
		</div>

		<!-- 多行輸入說明文字與提示 -->
		<template v-if="props.hint.error.length > 0 || props.hint.description.length > 0">
			<small :class="['ded-textarea-hint', {'ded-textarea-disable': props.isDisabled}, `ded-textarea-hint-${hintClass}`]">
				{{ props.hint.error.length > 0 ? props.hint.error : props.hint.description }}
			</small>
		</template>
	</div>
</template>

<style lang="scss">
</style>
