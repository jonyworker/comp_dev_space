import AvatarGroup from "./AvatarGroup.vue";
function formatDataSource(dataSource) {
	return `[
        ${dataSource.map(item => `{
            userName: "${item.userName}",
            src: "${item.src}",
        }`).join(',\n    ')}
    ]`;
}

export default {
	title: "Component/Avatar-Group",
	component: AvatarGroup,
	tags: ["autodocs"],
	argTypes: {
		dataSource: {
			description: "資料來源",
			control: {
				type: "object",
			},
			table: {
				type: {
					summary: '{ userName: string; src: string; }[]',
				}
			}
		},
		size: {
			description: "Avatar 尺寸",
			control: { type: "select" },
			options: ["xsmall", "small", "medium", "large"],
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
export const MultiAvatar = {
	name: "預設項目",
	args: {
		dataSource:[
			{
				userName: "Eason",
				src: "",
			},
			{
				userName: "KevinYang",
				src: "",
			},
			{
				userName: "AmosLee",
				src: "",
			},
			{
				userName: "JohnWu",
				src: "",
			},
			{
				userName: "PeterLiao",
				src: "",
			}
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
						'<AvatarGroup',
						`  :dataSource='${dataSourceString}'`,
						`  size="${args.size}"`,
						`  :limit="${args.limit}"`,
						`  class="${args.className}"`,
						'></AvatarGroup>'
					].join('\n').trim();
				}
			}
		}
	},
};
