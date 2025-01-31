import Accordion from "./Accordion.vue";
import Title from "@/ui/element/Title/Title.vue";
import Button from "@/ui/element/Button/Button.vue";
import { h } from "vue";
function formatDataSource(dataSource) {
	return `[${dataSource.map((item) => `{
		id: "${item.id}",
		label: ${typeof item.label === "function" ? '"[h Function]"' : `"${item.label}"`},
		detail: ${typeof item.detail === "function" ? '"[h Function]"' : `"${item.detail}"`}
	}`).join(",\n")}]`;
}
const dataSource = [
	{
		id: "1",
		label: () => h(Title, { level: 4, themeColor: 'primary' }, "What is Vue?"),
		detail: () => [
			h('p', {}, "Vue is a progressive JavaScript framework for building user interfaces."),
			h(Button, {
				themeColor: 'primary',
				variant: 'soft',
				suffix: 'SvgArrowDown',
				size: 'small',
				width: 'fit',
				borderWidth: 'sm',
				radius: 'sm',
				onClick: () => {
					alert('Button clicked!');
				}
			}, 'Button')
		],
	},
	{
		id: "2",
		label: () => h(Title, { level: 4, themeColor: 'primary' }, "Q2. What are the features of Vue?"),
		detail: () => [
			h('p', {}, "The features of Vue include reactive data binding, component-based architecture, directives, and a virtual DOM."),
		],
	},
	{
		id: "3",
		label: () => h(Title, { level: 4, themeColor: 'primary' }, "Q3. What is included in the Vue ecosystem?"),
		detail: () => [
			h('p', {}, "The Vue ecosystem includes tools like Vue Router (for routing), Pinia (for state management), and Vite (for fast and modern development)."),
		],
	},
	{
		id: "4",
		label: () => h(Title, { level: 4, themeColor: 'primary' }, "Q4. What are the advantages of using Vue?"),
		detail: () => [
			h('p', {}, "The advantages of using Vue include a gentle learning curve, high flexibility, small size, and comprehensive documentation, making it easy for developers to gradually adopt and integrate into existing projects."),
		],
	},
]

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
					summary: "{ id: string; label: string | Function; detail: string | Function; }[]",
				}
			}
		},
		prefix: {
			description:"前置元素",
			control: { type: 'text' },
		},
		borderStyle: {
			description: "邊框樣式",
			control: { type: "select" },
			options: [
				"solid",
				"highlight",
			],
			table: {
				type: {
					summary: "solid | highlight "
				}
			}
		},
		isSmallSize: {
			description: "是否為小尺寸",
			control: { type: "boolean" },
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
				component: "折疊選單組件的呈現及說明。",
			},
		},
	},
};

//==== 預設項目 ====//
export const AccordionDefault = {
	name: "預設項目",
	args: {
		dataSource: dataSource,
		prefix:"SvgInfo",
		borderStyle:"highlight",
		isSmallSize: false,
		isOpenAll: false,
		className: ""
	},
	render: (args) => ({
		components: { Accordion, Title, Button },
		setup() {
			return {
				args,
			};
		},
		template: `
            <Accordion
                :dataSource="args.dataSource"
                :prefix="args.prefix"
                :borderStyle="args.borderStyle"
                :isSmallSize="args.isSmallSize"
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
					const dataSourceString = formatDataSource(args.dataSource);
					return [
						'<Accordion',
						`  :dataSource='${dataSourceString}'`,
						`  prefix='${args.prefix}'`,
						`  borderStyle='${args.borderStyle}'`,
						`  :isSmallSize='${args.isSmallSize}'`,
						`  :isOpenAll='${args.isOpenAll}'`,
						`  className="${args.className}"`,
						'></Accordion>',
					].join('\n').trim();
				},
			}
		}
	},
};

//==== 邊框樣式 ====//
export const AccordionBorderStyle = {
	name: "邊框樣式",
	args: {
		dataSource: dataSource,
		prefix:"SvgInfo",
		borderStyle:"solid",
		isSmallSize: false,
		isOpenAll: false,
		className: ""
	},
	render: (args) => ({
		components: { Accordion, Title, Button },
		setup() {
			return {
				args,
			};
		},
		template: `
            <Accordion
                :dataSource="args.dataSource"
                :prefix="args.prefix"
                :borderStyle="args.borderStyle"
                :isSmallSize="args.isSmallSize"
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
					const dataSourceString = formatDataSource(args.dataSource);
					return [
						'<Accordion',
						`  :dataSource='${dataSourceString}'`,
						`  prefix='${args.prefix}'`,
						`  borderStyle='${args.borderStyle}'`,
						`  :isSmallSize='${args.isSmallSize}'`,
						`  :isOpenAll='${args.isOpenAll}'`,
						`  className="${args.className}"`,
						'></Accordion>',
					].join('\n').trim();
				},
			}
		}
	},
};

//==== 小尺寸 ====//
export const AccordionSmall = {
	name: "小尺寸",
	args: {
		dataSource: dataSource,
		prefix:"SvgInfo",
		borderStyle:"solid",
		isSmallSize: true,
		isOpenAll: false,
		className: ""
	},
	render: (args) => ({
		components: { Accordion, Title, Button },
		setup() {
			return {
				args,
			};
		},
		template: `
            <Accordion
                :dataSource="args.dataSource"
                :prefix="args.prefix"
                :borderStyle="args.borderStyle"
                :isSmallSize="args.isSmallSize"
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
					const dataSourceString = formatDataSource(args.dataSource);
					return [
						'<Accordion',
						`  :dataSource='${dataSourceString}'`,
						`  prefix='${args.prefix}'`,
						`  borderStyle='${args.borderStyle}'`,
						`  :isSmallSize='${args.isSmallSize}'`,
						`  :isOpenAll='${args.isOpenAll}'`,
						`  className="${args.className}"`,
						'></Accordion>',
					].join('\n').trim();
				},
			}
		}
	},
};
