<script setup>
import { computed, ref } from 'vue';
import Avatar from "@/ui/element/Avatar/Avatar.vue"
import Menu from "@/ui/element/Menu/Menu.vue"

// 定義 Props
const props = defineProps({
	// --  資料接口 -- //
	items: {
		type: Array,
		required: true,
	},
	// --  樣式接口 -- //
	size: {
		type: String,
		default: "large",
		validator: (value) =>
			["xsmall", "small", "medium", "large"].includes(value),
	},
	shape: {
		type: String,
		default: "circle",
		validator: (value) =>
			["circle", "square"].includes(value),
	},
	customClass: {
		type: String,
		default: '',
	},
	// --  數量控制接口 -- //
	limit: {
		type: Number,
	},
})

// 計算剩餘未顯示數量
const restCount = computed(() => {
	const result = props.items.length - props.limit;
	return result >= 99 ? 99 : result;
})

// 功能 - 分割
const splitArrayAt = (arr, splitCount) => {
	const currList = arr.slice(0, splitCount);
	const restList = arr.slice(splitCount);
	return {currList, restList};
};

// 分割[顯示群組]與[未顯示群組]
const currList = computed(() => splitArrayAt(props.items, props.limit).currList);
const restList = computed(() => splitArrayAt(props.items, props.limit).restList);

// 控制顯示剩餘未顯示數據
const isOpen = ref(false)
const handleClick = () => {
	isOpen.value = !isOpen.value
}
</script>

<template>
	<div class="avatar-group">
		<!-- avatar group - 渲染 avatar  -->
		<Avatar
			v-for="(avatar, index) in currList"
			:key="index"
			:imageSrc="avatar.imageSrc"
			:size="props.size"
			:shape="props.shape"
			imageAlt="alt text"
			:username="avatar.userName"
		></Avatar>

		<div class="rest-container" v-if="restList.length > 0">
			<!-- avatar group - 剩餘未顯示總數表示 -->
			<div class="text-large">
				<button :class="['avatar-container', `avatar-container-${props.size}`]"
				        @click.prevent="handleClick()"
				        style="cursor: pointer">
                    <span :class="['avatar', `avatar-${props.shape}`]">
                        <span :class="['avatar-text', `text-${props.size}`]">
                          {{ `+${restCount}` }}
                        </span>
                    </span>
				</button>
			</div>

			<!-- avatar group - 彈窗 剩餘未顯示數據 -->
			<div class="rest-container-menu" v-if="isOpen">
				<Menu>
					<li class="menu-item" v-for="(menu) in restList" :key="menu.userName">
						<Avatar
							size="xsmall"
							shape="circle"
							:imageSrc="menu.imageSrc"
							:username="menu.userName"
							imageAlt="alt text"
						></Avatar>
						<div style="margin-right: auto;">{{ menu.userName }}</div>
					</li>
				</Menu>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">

</style>