import List from "@/ui/element/List/List.vue";
import ListItem from "@/ui/element/List/ListItem.vue";
import Icon from "@/ui/element/Icon/Icon.vue";

export default {
	title: "Component/List",
	component: List,
	tags: ["autodocs"],
	argTypes: {
		// List
		datasource: {
			description: "選項",
			control: { type: 'object' },
		},
		maxHeight: {
			description: "最大高度，自動顯示卷軸 (px)",
			control: { type: 'text' },
			table: {
				category: 'List',
			},
		},
		isMenu: {
			description: "是否為選單",
			control: { type: 'boolean' },
			table: {
				category: 'List',
			},
		},
		className: {
			description: "客製化樣式",
			control: { type: 'text' },
			table: {
				category: 'List',
			},
		},

		// ListItem
		label: {
			description: "標題。",
			control: "text",
			table: {
				category: 'ListItem',
			},
		},
		value: {
			description: "值。",
			control: "text",
			table: {
				category: 'ListItem',
			},
		},
		href: {
			description: "超連結。",
			control: {
				type: "select",
				// 使用 labels 來定義顯示文字
				labels: {
					null: "None",
					'https://www.google.com': "google",
					'https://developer.mozilla.org/en-US/#': "mdn",
				}
			},
			options: [
				null,
				'https://www.google.com',
				'https://developer.mozilla.org/en-US/#'
			],

			table: {
				category: 'ListItem',
			},
		},
		listPrefix: {
			description: "prefix 插槽。",
			control: "select",
			options: [ 'account_circle', 'folder', 'finger-print', 'None' ],
			mapping: {
				None: null,
			},
			table: {
				category: 'ListItem',
				defaultValue: { summary: 'HTML element' },
			},
		},
		listSuffix: {
			description: "suffix 插槽。",
			control: "select",
			options: [ 'account_circle', 'folder', 'finger-print', 'None' ],
			mapping: {
				None: null,
			},
			table: {
				category: 'ListItem',
				defaultValue: { summary: 'HTML element' },
			},
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
		//listGroup
		datasource:[
			{
				"content": {
					"label": "選項一",
					"value": "option1",
					"href": ""
				}
			},
			{
				"content": {
					"label": "選項二",
					"value": "option2",
					"href": ""
				}
			},
			{
				"content": {
					"label": "選項三",
					"value": "option3",
					"href": ""
				}
			},
		],
		maxHeight: '50px',
		isMenu: false,
		className: 'col-5',
		//listItem
		href:null,
		listPrefix: "folder",
		listSuffix: "None",

	},
	render: (args) => ({
		components: { List, ListItem, Icon },
		setup() {
			return {
				args,
			}
		},
		template: `
			<List
				:maxHeight="args.maxHeight"
				:isMenu="args.isMenu"
				:className="args.className"
			>
				<ListItem
					v-for="(item, index) in args.datasource"
					:key="index"
					:label="item.content.label"
					:value="item.content.value"
					:href="args.href"
				>
					<template #listPrefix v-if="args.listPrefix">
						<Icon :name="args.listPrefix" size="24"></Icon>
					</template>
					<template #listSuffix v-if="args.listSuffix">
						<Icon :name="args.listSuffix" size="24"></Icon>
					</template>
					
				</ListItem>
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
					return [
						'<List',
						`  :maxHeight="${args.maxHeight}"`,
						`  :isMenu="${args.isMenu}"`,
						`  :className="${args.className}"`,
						'>',
						args.datasource.map((item, index) => [
							'  <ListItem',
							`    :key="${index}"`,
							`    :label="${item.content.label}"`,
							`    :value="${item.content.value}"`,
							`    :href="${args.href}"`,
							'  >',
							args.listPrefix ? [
								'    <template #listPrefix>',
								`      <Icon name="${args.listPrefix}" size="24"></Icon>`,
								'    </template>'
							].join('\n') : '',
							args.listSuffix ? [
								'    <template #listSuffix>',
								`      <Icon name="${args.listSuffix}" size="24"></Icon>`,
								'    </template>'
							].join('\n') : '',
							'  </ListItem>'
						].join('\n')).join('\n'),
						'</List>'
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
		//listGroup
		datasource:[
			{
				"content": {
					"label": "選項一",
					"value": "option1",
					"href": ""
				}
			},
			{
				"content": {
					"label": "選項二",
					"value": "option2",
					"href": ""
				}
			},
			{
				"content": {
					"label": "選項三",
					"value": "option3",
					"href": ""
				}
			},
		],
		maxHeight: '50px',
		className: 'col-5',

		//listItem
		href:"None",
		listPrefix: "folder",
		listSuffix: "None",

	},
	render: (args) => ({
		components: { List, ListItem, Icon },
		setup() {
			return {
				args,
			}
		},
		template: `
			<List
				:maxHeight="args.maxHeight"
				:isMenu=true
				:className="args.className"
			>
				<ListItem
					v-for="(item, index) in args.datasource"
					:key="index"
					:label="item.content.label"
					:value="item.content.value"
					:href="args.href"
				>
					<template #listPrefix v-if="args.listPrefix">
						<Icon :name="args.listPrefix" size="24"></Icon>
					</template>
					<template #listSuffix v-if="args.listSuffix">
						<Icon :name="args.listSuffix" size="24"></Icon>
					</template>
					
				</ListItem>
			</List>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			exclude: ['default' ],
		},
	},
};