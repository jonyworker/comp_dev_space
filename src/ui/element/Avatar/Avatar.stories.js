import Avatar from "./Avatar.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Design System/Avatar",
	component: Avatar,
	tags: ["autodocs"],
	argTypes: {
		shape: {
			description: "選擇 Avatar 的外型樣式（圓形或方形）",
			control: { type: "select" },
			options: ["circle", "square"],
		},
		size: {
			description: "設定 Avatar 的尺寸大小",
			control: { type: "select" },
			options: ["xsmall", "small", "medium", "large"],
		},
		status: {
			description: "選擇 Avatar 的顯示狀態",
			control: { type: "select" },
			options: ["default", "online", "idle", "busy", "offline"],
		},
		imageSrc: {
			description: "輸入 Avatar 圖片的 URL 連結",
			control: { type: "text" },
		},
		imageAlt: {
			description: "為 Avatar 圖片提供替代文字",
			control: { type: "text" },
		},
		username: {
			description: "顯示使用者名稱，當沒有圖片時作取頭文字顯示",
			control: { type: "text" },
		},
		limit: {
			description: "在 AvatarGroup 中控制顯示的 Avatar 數量上限",
			control: { type: "number",
						min:0,
						max:5,
						step: 1 },
		},
		customClass: {
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

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== Avatar 基礎樣式 ====//
export const DefaultAvatar = {
	name: "Avatar 基礎樣式",
	args: {
		shape: "circle",
		size: "large",
		status: "online",
		imageSrc: "https://picsum.photos/320/240",
		imageAlt: "alt text",
		username: "JonyWu",
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
	            :imageSrc="args.imageSrc"
	            :imageAlt="args.imageAlt"
	            :username="args.username"
            ></Avatar>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			exclude: ['limit']
		},
	},
};

//==== Avatar 外型設置 ====//
export const AvatarShape = {
	name: "Avatar 外型設置",
	args: {
		size: "large",
		status: "default",
		imageSrc: "https://picsum.photos/320/240",
		imageAlt: "alt text",
		username: "JonyWu",
	},
	render: (args) => ({
		components: { Avatar },
		setup() {
			return {
				args,
			};
		},
		template: `
			<div style="display:flex; gap: 16px">
				<Avatar
					shape="circle"
					:size="args.size"
					:status="args.status"
					:imageSrc="args.imageSrc"
					:imageAlt="args.imageAlt"
					:username="args.username"
				></Avatar>
				<Avatar
					shape="square"
					:size="args.size"
					:status="args.status"
					:imageSrc="args.imageSrc"
					:imageAlt="args.imageAlt"
					:username="args.username"
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
	},
};

//==== Avatar 狀態顯示 ====//
export const AvatarStatus = {
	name: "Avatar 狀態顯示",
	args: {
		shape: "circle",
		size: "large",
		imageSrc: "https://picsum.photos/320/240",
		imageAlt: "alt text",
		username: "JonyWu",
	},
	render: (args) => ({
		components: { Avatar },
		setup() {
			return {
				args,
			};
		},
		template: `
			<div style="display:flex; gap: 16px">
				<Avatar
					:shape="args.shape"
					:size="args.size"
					status="default"
					:imageSrc="args.imageSrc"
					:imageAlt="args.imageAlt"
					:username="args.username"
				></Avatar>
				<Avatar
					:shape="args.shape"
					:size="args.size"
					status="online"
					:imageSrc="args.imageSrc"
					:imageAlt="args.imageAlt"
					:username="args.username"
				></Avatar>
				<Avatar
					:shape="args.shape"
					:size="args.size"
					status="idle"
					:imageSrc="args.imageSrc"
					:imageAlt="args.imageAlt"
					:username="args.username"
				></Avatar>
				<Avatar
					:shape="args.shape"
					:size="args.size"
					status="busy"
					:imageSrc="args.imageSrc"
					:imageAlt="args.imageAlt"
					:username="args.username"
				></Avatar>
				<Avatar
					:shape="args.shape"
					:size="args.size"
					status="offline"
					:imageSrc="args.imageSrc"
					:imageAlt="args.imageAlt"
					:username="args.username"
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
	},
};

//==== Avatar 尺寸設定 ====//
export const AvatarSizes = {
	name: "Avatar 尺寸設定",
	args: {
		shape: "circle",
		status: "online",
		imageSrc: "https://picsum.photos/320/240",
		imageAlt: "alt text",
		username: "JonyWu",
	},
	render: (args) => ({
		components: { Avatar },
		setup() {
			return {
				args,
			};
		},
		template: `
			<div style="display:flex; gap: 16px">
				<Avatar
					:shape="args.shape"
					size="xsmall"
					:status="args.status"
					:imageSrc="args.imageSrc"
					:imageAlt="args.imageAlt"
					:username="args.username"
				></Avatar>
				<Avatar
					:shape="args.shape"
					size="small"
					:status="args.status"
					:imageSrc="args.imageSrc"
					:imageAlt="args.imageAlt"
					:username="args.username"
				></Avatar>
				<Avatar
					:shape="args.shape"
					size="medium"
					:status="args.status"
					:imageSrc="args.imageSrc"
					:imageAlt="args.imageAlt"
					:username="args.username"
				></Avatar>
				<Avatar
					:shape="args.shape"
					size="large"
					:status="args.status"
					:imageSrc="args.imageSrc"
					:imageAlt="args.imageAlt"
					:username="args.username"
				></Avatar>
			</div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			exclude: ['size', 'limit']
		},
	},
};

//==== Avatar 內容顯示 ====//
export const AvatarContent = {
	name: "Avatar 內容顯示",
	args: {
		shape: "circle",
		size: "large",
		status: "online",
		imageSrc: "https://picsum.photos/320/240",
		imageAlt: "alt text",
		username: "JonyWu",
	},
	render: (args) => ({
		components: { Avatar },
		setup() {
			return {
				args,
			};
		},
		template: `
			<div style="display:flex; gap: 16px">
				<Avatar
					:shape="args.shape"
					:size="args.size"
					:status="args.status"
					:imageSrc="args.imageSrc"
					:imageAlt="args.imageAlt"
					:username="args.username"
				></Avatar>
				<Avatar
					:shape="args.shape"
					:size="args.size"
					:status="args.status"
					:imageSrc="null"
					:imageAlt="args.imageAlt"
					:username="args.username"
				></Avatar>
			</div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			exclude: ['', 'limit']
		},
	},
};
