<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import Avatar from "@/ui/element/Avatar/Avatar.vue";
import List from "@/ui/element/List/List.vue";

// 定義 Props
const props = defineProps({
	dataSource: {
		type: Array,
		required: true,
	},
	size: {
		type: String,
		default: "medium",
		validator: (value) =>
			["xsmall", "small", "medium", "large"].includes(value),
	},
	limit: {
		type: Number,
		default: 1,
	},
	className: {
		type: String,
		default: "",
	},
});

// 計算剩餘未顯示數量
const restCount = computed(() => {
	const result = props.dataSource.length - props.limit;
	return result >= 99 ? 99 : result;
});

// 功能 - 分割
const splitArrayAt = (arr, splitCount) => {
	const currList = arr.slice(0, splitCount);
	const restList = arr.slice(splitCount);
	return { currList, restList };
};

// 分割[顯示群組]與[未顯示群組]
const currList = computed(() => splitArrayAt(props.dataSource, props.limit).currList);
const restList = computed(() => splitArrayAt(props.dataSource, props.limit).restList);

// 控制顯示剩餘未顯示數據
const isOpen = ref(false);
const restContainerRef = ref(null);
const menuStyles = ref({ top: "0px", left: "0px" });

// 更新菜單位置
const updateMenuPosition = () => {
	const rect = restContainerRef.value?.getBoundingClientRect();
	if (rect) {
		menuStyles.value = {
			top: `${rect.bottom + window.scrollY + 8}px`,
			left: `${rect.left + window.scrollX}px`,
		};
	}
};

// 打開或關閉菜單時更新位置
const handleClick = () => {
	isOpen.value = !isOpen.value;
	if (isOpen.value) {
		updateMenuPosition();
		window.addEventListener('resize', updateMenuPosition);
		window.addEventListener('scroll', updateMenuPosition, true);
	} else {
		window.removeEventListener('resize', updateMenuPosition);
		window.removeEventListener('scroll', updateMenuPosition, true);
	}
};

// 清理事件監聽器
onMounted(() => {
	if (isOpen.value) {
		window.addEventListener('resize', updateMenuPosition);
		window.addEventListener('scroll', updateMenuPosition, true);
	}
});

onBeforeUnmount(() => {
	window.removeEventListener('resize', updateMenuPosition);
	window.removeEventListener('scroll', updateMenuPosition, true);
});
</script>

<template>
	<div
		:class="{
            'ded-avatar-group': true,
            [props.className]: !!props.className,
        }"
	>
		<!-- avatar group - 渲染 avatar -->
		<Avatar
			v-for="(avatar, index) in currList"
			:key="index"
			:size="props.size"
			:src="avatar.src"
			alt="alt text"
			:userName="avatar.userName"
		></Avatar>

		<div
			class="rest-container"
			ref="restContainerRef"
			v-if="restList.length > 0"
		>
			<!-- avatar group - 剩餘未顯示總數表示 -->
			<div class="">
				<button
					:class="[ 'ded-avatar-container', props.size ? `ded-avatar-container-${props.size}` : 'ded-avatar-container-medium' ]"
					@click.prevent="handleClick"
					style="cursor: pointer"
				>
                    <span
	                    :class="[ 'ded-avatar', props.shape ? `ded-avatar-${props.shape}` : 'ded-avatar-circle' ]"
                    >
                        <span
	                        :class="[ 'ded-avatar-text', props.size ? `text-${props.size}` : 'text-medium' ]"
                        >
                            {{ `+${restCount}` }}
                        </span>
                    </span>
				</button>
			</div>

			<!-- 使用 Teleport 將 rest-container-menu 傳送到 body -->
			<Teleport to="body">
				<div
					v-if="isOpen"
					class="rest-container-menu"
					:style="{
                        position: 'absolute',
                        top: menuStyles.top,
                        left: menuStyles.left,
                        zIndex: 9999,
                    }"
				>
					<List>
						<li class="menu-item" v-for="(menu) in restList" :key="menu.userName" style="border-bottom:
						none">
							<Avatar
								size="xsmall"
								:src="menu.src"
								alt="alt text"
								:userName="menu.userName"
							></Avatar>
							<div style="margin-right: auto;">{{ menu.userName }}</div>
						</li>
					</List>
				</div>
			</Teleport>
		</div>
	</div>
</template>

<style scoped lang="scss">
</style>