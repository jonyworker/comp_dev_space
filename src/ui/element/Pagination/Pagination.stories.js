import { action } from '@storybook/addon-actions';
import Pagination from "./Pagination.vue";

export default {
	title: "Component/Pagination",
	component: Pagination,
	tags: ["autodocs"],
	argTypes: {

		totalItems: {
			description: "總筆數",
			control: { type: "number" },
		},
		currentPage: {
			description: "目前頁數",
			control: { type: "number" },
		},

		itemsPerPageOptions: {
			description: "每頁顯示筆數選項",
			control: { type: "object" },
			table: {
				type: {
					summary: "number[]"
				},
			}
		},
		defaultItemsPerPage: {
			description: "預設每頁顯示筆數",
			control: { type: "number" },
		},
		isShowPageInfo: {
			description: "是否顯示頁數資訊",
			control: { type: "boolean" },
		},
		className: {
			description: "客製化樣式",
			control: { type: "text" },
		},
		onPageChange: {
			description: "頁碼變更事件",
			control: false,
			table: {
				category: 'EVENTS',
				type: { summary: 'emits' },
			}
		}
	},
	parameters: {
		// 自動文件
		docs: {
			title: "Pagination",
			description: {
				component: "頁碼組件的呈現及說明。",
			},
		},
	},
};

//==== 預設項目 ====//
export const PaginationDefault = {
	name: "預設項目",
	args: {
		totalItems: 100,
		currentPage: 1,
		itemsPerPageOptions: [ 10, 20, 50],
		defaultItemsPerPage: 5,
		isShowPageInfo: false,
		className: ""
	},
	render: (args) => ({
		components: { Pagination },
		setup() {
			return {
				args,
				handlePageChange: action('onPageChange')
			}
		},
		template: `
			
			<Pagination
				:totalItems="args.totalItems"
				:currentPage="args.currentPage"
				:itemsPerPageOptions="args.itemsPerPageOptions"
				:defaultItemsPerPage="args.defaultItemsPerPage"
				:isShowPageInfo="args.isShowPageInfo"
				:className="args.className"
				@onPageChange="handlePageChange"
			>
			</Pagination>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// exclude: ['default' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<script setup>`,
						`import Pagination from "@/ui/element/Pagination/Pagination.vue";`,
						`const handlePageChange = () => {};`,
						`</script>`,
						'',
						'<template>',
						`  <Pagination`,
						`    ${args.totalItems !== undefined ? `:totalItems="${args.totalItems}"` : ""}`,
						`    ${args.currentPage !== undefined ? `:currentPage="${args.currentPage}"` : ""}`,
						`    ${args.itemsPerPageOptions ? `:itemsPerPageOptions="[${args.itemsPerPageOptions}]"` : ""}`,
						`    ${args.defaultItemsPerPage !== undefined ? `:defaultItemsPerPage="${args.defaultItemsPerPage}"` : ""}`,
						`    ${args.isShowPageInfo !== undefined ? `:isShowPageInfo="${args.isShowPageInfo}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`    @onPageChange="handlePageChange()"`,
						`  ></Pagination>`,
						'</template>',
					].filter(Boolean).join("\n").trim();
				}
			}
		}
	},
};

//==== 顯示資訊 ====//
export const PaginationDetail = {
	name: "顯示資訊",
	args: {
		totalItems: 100,
		currentPage: 1,
		itemsPerPageOptions: [10, 20, 50],
		defaultItemsPerPage: 10,
		isShowPageInfo: true,
		className: ""
	},
	render: (args) => ({
		components: { Pagination },
		setup() {
			return {
				args,
				handlePageChange: action('onPageChange')
			}
		},
		template: `
			<Pagination
				:totalItems="args.totalItems"
				:currentPage="args.currentPage"
				:itemsPerPageOptions="args.itemsPerPageOptions"
				:defaultItemsPerPage="args.defaultItemsPerPage"
				:isShowPageInfo="args.isShowPageInfo"
				:className="args.className"
				@onPageChange="handlePageChange"
			>
			</Pagination>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			exclude: [ 'isShowPageInfo' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<script setup>`,
						`import Pagination from "@/ui/element/Pagination/Pagination.vue";`,
						`const handlePageChange = () => {};`,
						`</script>`,
						'',
						'<template>',
						`  <Pagination`,
						`    ${args.totalItems !== undefined ? `:totalItems="${args.totalItems}"` : ""}`,
						`    ${args.currentPage !== undefined ? `:currentPage="${args.currentPage}"` : ""}`,
						`    ${args.itemsPerPageOptions ? `:itemsPerPageOptions="[${args.itemsPerPageOptions}]"` : ""}`,
						`    ${args.defaultItemsPerPage !== undefined ? `:defaultItemsPerPage="${args.defaultItemsPerPage}"` : ""}`,
						`    :isShowPageInfo="true"`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`    @onPageChange="handlePageChange()"`,
						`  ></Pagination>`,
						'</template>',
					].filter(Boolean).join("\n").trim();
				}
			}
		}
	},
};