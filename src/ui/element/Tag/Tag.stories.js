import { ref } from "vue";
import Tag from "./Tag.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Design System/Tag",
	component: Tag,
	tags: ["autodocs"],
	argTypes: {
		label: {
			description: "文字內容",
			control: { type: "text" },
		},
		icon: {
			description: '圖示',
			control: { type: 'select' },
			options: ['None', 'busy', 'finger-print', 'home', 'folder'],
			mapping: {
				None: null,
			},
		},
		themeColor: {
			description: '主題顏色',
			table: {
				defaultValue: { summary: 'primary' },
			},
			control: { type: 'select' },
			options: [
				'None',
				'primary',
				'secondary',
				'tertiary',
				'success',
				'warning',
				'error',
				'info',
			],
			mapping: {
				None: null,
			},
		},
		removable: {
			description: "是否可關閉",
			control: { type: "boolean" },
		},
		className: {
			description: '客製化樣式',
			control: { type: 'text' },
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "Tag",
			description: {
				component: "Tag 組件的呈現及說明。",
			},
		},
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};


//==== Tag 刪除功能 ====//
export const TagRemove = {
	name: "Tag 刪除功能",
	args: {
		themeColor: 'primary',
		removable: true,
		className: ''
	},
	render: (args) => ({
		components: { Tag },
		setup() {
			const tagsData = ref([
				{ id: 1, label: 'Photography', iconName: '' },
				{ id: 2, label: 'Cooking', iconName: 'home' },
				{ id: 3, label: 'Reading', iconName: '' },
				{ id: 4, label: 'Social work', iconName: 'folder' },
				{ id: 5, label: 'Arts and crafts', iconName: '' },
				{ id: 6, label: 'Dancing', iconName: '' },
			]);
			const removeTag = (id) => {
				tagsData.value = tagsData.value.filter(tag => tag.id !== id);
			};
			return {
				args,
				tagsData,
				removeTag,
			};
		},
		template: `
			<div style="display:flex; gap: 8px; flex-wrap: wrap">
				<Tag v-for="tag in tagsData"
				     :key="tag.id"
				     :label="tag.label"
				     :icon="tag.iconName"
				     :removable="args.removable"
				     :themeColor="args.themeColor"
				     @remove="removeTag(tag.id)"
				     :className="args.className">
				</Tag>
			</div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'removable' ],
		},
	},
};




//--- JONY VERSION START ---//

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
// export default {
// 	title: "Design System/Tag",
// 	component: Tag,
// 	tags: ["autodocs"],
// 	argTypes: {
// 		label: {
// 			description: "顯示在 Tag 上的文字內容",
// 			control: { type: "text" },
// 		},
// 		icon: {
// 			description: '顯示在 Tag 前方的 icon',
// 			control: { type: 'select' },
// 			options: ['None', 'busy', 'finger-print', 'home', 'folder'],
// 			mapping: {
// 				None: null,
// 			},
// 		},
// 		themeColor: {
// 			description: '主題顏色',
// 			table: {
// 				defaultValue: { summary: 'primary' },
// 			},
// 			control: { type: 'select' },
// 			options: [
// 				'None',
// 				'primary',
// 				'secondary',
// 				'tertiary',
// 				'success',
// 				'warning',
// 				'error',
// 				'info',
// 			],
// 			mapping: {
// 				None: null,
// 			},
// 		},
// 		removable: {
// 			description: "當顯示多個 Tag 時，可解鎖 Tag 的關閉功能",
// 			control: { type: "boolean" },
// 		},
// 	},
// 	parameters: {
// 		// 自動文件
// 		docs: {
// 			title: "Tag",
// 			description: {
// 				component: "Tag組件的呈現及說明。",
// 			},
// 		},
// 	},
// 	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
// 	// args: { onClick: fn() },
// };
//
// //==== Tag 基礎樣式 ====//
// export const TagDefault = {
// 	name: "Tag 基礎樣式",
// 	args: {
// 		label: 'Label Title',
// 		icon: 'None',
// 		themeColor: 'primary',
// 		removable: false,
// 	},
// 	render: (args) => ({
// 		components: { Tag },
// 		setup() {
// 			return {
// 				args,
// 			};
// 		},
// 		template: `
// 			<Tag
// 				:label="args.label"
// 				:icon="args.icon"
// 				:themeColor="args.themeColor"
// 				:removable="args.removable"></Tag>
//         `,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			// include: ['themeColor', 'label', 'value', 'name' ],
// 		},
// 	},
// };
//
// //==== Tag 帶圖標 ====//
// export const TagIcon = {
// 	name: "Tag 帶圖標",
// 	args: {
// 		label: 'Label Title',
// 		icon: 'face',
// 		themeColor: 'primary',
// 		removable: false,
// 	},
// 	render: (args) => ({
// 		components: { Tag },
// 		setup() {
// 			return {
// 				args,
// 			};
// 		},
// 		template: `
// 			<Tag
// 				:label="args.label"
// 				:icon="args.icon"
// 				:themeColor="args.themeColor"
// 				:removable="args.removable"></Tag>
//         `,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			// include: ['themeColor', 'label', 'value', 'name' ],
// 			exclude: ['removable'],
// 		},
// 	},
// };
//
// //==== Tag 顏色 ====//
// export const TagColor = {
// 	name: "Tag 顏色",
// 	args: {
// 		label: 'Label Title',
// 		icon: 'face',
// 		removable: false,
// 	},
// 	render: (args) => ({
// 		components: { Tag },
// 		setup() {
// 			return {
// 				args,
// 			};
// 		},
// 		template: `
// 			<div style="display:flex; gap: 16px; flex-wrap: wrap">
// 				<Tag v-bind="args" themeColor=""></Tag>
// 				<Tag v-bind="args" themeColor="primary"></Tag>
// 				<Tag v-bind="args" themeColor="secondary"></Tag>
// 				<Tag v-bind="args" themeColor="tertiary"></Tag>
// 				<Tag v-bind="args" themeColor="success"></Tag>
// 				<Tag v-bind="args" themeColor="warning"></Tag>
// 				<Tag v-bind="args" themeColor="error"></Tag>
// 				<Tag v-bind="args" themeColor="info"></Tag>
// 			</div>
//         `,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			// include: ['themeColor', 'label', 'value', 'name' ],
// 			exclude: ['themeColor'],
// 		},
// 	},
// };
//
// //==== Tag 刪除功能 ====//
// export const TagRemove = {
// 	name: "Tag 刪除功能",
// 	args: {
// 		themeColor: 'primary',
// 		removable: true,
// 	},
// 	render: (args) => ({
// 		components: { Tag },
// 		setup() {
// 			const tagsData = ref([
// 				{ id: 1, label: 'Photography', iconName: '' },
// 				{ id: 2, label: 'Cooking', iconName: 'home' },
// 				{ id: 3, label: 'Reading', iconName: '' },
// 				{ id: 4, label: 'Social work', iconName: 'folder' },
// 				{ id: 5, label: 'Arts and crafts', iconName: '' },
// 				{ id: 6, label: 'Dancing', iconName: '' },
// 			]);
// 			const removeTag = (id) => {
// 				tagsData.value = tagsData.value.filter(tag => tag.id !== id);
// 			};
// 			return {
// 				args,
// 				tagsData,
// 				removeTag,
// 			};
// 		},
// 		template: `
// 			<div style="display:flex; gap: 8px; flex-wrap: wrap">
// 				<Tag v-for="tag in tagsData"
// 				     :key="tag.id"
// 				     :label="tag.label"
// 				     :icon="tag.iconName"
// 				     :removable="args.removable"
// 				     :themeColor="args.themeColor"
// 				     @remove="removeTag(tag.id)"></Tag>
// 			</div>
//         `,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			include: ['themeColor', 'removable' ],
// 		},
// 	},
// };

//--- JONY VERSION END ---//