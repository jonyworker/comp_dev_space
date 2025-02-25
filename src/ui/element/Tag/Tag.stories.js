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
				type: "select",},
			options: [
				"primary",
				"secondary",
				"neutral",
				"info",
				"success",
				"warning",
				"error",
			],
			table: {
				type: {
					summary: "primary | secondary | neutral | info | success | warning | error "
				}
			}
		},
		variant: {
			description: "外觀樣式",
			required: true,
			control: { type: "select" },
			options: ["filled", "ghost"],
			table: {
				type: {
					summary: "filled | ghost ",
				}
			}
		},
		label: {
			description: "標籤文字",
			control: { type: "text" },
		},
		href: {
			description: "超連結",
			control: { type: "text" },
		},
		prefix: {
			description: "圖示",
			control: {
				type: "select",
				labels: {
					"": "none",
					SvgAccount: "SvgAccount",
					SvgSearch: "SvgSearch",
					SvgVisibility: "SvgVisibility",
					SvgVisibilityOff: "SvgVisibilityOff",
				}
			},
			options: [ "", "SvgAccount", "SvgSearch", "SvgVisibility", "SvgVisibilityOff"],
		},
		closable: {
			description: "摸到時顯示關閉圖示",
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
				component: "標籤組件的呈現及說明。",
			},
		},
	},
};

//==== 預設項目 ====//
export const TagDefaultStory = {
	name: "預設項目",
	args: {
		themeColor: 'primary',
		variant: "filled",
		label:'Tag',
		href: '',
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
			<Tag 
				v-if="showTag"
				 :themeColor="args.themeColor"
				 :variant="args.variant"
				 :label="args.label"
				 :href="args.href"
				 :prefix="args.prefix"
				 :closable="args.closable"
				 :isDisabled="args.isDisabled"
				 :className="args.className"
			     @onClose="() => showTag = false">
			</Tag>
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
						`<script setup>`,
						`import { ref } from "vue";`,
						`import { Tag } from "@ded-wds-vue/ui";`,
						`const showTag = ref(true);`,
						`</script>`,
						'',
						'<template>',
						'<Tag',
						`  v-if="showTag"`,
						`  ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`,
						`  ${args.variant ? `variant="${args.variant}"` : ""}`,
						`  ${args.label ? `label="${args.label}"` : ""}`,
						`  ${args.href ? `href="${args.href}"` : ""}`,
						`  ${args.prefix ? `prefix="${args.prefix}"` : ""}`,
						`  ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`,
						`  ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
						`  ${args.className ? `className="${args.className}"` : ""}`,
						`  @onClose="() => showTag = false">`,
						'</Tag>',
						'</template>',
					].filter(Boolean).join('\n').trim();
				}
			}
		}
	},
};

//==== 附加元素 ====//
export const TagPrefixStory = {
	name: "附加元素",
	args: {
		themeColor: 'primary',
		variant: "filled",
		label:'Tag',
		href: '',
		prefix: 'SvgAccount',
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
			<Tag 
				v-if="showTag"
				 :themeColor="args.themeColor"
				 :variant="args.variant"
				 :label="args.label"
				 :href="args.href"
				 prefix="SvgAccount"
				 :closable="args.closable"
				 :isDisabled="args.isDisabled"
				 :className="args.className"
			     @onClose="() => showTag = false">
			</Tag>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'removable' ],
			exclude: [ 'prefix' ]
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<script setup>`,
						`import { ref } from "vue";`,
						`import { Tag } from "@ded-wds-vue/ui";`,
						`const showTag = ref(true);`,
						`</script>`,
						'',
						'<template>',
						'<Tag',
						`  v-if="showTag"`,
						`  ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`,
						`  ${args.variant ? `variant="${args.variant}"` : ""}`,
						`  ${args.label ? `label="${args.label}"` : ""}`,
						`  ${args.href ? `href="${args.href}"` : ""}`,
						`  ${args.prefix ? `prefix="${args.prefix}"` : ""}`,
						`  ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`,
						`  ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
						`  ${args.className ? `className="${args.className}"` : ""}`,
						`  @onClose="() => showTag = false">`,
						'</Tag>',
						'</template>',
					].filter(Boolean).join('\n').trim();
				}
			}
		}
	},
};

//==== 外觀樣式 ====//
export const TagVariantStory = {
	name: "外觀樣式",
	args: {
		themeColor: 'primary',
		variant: "",
		label:'Primary',
		href: '',
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
					variant="filled"
					:label="args.label"
					:href="args.href"
					:prefix="args.prefix"
					:closable="args.closable"
					:isDisabled="args.isDisabled"
					:className="args.className"
					@onClose="() => showTag = false">
				</Tag>
				<Tag
					v-if="showTag"
					:themeColor="args.themeColor"
					variant="ghost"
					:label="args.label"
					:href="args.href"
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
			exclude: ['variant']
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<script setup>`,
						`import { ref } from "vue";`,
						`import { Tag } from "@ded-wds-vue/ui";`,
						`const showTag = ref(true);`,
						`</script>`,
						'',
						'<template>',
						'  <Tag',
						`    v-if="showTag"`,
						`    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`,
						`    variant="filled"`,
						`    ${args.label ? `label="${args.label}"` : ""}`,
						`    ${args.href ? `href="${args.href}"` : ""}`,
						`    ${args.prefix ? `prefix="${args.prefix}"` : ""}`,
						`    ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`,
						`    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`    @onClose="() => showTag = false">`,
						'  </Tag>',
						'  <Tag',
						`    v-if="showTag"`,
						`    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`,
						`    variant="ghost"`,
						`    ${args.label ? `label="${args.label}"` : ""}`,
						`    ${args.href ? `href="${args.href}"` : ""}`,
						`    ${args.prefix ? `prefix="${args.prefix}"` : ""}`,
						`    ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`,
						`    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`    @onClose="() => showTag = false">`,
						'  </Tag>',
						'</template>',
					].filter(Boolean).join('\n').trim();
				}
			}
		}
	},
};

//==== 主題色彩 ====//
export const TagMultiple = {
	name: "主題色彩",
	args: {
		// themeColor: 'primary',
		variant: "filled",
		// label:'',
		href: '',
		prefix: '',
		closable: true,
		isDisabled: false,
		className:''
	},
	render: (args) => ({
		components: { Tag },
		setup() {
			const tagsData = ref([
				{ id: 1, themeColor: 'primary', label: 'Primary' },
				{ id: 2, themeColor: 'secondary', label: 'Secondary' },
				{ id: 3, themeColor: 'neutral', label: 'Neutral' },
				{ id: 4, themeColor: 'info', label: 'Info' },
				{ id: 5, themeColor: 'success', label: 'Success' },
				{ id: 6, themeColor: 'warning', label: 'Warning' },
				{ id: 7, themeColor: 'error', label: 'Error' },

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
				     :variant="args.variant"
					 :label="tag.label"
					 :href="args.href"
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
			exclude: ['themeColor', 'label'],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<script setup>`,
						`import { ref } from "vue";`,
						`import { Tag } from "@ded-wds-vue/ui";`,
						`const showTag = ref(true);`,
						`</script>`,
						'',
						'<template>',
						'  <Tag',
						`    v-if="showTag"`,
						`    themeColor="primary"`,
						`    ${args.variant ? `variant="${args.variant}"` : ""}`,
						`    label="Primary"`,
						`    ${args.prefix ? `prefix="${args.prefix}"` : ""}`,
						`    ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`,
						`    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`    @onClose="() => showTag = false">`,
						'  </Tag>',
						'  <Tag',
						`    v-if="showTag"`,
						`    themeColor="secondary"`,
						`    ${args.variant ? `variant="${args.variant}"` : ""}`,
						`    label="Secondary"`,
						`    ${args.href ? `href="${args.href}"` : ""}`,
						`    ${args.prefix ? `prefix="${args.prefix}"` : ""}`,
						`    ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`,
						`    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`    @onClose="() => showTag = false">`,
						'  </Tag>',
						'  <Tag',
						`    v-if="showTag"`,
						`    themeColor="neutral"`,
						`    ${args.variant ? `variant="${args.variant}"` : ""}`,
						`    label="Neutral"`,
						`    ${args.href ? `href="${args.href}"` : ""}`,
						`    ${args.prefix ? `prefix="${args.prefix}"` : ""}`,
						`    ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`,
						`    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`    @onClose="() => showTag = false">`,
						'  </Tag>',
						'  <Tag',
						`    v-if="showTag"`,
						`    themeColor="info"`,
						`    ${args.variant ? `variant="${args.variant}"` : ""}`,
						`    label="Info"`,
						`    ${args.href ? `href="${args.href}"` : ""}`,
						`    ${args.prefix ? `prefix="${args.prefix}"` : ""}`,
						`    ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`,
						`    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`    @onClose="() => showTag = false">`,
						'  </Tag>',
						'  <Tag',
						`    v-if="showTag"`,
						`    themeColor="success"`,
						`    ${args.variant ? `variant="${args.variant}"` : ""}`,
						`    label="Success"`,
						`    ${args.href ? `href="${args.href}"` : ""}`,
						`    ${args.prefix ? `prefix="${args.prefix}"` : ""}`,
						`    ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`,
						`    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`    @onClose="() => showTag = false">`,
						'  </Tag>',
						'  <Tag',
						`    v-if="showTag"`,
						`    themeColor="warning"`,
						`    ${args.variant ? `variant="${args.variant}"` : ""}`,
						`    label="Warning"`,
						`    ${args.href ? `href="${args.href}"` : ""}`,
						`    ${args.prefix ? `prefix="${args.prefix}"` : ""}`,
						`    ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`,
						`    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`    @onClose="() => showTag = false">`,
						'  </Tag>',
						'  <Tag',
						`    v-if="showTag"`,
						`    themeColor="error"`,
						`    ${args.variant ? `variant="${args.variant}"` : ""}`,
						`    label="Error"`,
						`    ${args.href ? `href="${args.href}"` : ""}`,
						`    ${args.prefix ? `prefix="${args.prefix}"` : ""}`,
						`    ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`,
						`    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`    @onClose="() => showTag = false">`,
						'  </Tag>',
						'</template>',
					].filter(Boolean).join('\n').trim();
				}
			}
		}
	},
};