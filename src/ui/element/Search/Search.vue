<script setup>
import Input from '@/ui/element/Input/Input.vue';
import Button from '@/ui/element/Button/Button.vue';

// 定義 Model
const modelValue = defineModel()

// 定義 Props
const props = defineProps({
    themeColor: {
        type: String,
        validator: (value) =>
            [
                "primary",
                "secondary",
                "neutral",
                "info",
                "success",
                "warning",
                "error",
            ].includes(value),
    },
	placeholder: {
		type: String,
	},
	size: {
		type: String,
		default: "medium",
		validator: (value) => ['small', 'medium', 'large'].includes(value),
	},
	isDisable: {
		type: Boolean,
		default: false,
	},
	customClass: {
		type: String,
		default: "",
	},
});
</script>

<template>

	<div class="ded-search">
        <Input
            type="text"
            :placeholder="props.placeholder"
            prefix="search"
            :size="props.size"
            initValue=""
            :isDisable="props.isDisable"
            v-model="modelValue"
            className="ded-search-input"
        />
        <Button
            :themeColor="props.themeColor"
            variant="filled"
            :size="props.size"
            width="fit"
            borderWidth="1px"
            radius="4px"
            :isDisabled="props.isDisable"
        >
            Search
        </Button>
	</div>
</template>

<style scoped lang="scss">

</style>