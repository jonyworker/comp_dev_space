<script setup>
import { computed, ref } from 'vue';
import Avatar from "@/ui/element/Avatar/Avatar.vue"
import List from "@/ui/element/List/List.vue"

// 定義 Props
const props = defineProps({
	dataSource: {
		type: Array,
		default: () => [],
	},
	limit: {
		type: Number,
		default: 1,
	},
	className: {
		type: String,
		default: '',
	},
	// size: {
	// 	type: String,
	// 	default: "large",
	// 	validator: (value) =>
	// 		["xsmall", "small", "medium", "large"].includes(value),
	// },
	// shape: {
	// 	type: String,
	// 	default: "circle",
	// 	validator: (value) =>
	// 		["circle", "square"].includes(value),
	// },

})

// 計算剩餘未顯示數量
const restCount = computed(() => {
	const result = props.dataSource.length - props.limit;
	return result >= 99 ? 99 : result;
})

// 功能 - 分割
const splitArrayAt = (arr, splitCount) => {
	const currList = arr.slice(0, splitCount);
	const restList = arr.slice(splitCount);
	return {currList, restList};
};

// 分割[顯示群組]與[未顯示群組]
const currList = computed(() => splitArrayAt(props.dataSource, props.limit).currList);
const restList = computed(() => splitArrayAt(props.dataSource, props.limit).restList);

// 控制顯示剩餘未顯示數據
const isOpen = ref(false)
const handleClick = () => {
	isOpen.value = !isOpen.value
}
</script>

<template>
	<div :class="{
		'avatar-group': true,
		[ props.className ]: !!props.className,
	}">
		<!-- avatar group - 渲染 avatar  -->
		<Avatar
			v-for="(avatar, index) in currList"
			:key="index"
			:src="avatar.src"
			alt="alt text"
			:username="avatar.userName"
		></Avatar>

		<div class="rest-container" v-if="restList.length > 0">
			<!-- avatar group - 剩餘未顯示總數表示 -->
			<div class="text-medium">
				<button :class="['avatar-container', props.size ? `avatar-container-${props.size}`:
				'avatar-container-medium']"
				        @click.prevent="handleClick()"
				        style="cursor: pointer">
                    <span :class="['avatar', props.shape ?`avatar-${props.shape}`: 'avatar-circle']">
                        <span :class="['avatar-text', props.size ? `text-${props.size}` : 'text-medium']">
                          {{ `+${restCount}` }}
                        </span>
                    </span>
				</button>
			</div>

			<!-- avatar group - 彈窗 剩餘未顯示數據 -->
			<div class="rest-container-menu" v-if="isOpen">
				<List>
					<li class="menu-item" v-for="(menu) in restList" :key="menu.userName">
						<Avatar
							size="xsmall"
							:src="menu.src"
							alt="alt text"
							:username="menu.userName"
						></Avatar>
						<div style="margin-right: auto;">{{ menu.userName }}</div>
					</li>
				</List>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">

</style>