<script setup>
import { ref, computed, watch } from 'vue';
import Button from "@/ui/element/Button/Button.vue";
import Icon from "@/ui/element/Icon/Icon.vue";

const emit = defineEmits(['onPageChange']);

// 定義 Props
const props = defineProps({
	totalItems: {
		type: Number,
		required: true,
	},
	currentPage: {
		type: Number,
		default: 1,
	},
	itemsPerPageOptions: {
		type: Array,
		required: true,
	},
	defaultItemsPerPage: {
		type: Number,
		default: 10,
	},
	isShowPageInfo: {
		type: Boolean,
		default: false,
	},
	className: {
		type: String,
		default: "",
	},
});

// 當前頁碼
const currPage = ref(props.currentPage);
// 每頁顯示的資料數
const itemsPerPage = ref(
	props.isShowPageInfo ? props.itemsPerPageOptions[0] : props.defaultItemsPerPage
);
// 最多顯示的頁碼按鈕數量
const maxPageButtons = 10; // 最多顯示10個頁碼

// 計算總頁數
const totalPages = computed(() =>
	Math.ceil(props.totalItems / itemsPerPage.value)
);
// 計算頁碼範圍的起始頁
const startPage = computed(() =>
	Math.max(1, currPage.value - Math.floor(maxPageButtons / 2))
);
// 計算頁碼範圍的結束頁
const endPage = computed(() =>
	Math.min(totalPages.value, startPage.value + maxPageButtons - 1)
);
// 生成頁碼按鈕的陣列
const pageNumbers = computed(() =>
	Array.from({ length: endPage.value - startPage.value + 1 }, (_, i) => startPage.value + i)
);

// 處理頁碼變更
const handlePageChange = (page) => {
	if (page < 1 || page > totalPages.value) return;
	currPage.value = page;
	emit('onPageChange', page, itemsPerPage.value);
};

// 處理每頁資料數變更
const handleItemsPerPageChange = (e) => {
	const newItemsPerPage = parseInt(e.target.value, 10);
	itemsPerPage.value = newItemsPerPage;
	currPage.value = 1; // 當變更每頁資料數時，重置到第1頁
	emit('onPageChange', 1, newItemsPerPage);
};

// 監聽 Props 當前頁碼變更
watch(() => props.currentPage, (newVal) => {
	if (newVal > 0 && newVal <= totalPages.value) {
		currPage.value = newVal;
	}
});

// 監聽預設每頁資料數變更
watch(() => props.defaultItemsPerPage, (newVal) => {
	if (newVal > 0) {
		itemsPerPage.value = newVal;
	}
});

// 監聽是否顯示頁面資訊
watch(() => props.isShowPageInfo, (newVal) => {
	if (newVal && props.itemsPerPageOptions.length > 0) {
		itemsPerPage.value = props.itemsPerPageOptions[0];
	}
});

// 監聽每頁資料選項變更
watch(() => props.itemsPerPageOptions, (newVal) => {
	if (props.isShowPageInfo && newVal.length > 0) {
		itemsPerPage.value = newVal[0];
	}
});
</script>

<template>
	<div :class="`ded-pagination-container ${className}`">
		<div v-if="props.isShowPageInfo" class="ded-pagination-info">
			<div class="ded-pagination-info-text">
				共 <span class="ded-pagination-info-highline">{{ props.totalItems }}</span> 筆資料，第
				<span class="ded-pagination-info-highline">{{ currPage }}</span> /
				<span class="ded-pagination-info-highline">{{ totalPages }}</span> 頁 每頁顯示
			</div>
			<select
				v-model="itemsPerPage"
				@change="handleItemsPerPageChange"
				class="ded-pagination-select"
			>
				<option v-for="option in props.itemsPerPageOptions" :key="option" :value="option">
					{{ option }}
				</option>
			</select>
			<span>筆</span>
		</div>

		<div class="ded-pagination">
			<Button
				variant="ghost"
				theme-color="neutral"
				:is-disabled="currPage === 1"
				class="ded-pagination-button"
				@click="() => handlePageChange(1)"
			>
				<Icon name="SvgFirstLastPage" size="18" class="ded-pagination-button-first"/>
			</Button>

			<Button
				variant="ghost"
				theme-color="neutral"
				:is-disabled="currPage === 1"
				class="ded-pagination-button"
				@click="() => handlePageChange(currPage - 1)"
			>
				<Icon name="SvgNavigateArrow" size="18" class="ded-pagination-button-first"/>
			</Button>

			<Button
				v-for="number in pageNumbers"
				:key="number"
				variant="ghost"
				theme-color="neutral"
				class="ded-pagination-button"
				:class="{ 'ded-pagination-active': currPage === number }"
				@click="() => handlePageChange(number)"
			>
                <div class="ded-button-content">
                    <div class="ded-pagination-number">{{ number }}</div>
                </div>
			</Button>

			<Button
				variant="ghost"
				theme-color="neutral"
				:is-disabled="currPage === totalPages"
				class="ded-pagination-button"
				@click="() => handlePageChange(currPage + 1)"
			>
				<Icon name="SvgNavigateArrow" size="18"/>
			</Button>

			<Button
				variant="ghost"
				theme-color="neutral"
				:is-disabled="currPage === totalPages"
				class="ded-pagination-button"
				@click="() => handlePageChange(totalPages)"
			>
				<Icon name="SvgFirstLastPage" size="18"/>
			</Button>
		</div>
	</div>
</template>
