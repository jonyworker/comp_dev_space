import Avatar from "./Avatar.vue";

export default {
	title: "Component/Avatar",
	component: Avatar,
	tags: ["autodocs"],
	argTypes: {
		shape: {
			description: "形狀",
			control: { type: "select" },
			options: ["circle", "square"],
			table: {
				type: {
					summary: "circle | square"
				}
			}
		},
		size: {
			description: "尺寸",
			control: { type: "select" },
			options: ["xsmall", "small", "medium", "large"],
			table: {
				type: {
					summary: "xsmall | small | medium | large"
				}
			}
		},
		status: {
			description: "狀態",
			control: { type: "select" },
			options: ["none", "online", "idle", "busy", "offline"],
			table: {
				type: {
					summary: "none | online | idle | busy | offline"
				}
			}
		},
		userName: {
			description: "使用者名稱",
			control: { type: "text" },
		},
		
		src: {
			description: "圖片連結",
			control: { type: "text" },
		},
		alt: {
			description: "圖片描述",
			control: { type: "text" },
		},

		limit: {
			description: "在 AvatarGroup 中控制顯示的 Avatar 數量上限",
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
			title: "Avatar頭像",
			description: {
				component: "Avatar 組件的呈現及說明。",
			},
		},
	},
};

//==== 預設項目 ====//
export const DefaultAvatar = {
	name: "預設項目",
	args: {
		shape: "circle",
		size: "large",
		status: "none",
		src: "https://picsum.photos/320/240",
		alt: "alt text",
		userName: "JonyWu",
		className: ""
	},
	render: (args) => ({
		components: { Avatar },
		setup() {
			return {
				args,
			};
		},
		template: `
            <Avatar
	            :shape="args.shape"
	            :size="args.size"
	            :userName="args.userName"
	            :status="args.status"
	            :src="args.src"
	            :alt="args.alt"
	            :className="args.className"
            ></Avatar>
        `,
	}),
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			exclude: ['limit']
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<Avatar',
						`  shape="${args.shape}"`,
						`  size="${args.size}"`,
						`  status="${args.status}"`,
						`  src="${args.src}"`,
						`  alt="${args.alt}"`,
						`  userName="${args.userName}"`,
						`  className="${args.className}"`,
						'></Avatar>',
					].join('\n').trim();
				}
			}
		}
	},
};

//==== 頭像形狀 ====//
export const AvatarShape = {
	name: "頭像形狀",
	args: {
		size: "large",
		status: "none",
		src: "https://picsum.photos/320/240",
		alt: "alt text",
		userName: "JonyWu",
		className: ""
	},
	render: (args) => ({
		components: { Avatar },
		setup() {
			return {
				args,
			};
		},
		template: `
			<div style="display: flex; gap: 32px; align-items: flex-end">
				<Avatar
					shape="circle"
					:size="args.size"
					status="online"
					:src="args.src"
					:alt="args.alt"
					:userName="args.userName"
					:className="args.className"
				></Avatar>
				<Avatar
					shape="square"
					:size="args.size"
					status="idle"
					:src="args.src"
					:alt="args.alt"
					:userName="args.userName"
					:className="args.className"
				></Avatar>
			</div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			exclude: ['shape', 'limit']
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<Avatar',
						`  shape="circle"`,
						`  size="${args.size}"`,
						`  status="${args.status}"`,
						`  src="${args.src}"`,
						`  alt="${args.alt}"`,
						`  userName="${args.userName}"`,
						`  className="${args.className}"`,
						'></Avatar>',
						'<Avatar',
						`  shape="square"`,
						`  size="${args.size}"`,
						`  status="${args.status}"`,
						`  src="${args.src}"`,
						`  alt="${args.alt}"`,
						`  userName="${args.userName}"`,
						`  className="${args.className}"`,
						'></Avatar>',
					].join('\n').trim();
				}
			}
		}
	},
};

//==== 頭像狀態 ====//
export const AvatarStatus = {
	name: "頭像狀態",
	args: {
		shape: "circle",
		size: "large",
		src: "https://picsum.photos/320/240",
		alt: "alt text",
		userName: "JonyWu",
		className: ""
	},
	render: (args) => ({
		components: { Avatar },
		setup() {
			return {
				args,
			};
		},
		template: `
			<div style="display: flex; gap: 32px; align-items: flex-end">
				<Avatar
					:shape="args.shape"
					:size="args.size"
					status="none"
					:src="args.src"
					:alt="args.alt"
					:userName="args.userName"
				></Avatar>
				<Avatar
					:shape="args.shape"
					:size="args.size"
					status="online"
					:src="args.src"
					:alt="args.alt"
					:userName="args.userName"
				></Avatar>
				<Avatar
					:shape="args.shape"
					:size="args.size"
					status="idle"
					:src="args.src"
					:alt="args.alt"
					:userName="args.userName"
				></Avatar>
				<Avatar
					:shape="args.shape"
					:size="args.size"
					status="busy"
					:src="args.src"
					:alt="args.alt"
					:userName="args.userName"
				></Avatar>
				<Avatar
					:shape="args.shape"
					:size="args.size"
					status="offline"
					:src="args.src"
					:alt="args.alt"
					:userName="args.userName"
				></Avatar>
			</div>
            
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			exclude: ['status', 'limit']
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<Avatar',
						`  shape="${args.shape}"`,
						`  size="${args.size}"`,
						`  status="none"`,
						`  src="${args.src}"`,
						`  alt="${args.alt}"`,
						`  userName="${args.userName}"`,
						`  className="${args.className}"`,
						'></Avatar>',
						'<Avatar',
						`  shape="square"`,
						`  size="${args.size}"`,
						`  status="online"`,
						`  src="${args.src}"`,
						`  alt="${args.alt}"`,
						`  userName="${args.userName}"`,
						`  className="${args.className}"`,
						'></Avatar>',
						'<Avatar',
						`  shape="square"`,
						`  size="${args.size}"`,
						`  status="idle"`,
						`  src="${args.src}"`,
						`  alt="${args.alt}"`,
						`  userName="${args.userName}"`,
						`  className="${args.className}"`,
						'></Avatar>',
						'<Avatar',
						`  shape="square"`,
						`  size="${args.size}"`,
						`  status="busy"`,
						`  src="${args.src}"`,
						`  alt="${args.alt}"`,
						`  userName="${args.userName}"`,
						`  className="${args.className}"`,
						'></Avatar>',
						'<Avatar',
						`  shape="square"`,
						`  size="${args.size}"`,
						`  status="offline"`,
						`  src="${args.src}"`,
						`  alt="${args.alt}"`,
						`  userName="${args.userName}"`,
						`  className="${args.className}"`,
						'></Avatar>',
					].join('\n').trim();
				}
			}
		}
	},
};
