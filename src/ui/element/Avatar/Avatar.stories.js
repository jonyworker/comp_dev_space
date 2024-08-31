import Avatar from "./Avatar.vue";
import AvatarGroup from "./AvatarGroup.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Design System/Avatar",
	component: Avatar,
	tags: ["autodocs"],
	argTypes: {
		size: {
			description: "Avatar尺寸",
			control: { type: "select" },
			options: ["xsmall", "small", "medium", "large"],
		},
		shape: {
			description: "Avatar外型",
			control: { type: "select" },
			options: ["circle", "square"],
		},
		customClass: {
			description: "客製化樣式",
			control: { type: "text" },
		},
		imageSrc: {
			description: "Avatar圖片連結",
			control: { type: "text" },
		},
		imageAlt: {
			description: "Avatar圖片替代文字",
			control: { type: "text" },
		},
		username: {
			description: "Avatar使用者名稱，沒圖片時顯示",
			control: { type: "text" },
		},
		status: {
			description: "Avatar狀態",
			control: { type: "select" },
			options: ["default", "online", "idle", "busy", "offline"],
		},
		limit: {
			description: "AvatarGroup 中控制 Avatar 顯示數量",
			control: { type: "number" },
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "Avatar頭像",
			description: {
				component: "Avatar組件的呈現及說明。",
			},
		},
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== Avatar 基礎樣式 ====//
export const DefaultAvatar = {
	name: "基礎樣式",
	args: {
		size: "large",
		shape: "circle",
		imageSrc: "src/assets/fakeImg/avatar_01.jpg",
		imageAlt: "alt text",
		username: "JonyWu",
		status: "offline",
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
	            :size="args.size"
	            :shape="args.shape"
	            :imageSrc="args.imageSrc"
	            :imageAlt="args.imageAlt"
	            :username="args.username"
	            :status="args.status"
            ></Avatar>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};

//==== Avatar 外型 ====//
export const AvatarShape = {
	name: "Avatar外型",
	args: {
		size: "large",
		imageSrc: "src/assets/fakeImg/avatar_01.jpg",
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
					:size="args.size"
					shape="circle"
					:imageSrc="args.imageSrc"
					:imageAlt="args.imageAlt"
					:username="args.username"
				></Avatar>
				<Avatar
					:size="args.size"
					shape="square"
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
		},
	},
};

//==== Avatar 狀態 ====//
export const AvatarStatus = {
	name: "Avatar狀態",
	args: {
		size: "large",
		shape: "circle",
		imageSrc: "src/assets/fakeImg/avatar_01.jpg",
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
					:size="args.size"
					:shape="args.shape"
					:imageSrc="args.imageSrc"
					:imageAlt="args.imageAlt"
					:username="args.username"
					status="default"
				></Avatar>
				<Avatar
					:size="args.size"
					:shape="args.shape"
					:imageSrc="args.imageSrc"
					:imageAlt="args.imageAlt"
					:username="args.username"
					status="online"
				></Avatar>
				<Avatar
					:size="args.size"
					:shape="args.shape"
					:imageSrc="args.imageSrc"
					:imageAlt="args.imageAlt"
					:username="args.username"
					status="idle"
				></Avatar>
				<Avatar
					:size="args.size"
					:shape="args.shape"
					:imageSrc="args.imageSrc"
					:imageAlt="args.imageAlt"
					:username="args.username"
					status="busy"
				></Avatar>
				<Avatar
					:size="args.size"
					:shape="args.shape"
					:imageSrc="args.imageSrc"
					:imageAlt="args.imageAlt"
					:username="args.username"
					status="offline"
				></Avatar>
			</div>
            
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};

//==== Avatar 大小 ====//
export const AvatarSizes = {
	name: "Avatar大小",
	args: {
		shape: "circle",
		imageSrc: "src/assets/fakeImg/avatar_01.jpg",
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
					size="xsmall"
					:shape="args.shape"
					:imageSrc="args.imageSrc"
					:imageAlt="args.imageAlt"
					:username="args.username"
				></Avatar>
				<Avatar
					size="small"
					:shape="args.shape"
					:imageSrc="args.imageSrc"
					:imageAlt="args.imageAlt"
					:username="args.username"
				></Avatar>
				<Avatar
					size="medium"
					:shape="args.shape"
					:imageSrc="args.imageSrc"
					:imageAlt="args.imageAlt"
					:username="args.username"
				></Avatar>
				<Avatar
					size="large"
					:shape="args.shape"
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
		},
	},
};

//==== Avatar 內容 ====//
export const AvatarContent = {
	name: "Avatar內容",
	args: {
		size: "large",
		shape: "circle",
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
					:size="args.size"
					:shape="args.shape"
					imageSrc="src/assets/fakeImg/avatar_01.jpg"
					imageAlt="圖片替代文字"
					username="JonyWu"
				></Avatar>
				<Avatar
					:size="args.size"
					:shape="args.shape"
					imageSrc=""
					imageAlt="圖片替代文字"
					username="JonyWu"
				></Avatar>
			</div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};

//==== MultiAvatar ====//
export const MultiAvatar = {
	name: "多個 Avatar",
	args: {
		avatarsData:[
			{
				"userName": "Eason",
			},
			{
				"userName": "KevinYang",
				"imageSrc": "https://picsum.photos/320/240"
			},
			{
				"userName": "AmosLee",
			},
			{
				"userName": "JohnWu",
				"imageSrc": "https://picsum.photos/320/340"
			}
		],
	},
	render: (args) => ({
		components: { AvatarGroup },
		setup() {
			return {
				args,
			};
		},
		template: `
			<div style="display:flex; gap: 16px">
				<AvatarGroup 
					:avatarsData="args.avatarsData" 
					size="medium" 
					shape="circle" 
					:limit="3">
				</AvatarGroup>
			</div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};