import Image from './Image.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: 'Design System/Image*',
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
		objectFit: {
			description: '調整圖片適合其容器',
			control: { type: 'select' },
			options: ['cover', 'contain', 'fill', 'none'],
			table: {
				type: {
					summary: "cover | contain | fill | none",
				}
			}
		},
		ratio: {
			description: '調整圖片比例',
			control: { type: 'select' },
			options: ['11', '43', '54', '169'],
			// mapping: {
			// 	'1/1': '11',
			// 	'4/3': '43',
			// 	'5/4': '54',
			// 	'16/9': '169',
			// },
			table: {
				defaultValue: { summary: '11' },
				type: {
					summary: "11 | 43 | 54 | 169",
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

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== 預設項目 ====//
export const ImageDefault = {
	name: '預設項目',
	args: {
		src: 'https://picsum.photos/300/300',
		alt: 'User Photo',
		objectFit: 'cover',
		ratio: '11',
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
					:ratio="args.ratio"
					:objectFit="args.objectFit"
					:src="args.src"
					:alt="args.alt"
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
						`    ratio="${args.ratio}"`,
						`    objectFit="${args.objectFit}"`,
						`    src="${args.src}"`,
						`    alt="${args.alt}"`,
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
					<Image ratio="11"
					       :objectFit="args.objectFit"
					       :src="args.src"
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
					<Image ratio="43"
					       :objectFit="args.objectFit"
					       :src="args.src"
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
					<Image ratio="54"
					       :objectFit="args.objectFit"
					       :src="args.src"
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
					<Image ratio="169"
					       :objectFit="args.objectFit"
					       :src="args.src"
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
						`    objectFit="${args.objectFit}"`,
						`    ratio="11"`,
						`    className="${args.className}"`,
						'  ></Image>',
						'  <Image',
						`    src="${args.src}"`,
						`    alt="${args.alt}"`,
						`    objectFit="${args.objectFit}"`,
						`    ratio="43"`,
						`    className="${args.className}"`,
						'  ></Image>',
						'  <Image',
						`    src="${args.src}"`,
						`    alt="${args.alt}"`,
						`    objectFit="${args.objectFit}"`,
						`    ratio="54"`,
						`    className="${args.className}"`,
						'  ></Image>',
						'  <Image',
						`    src="${args.src}"`,
						`    alt="${args.alt}"`,
						`    objectFit="${args.objectFit}"`,
						`    ratio="169"`,
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
		objectFit: 'cover',
		ratio: '169',
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
					       objectFit="cover"
					       :ratio="args.ratio"
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
					       objectFit="contain"
					       :ratio="args.ratio"
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
					       objectFit="fill"
					       :ratio="args.ratio"
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
					       objectFit="none"
					       :ratio="args.ratio"
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
						`    objectFit="cover"`,
						`    ratio="${args.ratio}"`,
						`    className="${args.className}"`,
						'  ></Image>',
						'  <Image',
						`    src="${args.src}"`,
						`    alt="${args.alt}"`,
						`    objectFit="contain"`,
						`    ratio="${args.ratio}"`,
						`    className="${args.className}"`,
						'  ></Image>',
						'  <Image',
						`    src="${args.src}"`,
						`    alt="${args.alt}"`,
						`    objectFit="fill"`,
						`    ratio="${args.ratio}"`,
						`    className="${args.className}"`,
						'  ></Image>',
						'  <Image',
						`    src="${args.src}"`,
						`    alt="${args.alt}"`,
						`    objectFit="none"`,
						`    ratio="${args.ratio}"`,
						`    className="${args.className}"`,
						'  ></Image>',
					].join('\n').trim();
				}
			}
		}
	},
};




//--- JONY VERSION START ---//

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
// export default {
//   title: 'Design System/Image*',
//   component: Image,
//   tags: ["autodocs"],
//   argTypes: {
//     src: {
//       description: "圖片來源",
//       control: { type: "text" },
//     },
//     //DED VUE 用程式碼
//     // src: {
//     //   description: "圖片來源",
//     //   table: {
//     //      defaultValue: { summary: '01' }
//     //   },
//     //   control: { type: 'select' },
//     //   options: ['01', '02', '03', '04'],
//     //   mapping: {
//     //     '01': 'libs/src/assets/fakeImg/avatar_01.jpg',
//     //     '02': 'libs/src/assets/fakeImg/avatar_02.jpg',
//     //     '03': 'libs/src/assets/fakeImg/avatar_03.jpg',
//     //     '04': 'libs/src/assets/fakeImg/avatar_04.jpg',
//     //   },
//     // },
//     alt: {
//       description: "圖片替代文字",
//       control: { type: 'text' },
//     },
//     objectFit: {
//       description: '調整圖片適合其容器',
//       control: { type: 'select' },
//       options: ['cover', 'contain', 'fill', 'none'],
//     },
//     ratio: {
//       description: '調整圖片比例',
//       //控制 argType Control default 顯示
//       table: {
//         defaultValue: { summary: '1/1' }
//       },
//       control: { type: 'select' },
//       options: ['1/1', '4/3', '5/4', '16/9'],
//       mapping: {
//         '1/1': '11',
//         '4/3': '43',
//         '5/4': '54',
//         '16/9': '169',
//       },
//     }
//
//   },
//   parameters: {
//     // 自動文件
//     docs: {
//       title: '圖片',
//       description: {
//         component: '圖片組件的呈現及說明。',
//       },
//     },
//   },
//
//   // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
//   // args: { onClick: fn() },
// };
//
// //==== 基礎圖片 ====//
// export const ImageDefault = {
//   name: '基本圖片',
//   args: {
//     src: 'https://picsum.photos/300/300',
//     alt: 'User Photo',
//     objectFit: 'cover',
//     ratio: '11',
//   },
//   render: (args) => ({
//     components: { Image },
//     setup() {
//       // Create a ref for modelValue to be used with v-model
//       return {
//         args,
//       };
//     },
//     template: `
//             <div style="width: 250px; height: 250px;">
//                 <Image
//                     :ratio="args.ratio"
//                     :objectFit="args.objectFit"
//                     :src="args.src"
//                     :alt="args.alt"></Image>
//             </div>
//             `,
//   }),
//   // 控制 controls 中能控制的參數
//   parameters: {
//     controls: {
//       // include: ['objectFit', 'src', 'value', 'name' ],
//     },
//   },
// };
//
// //==== 圖片比例 ====//
// export const ImageRatio = {
//   name: '圖片比例總覽',
//   args: {
//     src: 'https://picsum.photos/300/300',
//     objectFit: 'cover'
//   },
//   render: (args) => ({
//     components: { Image },
//     setup() {
//       // Create a ref for modelValue to be used with v-model
//       return {
//         args,
//       };
//     },
//     template: `
//         <div style="display:flex; gap: 24px;">
//             <div style="position: relative; width: fit-content; height: fit-content;">
//               <Image ratio="11"
//                      :objectFit="args.objectFit"
//                      :src="args.src"
//                      style="width: 250px"
//               ></Image>
//               <p
//                     style="position: absolute;
//                     top: 50%; left: 50%;
//                     transform: translateX(-50%) translateY(-50%); ;
//                     font-size: 50px;
//                     color:white">1:1</p>
//             </div>
//             <div style="position: relative; width: fit-content; height: fit-content;">
//               <Image ratio="43"
//                      :objectFit="args.objectFit"
//                      :src="args.src"
//                      style="width: 250px"
//               ></Image>
//               <p
//                     style="position: absolute;
//                     top: 50%; left: 50%;
//                     transform: translateX(-50%) translateY(-50%); ;
//                     font-size: 50px;
//                     color:white">4:3</p>
//             </div>
//             <div style="position: relative; width: fit-content; height: fit-content;">
//               <Image ratio="54"
//                      :objectFit="args.objectFit"
//                      :src="args.src"
//                      style="width: 250px"
//               ></Image>
//               <p
//                     style="position: absolute;
//                     top: 50%; left: 50%;
//                     transform: translateX(-50%) translateY(-50%); ;
//                     font-size: 50px;
//                     color:white">5:4</p>
//             </div>
//             <div style="position: relative; width: fit-content; height: fit-content;">
//               <Image ratio="169"
//                      :objectFit="args.objectFit"
//                      :src="args.src"
//                      style="width: 250px"
//               ></Image>
//               <p
//                     style="position: absolute;
//                     top: 50%; left: 50%;
//                     transform: translateX(-50%) translateY(-50%); ;
//                     font-size: 50px;
//                     color:white">16:9</p>
//             </div>
//         </div>
//     `,
//   }),
//   // 控制 controls 中能控制的參數
//   parameters: {
//     controls: {
//       include: ['objectFit', 'src' ],
//     },
//   },
// };
//
// //==== 圖片 object-fit ====//
// export const ImageFit = {
//   name: '圖片自適應',
//   args: {
//     src: 'https://picsum.photos/300/300',
//     objectFit: 'cover',
//     ratio: '169'
//   },
//   render: (args) => ({
//     components: { Image },
//     setup() {
//       // Create a ref for modelValue to be used with v-model
//       return {
//         args,
//       };
//     },
//     template: `
//         <div style="display:flex; gap: 24px;">
//             <div style="position: relative; width: fit-content; height: fit-content;">
//               <Image :ratio="args.ratio"
//                      objectFit="cover"
//                      :src="args.src"
//                      style="width: 250px"
//               ></Image>
//               <p
//                     style="position: absolute;
//                     top: 50%; left: 50%;
//                     transform: translateX(-50%) translateY(-50%); ;
//                     font-size: 50px;
//                     color:white">cover</p>
//             </div>
//             <div style="position: relative; width: fit-content; height: fit-content;">
//               <Image :ratio="args.ratio"
//                      objectFit="contain"
//                      :src="args.src"
//                      style="width: 250px"
//               ></Image>
//               <p
//                   style="position: absolute;
//                       top: 50%; left: 50%;
//                       transform: translateX(-50%) translateY(-50%); ;
//                       font-size: 50px;
//                       color:white">contain</p>
//             </div>
//             <div style="position: relative; width: fit-content; height: fit-content;">
//               <Image :ratio="args.ratio"
//                      objectFit="fill"
//                      :src="args.src"
//                      style="width: 250px"
//               ></Image>
//               <p
//                   style="position: absolute;
//                         top: 50%; left: 50%;
//                         transform: translateX(-50%) translateY(-50%); ;
//                         font-size: 50px;
//                         color:white">fill</p>
//             </div>
//             <div style="position: relative; width: fit-content; height: fit-content;">
//               <Image :ratio="args.ratio"
//                      objectFit="none"
//                      :src="args.src"
//                      style="width: 250px"
//               ></Image>
//               <p
//                   style="position: absolute;
//                           top: 50%; left: 50%;
//                           transform: translateX(-50%) translateY(-50%); ;
//                           font-size: 50px;
//                           color:white">none</p>
//             </div>
//
//         </div>
//     `,
//   }),
//   // 控制 controls 中能控制的參數
//   parameters: {
//     controls: {
//       include: ['ratio', 'src' ],
//     },
//   },
// };


//--- JONY VERSION END ---//