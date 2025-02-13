import { action } from '@storybook/addon-actions';
import List from "@/ui/element/List/List.vue";
import ListItem from "@/ui/element/List/ListItem.vue";
function formatDataSource(dataSource) {
	return `[
	    ${dataSource.map(item => `{
	        label: '${item.label}',
	        value: '${item.value}',
	        href: '${item.href}',
	        prefix: '${item.prefix}',
	    }`).join(',\n    ')}
	]`;
}
const dataSource = [
	{
		"label": "Option1",
		"value": "option1",
		"href": "",
		"prefix": "SvgAccount"
	},
	{
		"label": "Option2",
		"value": "option2",
		"href": "#",
		"prefix": "SvgAccount"
	},
	{
		"label": "Option3",
		"value": "option3",
		"href": "#",
		"prefix": "SvgAccount"
	},
]

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Component/List",
	component: List,
	tags: ["autodocs"],
	argTypes: {
		dataSource: {
			description: "資料來源",
			control: { type: 'object' },
			table: {
				type: {
					summary: '{ label: string; value: string; href: string; prefix: string;}[]',
				}
			}
		},
		hasOutline: {
			description: "是否為選單",
			control: { type: 'boolean' },
		},
		hasDivider: {
			description: '是否有分隔線',
			control: { type: "boolean" },
		},
		className: {
			description: "客製化樣式",
			control: { type: 'text' },
		},
		onSelect: {
			description: "選擇項目時觸發的事件",
			control: false,
			table: {
				category: 'EVENTS',
			}
		}
	},
	parameters: {
		// 自動文件
		docs: {
			title: "List",
			description: {
				component: "清單組件的呈現及說明。",
			},
		},
	},
};

//==== 預設項目 ====//
export const ListDefaultStory = {
	name: "預設項目",
	args: {
		dataSource: dataSource,
		hasOutline: false,
		hasDivider: false,
		className: '',
	},
	render: (args) => ({
		components: { List, ListItem },
		setup() {
			return {
				args,
				handleItemClick: action("onSelect"),
			}
		},
		template: `
			<List
				:dataSource="args.dataSource"
				:hasOutline="args.hasOutline"
				:hasDivider="args.hasDivider"
				:className="args.className"
				@onSelect="handleItemClick"
			>
				
			</List>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			exclude: ['default' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					const dataSourceString = formatDataSource(args.dataSource);
					return [
						'<List',
						`    :dataSource="${dataSourceString}"`,
						`    :hasOutline="${args.hasOutline}"`,
						`    :hasDivider="${args.hasDivider}"`,
						`    className="${args.className}"`,
						`    @onSelect="handleItemClick"`,
						'>',
						'</List>',
					].join('\n').trim();
				}
			}
		}
	},
};

//==== 清單樣式-外框 ====//
export const ListOutLineStory = {
	name: "清單樣式-外框",
	args: {
		dataSource:dataSource,
		hasDivider: false,
		className: 'col-5',
	},
	render: (args) => ({
		components: { List },
		setup() {
			return {
				args,
				handleItemClick: action("onSelect"),
			}
		},
		template: `
			<List
				:dataSource="args.dataSource"
				:hasOutline=true
				:hasDivider="args.hasDivider"
				:className="args.className"
				@onSelect="handleItemClick"
			>
			</List>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			exclude: ['hasOutline', 'default' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					const dataSourceString = formatDataSource(args.dataSource);
					return [
						'<List',
						`    :dataSource="${dataSourceString}"`,
						`    :hasOutline="true"`,
						`    :hasDivider="${args.hasDivider}"`,
						`    className="${args.className}"`,
						`    @onSelect="handleItemClick"`,
						'>',
						'</List>',
					].join('\n').trim();
				}
			}
		}
	},
};

//==== 清單樣式-分隔線 ====//
export const ListDividerStory = {
	name: "清單樣式-分隔線",
	args: {
		dataSource: dataSource,
		hasOutline: false,
		// hasDivider: false,
		className: '',
	},
	render: (args) => ({
		components: { List, ListItem },
		setup() {
			return {
				args,
				handleItemClick: action("onSelect"),
			}
		},
		template: `
			<List
				:dataSource="args.dataSource"
				:hasOutline="args.hasOutline"
				:hasDivider="true"
				:className="args.className"
				@onSelect="handleItemClick"
			>
				
			</List>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			exclude: ['hasDivider', 'default' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					const dataSourceString = formatDataSource(args.dataSource);
					return [
						'<List',
						`    :dataSource="${dataSourceString}"`,
						`    :hasOutline="${args.hasOutline}"`,
						`    :hasDivider="true"`,
						`    className="${args.className}"`,
						`    @onSelect="handleItemClick"`,
						'>',
						'</List>',
					].join('\n').trim();
				}
			}
		}
	},
};