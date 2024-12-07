<script setup>
import { ref, watch } from "vue";
import Icon from '@/ui/element/Icon/Icon.vue';

const props = defineProps({
	dataSource: {
		type: Array,
		default: () => []
	},
	className: {
		type: String,
		default: "",
	},
})

const accordionItems = ref([
	...props.dataSource
]);


watch(() => props.dataSource, (newValue) => {
	accordionItems.value = newValue.map(item => ({
		...item,
		expanded: false // 確保每個項目都有 expanded 屬性
	}));
});


const accordionToggle = (index) => {
	accordionItems.value[index].expanded = !accordionItems.value[index].expanded;
};
</script>

<template>
	<div :class="{'ded-accordion__container': true, [props.className]: !!props.className}">
		<ul aria-label="Accordion" class="ded-accordion__list">
			<li v-for="(item, index) in accordionItems" :key="index" class="ded-accordion__item" @click="accordionToggle(index)">
				<button class="ded-accordion-header">
					<span>{{item.title}}</span>
					<!-- 箭頭 - 下 -->
					<template v-if="item.expanded">
						<Icon name="chevronDown" size="24"></Icon>
					</template>

					<!-- 箭頭 - 上 -->
					<template v-else>
						<Icon name="chevronUp" size="24"></Icon>
					</template>
				</button>
				<!--	            v-show="item.expanded"-->
				<div class="ded-accordion-content" :class="{'expanded': item.expanded}">
					<p v-for="(content, i) in item.contents" :key="i">
						{{ content }}
					</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>

</style>
