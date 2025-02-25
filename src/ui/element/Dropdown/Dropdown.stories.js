import Dropdown from "@/ui/element/Dropdown/Dropdown.vue";
function formatDataSource(dataSource) {
	return `[
    ${dataSource.map(item => `{
        label: '${item.label}',
        value: '${item.value}',
    }`).join(',\n    ')}
  ]`;
}

export default {
	title: 'Component/Dropdown',
	component: Dropdown,
	tags: ["autodocs"],
	argTypes: {
		dataSource: {
			description: "資料來源",
			control: { type: "object" },
			table: {
				type: {
					summary: '{ label: string; value: string; }[]',
				}
			}
		},
		label: {
			description: '標題',
			control: { type: 'text' },
		},
		placeholder: {
			description: '輸入提示',
			control: { type: 'text' },
		},
		size: {
			description: '輸入框尺寸',
			control: { type: 'select' },
			options: ['small', 'medium', 'large'],
			table: {
				type: {
					summary: "small | medium | large",
				}
			}
		},
		className: {
			description: '客製化樣式',
			control: { type: 'text' },
		},
		modelValue: {
			description: "輸入值",
			control: {
				type: 'select',
				labels: {
					"": "none",
					option1: "option1",
					option2: "option2",
					option3: "option3",
				}
			},
			options: ["", "option1", "option2", "option3" ],
			table: {
				type: { summary: 'string' },
				category: 'v-model',
			}
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: 'Dropdown',
			description: {
				component: 'Dropdown 組件的呈現及說明。',
			},
		},
	},
};

//==== 預設項目 ====//
export const DropdownDefault = {
	name: '預設項目',
	args: {
		dataSource: [
			{
				"label": "Option1",
				"value": "option1",
			},
			{
				"label": "Option2",
				"value": "option2",
			},
			{
				"label": "Option3",
				"value": "option3",
			}
		],
		label: "Label",
		placeholder: "Placeholder",
		size: "medium",
		className: "",
		modelValue: ""
	},
	render: (args) => ({
		components: { Dropdown },
		setup() {
			return {
				args,
			};
		},
		template: `
			<Dropdown 
				:dataSource="args.dataSource"
				:label="args.label"
				:placeholder="args.placeholder"
				:size="args.size"
				:className="args.className"
				v-model="args.modelValue"
			>
			</Dropdown>
            `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['objectFit', 'src', 'value', 'name' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					const dataSourceString = formatDataSource(args.dataSource);
					return [
						`<script setup>`,
						'import { ref } from "vue";',
						`import { Dropdown } from "@ded-wds-vue/ui";`,
						'const modelValue = ref("");',
						`</script>`,
						'',
						'<template>',
						'  <Dropdown',
						`    :dataSource="${dataSourceString}"`,
						`    ${args.label ? `label="${args.label}"` : ""}`,
						`    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`,
						`    ${args.size ? `size="${args.size}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`    v-model="modelValue"`,
						'  ></Dropdown>',
						'</template>',
					].filter(Boolean).join('\n').trim();
				}
			}
		}
	},
};