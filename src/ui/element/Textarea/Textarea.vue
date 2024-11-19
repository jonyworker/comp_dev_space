<script setup>
import { computed, watch, ref } from 'vue';

// 定義 Model
const modelValue = defineModel();

// 定義 Props
const props = defineProps({
	label: {
		type: String,
	},
	placeholder: {
		type: String,
		default: "請輸入...",
	},
	limit: {
		type: Number,
		default: 500,
	},
	initValue: {
		type: String,
		required: true,
	},
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

// 初始化 modelValue
if (!modelValue.value) {
	modelValue.value = props.initValue;
}

// 控制是否允許覆蓋
const isOverridable = ref(true);

// 監聽 props.initValue 的變化，只在允許覆蓋時更新 modelValue
watch(
	() => props.initValue,
	(newValue) => {
		if (isOverridable.value) {
			modelValue.value = newValue;
		}
	}
);

// 當 modelValue 發生變化時，設定為不可覆蓋，避免 props.initValue 覆蓋使用者輸入
watch(
	() => modelValue.value,
	() => {
		isOverridable.value = false;
	}
);

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
			<label :class="['ded-textarea-label', {'ded-textarea-disable': props.isDisabled}]" for="id">
				{{ props.label }}
			</label>
		</template>

		<div :class="['ded-textarea-group',
			{'ded-textarea-disable': props.isDisabled},
			( props.hint.error.length > 0 && `ded-textarea-border-${hintClass}`)]">
			<!-- 多行輸入框 -->
			<textarea id="id"
			          :class="['ded-textarea', {'ded-textarea-disable': props.isDisabled}]"
			          :maxlength="props.limit > 0 ? props.limit : undefined"
			          :placeholder="props.placeholder"
			          v-model="modelValue"
			></textarea>

			<!-- 多行輸入字數提示 -->
			<template v-if="modelValue.length > 0 && props.limit === 0">
				<small :class="['ded-textarea-hint-count', {'ded-textarea-disable': props.isDisabled}]">
					{{ modelValue.length }}
				</small>
			</template>

			<template v-else>
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
