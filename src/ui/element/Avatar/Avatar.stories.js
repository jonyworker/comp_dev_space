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
			options: [ "small", "medium", "large"],
			table: {
				type: {
					summary: "small | medium | large"
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
		isShowInfo: {
			description: "是否顯示資訊",
			control: { type: "boolean" },
		},
		src: {
			description: "圖片連結",
			control: { type: "text" },
		},
		alt: {
			description: "圖片描述",
			control: { type: "text" },
		},
		userName: {
			description: "使用者名稱",
			control: { type: "text" },
		},
		caption: {
			description: "使用者描述",
			control: { type: "text" },
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
		isShowInfo: true,
		src: "https://storage.googleapis.com/ded-wds-bucket/monkey.png",
		alt: "無圖顯示",
		userName: "Name",
		caption:'Caption',
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
	            :status="args.status"
				:isShowInfo="args.isShowInfo"
	            :src="args.src"
	            :alt="args.alt"
	            :userName="args.userName"
				:caption="args.caption"
	            :className="args.className"
            ></Avatar>
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
					return [
						`<script setup>`,
						`import Avatar from "@/ui/element/Avatar/Avatar.vue";`,
						`</script>`,
						``,
						`<template>`,
						`  <Avatar`,
						`    ${args.shape ? `shape="${args.shape}"` : ""}`,
						`    ${args.size ? `size="${args.size}"` : ""}`,
						`    ${args.status ? `status="${args.status}"` : ""}`,
						`    ${args.isShowInfo !== undefined ? `:isShowInfo="${args.isShowInfo}"` : ""}`,
						`    ${args.src ? `src="${args.src}"` : ""}`,
						`    ${args.alt ? `alt="${args.alt}"` : ""}`,
						`    ${args.userName ? `userName="${args.userName}"` : ""}`,
						`    ${args.caption ? `caption="${args.caption}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  ></Avatar>`,
						`</template>`,
					].filter(Boolean).join("\n").trim();

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
		status: "online",
		isShowInfo: true,
		src: "https://storage.googleapis.com/ded-wds-bucket/fox.png",
		alt: "無圖顯示",
		userName: "Name",
		caption:'Caption',
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
					:status="args.status"
					:isShowInfo="args.isShowInfo"
					:src="args.src"
					:alt="args.alt"
					:userName="args.userName"
					:caption="args.caption"
					:className="args.className"
				></Avatar>
				<Avatar
					shape="square"
					:size="args.size"
					:status="args.status"
					:isShowInfo="args.isShowInfo"
					:src="args.src"
					:alt="args.alt"
					:userName="args.userName"
					:caption="args.caption"
					:className="args.className"
				></Avatar>
			</div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			exclude: ['shape'],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<script setup>`,
						`import Avatar from "@/ui/element/Avatar/Avatar.vue";`,
						`</script>`,
						'',
						`<template>`,
						`  <Avatar`,
						`    shape="circle"`,
						`    ${args.size ? `size="${args.size}"` : ""}`,
						`    ${args.status ? `status="${args.status}"` : ""}`,
						`    ${args.isShowInfo !== undefined ? `:isShowInfo="${args.isShowInfo}"` : ""}`,
						`    ${args.src ? `src="${args.src}"` : ""}`,
						`    ${args.alt ? `alt="${args.alt}"` : ""}`,
						`    ${args.userName ? `userName="${args.userName}"` : ""}`,
						`    ${args.caption ? `caption="${args.caption}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  ></Avatar>`,
						`  <Avatar`,
						`    shape="square"`,
						`    ${args.size ? `size="${args.size}"` : ""}`,
						`    ${args.status ? `status="${args.status}"` : ""}`,
						`    ${args.isShowInfo !== undefined ? `:isShowInfo="${args.isShowInfo}"` : ""}`,
						`    ${args.src ? `src="${args.src}"` : ""}`,
						`    ${args.alt ? `alt="${args.alt}"` : ""}`,
						`    ${args.userName ? `userName="${args.userName}"` : ""}`,
						`    ${args.caption ? `caption="${args.caption}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  ></Avatar>`,
						`</template>`,
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
		// status: "none",
		isShowInfo: true,
		src: "https://storage.googleapis.com/ded-wds-bucket/lion.png",
		alt: "無圖顯示",
		userName: "Name",
		caption:'Caption',
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
					:isShowInfo="args.isShowInfo"
					:src="args.src"
					:alt="args.alt"
					:userName="args.userName"
					:caption="args.caption"
					:className="args.className"
				></Avatar>
				<Avatar
					:shape="args.shape"
					:size="args.size"
					status="online"
					:isShowInfo="args.isShowInfo"
					:src="args.src"
					:alt="args.alt"
					:userName="args.userName"
					:caption="args.caption"
					:className="args.className"
				></Avatar>
				<Avatar
					:shape="args.shape"
					:size="args.size"
					status="idle"
					:isShowInfo="args.isShowInfo"
					:src="args.src"
					:alt="args.alt"
					:userName="args.userName"
					:caption="args.caption"
					:className="args.className"
				></Avatar>
				<Avatar
					:shape="args.shape"
					:size="args.size"
					status="busy"
					:isShowInfo="args.isShowInfo"
					:src="args.src"
					:alt="args.alt"
					:userName="args.userName"
					:caption="args.caption"
					:className="args.className"
				></Avatar>
				<Avatar
					:shape="args.shape"
					:size="args.size"
					status="offline"
					:isShowInfo="args.isShowInfo"
					:src="args.src"
					:alt="args.alt"
					:userName="args.userName"
					:caption="args.caption"
					:className="args.className"
				></Avatar>
			</div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			exclude: ['status']
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<script setup>`,
						`import Avatar from "@/ui/element/Avatar/Avatar.vue";`,
						`</script>`,
						'',
						`<template>`,
						`  <Avatar`,
						`    ${args.shape ? `shape="${args.shape}"` : ""}`,
						`    ${args.size ? `size="${args.size}"` : ""}`,
						`    status="none"`,
						`    ${args.isShowInfo !== undefined ? `:isShowInfo="${args.isShowInfo}"` : ""}`,
						`    ${args.src ? `src="${args.src}"` : ""}`,
						`    ${args.alt ? `alt="${args.alt}"` : ""}`,
						`    ${args.userName ? `userName="${args.userName}"` : ""}`,
						`    ${args.caption ? `caption="${args.caption}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  ></Avatar>`,
						`  <Avatar`,
						`    ${args.shape ? `shape="${args.shape}"` : ""}`,
						`    ${args.size ? `size="${args.size}"` : ""}`,
						`    status="online"`,
						`    ${args.isShowInfo !== undefined ? `:isShowInfo="${args.isShowInfo}"` : ""}`,
						`    ${args.src ? `src="${args.src}"` : ""}`,
						`    ${args.alt ? `alt="${args.alt}"` : ""}`,
						`    ${args.userName ? `userName="${args.userName}"` : ""}`,
						`    ${args.caption ? `caption="${args.caption}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  ></Avatar>`,
						`  <Avatar`,
						`    ${args.shape ? `shape="${args.shape}"` : ""}`,
						`    ${args.size ? `size="${args.size}"` : ""}`,
						`    status="idle"`,
						`    ${args.isShowInfo !== undefined ? `:isShowInfo="${args.isShowInfo}"` : ""}`,
						`    ${args.src ? `src="${args.src}"` : ""}`,
						`    ${args.alt ? `alt="${args.alt}"` : ""}`,
						`    ${args.userName ? `userName="${args.userName}"` : ""}`,
						`    ${args.caption ? `caption="${args.caption}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  ></Avatar>`,
						`  <Avatar`,
						`    ${args.shape ? `shape="${args.shape}"` : ""}`,
						`    ${args.size ? `size="${args.size}"` : ""}`,
						`    status="busy"`,
						`    ${args.isShowInfo !== undefined ? `:isShowInfo="${args.isShowInfo}"` : ""}`,
						`    ${args.src ? `src="${args.src}"` : ""}`,
						`    ${args.alt ? `alt="${args.alt}"` : ""}`,
						`    ${args.userName ? `userName="${args.userName}"` : ""}`,
						`    ${args.caption ? `caption="${args.caption}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  ></Avatar>`,
						`  <Avatar`,
						`    ${args.shape ? `shape="${args.shape}"` : ""}`,
						`    ${args.size ? `size="${args.size}"` : ""}`,
						`    status="offline"`,
						`    ${args.isShowInfo !== undefined ? `:isShowInfo="${args.isShowInfo}"` : ""}`,
						`    ${args.src ? `src="${args.src}"` : ""}`,
						`    ${args.alt ? `alt="${args.alt}"` : ""}`,
						`    ${args.userName ? `userName="${args.userName}"` : ""}`,
						`    ${args.caption ? `caption="${args.caption}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  ></Avatar>`,
						`</template>`,
					].join('\n').trim();
				}
			}
		}
	},
};
