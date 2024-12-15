import Image from './Image.vue';

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
				// labels: {
				// 	'11': "1x1",
				// 	'43': "4x3",
				// 	'54': "5x4",
				// 	'169': "16x9",
				// }
			},
			options: ['11', '43', '54', '169'],
			table: {
				type: {
					summary: "1x1 | 4x3 | 5x4 | 16x9",
				}
			}
		},
		objectFit: {
			description: '圖片填滿方式',
			control: { type: 'select' },
			options: ['cover', 'contain', 'fill', 'none'],
			table: {
				type: {
					summary: "cover | contain | fill | none",
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
		src: 'https://picsum.photos/300/300',
		alt: 'placeholder',
		ratio: '1x1',
		objectFit: 'cover',
		className: '',
	},
	render: (args) => ({
		components: { Image },
		setup() {
			// Create a ref for modelValue to be used with v-model
			return {
				args,
			};
		},
		template: `
			<div style="width: 250px; height: 250px;">
				<Image
					:src="args.src"
					:alt="args.alt"
					:ratio="args.ratio"
					:objectFit="args.objectFit"
					:className="args.className"
				></Image>
			</div>
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
						'<div style="width: 250px; height: 250px;">',
						'  <Image',
						`    src="${args.src}"`,
						`    alt="${args.alt}"`,
						`    ratio="${args.ratio}"`,
						`    objectFit="${args.objectFit}"`,
						`    className="${args.className}"`,
						'  ></Image>',
						'</div>',
					].join('\n').trim();
				}
			}
		}
	},
};

//==== 圖片比例 ====//
export const ImageRatio = {
	name: '圖片比例總覽',
	args: {
		src: 'https://picsum.photos/300/300',
		alt: '',
		objectFit: 'cover',
		className: ''
	},
	render: (args) => ({
		components: { Image },
		setup() {
			// Create a ref for modelValue to be used with v-model
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
			include: ['objectFit', 'src' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'  <Image',
						`    src="${args.src}"`,
						`    alt="${args.alt}"`,
						`    ratio="1x1"`,
						`    objectFit="${args.objectFit}"`,
						`    className="${args.className}"`,
						'  ></Image>',
						'  <Image',
						`    src="${args.src}"`,
						`    alt="${args.alt}"`,
						`    ratio="4x3"`,
						`    objectFit="${args.objectFit}"`,
						`    className="${args.className}"`,
						'  ></Image>',
						'  <Image',
						`    src="${args.src}"`,
						`    alt="${args.alt}"`,
						`    ratio="5x4"`,
						`    objectFit="${args.objectFit}"`,
						`    className="${args.className}"`,
						'  ></Image>',
						'  <Image',
						`    src="${args.src}"`,
						`    alt="${args.alt}"`,
						`    ratio="16x9"`,
						`    objectFit="${args.objectFit}"`,
						`    className="${args.className}"`,
						'  ></Image>',
					].join('\n').trim();

				}
			}
		}
	},
};

//==== 圖片 object-fit ====//
export const ImageFit = {
	name: '圖片自適應',
	args: {
		src: 'https://picsum.photos/300/300',
		alt: '',
		ratio: '16x9',
		objectFit: 'cover',
		className: ''
	},
	render: (args) => ({
		components: { Image },
		setup() {
			// Create a ref for modelValue to be used with v-model
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
			include: ['ratio', 'src' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'  <Image',
						`    src="${args.src}"`,
						`    alt="${args.alt}"`,
						`    ratio="${args.ratio}"`,
						`    objectFit="cover"`,
						`    className="${args.className}"`,
						'  ></Image>',
						'  <Image',
						`    src="${args.src}"`,
						`    alt="${args.alt}"`,
						`    ratio="${args.ratio}"`,
						`    objectFit="contain"`,
						`    className="${args.className}"`,
						'  ></Image>',
						'  <Image',
						`    src="${args.src}"`,
						`    alt="${args.alt}"`,
						`    ratio="${args.ratio}"`,
						`    objectFit="fill"`,
						`    className="${args.className}"`,
						'  ></Image>',
						'  <Image',
						`    src="${args.src}"`,
						`    alt="${args.alt}"`,
						`    ratio="${args.ratio}"`,
						`    objectFit="none"`,
						`    className="${args.className}"`,
						'  ></Image>',
					].join('\n').trim();
				}
			}
		}
	},
};