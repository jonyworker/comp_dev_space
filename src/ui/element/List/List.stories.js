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

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Component/List",
	component: List,
	tags: ["autodocs"],
	argTypes: {
		dataSource: {
			description: "資料來源",
			control: { type: 'object' },
		},
		hasOutline: {
			description: "是否為選單",
			control: { type: 'boolean' },
		},
		className: {
			description: "客製化樣式",
			control: { type: 'text' },
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "List",
			description: {
				component: "List 組件的呈現及說明。",
			},
		},
	},
};


//==== 預設項目 ====//
export const ListDefaultStory = {
	name: "預設項目",
	args: {
		dataSource:[
			{
				"label": "Option1",
				"value": "option1",
				"href": "",
				"prefix": "home"
			},
			{
				"label": "Option2",
				"value": "option2",
				"href": "#",
				"prefix": "users"
			},
			{
				"label": "Option3",
				"value": "option3",
				"href": "#",
				"prefix": "folder"
			},
		],
		hasOutline: false,
		className: '',
	},
	render: (args) => ({
		components: { List, ListItem },
		setup() {
			return {
				args,
			}
		},
		template: `
			<List
				:hasOutline="args.hasOutline"
				:className="args.className"
			>
				<ListItem
					v-for="(item, index) in args.dataSource"
					:key="index"
					:label="item.label"
					:value="item.value"
					:href="item.href"
					:prefix="item.prefix"
				></ListItem>
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
						`    className="${args.className}"`,
						'>',
						'</List>',
					].join('\n').trim();
				}
			}
		}
	},
};

//==== 選單樣式 ====//
export const ListTypeStory = {
	name: "選單樣式",
	args: {
		dataSource:[
			{
				"content": {
					"label": "選項一",
					"value": "option1",
					"href": "",
					"prefix": "folder"
				}
			},
			{
				"content": {
					"label": "選項二",
					"value": "option2",
					"href": "",
					"prefix": "home"
				}
			},
			{
				"content": {
					"label": "選項三",
					"value": "option3",
					"href": "www.google.com",
					"prefix": "folder"
				}
			},
		],
		className: 'col-5',
	},
	render: (args) => ({
		components: { List },
		setup() {
			return {
				args,
			}
		},
		template: `
			<List
				:dataSource="args.dataSource"
				:hasOutline="true"
				:className="args.className"
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
						`    :hasOutline="true"`,
						`    className="${args.className}"`,
						'>',
						'</List>',
					].join('\n').trim();
				}
			}
		}
	},
};