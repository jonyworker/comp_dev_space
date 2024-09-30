<script setup>
import { ref } from "vue";

const props = defineProps({
	data: {
		type: Array,
		default: () => []
	},
})

const accordionItems = ref([
	...props.data
]);

const accordionToggle = (index) => {
	accordionItems.value[index].expanded = !accordionItems.value[index].expanded;
};
</script>

<template>
	<div class="accordion__container">
		<ul aria-label="Accordion" class="accordion__list">
			<li v-for="(item, index) in accordionItems" :key="index" class="accordion__item" @click="accordionToggle(index)">
				<button
					class="accordion-header"

				>
					<span>{{item.title}}</span>
					<!-- 箭頭 - 下 -->
					<template v-if="item.expanded">
						<div style="width: 24px;height: 24px;">
							<svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" fill="currentColor">
								<path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/>
							</svg>
						</div>
					</template>

					<!-- 箭頭 - 上 -->
					<template v-else>
						<div style="width: 24px;height: 24px;">
							<svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" fill="currentColor">
								<path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
							</svg>
						</div>
					</template>

				</button>
				<!--	            v-show="item.expanded"-->
				<div
					class="accordion-content"
					:class="{'expanded': item.expanded}"

				>

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
