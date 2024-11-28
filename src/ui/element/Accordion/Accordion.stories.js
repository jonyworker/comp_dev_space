import Accordion from "./Accordion.vue";

export default {
	title: "Component/Accordion",
	component: Accordion,
	tags: ["autodocs"],
	argTypes: {
		dataSource: {
			description: "資料來源",
			control: { type: "object" },
			table: {
				type: {
					summary: "{ title: string; content: string[]; }[]",
				}
			}
		},
		className: {
			description: '客製化樣式',
			control: { type: 'text' },
		},
	},
	parameters: {
		docs: {
			title: "Accordion",
			description: {
				component: "Accordion 組件的呈現及說明。",
			},
		},
	},
};

//==== 預設項目 ====//
export const AccordionDefault = {
	name: "預設項目",
	args: {
		dataSource: [
			{
				title: "Accordion title",
				contents: [
					"Accordion content"
				],
			},
		],
		className: ""
	},
	render: (args) => ({
		components: { Accordion },
		setup() {
			return {
				args,
			};
		},
		template: `
            <Accordion
                :dataSource="args.dataSource"
                :className="args.className"
            ></Accordion>
        `,
	}),
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					const formattedDataSource = JSON.stringify(args.dataSource, null, 2).replace(/'/g, "\\'");
					return [
						'<Accordion',
						`  :dataSource='${formattedDataSource}'`,
						`  :className="${args.className}"`,
						'></Accordion>',
					].join('\n').trim();
				},
			}

		}
	},
};

//==== 群組樣式 ====//
export const AccordionGroup = {
	name: "群組樣式",
	args: {
		dataSource: [
			{
				title: "Accordion title 1",
				contents: [
					"Accordion content 1"
				],
			},
			{
				title: "Accordion title 2",
				contents: [
					"Accordion content 2"
				],
			},
			{
				title: "Accordion title 3",
				contents: [
					"Accordion content 3"
				],
			},
		],
		className: ""
	},
	render: (args) => ({
		components: { Accordion },
		setup() {
			return {
				args,
			};
		},
		template: `
			<Accordion
				:dataSource="args.dataSource"
				:className="args.className"
			></Accordion>
        `,
	}),
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					const formattedDataSource = JSON.stringify(args.dataSource, null, 2).replace(/'/g, "\\'");
					return [
						'<Accordion',
						`  :dataSource='${formattedDataSource}'`,
						`  :className="${args.className}"`,
						'></Accordion>',
					].join('\n').trim();
				},
			}

		}
	},
};