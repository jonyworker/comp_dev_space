import SliderControl from "./SliderControl.vue";

export default {
	title: "Component/Slider-Control",
	component: SliderControl,
	tags: ["autodocs"],
	argTypes: {
		min: {
			description: '最小值',
			control: { type: 'number' },
		},
		max: {
			description: '最大值',
			control: { type: 'number' },
		},
		step: {
			description: '步進值',
			control: { type: 'number' },
		},
		label: {
			description: '單位',
			control: { type: 'text' },
		},
		prefix: {
			description: '前置元素',
			control: {
				type: "select",
				labels: {
					"": "None",
					increase: "increase",
					decrease: "decrease",
				}
			},
			options: ['', 'increase', 'decrease'],
		},
		suffix: {
			description: '後置元素',
			control: {
				type: "select",
				labels: {
					"": "None",
					increase: "increase",
					decrease: "decrease",
				}
			},
			options: ['', 'increase', 'decrease'],
		},
		isDisabled: {
			description: '是否禁用',
			control: { type: 'boolean' },
		},
		className: {
			description: '客製化樣式',
			control: { type: 'text' },
		},
		modelValue: {
			description: "輸入值",
			control: { type: 'number' },
			table: {
				type: { summary: 'number' },
				category: 'v-model',
				// defaultValue: { summary: '""' },
			}
		}
	},
	parameters: {
		// 自動文件
		docs: {
			title: "SliderControl",
			description: {
				component: "按鈕滑桿輸入組件的呈現及說明。",
			},
		},
	},
};

//==== 預設項目 ====//
export const SliderButton = {
	name: "預設項目",
	args: {
		min: -100,
		max: 100,
		step: 1,
		label: "℃",
		prefix: "decrease",
		suffix: "increase",
		isDisabled: false,
		className: '',
		modelValue: 8,
	},
	render: (args) => ({
		components: { SliderControl },
		setup() {
			return {
				args,
			};
		},
		template: `
			<SliderControl
				:min="args.min"
				:max="args.max"
				:step="args.step"
				:label="args.label"
				:prefix="args.prefix"
				:suffix="args.suffix"
				:isDisabled="args.isDisabled"
				:className="args.className"
				v-model="args.modelValue"
			></SliderControl>
		`,
	}),
	parameters: {
		controls: {
			// include or exclude keys as needed
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<script setup>`,
						'import { ref } from "vue";',
						`import { SliderControl } from "@ded-wds-vue/ui";`,
						`const modelValue = ref(${args.modelValue});`,
						`</script>`,
						'',
						'<template>',
						`  <SliderControl`,
						`    ${args.min !== undefined ? `:min="${args.min}"` : ""}`,
						`    ${args.max !== undefined ? `:max="${args.max}"` : ""}`,
						`    ${args.step !== undefined ? `:step="${args.step}"` : ""}`,
						`    ${args.label ? `label="${args.label}"` : ""}`,
						`    ${args.prefix ? `prefix="${args.prefix}"` : ""}`,
						`    ${args.suffix ? `suffix="${args.suffix}"` : ""}`,
						`    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`    v-model="modelValue"`,
						`  ></SliderControl>`,
						'</template>',
					].filter(Boolean).join("\n").trim();
				}
			}
		}
	},
};