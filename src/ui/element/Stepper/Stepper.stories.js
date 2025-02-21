import Stepper from "./Stepper.vue";
import Button from "@/ui/element/Button/Button.vue";
function formatDataSource(dataSource) {
	return `[
        ${dataSource.map(item => `{
            title: "${item.title}",
            desc: "${item.desc}",
            content: "${item.content}",
        }`).join(',\n        ')}
    ]`;
}
const dataSource =[
		{
			"title": "Step 1",
			"desc": "Description",
			"content": "Content for Step 1"
		},
		{
			"title": "Step 2",
			"desc": "Description",
			"content": "Content for Step 2"
		},
		{
			"title": "Step 3",
			"desc": "Description",
			"content": "Content for Step 3"
		}
	]

export default {
	title: "Component/Stepper",
	component: Stepper,
	tags: ["autodocs"],
	argTypes: {
		dataSource: {
			description: "步驟列表",
			control: {
				type: "object",
			},
			table: {
				type: {
					summary: '{ title: string; desc?: string | undefined; content?: Vue Component; }[]',
				}
			}
		},
		currentStep: {
			description: "當前步驟（從 0 開始）",
			control: {
				type: "number",
				min:0,
				max:2,
				step: 1
			},
		},
		direction: {
			description: "方向",
			control: { type: "select" },
			options: ["horizontal", "vertical"],
			table: {
				type: {
					summary: "horizontal | vertical "
				}
			}
		},
		className: {
			description: "客製化樣式",
			control: { type: "text" },
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "Stepper",
			description: {
				component: "Stepper 組件的呈現及說明。",
			},
		},
	},
};

//==== 預設項目 ====//
export const StepperDefault = {
	name: "預設項目",
	args: {
		dataSource:dataSource,
		currentStep: 1,
		direction: "horizontal",
		className: ""
	},
	render: (args) => ({
		components: { Stepper },
		setup() {
			return {
				args,
			};
		},
		template: `
			<Stepper
				:dataSource="args.dataSource"
				:currentStep="args.currentStep"
				:direction="args.direction"
				:className="args.className"
			></Stepper>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// exclude: ['status', 'src', 'imageAlt', 'username' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					const dataSourceString = formatDataSource(args.dataSource);
					return [
						`<script setup>`,
						`import Stepper from "@/ui/element/Stepper/Stepper.vue";`,
						`</script>`,
						'',
						'<template>',
						'  <Stepper',
						`      :dataSource='${dataSourceString}'`,
						`      ${args.currentStep !== undefined ? `:currentStep="${args.currentStep}"` : ""}`,
						`      ${args.direction ? `direction="${args.direction}"` : ""}`,
						`      ${args.className ? `className="${args.className}"` : ""}`,
						'  ></Stepper>',
						'</template>',
					].filter(Boolean).join('\n').trim();
				}
			}
		}
	},
};

//==== 橫向互動模式 ====//
export const StepperHorizontal = {
	name: "橫向互動模式",
	args: {
		dataSource:dataSource,
		currentStep: 1,
		direction: "horizontal",
		className: ""
	},
	render: (args) => ({
		components: { Stepper, Button },
		setup() {
			const updateArgs = (newArgs) => {
				Object.assign(args, newArgs);
			};

			const goToPreviousStep = () => {
				const newStep = Math.max(0, args.currentStep - 1);
				updateArgs({ currentStep: newStep });
			};

			const goToNextStep = () => {
				const newStep = Math.min(args.dataSource.length - 1, args.currentStep + 1);
				updateArgs({ currentStep: newStep });
			};
			return {
				args,
				goToPreviousStep,
				goToNextStep,
			};
		},
		template: `
			<Stepper
				:dataSource="args.dataSource"
				:currentStep="args.currentStep"
				:direction="args.direction"
				:className="args.className"
			>
			</Stepper>
			<div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">
				<Button variant="filled" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">
					Previous
				</Button>
				<Button variant="filled" :isDisabled="args.currentStep === args.dataSource.length - 1" @click="goToNextStep">
					Next
				</Button>
			</div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// exclude: ['status', 'src', 'imageAlt', 'username' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<script setup>`,
						`import { ref } from "vue";`,
						`import Stepper from "@/ui/element/Stepper/Stepper.vue";`,
						`import Button from "@/ui/element/Button/Button.vue";`,
						``,
						`const currentStep = ref(1);`,
						`const dataSource = [`,
						`  {`,
						`    title: "Step 1",`,
						`    desc: "Description",`,
						`    content: "Content for Step 1",`,
						`  },`,
						`  {`,
						`    title: "Step 2",`,
						`    desc: "Description",`,
						`    content: "Content for Step 2",`,
						`  },`,
						`  {`,
						`    title: "Step 3",`,
						`    desc: "Description",`,
						`    content: "Content for Step 3",`,
						`  }`,
						`];`,
						``,
						`const goToPreviousStep = () => {`,
						`  if (currentStep.value > 0) {`,
						`    currentStep.value -= 1;`,
						`  }`,
						`};`,
						``,
						`const goToNextStep = () => {`,
						`  if (currentStep.value < dataSource.length - 1) {`,
						`    currentStep.value += 1;`,
						`  }`,
						`};`,
						``,
						`</script>`,
						'',
						'<template>',
						'  <Stepper',
						`      :dataSource='dataSource'`,
						`      :currentStep="currentStep"`,
						`      ${args.direction ? `direction="${args.direction}"` : ""}`,
						`      ${args.className ? `className="${args.className}"` : ""}`,
						'  ></Stepper>',

						`  <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">`,
						`    <Button`,
						`      variant="filled"`,
						`      :isDisabled="currentStep === 0"`,
						`      @click="goToPreviousStep()"`,
						`    >`,
						`      Previous`,
						`    </Button>`,
						`  `,
						`    <Button`,
						`      variant="filled"`,
						`      :isDisabled="currentStep === dataSource.length - 1"`,
						`      @click="goToNextStep()"`,
						`    >`,
						`      Next`,
						`    </Button>`,
						`  </div>`,
						'</template>',
					].filter(Boolean).join('\n').trim();
				}
			}
		}
	},
};

//==== 直向互動模式 ====//
export const StepperVertical = {
	name: "直向互動模式",
	args: {
		dataSource: dataSource,
		currentStep: 1,
		direction: "vertical",
		className: ""
	},
	render: (args) => ({
		components: { Stepper, Button },
		setup() {
			const updateArgs = (newArgs) => {
				Object.assign(args, newArgs);
			};

			const goToPreviousStep = () => {
				const newStep = Math.max(0, args.currentStep - 1);
				updateArgs({ currentStep: newStep });
			};

			const goToNextStep = () => {
				const newStep = Math.min(args.dataSource.length - 1, args.currentStep + 1);
				updateArgs({ currentStep: newStep });
			};
			return {
				args,
				goToPreviousStep,
				goToNextStep,
			};
		},
		template: `
			<Stepper
				:dataSource="args.dataSource"
				:currentStep="args.currentStep"
				:direction="args.direction"
				:className="args.className"
			>
			</Stepper>
			<div style="display:flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">
				<Button variant="filled" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">
					Previous
				</Button>
				<Button variant="filled" :isDisabled="args.currentStep === args.dataSource.length - 1" @click="goToNextStep">
					Next
				</Button>
			</div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// exclude: ['status', 'src', 'imageAlt', 'username' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					// const dataSourceString = formatDataSource(args.dataSource);
					return [
						`<script setup>`,
						`import { ref } from "vue";`,
						`import Stepper from "@/ui/element/Stepper/Stepper.vue";`,
						`import Button from "@/ui/element/Button/Button.vue";`,
						``,
						`const currentStep = ref(1);`,
						`const dataSource = [`,
						`  {`,
						`    title: "Step 1",`,
						`    desc: "Description",`,
						`    content: "Content for Step 1",`,
						`  },`,
						`  {`,
						`    title: "Step 2",`,
						`    desc: "Description",`,
						`    content: "Content for Step 2",`,
						`  },`,
						`  {`,
						`    title: "Step 3",`,
						`    desc: "Description",`,
						`    content: "Content for Step 3",`,
						`  }`,
						`];`,
						``,
						`const goToPreviousStep = () => {`,
						`  if (currentStep.value > 0) {`,
						`    currentStep.value -= 1;`,
						`  }`,
						`};`,
						``,
						`const goToNextStep = () => {`,
						`  if (currentStep.value < dataSource.length - 1) {`,
						`    currentStep.value += 1;`,
						`  }`,
						`};`,
						``,
						`</script>`,
						'',
						'<template>',
						'  <Stepper',
						`      :dataSource='dataSource'`,
						`      :currentStep="currentStep"`,
						`      ${args.direction ? `direction="${args.direction}"` : ""}`,
						`      ${args.className ? `className="${args.className}"` : ""}`,
						'  ></Stepper>',

						`  <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">`,
						`    <Button`,
						`      variant="filled"`,
						`      :isDisabled="currentStep === 0"`,
						`      @click="goToPreviousStep()"`,
						`    >`,
						`      Previous`,
						`    </Button>`,
						`  `,
						`    <Button`,
						`      variant="filled"`,
						`      :isDisabled="currentStep === dataSource.length - 1"`,
						`      @click="goToNextStep()"`,
						`    >`,
						`      Next`,
						`    </Button>`,
						`  </div>`,
						'</template>',
					].filter(Boolean).join('\n').trim();
				}
			}
		}
	},
};