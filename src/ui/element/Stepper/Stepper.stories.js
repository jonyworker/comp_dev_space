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

export default {
	title: "Component/Stepper",
	component: Stepper,
	tags: ["autodocs"],
	argTypes: {
		steps: {
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
			control: { type: "number" },
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
		'ded-step-content':{
			table: {
				disable: true,
			}
		}
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
		steps:[
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
		],
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
				:steps="args.steps"
				:currentStep="args.currentStep"
				:direction="args.direction"
				:className="args.className"
			>
			</Stepper>
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
					const dataSourceString = formatDataSource(args.steps);
					return [
						'<Stepper',
						`  :steps='${dataSourceString}'`,
						`  :currentStep="${args.currentStep}"`,
						`  direction="${args.direction}"`,
						`  className="${args.className}"`,
						'></Stepper>'
					].join('\n').trim();
				}
			}
		}
	},
};

//==== 橫向互動模式 ====//
export const StepperHorizontal = {
	name: "橫向互動模式",
	args: {
		steps:[
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
		],
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
				const newStep = Math.min(args.steps.length - 1, args.currentStep + 1);
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
				:steps="args.steps"
				:currentStep="args.currentStep"
				:direction="args.direction"
				:className="args.className"
			>
			</Stepper>
			<div style="display:flex; justify-content: center; gap: 8px;">
				<Button variant="contained" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">
					Previous
				</Button>
				<Button variant="contained" :isDisabled="args.currentStep === args.steps.length - 1" @click="goToNextStep">
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
					const dataSourceString = formatDataSource(args.steps);
					return [
						'<Stepper',
						`  :steps='${dataSourceString}'`,
						`  :currentStep="${args.currentStep}"`,
						`  direction="${args.direction}"`,
						`  className="${args.className}"`,
						'></Stepper>',
						'<div style="display:flex; justify-content: center; gap: 8px;">',
						'  <Button variant="contained" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">',
						'    Previous',
						'  </Button>',
						'  <Button variant="contained" :isDisabled="args.currentStep === args.steps.length - 1" @click="goToNextStep">',
						'    Next',
						'  </Button>',
						'</div>',
					].join('\n').trim();
				}
			}
		}
	},
};

//==== 直向互動模式 ====//
export const StepperVertical = {
	name: "直向互動模式",
	args: {
		steps:[
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
		],
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
				const newStep = Math.min(args.steps.length - 1, args.currentStep + 1);
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
				:steps="args.steps"
				:currentStep="args.currentStep"
				:direction="args.direction"
				:className="args.className"
			>
			</Stepper>
			<div style="display:flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">
				<Button variant="contained" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">
					Previous
				</Button>
				<Button variant="contained" :isDisabled="args.currentStep === args.steps.length - 1" @click="goToNextStep">
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
					const dataSourceString = formatDataSource(args.steps);
					return [
						'<Stepper',
						`  :steps='${dataSourceString}'`,
						`  :currentStep="${args.currentStep}"`,
						`  direction="${args.direction}"`,
						`  className="${args.className}"`,
						'></Stepper>',
						'<div style="display:flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">',
						'  <Button variant="contained" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">',
						'    Previous',
						'  </Button>',
						'  <Button variant="contained" :isDisabled="args.currentStep === args.steps.length - 1" @click="goToNextStep">',
						'    Next',
						'  </Button>',
						'</div>',
					].join('\n').trim();
				}
			}
		}
	},
};