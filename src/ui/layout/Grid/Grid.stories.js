import Grid from "@/ui/layout/Grid/Grid.vue"
import Row from "@/ui/layout/Grid/Row.vue"
import Column from "@/ui/layout/Grid/Column.vue"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	components: {Grid, Row, Column},
	title: 'Design System/Grid',
	component: {
		Grid,
		Row,
		Column
	},
	tags: ["autodocs"],
	argTypes: {
		fluid: {
			description: "將元件寬度設置為 100%，以填滿父級容器",
			control: { type: "boolean" },
			table: {
				category: 'Grid',
			},
		},
		className: {
			description: '客製化樣式',
			control: { type: 'text' },
			table: {
				category: 'Grid',
			},
		},

		//響應式 align-items 設定，控制 column 內容對齊方式
		align: {
			description: 'align-items 設定',
			control: { type: "select" },
			options: ['start', 'end', 'center', 'baseline', 'stretch'],
			table: {
				category: 'ROW',
			},
		},

		//響應式 justify-content 設定，讓內容在水平方向上分配空間
		justify: {
			description: 'justify-content 設定',
			control: { type: "select" },
			options: ['start', 'end', 'center', 'stretch', 'space-between', 'space-around', 'space-evenly',],
			table: {
				category: 'ROW',
			},
		},

		// column row gap 設定
		g: {
			description: '間距設定',
			control: {
				type: "select",
				// 使用 labels 來定義顯示文字
				labels: {
					'0': "0 (0rem)",
					'1': "1 (0.25rem)",
					'2': "2 (0.5rem)",
					'3': "3 (1rem)",
					'4': "4 (1.5rem)",
					'5': "5 (3rem)",
				}},
			options: ['0', '1', '2', '3', '4', '5',],
			table: {
				category: 'ROW',
			},
		},
		gx: {
			description: '水平間距設定',
			control: {
				type: "select",
				// 使用 labels 來定義顯示文字
				labels: {
					'0': "0 (0rem)",
					'1': "1 (0.25rem)",
					'2': "2 (0.5rem)",
					'3': "3 (1rem)",
					'4': "4 (1.5rem)",
					'5': "5 (3rem)",
				}},
			options: ['0', '1', '2', '3', '4', '5',],
			table: {
				category: 'ROW',
			},
		},
		gy: {
			description: '垂直間距設定',
			control: {
				type: "select",
				// 使用 labels 來定義顯示文字
				labels: {
					'0': "0 (0rem)",
					'1': "1 (0.25rem)",
					'2': "2 (0.5rem)",
					'3': "3 (1rem)",
					'4': "4 (1.5rem)",
					'5': "5 (3rem)",
				}},
			options: ['0', '1', '2', '3', '4', '5',],
			table: {
				category: 'ROW',
			},
		},

		// column 設定
		col: {
			description: 'column 長度',
			control: { type: "select" },
			options: ['1', '2', '3 ', '4', '5', '6 ', '7', '8 ', '9', '10', '11', '12'],
			table: {
				category: 'COLUMN',
			},
		},
		sm: {
			description: 'column 長度斷點 sm 設定',
			control: { type: "select" },
			options: ['1 ', '2', '3 ', '4', '5', '6 ', '7', '8 ', '9', '10', '11', '12'],
			table: {
				category: 'COLUMN',
			},
		},
		md: {
			description: 'column 長度斷點 md 設定',
			control: { type: "select" },
			options: ['1 ', '2', '3 ', '4', '5', '6 ', '7', '8 ', '9', '10', '11', '12'],
			table: {
				category: 'COLUMN',
			},
		},
		lg: {
			description: 'column 長度斷點 lg 設定',
			control: { type: "select" },
			options: ['1 ', '2', '3 ', '4', '5', '6 ', '7', '8 ', '9', '10', '11', '12'],
			table: {
				category: 'COLUMN',
			},
		},
		xl: {
			description: 'column 長度斷點 xl 設定',
			control: { type: "select" },
			options: ['1 ', '2', '3 ', '4', '5', '6 ', '7', '8 ', '9', '10', '11', '12'],
			table: {
				category: 'COLUMN',
			},
		},
		xxl: {
			description: 'column 長度斷點 xxl 設定',
			control: { type: "select" },
			options: ['1 ', '2', '3 ', '4', '5', '6 ', '7', '8 ', '9', '10', '11', '12'],
			table: {
				category: 'COLUMN',
			},
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: 'Grid',
			description: {
				component: 'Grid 組件的呈現及說明。',
			},
		},
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== 預設項目 ====//
export const GridDefaultStory = {
	name: '預設項目',
	args: {
		//Grid
		fluid: false,
		className: '',

		//Row
		g: '0',
		gx: '',
		gy: '3',
		align: 'stretch',
		justify: 'start',

		//Column
		col: '12',
		sm: '6',
		md: '4',
		lg: '3',
		xl: '2',
		xxl: '',
	},
	render: (args) => ({
		components: { Grid, Row, Column},
		setup() {
			return {
				args,
			};
		},
		template: `
			<Grid :fluid="args.fluid" :className="args.className">
				<Row :g="args.g" :gx="args.gx" :gy="args.gy" :justify="args.start" :align="args.align">
					<Column v-for="(index) in 12" :key="index" 
						:col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
						<div class="diagonal-background"  style="border:1px solid #ccc; padding:8px 16px;" >
							Column {{index}}
						</div>
					</Column>
				</Row>
			</Grid>
			`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			include: ['fluid', 'className', 'justify', 'align', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl'],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<Grid',
						`  :fluid="${args.fluid}"`,
						`  className="${args.className}"`,
						'>',
						'  <Row',
						`    g="${args.g}"`,
						`    gx="${args.gx}"`,
						`    gy="${args.gy}"`,
						`    justify="${args.start}"`,
						`    align="${args.align}"`,
						'  >',
						'    <Column v-for="(index) in 12" :key="index"',
						`      col="${args.col}"`,
						`      sm="${args.sm}"`,
						`      md="${args.md}"`,
						`      lg="${args.lg}"`,
						`      xl="${args.xl}"`,
						`      xxl="${args.xxl}"`,
						'    >',
						'      <div class="diagonal-background" style="border:1px solid #ccc; padding:8px 16px;">',
						'        Column {{index}}',
						'      </div>',
						'    </Column>',
						'  </Row>',
						'</Grid>',
					].join('\n').trim();

				}
			}
		}
	},
};

//==== 格線系統-4欄 ====//
export const Grid4ColumnsStory = {
	name: '格線系統-4欄',
	args: {
		//Grid
		fluid: false,
		className: '',

		//Row
		g: '3',
		gx: '',
		gy: '0',
		align: 'stretch',
		justify: 'start',

		//Column
		col: '12',
		sm: '6',
		md: '4',
		lg: '3',
		xl: '',
		xxl: '',
	},
	render: (args) => ({
		components: { Grid, Row, Column},
		setup() {
			return {
				args,
			};
		},

		template: `
				<Grid :fluid="args.fluid" :className="args.className">
					<Row :g="args.g" :gx="args.gx" :gy="args.gy" :justify="args.start" :align="args.align">
						<Column v-for="(index) in 12" :key="index" 
							:col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
							<div class="diagonal-background"  style="border:1px solid #ccc; padding:8px 16px;" >
								Column {{ index }}
							</div>
						</Column>
					</Row>
				</Grid>
			`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			include: ['fluid', 'className', 'justify', 'align', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl'],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<Grid',
						`  :fluid="${args.fluid}"`,
						`  className="${args.className}"`,
						'>',
						'  <Row',
						`    g="${args.g}"`,
						`    gx="${args.gx}"`,
						`    gy="${args.gy}"`,
						`    justify="${args.start}"`,
						`    align="${args.align}"`,
						'  >',
						'    <Column v-for="(index) in 12" :key="index"',
						`      col="${args.col}"`,
						`      sm="${args.sm}"`,
						`      md="${args.md}"`,
						`      lg="${args.lg}"`,
						`      xl="${args.xl}"`,
						`      xxl="${args.xxl}"`,
						'    >',
						'      <div class="diagonal-background" style="border:1px solid #ccc; padding:8px 16px;">',
						'        Column {{index}}',
						'      </div>',
						'    </Column>',
						'  </Row>',
						'</Grid>',
					].join('\n').trim();
				}
			}
		}
	},
};

//==== 格線系統-3欄 ====//
export const Grid3ColumnsStory = {
	name: '格線系統-3欄',
	args: {
		//Grid
		fluid: false,
		className: '',

		//Row
		g: '3',
		gx: '',
		gy: '0',
		align: 'stretch',
		justify: 'start',

		//Column
		col: '12',
		sm: '6',
		md: '4',
		lg: '',
		xl: '',
		xxl: '',
	},
	render: (args) => ({
		components: { Grid, Row, Column},
		setup() {
			return {
				args,
			};
		},

		template: `
				<Grid :fluid="args.fluid" :className="args.className">
					<Row :g="args.g" :gx="args.gx" :gy="args.gy" :justify="args.start" :align="args.align">
						<Column v-for="(index) in 12" :key="index" 
							:col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
							<div class="diagonal-background"  style="border:1px solid #ccc; padding:8px 16px;" >
								Column {{ index }}
							</div>
						</Column>
					</Row>
				</Grid>
			`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			include: ['fluid', 'className', 'justify', 'align', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl'],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<Grid',
						`  :fluid="${args.fluid}"`,
						`  className="${args.className}"`,
						'>',
						'  <Row',
						`    g="${args.g}"`,
						`    gx="${args.gx}"`,
						`    gy="${args.gy}"`,
						`    justify="${args.start}"`,
						`    align="${args.align}"`,
						'  >',
						'    <Column v-for="(index) in 12" :key="index"',
						`      col="${args.col}"`,
						`      sm="${args.sm}"`,
						`      md="${args.md}"`,
						`      lg="${args.lg}"`,
						`      xl="${args.xl}"`,
						`      xxl="${args.xxl}"`,
						'    >',
						'      <div class="diagonal-background" style="border:1px solid #ccc; padding:8px 16px;">',
						'        Column {{index}}',
						'      </div>',
						'    </Column>',
						'  </Row>',
						'</Grid>',
					].join('\n').trim();
				}
			}
		}
	},
};

//==== 格線系統-2欄 ====//
export const Grid2ColumnsStory = {
	name: '格線系統-2欄',
	args: {
		//Grid
		fluid: false,
		className: '',

		//Row
		g: '3',
		gx: '',
		gy: '0',
		align: 'stretch',
		justify: 'start',

		//Column
		col: '12',
		sm: '6',
		md: '',
		lg: '',
		xl: '',
		xxl: '',
	},
	render: (args) => ({
		components: { Grid, Row, Column},
		setup() {
			return {
				args,
			};
		},

		template: `
				<Grid :fluid="args.fluid" :className="args.className">
					<Row :g="args.g" :gx="args.gx" :gy="args.gy" :justify="args.start" :align="args.align">
						<Column v-for="(index) in 12" :key="index" 
							:col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
							<div class="diagonal-background"  style="border:1px solid #ccc; padding:8px 16px;" >
								Column {{ index }}
							</div>
						</Column>
					</Row>
				</Grid>
			`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			include: ['fluid', 'className', 'justify', 'align', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl'],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<Grid',
						`  :fluid="${args.fluid}"`,
						`  className="${args.className}"`,
						'>',
						'  <Row',
						`    g="${args.g}"`,
						`    gx="${args.gx}"`,
						`    gy="${args.gy}"`,
						`    justify="${args.start}"`,
						`    align="${args.align}"`,
						'  >',
						'    <Column v-for="(index) in 12" :key="index"',
						`      col="${args.col}"`,
						`      sm="${args.sm}"`,
						`      md="${args.md}"`,
						`      lg="${args.lg}"`,
						`      xl="${args.xl}"`,
						`      xxl="${args.xxl}"`,
						'    >',
						'      <div class="diagonal-background" style="border:1px solid #ccc; padding:8px 16px;">',
						'        Column {{index}}',
						'      </div>',
						'    </Column>',
						'  </Row>',
						'</Grid>',
					].join('\n').trim();
				}
			}
		}
	},
};

//==== 格線系統-1欄 ====//
export const Grid1ColumnsStory = {
	name: '格線系統-1欄',
	args: {
		//Grid
		fluid: false,
		className: '',

		//Row
		g: '3',
		gx: '',
		gy: '0',
		align: 'stretch',
		justify: 'start',

		//Column
		col: '12',
		sm: '',
		md: '',
		lg: '',
		xl: '',
		xxl: '',
	},
	render: (args) => ({
		components: { Grid, Row, Column},
		setup() {
			return {
				args,
			};
		},
		template: `
				<Grid :fluid="args.fluid" :className="args.className">
					<Row :g="args.g" :gx="args.gx" :gy="args.gy" :justify="args.start" :align="args.align">
						<Column v-for="(index) in 12" :key="index" 
							:col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
							<div class="diagonal-background"  style="border:1px solid #ccc; padding:8px 16px;" >
								Column {{ index }}
							</div>
						</Column>
					</Row>
				</Grid>
			`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			include: ['fluid', 'className', 'justify', 'align', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl'],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<Grid',
						`  :fluid="${args.fluid}"`,
						`  className="${args.className}"`,
						'>',
						'  <Row',
						`    g="${args.g}"`,
						`    gx="${args.gx}"`,
						`    gy="${args.gy}"`,
						`    justify="${args.start}"`,
						`    align="${args.align}"`,
						'  >',
						'    <Column v-for="(index) in 12" :key="index"',
						`      col="${args.col}"`,
						`      sm="${args.sm}"`,
						`      md="${args.md}"`,
						`      lg="${args.lg}"`,
						`      xl="${args.xl}"`,
						`      xxl="${args.xxl}"`,
						'    >',
						'      <div class="diagonal-background" style="border:1px solid #ccc; padding:8px 16px;">',
						'        Column {{index}}',
						'      </div>',
						'    </Column>',
						'  </Row>',
						'</Grid>',
					].join('\n').trim();
				}
			}
		}
	},
};




//--- JONY VERSION START ---//

// //==== 預設項目 ====//
// export const GridDefault = {
// 	name: '預設項目',
// 	args: {
// 		//Grid
// 		size: '',
// 		fluid: false,
// 		className: '',
//
// 		//Row
// 		g: '2',
// 		gx: '',
// 		gy: '',
//
// 		//Column
// 		col: '12',
// 		sm: '6',
// 		md: '4',
// 		lg: '',
// 		xl: '3',
// 		xxl: '',
// 	},
// 	render: (args) => ({
// 		components: { Container, Row, Column, FakeContent },
// 		setup() {
// 			return {
// 				args,
// 			};
// 		},
// 		template:
// 			`
// 				<Container :size="args.size" :fluid="args.fluid" :className="args.className" style="border:2px dashed #f00;">
// 					<Row :g="args.g" :gx="args.gx" :gy="args.gy">
// 						<Column v-for="(item, index) in 12" :key="index"
// 							:col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
// 							<FakeContent height="100">
// 								[ Col ]
// 								{{ args.col ? \`col: \` : '' }}{{ args.col ? args.col : '' }}
// 								{{ args.sm ? \`sm: \` : '' }}{{ args.sm ? args.sm : '' }}
// 								{{ args.md ? \`md: \` : '' }}{{ args.md ? args.md : '' }}
// 								{{ args.lg ? \`lg: \` : '' }}{{ args.lg ? args.lg : '' }}
// 								{{ args.xl ? \`xl: \` : '' }}{{ args.xl ? args.xl : '' }}
// 								{{ args.xxl ? \`xxl: \` : '' }}{{ args.xxl ? args.xxl : '' }}
// 							</FakeContent>
// 						</Column>
// 					</Row>
// 				</Container>
// 			`,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			include: ['size', 'fluid', 'className', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl'],
// 		},
// 	},
// };
//
// //==== Container ====//
// export const ContainerStory = {
// 	name: '[Container]',
// 	component: Container,
// 	args: {
// 		size: '',
// 		fluid: false,
// 		className: ''
// 	},
// 	render: (args) => ({
// 		components: { Container, Row, Column, FakeContent },
// 		setup() {
// 			return {
// 				args,
// 			};
// 		},
// 		template:
// 			`
// 			<Container
// 				:size="args.size"
// 				:fluid="args.fluid"
// 				:className="args.className"
// 				style="border:2px dashed #f00;"
// 			>
// 				<Row g="0">
// 					<Column col="12">
// 						<FakeContent height="100">[ Col ] col:12</FakeContent>
// 					</Column>
// 				</Row>
// 			</Container>
// 			`,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			include: ['size','fluid', 'className'],
// 		},
// 	},
// }
//
// //==== Row - align-item ====//
// export const RowAlignItemStory = {
// 	name: '[Row] align-items',
// 	component: Row,
// 	args: {
// 		align: 'start',
// 	},
// 	render: (args) => ({
// 		components: { Container, Row, Column, FakeContent },
// 		setup() {
// 			return {
// 				args,
// 			};
// 		},
// 		template:
// 			`
// 			<Container style="border:2px dashed #f00;" class="mb-5">
// 				<Row :align="args.align" :g="args.g" :gx="args.gx" :gy="args.gy" style="height: 150px">
// 					<Column>
// 						<FakeContent height="50">[ Row ] align:{{ args.align }}</FakeContent>
// 					</Column>
// 					<Column>
// 						<FakeContent height="50">[ Row ] align:{{ args.align }}</FakeContent>
// 					</Column>
// 					<Column>
// 						<FakeContent height="50">[ Row ] align:{{ args.align }}</FakeContent>
// 					</Column>
// 				</Row>
// 			</Container>
// 			`,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			include: ['align'],
// 		},
// 	},
// }
//
// //==== Row - justify-content ====//
// export const RowJustifyContentStory = {
// 	name: '[Row] justify-content',
// 	component: Row,
// 	args: {
// 		g: '',
// 		gx: '0',
// 		gy: '3'
// 	},
// 	render: (args) => ({
// 		components: { Container, Row, Column, FakeContent },
// 		setup() {
// 			return {
// 				args,
// 			};
// 		},
// 		template:
// 			`
// 			<Container style="border:2px dashed #f00;" class="mb-5">
// 				<Row justify="start" :g="args.g" :gx="args.gx" :gy="args.gy">
// 					<Column col="4">
// 						<FakeContent height="50">[ Row ] align:start</FakeContent>
// 					</Column>
// 					<Column col="4">
// 						<FakeContent height="50">[ Row ] align:start</FakeContent>
// 					</Column>
// 				</Row>
//
// 				<Row justify="center" :g="args.g" :gx="args.gx" :gy="args.gy">
// 					<Column col="4">
// 						<FakeContent height="50">[ Row ] align:center</FakeContent>
// 					</Column>
// 					<Column col="4">
// 						<FakeContent height="50">[ Row ] align:center</FakeContent>
// 					</Column>
// 				</Row>
//
// 				<Row justify="end" :g="args.g" :gx="args.gx" :gy="args.gy">
// 					<Column col="4">
// 						<FakeContent height="50">[ Row ] align:end</FakeContent>
// 					</Column>
// 					<Column col="4">
// 						<FakeContent height="50">[ Row ] align:end</FakeContent>
// 					</Column>
// 				</Row>
//
// 				<Row justify="around" :g="args.g" :gx="args.gx" :gy="args.gy">
// 					<Column col="4">
// 						<FakeContent height="50">[ Row ] align:around</FakeContent>
// 					</Column>
// 					<Column col="4">
// 						<FakeContent height="50">[ Row ] align:around</FakeContent>
// 					</Column>
// 				</Row>
//
// 				<Row justify="between" :g="args.g" :gx="args.gx" :gy="args.gy">
// 					<Column col="4">
// 						<FakeContent height="50">[ Row ] align:between</FakeContent>
// 					</Column>
// 					<Column col="4">
// 						<FakeContent height="50">[ Row ] align:between</FakeContent>
// 					</Column>
// 				</Row>
//
// 				<Row justify="evenly" :g="args.g" :gx="args.gx" :gy="args.gy">
// 					<Column col="4">
// 						<FakeContent height="50">[ Row ] align:evenly</FakeContent>
// 					</Column>
// 					<Column col="4">
// 						<FakeContent height="50">[ Row ] align:evenly</FakeContent>
// 					</Column>
// 				</Row>
// 			</Container>
// 			`,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			include: ['className'],
// 		},
// 	},
// }
//
// //==== Row - Gutter ====//
// export const RowGutterStory = {
// 	name: '[Row] gutter',
// 	component: Row,
// 	args: {
// 		g: '0',
// 	},
// 	render: (args) => ({
// 		components: { Container, Row, Column, FakeContent },
// 		setup() {
// 			return {
// 				args,
// 			};
// 		},
// 		template:
// 			`
// 			<Container style="border:2px dashed #f00;" class="mb-5">
// 				<Row g="0" class="mt-0">
// 					<Column col="12">
// 						<FakeContent height="50">[ Row ] g:default</FakeContent>
// 					</Column>
// 					<Column col="6">
// 						<FakeContent height="50">[ Row ] g:default</FakeContent>
// 					</Column>
// 					<Column col="6">
// 						<FakeContent height="50">[ Row ] g:default</FakeContent>
// 					</Column>
// 				</Row>
// 			</Container>
//
// 			<Container style="border:2px dashed #f00;" class="mb-5">
// 				<Row :g="args.g" class="mt-0">
// 					<Column col="12">
// 						<FakeContent height="50">[ Row ] g:{{ args.g }}</FakeContent>
// 					</Column>
// 					<Column col="6">
// 						<FakeContent height="50">[ Row ] g:{{ args.g }}</FakeContent>
// 					</Column>
// 					<Column col="6">
// 						<FakeContent height="50">[ Row ] g:{{ args.g }}</FakeContent>
// 					</Column>
// 				</Row>
// 			</Container>
// 			`,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			include: ['g'],
// 		},
// 	},
// }
//
// //==== Column - align-self ====//
// export const ColAlignSelfStory = {
// 	name: '[Column] align-self',
// 	component: Column,
// 	args: {
// 		alignSelf: 'start',
// 	},
// 	render: (args) => ({
// 		components: { Container, Row, Column, FakeContent },
// 		setup() {
// 			return {
// 				args,
// 			};
// 		},
// 		template:
// 			`
// 			<Container style="border:2px dashed #f00;">
// 				<Row :g="args.g" :gx="args.gx" :gy="args.gy" style="height: 150px">
// 					<Column :alignSelf="args.alignSelf">
// 						<FakeContent height="50">[ Row ] alignSelf:{{ args.alignSelf }}</FakeContent>
// 					</Column>
// 					<Column alignSelf="center">
// 						<FakeContent height="50">[ Row ] alignSelf:center</FakeContent>
// 					</Column>
// 					<Column alignSelf="end">
// 						<FakeContent height="50">[ Row ] alignSelf:end</FakeContent>
// 					</Column>
// 				</Row>
// 			</Container>
// 			`,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			include: ['alignSelf'],
// 		},
// 	},
// }
//
// //==== Column - order ====//
// export const ColOrderStory = {
// 	name: '[Column] order',
// 	component: Column,
// 	args: {
// 		order: '',
// 	},
// 	render: (args) => ({
// 		components: { Container, Row, Column, FakeContent },
// 		setup() {
// 			return {
// 				args,
// 			};
// 		},
// 		template:
// 			`
// 			<Container style="border:2px dashed #f00;">
// 				<Row >
// 					<Column :order="args.order">
// 						<FakeContent height="50">[ Col-01 ] order:{{ args.order }}</FakeContent>
// 					</Column>
// 					<Column order="1">
// 						<FakeContent height="50">[ Col-02 ]</FakeContent>
// 					</Column>
// 					<Column order="2">
// 						<FakeContent height="50">[ Col-03 ]</FakeContent>
// 					</Column>
//
// 				</Row>
// 			</Container>
// 			`,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			include: ['order'],
// 		},
// 	},
// }
//
// //==== Column - response ====//
// export const ColResponseStory = {
// 	name: '[Column] response',
// 	component: Column,
// 	args: {
// 		col: '12',
// 		sm: '6',
// 		md: '4',
// 		lg: '3',
// 		xl: '4',
// 		xxl: '6',
// 	},
// 	render: (args) => ({
// 		components: { Container, Row, Column, FakeContent },
// 		setup() {
// 			return {
// 				args,
// 			};
// 		},
// 		template:
// 			`
// 			<Container style="border:2px dashed #f00;">
// 				<Row gy="3">
// 					<Column :col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
// 						<FakeContent height="100">
// 							[ Col ]
// 							{{ args.col ? \`col: \` : '' }}{{ args.col ? args.col : ''}}
// 							{{ args.sm ? \`sm: \` : '' }}{{ args.sm ? args.sm : ''}}
// 							{{ args.md ? \`md: \` : '' }}{{ args.md ? args.md : ''}}
// 							{{ args.lg ? \`lg: \` : '' }}{{ args.lg ? args.lg : ''}}
// 							{{ args.xl ? \`xl: \` : '' }}{{ args.xl ? args.xl : ''}}
// 							{{ args.xxl ? \`xxl: \` : '' }}{{ args.xxl ? args.xxl : ''}}
// 						</FakeContent>
// 					</Column>
// 					<Column :col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
// 						<FakeContent height="100">
// 							[ Col ]
// 							{{ args.col ? \`col: \` : '' }}{{ args.col ? args.col : ''}}
// 							{{ args.sm ? \`sm: \` : '' }}{{ args.sm ? args.sm : ''}}
// 							{{ args.md ? \`md: \` : '' }}{{ args.md ? args.md : ''}}
// 							{{ args.lg ? \`lg: \` : '' }}{{ args.lg ? args.lg : ''}}
// 							{{ args.xl ? \`xl: \` : '' }}{{ args.xl ? args.xl : ''}}
// 							{{ args.xxl ? \`xxl: \` : '' }}{{ args.xxl ? args.xxl : ''}}
// 						</FakeContent>
// 					</Column>
// 					<Column :col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
// 						<FakeContent height="100">
// 							[ Col ]
// 							{{ args.col ? \`col: \` : '' }}{{ args.col ? args.col : ''}}
// 							{{ args.sm ? \`sm: \` : '' }}{{ args.sm ? args.sm : ''}}
// 							{{ args.md ? \`md: \` : '' }}{{ args.md ? args.md : ''}}
// 							{{ args.lg ? \`lg: \` : '' }}{{ args.lg ? args.lg : ''}}
// 							{{ args.xl ? \`xl: \` : '' }}{{ args.xl ? args.xl : ''}}
// 							{{ args.xxl ? \`xxl: \` : '' }}{{ args.xxl ? args.xxl : ''}}
// 						</FakeContent>
// 					</Column>
// 					<Column :col="args.col" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl" :xxl="args.xxl">
// 						<FakeContent height="100">
// 							[ Col ]
// 							{{ args.col ? \`col: \` : '' }}{{ args.col ? args.col : ''}}
// 							{{ args.sm ? \`sm: \` : '' }}{{ args.sm ? args.sm : ''}}
// 							{{ args.md ? \`md: \` : '' }}{{ args.md ? args.md : ''}}
// 							{{ args.lg ? \`lg: \` : '' }}{{ args.lg ? args.lg : ''}}
// 							{{ args.xl ? \`xl: \` : '' }}{{ args.xl ? args.xl : ''}}
// 							{{ args.xxl ? \`xxl: \` : '' }}{{ args.xxl ? args.xxl : ''}}
// 						</FakeContent>
// 					</Column>
// 				</Row>
// 			</Container>
// 			`,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			include: ['col', 'sm', 'md', 'lg', 'xl', 'xxl'],
// 		},
// 	},
// }
//
// //==== Column - width setting ====//
// export const ColWidthSetStory = {
// 	name: '[Column] width setting',
// 	component: Column,
// 	args: {
// 		g: '',
// 		gx: '0',
// 		gy: '3'
// 	},
// 	render: (args) => ({
// 		components: { Container, Row, Column, FakeContent },
// 		setup() {
// 			return {
// 				args,
// 			};
// 		},
// 		template:
// 			`
// 			<Container style="border:2px dashed #f00;" class="mb-5">
// 				<Row g="3" class="mt-0">
// 					<Column col="1">
// 					<FakeContent height="50">col:1</FakeContent>
// 					</Column>
// 					<Column col="11">
// 					<FakeContent height="50">[ Col ] col:11</FakeContent>
// 					</Column>
//
// 					<Column col="2">
// 					<FakeContent height="50">[ Col ] col:2</FakeContent>
// 					</Column>
// 					<Column col="10">
// 					<FakeContent height="50">[ Col ] col:10</FakeContent>
// 					</Column>
//
// 					<Column col="3">
// 					<FakeContent height="50">[ Col ] col:3</FakeContent>
// 					</Column>
// 					<Column col="9">
// 					<FakeContent height="50">[ Col ] col:9</FakeContent>
// 					</Column>
//
// 					<Column col="4">
// 					<FakeContent height="50">[ Col ] col:4</FakeContent>
// 					</Column>
// 					<Column col="8">
// 					<FakeContent height="50">[ Col ] col:8</FakeContent>
// 					</Column>
//
// 					<Column col="5">
// 					<FakeContent height="50">[ Col ] col:5</FakeContent>
// 					</Column>
// 					<Column col="7">
// 					<FakeContent height="50">[ Col ] col:7</FakeContent>
// 					</Column>
//
// 					<Column col="6">
// 					<FakeContent height="50">[ Col ] col:6</FakeContent>
// 					</Column>
// 					<Column col="6">
// 					<FakeContent height="50">[ Col ] col:6</FakeContent>
// 					</Column>
//
// 					<Column col="7">
// 					<FakeContent height="50">[ Col ] col:7</FakeContent>
// 					</Column>
// 					<Column col="5">
// 					<FakeContent height="50">[ Col ] col:5</FakeContent>
// 					</Column>
//
// 					<Column col="8">
// 					<FakeContent height="50">[ Col ] col:8</FakeContent>
// 					</Column>
// 					<Column col="4">
// 					<FakeContent height="50">[ Col ] col:4</FakeContent>
// 					</Column>
//
// 					<Column col="9">
// 					<FakeContent height="50">[ Col ] col:9</FakeContent>
// 					</Column>
// 					<Column col="3">
// 					<FakeContent height="50">[ Col ] col:3</FakeContent>
// 					</Column>
//
// 					<Column col="10">
// 					<FakeContent height="50">[ Col ] col:10</FakeContent>
// 					</Column>
// 					<Column col="2">
// 					<FakeContent height="50">[ Col ] col:2</FakeContent>
// 					</Column>
//
// 					<Column col="11">
// 					<FakeContent height="50">[ Col ] col:11</FakeContent>
// 					</Column>
// 					<Column col="1">
// 					<FakeContent height="50">col:1</FakeContent>
// 					</Column>
//
// 					<Column col="12">
// 					<FakeContent height="50">[ Col ] col:12</FakeContent>
// 					</Column>
// 				</Row>
// 			</Container>
// 			`,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			include: ['g', 'gx','gy','className'],
// 		},
// 	},
// }

//--- JONY VERSION END ---//



