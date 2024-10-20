import List from "@/ui/element/List/List.vue";
import ListItem from "@/ui/element/ListItem/ListItem.vue";
import Icon from "@/ui/element/Icon/Icon.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Design System/List",
	component: List,
	subcomponents: { ListItem },
	tags: ["autodocs"],
	argTypes: {
		options: {
			description: "選項",
			control: "object",
		},
		isMenu: {
			description: "是否為選單",
			control: "boolean",
		},
		className: {
			description: "客製化樣式",
			control: "text",
		}
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

// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
// args: { onClick: fn() },
};

//==== List 基礎樣式 ====//
export const ListDefault = {
	name: "List 基礎樣式",
	args: {
		isMenu: true,
		className: 'col-5',
		options:[
			{
				"content": {
					"label": "選項一",
					"value": "option1",
					"href": "https://www.google.com"
				}
			},
			{
				"content": {
					"label": "選項二",
					"value": "option2",
					"href": "https://www.google.com"
				}
			},
			{
				"content": {
					"label": "選項三",
					"value": "option3",
					"href": "https://www.google.com"
				}
			}
		]
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
				:isMenu="args.isMenu"
				:className="args.className"
			>
				<ListItem
					v-for="(item, index) in args.options"
					:key="index"
					:label="item.content.label"
					:value="item.content.value"
					:href="item.content.href"
				>
					<template #listPrefix>
						<Icon name="account_circle" size="24"></Icon>
					</template>
					<template #listSuffix>
						<Icon name="arrow_down" size="24"></Icon>
					</template>
				</ListItem>
			</List>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};



//--- JONY VERSION START ---//

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
// export default {
// 	title: "Design System/List",
// 	component: List,
// 	subcomponents: { ListItem },
// 	tags: ["autodocs"],
// 	argTypes: {
// 		options: {
// 			description: "ListItem 的選項。",
// 			control: "object",
// 		},
// 		isMenu: {
// 			description: "是否顯示 List 的外框。",
// 			control: "boolean",
// 		},
// 		className: {
// 			description: "客製化樣式",
// 			control: "text",
// 		}
// 	},
// 	parameters: {
// 		// 自動文件
// 		docs: {
// 			title: "List",
// 			description: {
// 				component: "List 組件的呈現及說明。",
// 			},
// 		},
// 	},
//
// // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
// // args: { onClick: fn() },
// };
//
// //==== List 基礎樣式 ====//
// export const ListDefault = {
// 	name: "List 基礎樣式",
// 	args: {
// 		isMenu: true,
// 		className: 'col-5',
// 		options:[
// 			{
// 				"content": {
// 					"label": "選項一",
// 					"value": "option1",
// 					"href": "https://www.google.com"
// 				}
// 			},
// 			{
// 				"content": {
// 					"label": "選項二",
// 					"value": "option2",
// 					"href": "https://www.google.com"
// 				}
// 			},
// 			{
// 				"content": {
// 					"label": "選項三",
// 					"value": "option3",
// 					"href": "https://www.google.com"
// 				}
// 			}
// 		]
// 	},
// 	render: (args) => ({
// 		components: { List, ListItem, Icon },
// 		setup() {
// 			return {
// 				args,
// 			}
// 		},
// 		template: `
// 			<List
// 				:isMenu="args.isMenu"
// 				:className="args.className"
// 			>
// 				<ListItem
// 					v-for="(item, index) in args.options"
// 					:key="index"
// 					:label="item.content.label"
// 					:value="item.content.value"
// 					:href="item.content.href"
// 				>
// 					<template #listPrefix>
// 						<Icon name="account_circle" size="24"></Icon>
// 					</template>
// 					<template #listSuffix>
// 						<Icon name="arrow_down" size="24"></Icon>
// 					</template>
// 				</ListItem>
// 			</List>
//         `,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			// include: ['themeColor', 'label', 'value', 'name' ],
// 		},
// 	},
// };

//--- JONY VERSION END ---//