import { ref } from "vue";
import Tag from "./Tag.vue";


export default {
	title: "Component/Tag",
	component: Tag,
	tags: ["autodocs"],
	argTypes: {
		themeColor: {
			description: "主題顏色",
			control: {
				type: "select",
				labels: {
					"": "None",
					primary: "primary",
					secondary: "secondary",
					tertiary: "tertiary",
					success: "success",
					warning: "warning",
					error: "error",
					info: "info",
				}
			},
			options: [
				"",
				"primary",
				"secondary",
				"tertiary",
				"success",
				"warning",
				"error",
				"info",
			],
			table: {
				type: {
					summary: "primary | secondary | tertiary | success | warning | error | info"
				}
			}
		},
		label: {
			description: "標籤文字",
			control: { type: "text" },
		},
		prefix: {
			description: "圖示",
			control: {
				type: "select",
				labels: {
					"": "None",
					busy: "busy",
					"finger-print": "finger-print",
					home: "home",
					folder: "folder",
				}
			},
			options: ["None", "busy", "finger-print", "home", "folder"],
		},
		closable: {
			description: "是否可關閉",
			control: { type: "boolean" },
		},
		isDisabled: {
			description: "是否禁用",
			control: { type: "boolean" },
		},
		className: {
			description: "客製化樣式",
			control: { type: "text" },
		},
		onClose: {
			description: "關閉事件",
		}
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
};

//==== 預設項目 ====//
export const TagDefaultStory = {
	name: "預設項目",
	args: {
		themeColor: 'primary',
		label:'Tag',
		prefix: '',
		closable: true,
		isDisabled: false,
		className: ''
	},
	render: (args) => ({
		components: { Tag },
		setup() {
			const showTag = ref(true); // 控制單一 Tag 是否顯示
			return {
				args,
				showTag,
			};
		},
		template: `
			<div style="display:flex; gap: 8px; flex-wrap: wrap">
				<Tag 
					v-if="showTag"
					 :themeColor="args.themeColor"
					 :label="args.label"
					 :prefix="args.prefix"
					 :closable="args.closable"
					 :isDisabled="args.isDisabled"
					 :className="args.className"
				     @onClose="() => showTag = false">
				</Tag>
			</div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'removable' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<Tag',
						`  v-if="showTag"`,
						`  themeColor="${args.themeColor}"`,
						`  label="${args.label}"`,
						`  prefix="${args.prefix}"`,
						`  :closable="${args.closable}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						`  @onClose="() => showTag = false">`,
						'</Tag>',
					].join('\n').trim();
				}
			}
		}
	},
};

//==== 主題色彩 ====//
export const TagMultiple = {
	name: "主題色彩",
	args: {
		// themeColor: '',
		// label:'',
		prefix: '',
		closable: true,
		isDisabled: false,
		className: ''
	},
	render: (args) => ({
		components: { Tag },
		setup() {
			const tagsData = ref([
				{ id: 1, themeColor: 'primary', label: 'primary' },
				{ id: 2, themeColor: 'secondary', label: 'secondary' },
				{ id: 3, themeColor: 'tertiary', label: 'tertiary' },
				{ id: 4, themeColor: 'success', label: 'success' },
				{ id: 5, themeColor: 'warning', label: 'warning' },
				{ id: 6, themeColor: 'error', label: 'error' },
				{ id: 7, themeColor: 'info', label: 'info' },
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
					 :themeColor="tag.themeColor"
					 :label="tag.label"
					 :prefix="args.prefix"
					 :closable="args.closable"
					 :isDisabled="args.isDisabled"
					 :className="args.className"
				     @onClose="removeTag(tag.id)"
				>
				</Tag>
			</div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'removable' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<Tag',
						`  themeColor="primary"`,
						`  label="primary"`,
						`  prefix="${args.prefix}"`,
						`  :closable="${args.closable}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						`  @onClose="removeTag(tag.id)">`,
						'</Tag>',
						'<Tag',
						`  themeColor="secondary"`,
						`  label="secondary"`,
						`  prefix="${args.prefix}"`,
						`  :closable="${args.closable}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						`  @onClose="removeTag(tag.id)">`,
						'</Tag>',
						'<Tag',
						`  themeColor="tertiary"`,
						`  label="tertiary"`,
						`  prefix="${args.prefix}"`,
						`  :closable="${args.closable}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						`  @onClose="removeTag(tag.id)">`,
						'</Tag>',
						'<Tag',
						`  themeColor="success"`,
						`  label="success"`,
						`  prefix="${args.prefix}"`,
						`  :closable="${args.closable}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						`  @onClose="removeTag(tag.id)">`,
						'</Tag>',
						'<Tag',
						`  themeColor="warning"`,
						`  label="warning"`,
						`  prefix="${args.prefix}"`,
						`  :closable="${args.closable}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						`  @onClose="removeTag(tag.id)">`,
						'</Tag>',
						'<Tag',
						`  themeColor="error"`,
						`  label="error"`,
						`  prefix="${args.prefix}"`,
						`  :closable="${args.closable}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						`  @onClose="removeTag(tag.id)">`,
						'</Tag>',
						'<Tag',
						`  themeColor="info"`,
						`  label="info"`,
						`  prefix="${args.prefix}"`,
						`  :closable="${args.closable}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						`  @onClose="removeTag(tag.id)">`,
						'</Tag>',
					].join('\n').trim();
				}
			}
		}
	},
};