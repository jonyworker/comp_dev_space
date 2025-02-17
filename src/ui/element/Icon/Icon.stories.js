import Icon from "@/ui/element/Icon/Icon.vue";
const iconFiles = import.meta.glob('@/assets/icon/*.svg', { eager: true });
const icons = Object.keys(iconFiles).map((path) =>
	path.replace(/^.*[\\/]/, '').replace(/\.svg$/, '')
).filter((name) => name !== "SvgAuo");

export default {
	title: "Component/Icon",
	component: Icon,
	tags: ["autodocs"],
	argTypes: {
		name: {
			description: "Svg名稱",
			control: { type: 'select' },
			options: icons,
		},
		size: {
			description: "尺寸(px)",
			control: { type: 'text' },
		},
		color: {
			description: "顏色",
			control: { type: 'color' },
			table: {
				type: {
					summary: '#000000 | black',
				}
			}
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "Icon",
			description: {
				component: "圖標組件的呈現及說明。",
			},
		},
	},
};

//==== 預設項目 ====//
export const IconDefaultStory = {
	name: "預設項目",
	args: {
		name: "SvgHome",
		size: "48",
		color: "#0D64FB",
	},
	render: (args) => ({
		components: { Icon },
		setup() {
			return {
				args,
				icons
			}
		},
		template: `
			
			{{icons}}
			<Icon
				:name="args.name"
				:size="args.size"
				:color="args.color"
			></Icon>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			exclude: ['width', 'height', 'src' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<Icon',
						`    :name="${args.name}"`,
						`    :size="${args.size}"`,
						`    :color="${args.color}"`,
						'>',
						'</Icon>',
					].join('\n').trim();
				}
			}
		}
	},
};

//==== 圖標列表 ====//
export const IconListStory = {
	name: "圖標列表",
	args: {
		// name: "SvgHome",
		size: "48",
		color: "#0D64FB",
	},
	render: (args) => ({
		components: { Icon },
		setup() {
			return {
				args,
				icons
			}
		},
		template: `
			<div v-for="icon in icons" 
			     style="display:flex; 
			     flex-direction: column; 
			     align-items: center; 
			     justify-content: center; 
			     width: 100px; 
			     padding: 12px; 
			     border: 1px solid #000; 
			     border-radius: 4px">
				<Icon
					:name="icon"
					:size="args.size"
					:color="args.color"
				></Icon>
				<span style="font-size: 11px; white-space: wrap">{{icon}}</span>
			</div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			exclude: ['width', 'height', 'src' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<Icon',
						`    :name="${args.name}"`,
						`    :size="${args.size}"`,
						`    :color="${args.color}"`,
						'>',
						'</Icon>',
					].join('\n').trim();
				}
			}
		}
	},
};