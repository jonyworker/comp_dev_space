import { ref } from 'vue';
import Icon from "@/ui/element/Icon/Icon.vue";

// 取得 icon 資料夾內所有名稱
const iconFiles = import.meta.glob('@/assets/icon/*.svg', { eager: true });
const icons = Object.keys(iconFiles).map((path) =>
	path.replace(/^.*[\\/]/, '').replace(/\.svg$/, '')
).filter((name) => name !== "SvgAuo");

// 複製 icon 名稱
const hoveredIcon = ref(null);
const copiedIcon = ref(null);
const copyToClipboard = (text) => {
	navigator.clipboard.writeText(text).then(() => {
		copiedIcon.value = text;
		setTimeout(() => copiedIcon.value = null, 1500);
	}).catch(err => console.error("複製失敗:", err));
};


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
						`<script setup>`,
						`import { Icon } from "@ded-wds-vue/ui";`,
						`</script>`,
						'',
						'<template>',
						'  <Icon',
						`    ${args.name ? `name="${args.name}"` : ""}`,
						`    ${args.size ? `size="${args.size}"` : ""}`,
						`    ${args.color ? `color="${args.color}"` : ""}`,
						'  >',
						'  </Icon>',
						'</template>',
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
				icons,
				hoveredIcon,
				copiedIcon,
				copyToClipboard
			}
		},
		template: `
			<div class="flex flex-wrap gap-4">
				<div v-for="iconName in icons"
				     @click="copyToClipboard(iconName)"
				     @mouseover="hoveredIcon = iconName"
				     @mouseleave="hoveredIcon = null"
				     class="icon-button relative cursor-pointer">
					<Icon
						:name="iconName"
						:size="args.size"
						:color="args.color"
					></Icon>
					<span class="text-xs">{{iconName}}</span>
					<!-- Hover 時顯示 Click -->
					<span v-if="hoveredIcon === iconName && copiedIcon !== iconName"
					      class="icon-button__tooltip">
						Click
					</span>

					<!-- 點擊後顯示 Copied! -->
					<span v-if="copiedIcon === iconName"
					      class="icon-button__tooltip">
						Copied!
					</span>
				</div>
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
				code: false
			}
		}
	},
};