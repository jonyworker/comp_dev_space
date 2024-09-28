import {ref} from "vue";
import Tag from "./Tag.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Design System/Tag",
	component: Tag,
	tags: ["autodocs"],
	argTypes: {
		themeColor: {
			description: '主題顏色',
			control: { type: 'select' },
			options: [
				'primary',
				'secondary',
				'tertiary',
				'success',
				'warning',
				'error',
				'info',
			],
		},
		label: {
			description: "顯示在 Tag 上的文字內容",
			control: { type: "text" },
		},
		icon: {
			description: '顯示在 Tag 前方的 icon',
			control: { type: 'select' },
			options: ['None', 'face', 'finger-print', 'home', 'folder'],
			mapping: {
				None: null,
			},
		},
		removable: {
			description: "啟用Tag關閉功能",
			control: { type: "boolean" },
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "Tag",
			description: {
				component: "Tag組件的呈現及說明。",
			},
		},
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== 基礎 Tag ====//
export const TagDefault = {
	name: "基礎 Tag",
	args: {
		label: 'Label Title',
		iconName: '',
		removable: false,
	},
	render: (args) => ({
		components: { Tag },
		setup() {
			return {
				args,
			};
		},
		template: `
			<Tag v-bind="args"></Tag>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};

//==== Tag 加圖示 ====//
export const TagIcon = {
	name: "Tag 加圖示",
	args: {
		label: 'Label Title',
		icon: 'face',
		removable: false,
		themeColor: ''
	},
	render: (args) => ({
		components: { Tag },
		setup() {
			return {
				args,
			};
		},
		template: `
			<Tag 
				:label="args.label" 
				:icon="args.icon" 
				:themeColor="args.themeColor"
				:removable="args.removable"></Tag>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};

//==== Tag 顏色 ====//
export const TagColor = {
	name: "Tag 顏色",
	args: {
		label: 'Label Title',
		icon: 'face',
		removable: false,
	},
	render: (args) => ({
		components: { Tag },
		setup() {
			return {
				args,
			};
		},
		template: `
			<div style="display:flex; gap: 16px; flex-wrap: wrap">
				<Tag v-bind="args" themeColor=""></Tag>
				<Tag v-bind="args" themeColor="primary"></Tag>
				<Tag v-bind="args" themeColor="secondary"></Tag>
				<Tag v-bind="args" themeColor="tertiary"></Tag>
				<Tag v-bind="args" themeColor="success"></Tag>
				<Tag v-bind="args" themeColor="warning"></Tag>
				<Tag v-bind="args" themeColor="error"></Tag>
				<Tag v-bind="args" themeColor="info"></Tag>
			</div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};

//==== Tag 刪除功能 ====//
export const TagRemove = {
	name: "Tag 刪除功能",
	args: {
		label: 'Label Title',
		iconName: 'face',
		removable: true,
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
				     :removable="true"
				     themeColor="primary"
				     @remove="removeTag(tag.id)"></Tag>
			</div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};



