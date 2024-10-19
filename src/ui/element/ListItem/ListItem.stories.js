import ListItem from "@/ui/element/ListItem/ListItem.vue";


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Design System/ListItem",
	component: ListItem,
	tags: ["autodocs"],
	argTypes: {
		label: {
			description: "ListItem 標題。",
			control: "text"
		},
		value: {
			description: "ListItem 的值。",
			control: "text",
		},
		href: {
			description: "ListItem 的超連結。",
			control: "select",
			options: [
				'None',
				'https://www.google.com',
				'https://developer.mozilla.org/en-US/#'
			],

		},
		listPrefix: {
			description: "ListItem 的 prefix 插槽。",
			control: "select",
			options: [
				'None',
				'Account',
				'Avatar',
				'ArrowDownIcon'
			],
			mapping: {
				'None': null,
				'Account': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 49 48" width="24"' +
					' height="24"><mask id="a" width="49" height="48" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type: alpha;"><path fill="currentColor" d="M.5 0h48v48H.5z"></path></mask><g mask="url(#a)"><path fill="currentColor" d="M11.6 35.25q3.15-2.2 6.25-3.375T24.5 30.7t6.675 1.175 6.275 3.375q2.2-2.7 3.125-5.45T41.5 24q0-7.25-4.875-12.125T24.5 7t-12.125 4.875T7.5 24q0 3.05.95 5.8t3.15 5.45m12.89-9.75q-2.89 0-4.865-1.985-1.975-1.983-1.975-4.875 0-2.89 1.985-4.865 1.983-1.975 4.874-1.975t4.866 1.984q1.975 1.984 1.975 4.876 0 2.89-1.985 4.865-1.983 1.975-4.874 1.975m.034 18.5q-4.124 0-7.774-1.575t-6.375-4.3-4.3-6.363T4.5 23.986q0-4.135 1.575-7.761a20.4 20.4 0 0 1 4.3-6.35q2.726-2.725 6.363-4.3Q20.377 4 24.515 4q4.136 0 7.761 1.575a20.4 20.4 0 0 1 6.35 4.3 20.4 20.4 0 0 1 4.3 6.352q1.575 3.625 1.575 7.75 0 4.124-1.575 7.773t-4.3 6.375a20.4 20.4 0 0 1-6.352 4.3Q28.649 44 24.524 44m-.024-3q2.75 0 5.375-.8t5.175-2.8q-2.55-1.8-5.2-2.75a15.8 15.8 0 0 0-5.35-.95q-2.7 0-5.35.95t-5.2 2.75q2.55 2 5.175 2.8t5.375.8m0-18.5q1.7 0 2.775-1.075t1.075-2.775-1.075-2.775T24.5 14.8t-2.775 1.075-1.075 2.775 1.075 2.775T24.5 22.5"></path></g></svg>',
				'Avatar': '<div class="avatar-container avatar-container-xsmall"><div class="avatar avatar-circle"><span class="avatar-text text-xsmall">TE</span></div></div>',
				'ArrowDownIcon': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960" width="24" height="24"><path d="M480-344 240-584l56-56 184 184 184-184 56 56z"></path></svg>',
			},
			table: {
				defaultValue: { summary: 'HTML element' },
			},
		},
		listSuffix: {
			description: "ListItem 的 suffix 插槽。",
			control: "select",
			options: [
				'None',
				'Account',
				'Avatar',
				'ArrowDownIcon'
			],
			mapping: {
				'None': null,
				'Account': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 49 48" width="24"' +
					' height="24"><mask id="a" width="49" height="48" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type: alpha;"><path fill="currentColor" d="M.5 0h48v48H.5z"></path></mask><g mask="url(#a)"><path fill="currentColor" d="M11.6 35.25q3.15-2.2 6.25-3.375T24.5 30.7t6.675 1.175 6.275 3.375q2.2-2.7 3.125-5.45T41.5 24q0-7.25-4.875-12.125T24.5 7t-12.125 4.875T7.5 24q0 3.05.95 5.8t3.15 5.45m12.89-9.75q-2.89 0-4.865-1.985-1.975-1.983-1.975-4.875 0-2.89 1.985-4.865 1.983-1.975 4.874-1.975t4.866 1.984q1.975 1.984 1.975 4.876 0 2.89-1.985 4.865-1.983 1.975-4.874 1.975m.034 18.5q-4.124 0-7.774-1.575t-6.375-4.3-4.3-6.363T4.5 23.986q0-4.135 1.575-7.761a20.4 20.4 0 0 1 4.3-6.35q2.726-2.725 6.363-4.3Q20.377 4 24.515 4q4.136 0 7.761 1.575a20.4 20.4 0 0 1 6.35 4.3 20.4 20.4 0 0 1 4.3 6.352q1.575 3.625 1.575 7.75 0 4.124-1.575 7.773t-4.3 6.375a20.4 20.4 0 0 1-6.352 4.3Q28.649 44 24.524 44m-.024-3q2.75 0 5.375-.8t5.175-2.8q-2.55-1.8-5.2-2.75a15.8 15.8 0 0 0-5.35-.95q-2.7 0-5.35.95t-5.2 2.75q2.55 2 5.175 2.8t5.375.8m0-18.5q1.7 0 2.775-1.075t1.075-2.775-1.075-2.775T24.5 14.8t-2.775 1.075-1.075 2.775 1.075 2.775T24.5 22.5"></path></g></svg>',
				'Avatar': '<div class="avatar-container avatar-container-xsmall"><div class="avatar avatar-circle"><span class="avatar-text text-xsmall">TE</span></div></div>',
				'ArrowDownIcon': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960" width="24" height="24"><path d="M480-344 240-584l56-56 184 184 184-184 56 56z"></path></svg>',
			},
			table: {
				defaultValue: { summary: 'HTML element' },
			},
		},
		className: {
			description: "客製化樣式",
			control: "text",
		}
	},
	parameters: {
		// 自動文件
		docs: {
			title: "ListItem",
			description: {
				component: "ListItem 組件的呈現及說明。",
			},
		},
	},

// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
// args: { onClick: fn() },
};

//==== ListItem 基礎樣式 ====//
export const ListItemDefault = {
	name: "ListItem 觸發樣式",
	args: {
		label: '標題一',
		value: 'title1',
		href: 'None',
		listPrefix: 'Account',
		listSuffix: 'None',
		className: 'col-5'
	},
	render: (args) => ({
		components: { ListItem },
		setup() {
			return {
				args,
			}
		},
		template: `
			<ListItem
				:label="args.label"
				:value="args.value"
				:href="args.href"
				:className="args.className"
			>
				<template #listPrefix>
					<div style="height: 24px" v-html="args.listPrefix"></div>
				</template>
				<template #listSuffix>
					<div style="height: 24px" v-html="args.listSuffix"></div>
				</template>
			</ListItem>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};