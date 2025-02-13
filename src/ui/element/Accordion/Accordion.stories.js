import Accordion from "./Accordion.vue";
import Title from "@/ui/element/Title/Title.vue";
import Button from "@/ui/element/Button/Button.vue";
import { h } from "vue";
function formatDataSource(dataSource) {
	return `[${dataSource.map((item) => 
		`{
		id: "${item.id}",
		label: ${typeof item.label === "function" ?
		`"()=>(h(${JSON.stringify(item.label()?.type.__name)}, ${JSON.stringify(item.label()?.props || {})}, ${JSON.stringify(item.label()?.children || '')})"`
		: `"${item.label}"`},
		detail: ${typeof item.detail === "function" ?
			`"() => [\n${item.detail().map( vnode =>
				`  h(${typeof vnode.type === 'string' ? `"${vnode.type}"` : vnode.type.__name || '"AnonymousComponent"'}, ` +
				`${JSON.stringify(vnode.props || {})}, ` +
				`${Array.isArray(vnode.children) ? `[\n    ${vnode.children.map(child =>
					typeof child === 'object' ? `h("${child.type}", ${JSON.stringify(child.props || {})}, ${JSON.stringify(child.children || '')})`
						: JSON.stringify(child)
				).join(',\n        ')}\n  ]` : JSON.stringify(vnode.children || '')})`
			).join(',\n')}\n]"`
			: `"${item.detail}"`}
	}`).join(",\n")}]`;
}
const dataSource = [
	{
		id: "1",
		label: () => h(Title, { themeColor: 'primary' }, "What is Vue?"),
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
		label: () => h(Title, { themeColor: 'primary' }, "What are the features of Vue?"),
		detail: () => [
			h('p', {}, "The features of Vue include reactive data binding, component-based architecture, directives, and a virtual DOM."),
		],
	},
	{
		id: "3",
		label: () => h(Title, { themeColor: 'primary' }, "What is included in the Vue ecosystem?"),
		detail: () => [
			h('p', {}, "The Vue ecosystem includes tools like Vue Router (for routing), Pinia (for state management), and Vite (for fast and modern development)."),
		],
	},
	{
		id: "4",
		label: () => h(Title, { themeColor: 'primary' }, "What are the advantages of using Vue?"),
		detail: () => [
			h('p', {}, "The advantages of using Vue include a gentle learning curve, high flexibility, small size, and comprehensive documentation, making it easy for developers to gradually adopt and integrate into existing projects."),
		],
	},
]
const oneRecord = [
	{
		id: '1',
		label: () => h(Title, { themeColor: 'primary' }, "What is Vue?"),
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
];

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
			description: "前置元素",
			control: {
				type: "select",
				labels: {
					"": "none",
					primary: "SvgInfo",
				}
			},
			options: ["", "SvgInfo" ],
			table: {
				type: {
					summary: "string"
				},
				// defaultValue: {
				// 	summary: "none"
				// }
			}
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
		components: { Accordion, Title, Button, h },
		setup() {
			return {
				args,
				h
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
		dataSource: oneRecord,
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
			<div style="display:flex; flex-direction: column; gap: 16px">
				<Accordion
					:dataSource="args.dataSource"
					:prefix="args.prefix"
					borderStyle="highlight"
					:isSmallSize="args.isSmallSize"
					:isOpenAll="args.isOpenAll"
					:className="args.className"
				></Accordion>
				<Accordion
					:dataSource="args.dataSource"
					:prefix="args.prefix"
					borderStyle="solid"
					:isSmallSize="args.isSmallSize"
					:isOpenAll="args.isOpenAll"
					:className="args.className"
				></Accordion>
			</div>
        `,
	}),
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			exclude:['borderStyle']
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
						`  borderStyle='highlight'`,
						`  :isSmallSize='${args.isSmallSize}'`,
						`  :isOpenAll='${args.isOpenAll}'`,
						`  className="${args.className}"`,
						'></Accordion>',
						'<Accordion',
						`  :dataSource='${dataSourceString}'`,
						`  prefix='${args.prefix}'`,
						`  borderStyle='solid'`,
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

//==== 元件尺寸 ====//
export const AccordionSizeStory = {
	name: "元件尺寸",
	args: {
		dataSource: oneRecord,
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
			<div style="display:flex; flex-direction: column; gap: 16px">
				<Accordion
					:dataSource="args.dataSource"
					:prefix="args.prefix"
					:borderStyle="args.borderStyle"
					:isSmallSize="false"
					:isOpenAll="args.isOpenAll"
					:className="args.className"
				></Accordion>
				<Accordion
					:dataSource="args.dataSource"
					:prefix="args.prefix"
					:borderStyle="args.borderStyle"
					:isSmallSize="true"
					:isOpenAll="args.isOpenAll"
					:className="args.className"
				></Accordion>
			</div>
        `,
	}),
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			exclude:['isSmallSize']
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
						`  :isSmallSize='false'`,
						`  :isOpenAll='${args.isOpenAll}'`,
						`  className="${args.className}"`,
						'></Accordion>',
						'<Accordion',
						`  :dataSource='${dataSourceString}'`,
						`  prefix='${args.prefix}'`,
						`  borderStyle='${args.borderStyle}'`,
						`  :isSmallSize='true'`,
						`  :isOpenAll='${args.isOpenAll}'`,
						`  className="${args.className}"`,
						'></Accordion>',
					].join('\n').trim();
				},
			}
		}
	},
};
