import Slider from "@/ui/element/slider/Slider.vue";

export default {
	title: "Component/Slider",
	component: Slider,
	tags: ["autodocs"],
	argTypes: {
		min: {
			description: "最小值",
			control: { type: "number" },
		},
		max: {
			description: "最大值",
			control: { type: "number" },
		},
		step: {
			description: "步進值",
			control: { type: "number" },
		},
		label: {
			description: "單位",
			control: { type: "text" },
		},
		isShowRange: {
			description: "是否顯示範圍",
			control: { type: "boolean" },
		},
		isShowCurrValue: {
			description: "是否顯示目前值",
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
		updateWidth: {
			table: { disable: true }
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
			title: "Slider",
			description: {
				component: "Slider組件的呈現及說明。",
			},
		},
	},
};

//==== 預設項目 ====//
export const SliderDefault = {
	name: "預設項目",
	args: {
		// themeColor: 'primary',
		min: -100,
		max: 100,
		step: 1,
		label: "℃",
		isShowRange: true,
		isShowCurrValue: true,
		isDisabled: false,
		className: '',
		modelValue: 8
	},
	render: (args) => ({
		components: { Slider },
		setup() {
			return {
				args,
			};
		},
		template: `
			<slider
				:min="args.min"
				:max="args.max"
				:step="args.step"
				:label="args.label"
				:isShowRange="args.isShowRange"
				:isShowCurrValue="args.isShowCurrValue"
				:isDisabled="args.isDisabled"
				:className="args.className"
				v-model="args.modelValue"
			></slider>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			// exclude:['updateWidth']
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<script setup>`,
						'import { ref } from "vue";',
						`import { Slider } from "@ded-wds-vue/ui";`,
						`const modelValue = ref("${args.modelValue}");`,
						`</script>`,
						'',
						'<template>',
						`  <Slider`,
						`    ${args.min !== undefined ? `:min="${args.min}"` : ""}`,
						`    ${args.max !== undefined ? `:max="${args.max}"` : ""}`,
						`    ${args.step !== undefined ? `:step="${args.step}"` : ""}`,
						`    ${args.label ? `label="${args.label}"` : ""}`,
						`    ${args.isShowRange !== undefined ? `:isShowRange="${args.isShowRange}"` : ""}`,
						`    ${args.isShowCurrValue !== undefined ? `:isShowCurrValue="${args.isShowCurrValue}"` : ""}`,
						`    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`    v-model="modelValue"`,
						`  ></Slider>`,
						'</template>',
					].filter(Boolean).join("\n").trim();
				}
			}
		}
	},
};

//==== 顯示目前值 ====//
export const SliderCurrent = {
	name: "顯示目前值",
	args: {
		// themeColor: 'primary',
		min: -100,
		max: 100,
		step: 1,
		label: "℃",
		isShowRange: false,
		isDisabled: false,
		className: '',
		modelValue: 8
	},
	render: (args) => ({
		components: { Slider },
		setup() {
			return {
				args,
			};
		},
		template: `
			<slider
				:min="args.min"
				:max="args.max"
				:step="args.step"
				:label="args.label"
				:isShowRange="args.isShowRange"
				:isShowCurrValue="true"
				:isDisabled="args.isDisabled"
				:className="args.className"
				v-model="args.modelValue"
			></slider>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			// exclude:['updateWidth']
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<script setup>`,
						'import { ref } from "vue";',
						`import { Slider } from "@ded-wds-vue/ui";`,
						`const modelValue = ref("${args.modelValue}");`,
						`</script>`,
						'',
						'<template>',
						`  <Slider`,
						`    ${args.min !== undefined ? `:min="${args.min}"` : ""}`,
						`    ${args.max !== undefined ? `:max="${args.max}"` : ""}`,
						`    ${args.step !== undefined ? `:step="${args.step}"` : ""}`,
						`    ${args.label ? `label="${args.label}"` : ""}`,
						`    ${args.isShowRange !== undefined ? `:isShowRange="${args.isShowRange}"` : ""}`,
						`    :isShowCurrValue="true"`,
						`    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`    v-model="modelValue"`,
						`  ></Slider>`,
						'</template>',
					].filter(Boolean).join("\n").trim();
				}
			}
		}
	},
};

//==== 顯示範圍 ====//
export const SliderAround = {
	name: "顯示範圍",
	args: {
		min: -100,
		max: 100,
		step: 1,
		label: "℃",
		isShowCurrValue: false,
		isDisabled: false,
		className: '',
		modelValue: 8
	},
	render: (args) => ({
		components: { Slider },
		setup() {
			return {
				args,
			};
		},
		template: `
			<slider
				:min="args.min"
				:max="args.max"
				:step="args.step"
				:label="args.label"
				:isShowRange="true"
				:isShowCurrValue="args.isShowCurrValue"
				:isDisabled="args.isDisabled"
				:className="args.className"
				v-model="args.modelValue"
			></slider>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			// exclude:['updateWidth']
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<script setup>`,
						'import { ref } from "vue";',
						`import { Slider } from "@ded-wds-vue/ui";`,
						`const modelValue = ref("${args.modelValue}");`,
						`</script>`,
						'',
						'<template>',
						`  <Slider`,
						`    ${args.min !== undefined ? `:min="${args.min}"` : ""}`,
						`    ${args.max !== undefined ? `:max="${args.max}"` : ""}`,
						`    ${args.step !== undefined ? `:step="${args.step}"` : ""}`,
						`    ${args.label ? `label="${args.label}"` : ""}`,
						`    :isShowRange="true"`,
						`    ${args.isShowCurrValue !== undefined ? `:isShowCurrValue="${args.isShowCurrValue}"` : ""}`,
						`    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`    v-model="modelValue"`,
						`  ></Slider>`,
						'</template>',
					].filter(Boolean).join("\n").trim();
				}
			}
		}
	},
};
