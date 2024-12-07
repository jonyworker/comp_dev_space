import Accordion from "./Accordion.vue";
function formatDataSource(dataSource) {
	return `[
        ${dataSource.map(item => `{
            id: "${item.id}",
            label: "${item.label}",
            detail: "${item.detail}",
        }`).join(',\n    ')}
    ]`;
}

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
					summary: "{ id: string; label: string; detail: string; }[]",
				}
			}
		},
		isOpenAll: {
			description: "是否全部展開",
			control: { type: "boolean" },
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
				"id": "1",
				"label": "Q1. What is Vue?",
				"detail": "Vue is a progressive JavaScript framework for building user interfaces."
			},
			{
				"id": "2",
				"label": "Q2. What are the features of Vue?",
				"detail": "The features of Vue include reactive data binding, component-based architecture, directives, and a virtual DOM."
			},
			{
				"id": "3",
				"label": "Q3. What is included in the Vue ecosystem?",
				"detail": "The Vue ecosystem includes tools like Vue Router (for routing), Pinia (for state management), and Vite (for fast and modern development)."
			},
			{
				"id": "4",
				"label": "Q4. What are the advantages of using Vue?",
				"detail": "The advantages of using Vue include a gentle learning curve, high flexibility, small size, and comprehensive documentation, making it easy for developers to gradually adopt and integrate into existing projects."
			}
		],
		isOpenAll: false,
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
                :isOpenAll="args.isOpenAll"
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
						`  :isOpenAll='${args.isOpenAll}'`,
						`  className="${args.className}"`,
						'></Accordion>',
					].join('\n').trim();
				},
			}

		}
	},
};
