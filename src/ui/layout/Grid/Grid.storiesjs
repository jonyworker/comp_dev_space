import Grid from "@/ui/layout/Grid/Grid.vue"
import Row from "@/ui/layout/Grid/Row.vue"
import Column from "@/ui/layout/Grid/Column.vue"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: 'Design System/Grid',
	component: Grid,
	tags: ["autodocs"],
	argTypes: {
		fluid: {
			control: 'boolean',
			defaultValue: true,
			description: '是否使用 100% 宽度',
			table: {
				category: 'Grid',
			},
		},
		className: {
			control: 'text',
			description: '客製化樣式',
			table: {
				category: 'Grid',
			},
		},
		// Row 参数
		hasGap: {
			control: 'boolean',
			defaultValue: true,
			description: '是否有間距',
			table: {
				category: 'Row',
			},
		},
		justify: {
			control: {
				type: 'select',
			},
			options: [
				'flex-start',
				'center',
				'flex-end',
				'space-between',
				'space-around',
				'space-evenly',
			],
			description: '水平對齊方式',
			table: {
				category: 'Row',
			},
		},
		alignItems: {
			control: {
				type: 'select',
			},
			options: ['stretch', 'center', 'flex-start', 'flex-end', 'baseline'],
			description: '垂直對齊方式',
			table: {
				category: 'Row',
			},
		},
		// Column 参数
		xs: {
			control: 'number',
			description: '手機尺寸',
			table: {
				category: 'Column',
			},
		},
		sm: {
			control: 'number',
			description: '平板尺寸',
			table: {
				category: 'Column',
			},
		},
		md: {
			control: 'number',
			description: '桌機尺寸',
			table: {
				category: 'Column',
			},
		},
		lg: {
			control: 'number',
			description: '大桌機尺寸',
			table: {
				category: 'Column',
			},
		},
		xl: {
			control: 'number',
			description: '超大桌機尺寸',
			table: {
				category: 'Column',
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
export const GridDefault = {
	name: '預設項目',
	args: {
		//Grid
		fluid: false,
		className: '',

		//Row
		hasGap: false,
		justify: 'flex-start',
		alignItems: 'stretch',

		//Column
		xs: 12,
		sm: 6,
		md: 4,
		lg: 3,
		xl: 2,
	},
	render: (args) => ({
		components: { Grid, Row, Column },
		setup() {
			return {
				args,
			};
		},
		template:
			`
			
				<Grid :fluid="args.fluid">
					<Row :hasGap="args.hasGap" gap="100">
						<Column :xs="args.xs" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl"
						        v-for="(item, index) in 12">
							<div
								class="diagonal-background"
								style="border: 1px solid #ccc; padding: 8px 16px;"
							>
								Column{{index + 1}}
							</div>
						</Column>

					</Row>
				</Grid>
			
			
			`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			exclude: ['toggleIsChecked'],
		},
	},
};

//==== 格線系統-4欄 ====//
export const Grid4Column = {
	name: '格線系統-4欄',
	args: {
		//Grid
		fluid: false,
		className: '',

		//Row
		hasGap: false,
		justify: 'flex-start',
		alignItems: 'stretch',

		//Column
		xs: 12,
		sm: 6,
		md: 4,
		lg: 3,

	},
	render: (args) => ({
		components: { Grid, Row, Column },
		setup() {
			return {
				args,
			};
		},
		template:
			`
			
				<Grid :fluid="args.fluid">
					<Row :hasGap="args.hasGap" gap="100">
						<Column :xs="args.xs" :sm="args.sm" :md="args.md" :lg="args.lg"
						        v-for="(item, index) in 12">
							<div
								class="diagonal-background"
								style="border: 1px solid #ccc; padding: 8px 16px;"
							>
								Column{{index + 1}}
							</div>
						</Column>

					</Row>
				</Grid>
				
			
			`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			exclude: ['xl'],
		},
	},
};

//==== 格線系統-3欄 ====//
export const Grid3Column = {
	name: '格線系統-3欄',
	args: {
		//Grid
		fluid: false,
		className: '',

		//Row
		hasGap: false,
		justify: 'flex-start',
		alignItems: 'stretch',

		//Column
		xs: 12,
		sm: 6,
		md: 4,


	},
	render: (args) => ({
		components: { Grid, Row, Column },
		setup() {
			return {
				args,
			};
		},
		template:
			`
			
				<Grid :fluid="args.fluid">
					<Row :hasGap="args.hasGap" gap="100">
						<Column :xs="args.xs" :sm="args.sm" :md="args.md" 
						        v-for="(item, index) in 12">
							<div
								class="diagonal-background"
								style="border: 1px solid #ccc; padding: 8px 16px;"
							>
								Column{{index + 1}}
							</div>
						</Column>

					</Row>
				</Grid>
			
			
			`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			exclude: ['xl','lg'],
		},
	},
};

//==== 格線系統-2欄 ====//
export const Grid2Column = {
	name: '格線系統-2欄',
	args: {
		//Grid
		fluid: false,
		className: '',

		//Row
		hasGap: false,
		justify: 'flex-start',
		alignItems: 'stretch',

		//Column
		xs: 12,
		sm: 6,



	},
	render: (args) => ({
		components: { Grid, Row, Column },
		setup() {
			return {
				args,
			};
		},
		template:
			`
			
				<Grid :fluid="args.fluid">
					<Row :hasGap="args.hasGap" gap="100">
						<Column :xs="args.xs" :sm="args.sm" 
						        v-for="(item, index) in 12">
							<div
								class="diagonal-background"
								style="border: 1px solid #ccc; padding: 8px 16px;"
							>
								Column{{index + 1}}
							</div>
						</Column>

					</Row>
				</Grid>
			
			
			`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			exclude: ['xl','lg','md'],
		},
	},
};

//==== 格線系統-1欄 ====//
export const Grid1Column = {
	name: '格線系統-1欄',
	args: {
		//Grid
		fluid: false,
		className: '',

		//Row
		hasGap: false,
		justify: 'flex-start',
		alignItems: 'stretch',

		//Column
		xs: 12,
	},
	render: (args) => ({
		components: { Grid, Row, Column },
		setup() {
			return {
				args,
			};
		},
		template:
			`
			
				<Grid :fluid="args.fluid">
					<Row :hasGap="args.hasGap" gap="100">
						<Column :xs="args.xs" 
						        v-for="(item, index) in 12">
							<div
								class="diagonal-background"
								style="border: 1px solid #ccc; padding: 8px 16px;"
							>
								Column{{index + 1}}
							</div>
						</Column>

					</Row>
				</Grid>
			
			
			`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			exclude: ['xl','lg','md','xs'],
		},
	},
};