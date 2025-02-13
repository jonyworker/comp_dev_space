<script setup>
import ListItem from "@/ui/element/List/ListItem.vue";

const emits = defineEmits(["onSelect"]);

// 定義 Props
const props = defineProps({
    dataSource: {
        type: Object,
	    required: true,
    },
    hasOutline: {
		type: Boolean,
		default: false,
	},
	hasDivider: {
		type: Boolean,
		default: false,
	},
	className: {
		type: String,
		default: "",
	},
})


const handleItemClick = (value) => {
	emits("onSelect", value); // 冒泡子元件的值
};
</script>

<template>
	<ul
	    :class="{
		'ded-list': true,
		'ded-outline': props.hasOutline,
		[props.className]: !!props.className }"
	>
        <slot>
            <ListItem
                v-for="(item, index) in props.dataSource"
                :key="index"
                :label="item.content.label"
                :value="item.content.value"
                :href="item.content.href"
                :prefix="item.content.prefix"
                :hasDivider="props.hasDivider"
                :isDisabled="item.isDisabled"
                :openInNewTab="true"
                @selectedItem="handleItemClick"
            ></ListItem>
        </slot>
	</ul>
</template>

<style scoped lang="scss">

</style>