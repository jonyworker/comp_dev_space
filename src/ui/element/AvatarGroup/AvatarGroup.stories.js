import AvatarGroup from "@/ui/element/AvatarGroup/AvatarGroup.vue";
function formatDataSource(dataSource) {
	return `[
        ${dataSource.map(item => `{
            userName: "${item.userName}"${item.caption ? `,
            caption: "${item.caption}"` : ''}${item.src ? `,
            src: "${item.src}"` : ''}
        }`).join(',\n        ')}
    ]`;
}

export default {
	title: "Component/Avatar-Group",
	component: AvatarGroup,
	tags: ["autodocs"],
	argTypes: {
		dataSource: {
			description: "資料來源",
			control: { type: "object" },
			table: {
				type: {
					summary: '{ userName: string; caption: string; src: string; }[]',
				}
			}
		},
		size: {
			description: "尺寸",
			control: { type: "select" },
			options: [ "small", "medium", "large" ],
			table: {
				type: {
					summary: " small | medium | large"
				}
			}
		},
		limit: {
			description: "展開數量上限",
			control: { type: "number",
				min:0,
				max:5,
				step: 1 },
		},
		className: {
			description: "客製化樣式",
			control: { type: "text" },
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "AvatarGroup",
			description: {
				component: "AvatarGroup 組件的呈現及說明。",
			},
		},
	},
};

//==== 預設項目 ====//
export const MultiAvatarStory = {
	name: "預設項目",
	args: {
		dataSource:[
			{
				userName: 'eason',
				caption: 'Eason',
			},
			{
				userName: 'KevinYang',
				caption: 'Kevin',
			},
			{
				userName: 'AmosLee',
				caption: 'Amos',
				src: 'https://picsum.photos/320/240',
			},
			{
				userName: 'JohnWu',
				caption: 'John',
				src: 'https://picsum.photos/320/340',
			},
			{
				userName: 'Peter',
				caption: 'Peter',
				src: 'https://picsum.photos/320/340',
			},
		],
		size: "large",
		limit: 2,
		className: ""
	},
	render: (args) => ({
		components: { AvatarGroup },
		setup() {
			return {
				args,
			};
		},
		template: `
			<AvatarGroup 
				:dataSource="args.dataSource"
				:size="args.size"
				:limit="args.limit"
				:className="args.className"
			></AvatarGroup>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			// exclude: ['status', 'src', 'imageAlt', 'username' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					const dataSourceString = formatDataSource(args.dataSource);
					return [
						`<script setup>`,
						`import { AvatarGroup } from "@ded-wds-vue/ui";`,
						`</script>`,
						'',
						'<template>',
						'  <AvatarGroup',
						`    :dataSource='${dataSourceString}'`,
						`    ${args.size ? `size="${args.size}"` : ""}`,
						`    ${args.limit ? `:limit="${args.limit}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						'  ></AvatarGroup>',
						'</template>',
					].filter(Boolean).join('\n').trim();
				}
			}
		}
	},
};
