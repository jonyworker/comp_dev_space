import Title from "@/ui/element/Title/Title.vue";

export default {
	title: "Component/Typography/Title",
	component: Title,
	tags: ["autodocs"],
	argTypes: {
		themeColor: {
			description: "主題顏色",
			control: {
				type: "select",
				labels: {
					"": "none",
					primary: "primary",
					secondary: "secondary",
					neutral: "neutral",
					info: "info",
					success: "success",
					warning: "warning",
					error: "error",
				}
			},
			options: ["", "primary", "secondary", "neutral", "info", "success", "warning", "error" ],
			table: {
				type: {
					summary: "none | primary | secondary | neutral | info | success | warning | error"
				},
				defaultValue: {
					summary: "none"
				}
			}
		},
		level: {
			description: "標題等級",
			control: { type: "select" },
			options: [0, 1, 2, 3, 4, 5, 6],
			table: {
				type: {
					summary: '0 | 1 | 2 | 3 | 4 | 5 | 6'
				}
			}
		},
		className: {
			description: "客製化樣式",
			control: { type: "text" },
		},
		default: {
			description: "標題內容",
			control: { type: "text" },
		}
	},
	parameters: {
		// 自動文件
		docs: {
			title: "Title",
			description: {
				component: "標題組件的呈現及說明。",
			},
		},
	},
};

//==== 預設項目 ====//
export const HeadingDefault = {
	name: "預設項目",
	args: {
		themeColor: "",
		level: 1,
		className: "",
		default: "Title",
	},
	render: (args) => ({
		components: { Title },
		setup() {
			return {
				args,
			};
		},
		template: `
            <Title
				:themeColor="args.themeColor"
                :level="args.level"
                :className="args.className"
            >{{ args.default }}</Title>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			// exclude:['default']
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<script setup>`,
						`import { Title } from "@ded-wds-vue/ui";`,
						`</script>`,
						'',
						'<template>',
						`  <Title`,
						`    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`,
						`    ${args.level !== undefined ? `:level="${args.level}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  >`,
						`    ${args.default || ""}`,
						`  </Title>`,
						'</template>',
					].filter(Boolean).join('\n').trim();
				}
			}
		}
	},
};

//==== 標題大小 ====//
export const HeadingSizeDefault = {
	name: "標題大小",
	args: {
		themeColor: "",
		// level: 1,
		className: "",
		default: "Title",
	},
	render: (args) => ({
		components: { Title },
		setup() {
			return {
				args,
			};
		},
		template: `
			<div style="display:flex; flex-direction: column; gap:8px">
				<Title
					:level=1
					:className="args.className"
				>Level:1 {{ args.default }}</Title>
				<Title
					:level=2
					:className="args.className"
				>Level:2 {{ args.default }}</Title>
				<Title
					:level=3
					:className="args.className"
				>Level:3 {{ args.default }}</Title>
				<Title
					:level=4
					:className="args.className"
				>Level:4 {{ args.default }}</Title>
				<Title
					:level=5
					:className="args.className"
				>Level:5 {{ args.default }}</Title>
				<Title
					:level=6
					:className="args.className"
				>Level:6 {{ args.default }}</Title>
				<Title
					:level=0
					:className="args.className"
				>Level:0 {{ args.default }}</Title>
			</div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			exclude:['level']
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<script setup>`,
						`import { Title } from "@ded-wds-vue/ui";`,
						`</script>`,
						'',
						'<template>',
						`  <Title`,
						`    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`,
						`    :level="1"`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  >`,
						`    Level:1 Title`,
						`  </Title>`,
						`  <Title`,
						`    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`,
						`    :level="2"`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  >`,
						`    Level:2 Title`,
						`  </Title>`,
						`  <Title`,
						`    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`,
						`    :level="3"`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  >`,
						`    Level:3 Title`,
						`  </Title>`,
						`  <Title`,
						`    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`,
						`    :level="4"`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  >`,
						`    Level:4 Title`,
						`  </Title>`,
						`  <Title`,
						`    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`,
						`    :level="5"`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  >`,
						`    Level:5 Title`,
						`  </Title>`,
						`  <Title`,
						`    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`,
						`    :level="6"`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  >`,
						`    Level:6 Title`,
						`  </Title>`,
						`  <Title`,
						`    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`,
						`    :level="0"`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  >`,
						`    Level:0 Title`,
						`  </Title>`,
						'</template>',
					].filter(Boolean).join('\n').trim();
				}
			}
		}
	},
};

//==== 主題色彩 ====//
export const HeadingColorDefault = {
	name: "主題色彩",
	args: {
		// themeColor: "",
		level: 3,
		className: "",
		default: "Title",
	},
	render: (args) => ({
		components: { Title },
		setup() {
			return {
				args,
			};
		},
		template: `
            <div style="display:flex; gap:8px">
	            <Title
		            themeColor="primary"
		            :level="args.level"
		            :className="args.className"
	            >{{ args.default }}</Title>
	            <Title
		            themeColor="secondary"
		            :level="args.level"
		            :className="args.className"
	            >{{ args.default }}</Title>
	            <Title
		            themeColor="neutral"
		            :level="args.level"
		            :className="args.className"
	            >{{ args.default }}</Title>
	            <Title
		            themeColor="info"
		            :level="args.level"
		            :className="args.className"
	            >{{ args.default }}</Title>
	            <Title
		            themeColor="success"
		            :level="args.level"
		            :className="args.className"
	            >{{ args.default }}</Title>
	            <Title
		            themeColor="warning"
		            :level="args.level"
		            :className="args.className"
	            >{{ args.default }}</Title>
	            <Title
		            themeColor="error"
		            :level="args.level"
		            :className="args.className"
	            >{{ args.default }}</Title>
            </div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			exclude:['themeColor'],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<script setup>`,
						`import { Title } from "@ded-wds-vue/ui";`,
						`</script>`,
						'',
						'<template>',
						`  <Title`,
						`    themeColor="primary"`,
						`    ${args.level !== undefined ? `:level="${args.level}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  >`,
						`    ${args.default || ""}`,
						`  </Title>`,
						`  <Title`,
						`    themeColor="secondary"`,
						`    ${args.level !== undefined ? `:level="${args.level}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  >`,
						`    ${args.default || ""}`,
						`  </Title>`,
						`  <Title`,
						`    themeColor="neutral"`,
						`    ${args.level !== undefined ? `:level="${args.level}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  >`,
						`    ${args.default || ""}`,
						`  </Title>`,
						`  <Title`,
						`    themeColor="info"`,
						`    ${args.level !== undefined ? `:level="${args.level}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  >`,
						`    ${args.default || ""}`,
						`  </Title>`,
						`  <Title`,
						`    themeColor="success"`,
						`    ${args.level !== undefined ? `:level="${args.level}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  >`,
						`    ${args.default || ""}`,
						`  </Title>`,
						`  <Title`,
						`    themeColor="warning"`,
						`    ${args.level !== undefined ? `:level="${args.level}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  >`,
						`    ${args.default || ""}`,
						`  </Title>`,
						`  <Title`,
						`    themeColor="error"`,
						`    ${args.level !== undefined ? `:level="${args.level}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  >`,
						`    ${args.default || ""}`,
						`  </Title>`,
						'</template>',
					].filter(Boolean).join('\n').trim();
				}
			}
		}
	},
};