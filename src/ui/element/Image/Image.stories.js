import Image from "@/ui/element/Image/Image.vue";
import Grid from '@/ui/layout/Grid/Grid.vue';
import Row from '@/ui/layout/Grid/Row.vue';
import Column from '@/ui/layout/Grid/Column.vue';

export default {
	title: 'Component/Image',
	component: Image,
	tags: ["autodocs"],
	argTypes: {
		src: {
			description: "圖片來源",
			control: { type: "text" },
		},
		alt: {
			description: "圖片替代文字",
			control: { type: 'text' },
		},
		ratio: {
			description: '圖片比例',
			control: {
				type: 'select',
			},
			options: ['1x1', '4x3', '5x4', '16x9'],
			table: {
				type: {
					summary: "1x1 | 4x3 | 5x4 | 16x9",
				}
			}
		},
		objectFit: {
			description: '圖片填滿方式',
			control: { type: 'select' },
			options: ['none', 'cover', 'contain', 'fill' ],
			table: {
				type: {
					summary: "none | cover | contain | fill",
				}
			}
		},
		className: {
			description: "客製化樣式",
			control: { type: "text" },
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: '圖片',
			description: {
				component: '圖片組件的呈現及說明。',
			},
		},
	},
};

//==== 預設項目 ====//
export const ImageDefault = {
	name: '預設項目',
	args: {
		src: 'https://picsum.photos/300/200?random=1',
		alt: 'placeholder',
		ratio: '1x1',
		objectFit: 'cover',
		className: '',
	},
	render: (args) => ({
		components: { Image, Grid, Row, Column },
		setup() {
			return {
				args,
			};
		},
		template: `
			<Grid fluid>
				<Row hasGap>
					<Column :xs="12" :sm="6" :md="3">
						<Image
							:src="args.src"
							:alt="args.alt"
							:ratio="args.ratio"
							:objectFit="args.objectFit"
							:className="args.className"
						></Image>
					</Column>
				</Row>
			</Grid>
		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['objectFit', 'src', 'value', 'name' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<script setup>`,
						`import { Image, Grid, Row, Column } from "@ded-wds-vue/ui";`,
						`</script>`,
						'',
						'<template>',
						`  <Grid fluid>`,
						`    <Row hasGap>`,
						`      <Column :xs="12" :sm="6" :md="3">`,
						`        <Image`,
						`          ${args.src ? `src="${args.src}"` : ""}`,
						`          ${args.alt ? `alt="${args.alt}"` : ""}`,
						`          ${args.ratio ? `ratio="${args.ratio}"` : ""}`,
						`          ${args.objectFit ? `objectFit="${args.objectFit}"` : ""}`,
						`          ${args.className ? `className="${args.className}"` : ""}`,
						`        ></Image>`,
						`      </Column>`,
						`    </Row>`,
						`  </Grid>`,
						'</template>',
					].filter(Boolean).join('\n').trim();
				}
			}
		}
	},
};

//==== 圖片比例 ====//
export const ImageRatio = {
	name: '圖片比例',
	args: {
		src: 'https://picsum.photos/300/200?random=1',
		alt: 'placeholder',
		// ratio: '1x1',
		objectFit: 'cover',
		className: ''
	},
	render: (args) => ({
		components: { Image },
		setup() {
			return {
				args,
			};
		},
		template: `
			<div style="display:flex; gap: 24px;">
				<div style="position: relative; width: fit-content; height: fit-content;">
					<Image 
				       :src="args.src"
				       :alt="args.alt"
				       ratio="1x1"
				       :objectFit="args.objectFit"
				       style="width: 250px"
					></Image>
					<p
						style="position: absolute; 
                    top: 50%; left: 50%;
                    transform: translateX(-50%) translateY(-50%); ;
                    font-size: 50px;
                    color:white">1:1</p>
				</div>
				<div style="position: relative; width: fit-content; height: fit-content;">
					<Image
						:src="args.src"
						:alt="args.alt"
						ratio="4x3"
						:objectFit="args.objectFit"
						style="width: 250px"
					></Image>
					<p
						style="position: absolute; 
                    top: 50%; left: 50%;
                    transform: translateX(-50%) translateY(-50%); ;
                    font-size: 50px;
                    color:white">4:3</p>
				</div>
				<div style="position: relative; width: fit-content; height: fit-content;">
					<Image
						:src="args.src"
						:alt="args.alt"
						ratio="5x4"
						:objectFit="args.objectFit"
						style="width: 250px"
					></Image>
					<p
						style="position: absolute; 
                    top: 50%; left: 50%;
                    transform: translateX(-50%) translateY(-50%); ;
                    font-size: 50px;
                    color:white">5:4</p>
				</div>
				<div style="position: relative; width: fit-content; height: fit-content;">
					<Image
						:src="args.src"
						:alt="args.alt"
						ratio="16x9"
						:objectFit="args.objectFit"
						style="width: 250px"
					></Image>
					<p
						style="position: absolute; 
                    top: 50%; left: 50%;
                    transform: translateX(-50%) translateY(-50%); ;
                    font-size: 50px;
                    color:white">16:9</p>
				</div>
			</div>
		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			exclude: ['ratio' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<script setup>`,
						`import { Image } from "@ded-wds-vue/ui";`,
						`</script>`,
						'',
						'<template>',
						`  <Image`,
						`    ${args.src ? `src="${args.src}"` : ""}`,
						`    ${args.alt ? `alt="${args.alt}"` : ""}`,
						`    ratio="1x1"`,
						`    ${args.objectFit ? `objectFit="${args.objectFit}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  ></Image>`,
						`  <Image`,
						`    ${args.src ? `src="${args.src}"` : ""}`,
						`    ${args.alt ? `alt="${args.alt}"` : ""}`,
						`    ratio="4x3"`,
						`    ${args.objectFit ? `objectFit="${args.objectFit}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  ></Image>`,
						`  <Image`,
						`    ${args.src ? `src="${args.src}"` : ""}`,
						`    ${args.alt ? `alt="${args.alt}"` : ""}`,
						`    ratio="5x4"`,
						`    ${args.objectFit ? `objectFit="${args.objectFit}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  ></Image>`,
						`  <Image`,
						`    ${args.src ? `src="${args.src}"` : ""}`,
						`    ${args.alt ? `alt="${args.alt}"` : ""}`,
						`    ratio="16x9"`,
						`    ${args.objectFit ? `objectFit="${args.objectFit}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  ></Image>`,
						'</template>',
					].filter(Boolean).join('\n').trim();
				}
			}
		}
	},
};

//==== 填滿方式 ====//
export const ImageFit = {
	name: '填滿方式',
	args: {
		src: 'https://picsum.photos/300/200?random=1',
		alt: 'placeholder',
		ratio: '16x9',
		// objectFit: 'cover',
		className: ''
	},
	render: (args) => ({
		components: { Image },
		setup() {
			return {
				args,
			};
		},
		template: `
			<div style="display:flex; gap: 24px;">
				<div style="position: relative; width: fit-content; height: fit-content;">
					<Image 
					       :src="args.src"
					       :alt="args.alt"
					       :ratio="args.ratio"
					       objectFit="cover"
					       class="${args.className}"
					       style="width: 250px"
					></Image>
					<p
						style="position: absolute; 
                    top: 50%; left: 50%;
                    transform: translateX(-50%) translateY(-50%); ;
                    font-size: 50px;
                    color:white">cover</p>
				</div>
				<div style="position: relative; width: fit-content; height: fit-content;">
					<Image
					       :src="args.src"
					       :alt="args.alt"
					       :ratio="args.ratio"
					       objectFit="contain"
					       class="${args.className}"
					       style="width: 250px"
					></Image>
					<p
						style="position: absolute; 
                      top: 50%; left: 50%;
                      transform: translateX(-50%) translateY(-50%); ;
                      font-size: 50px;
                      color:white">contain</p>
				</div>
				<div style="position: relative; width: fit-content; height: fit-content;">
					<Image
					       :src="args.src"
					       :alt="args.alt"
					       :ratio="args.ratio"
					       objectFit="fill"
					       class="${args.className}"
					       style="width: 250px"
					></Image>
					<p
						style="position: absolute; 
                        top: 50%; left: 50%;
                        transform: translateX(-50%) translateY(-50%); ;
                        font-size: 50px;
                        color:white">fill</p>
				</div>
				<div style="position: relative; width: fit-content; height: fit-content;">
					<Image 
						   :src="args.src"
					       :alt="args.alt"
					       :ratio="args.ratio"
					       objectFit="none"
					       class="${args.className}"
					       style="width: 250px"
					></Image>
					<p
						style="position: absolute; 
                          top: 50%; left: 50%;
                          transform: translateX(-50%) translateY(-50%); ;
                          font-size: 50px;
                          color:white">none</p>
				</div>
			</div>
		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			exclude: [ 'objectFit' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<script setup>`,
						`import { Image } from "@ded-wds-vue/ui";`,
						`</script>`,
						'',
						'<template>',
						`  <Image`,
						`    ${args.src ? `src="${args.src}"` : ""}`,
						`    ${args.alt ? `alt="${args.alt}"` : ""}`,
						`    ${args.ratio ? `ratio="${args.ratio}"` : ""}`,
						`    objectFit="cover"`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  ></Image>`,
						`  <Image`,
						`    ${args.src ? `src="${args.src}"` : ""}`,
						`    ${args.alt ? `alt="${args.alt}"` : ""}`,
						`    ${args.ratio ? `ratio="${args.ratio}"` : ""}`,
						`    objectFit="contain"`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  ></Image>`,
						`  <Image`,
						`    ${args.src ? `src="${args.src}"` : ""}`,
						`    ${args.alt ? `alt="${args.alt}"` : ""}`,
						`    ${args.ratio ? `ratio="${args.ratio}"` : ""}`,
						`    objectFit="fill"`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  ></Image>`,
						`  <Image`,
						`    ${args.src ? `src="${args.src}"` : ""}`,
						`    ${args.alt ? `alt="${args.alt}"` : ""}`,
						`    ${args.ratio ? `ratio="${args.ratio}"` : ""}`,
						`    objectFit="none"`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  ></Image>`,
						'</template>',
					].filter(Boolean).join('\n').trim();
				}
			}
		}
	},
};