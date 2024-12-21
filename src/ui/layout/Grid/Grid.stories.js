import Grid from "@/ui/layout/Grid/Grid.vue"
import Row from "@/ui/layout/Grid/Row.vue"
import Column from "@/ui/layout/Grid/Column.vue"

export default {
	components: {Grid, Row, Column},
	title: 'Component/Grid',
	component: {
		Grid,
		Row,
		Column
	},
	tags: ["autodocs"],
	argTypes: {
		// Grid 設定
		fluid: {
			description: "是否使用 100% 寬度",
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
		// Row 設定
		justify: {
			description: '垂直對齊方式',
			control: { type: "select" },
			options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around',
				'space-evenly'],
			table: {
				category: 'ROW',
				type: {
					summary: "flex-start | center | flex-end | space-between | space-around | space-evenly "
				}
			},
		},
		alignItem: {
			description: '水平對齊方式',
			control: { type: "select" },
			options: ['flex-start', 'center', 'flex-end', 'baseline', 'stretch'],
			table: {
				category: 'ROW',
				type: {
					summary: "flex-start | center | flex-end | baseline | stretch "
				}
			},
		},
		hasGap: {
			description:"是否有間距",
			control: { type: "boolean" },
			table: {
				category: 'ROW',
			},
		},
		// column 設定
		align: {
			description: '對齊方式',
			control: { type: "select" },
			options: ['start', 'center', 'end'],
			table: {
				category: 'COLUMN',
			},
		},
		// col: {
		// 	description: 'column 長度',
		// 	control: { type: "select" },
		// 	options: ['1', '2', '3 ', '4', '5', '6 ', '7', '8 ', '9', '10', '11', '12'],
		// 	table: {
		// 		category: 'COLUMN',
		// 	},
		// },
		xs: {
			description: '手機尺寸',
			control: { type: "select" },
			options: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
			table: {
				category: 'COLUMN',
				type: {
					summary: " 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",
				}
			},
		},
		sm: {
			description: '平板尺寸',
			control: { type: "select" },
			options: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
			table: {
				category: 'COLUMN',
				type: {
					summary: " 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",
				}
			},
		},
		md: {
			description: '桌機尺寸',
			control: { type: "select" },
			options: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
			table: {
				category: 'COLUMN',
				type: {
					summary: " 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",
				}
			},
		},
		lg: {
			description: '大桌機尺寸',
			control: { type: "select" },
			options: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
			table: {
				category: 'COLUMN',
				type: {
					summary: " 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",
				}
			},
		},
		xl: {
			description: '超大桌機尺寸',
			control: { type: "select" },
			options: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
			table: {
				category: 'COLUMN',
				type: {
					summary: " 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",
				}
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
};

//==== 預設項目 ====//
export const GridDefaultStory = {
	name: '預設項目',
	args: {
		//Grid
		fluid: false,
		className: '',

		//Row
		justify: 'flex-start',
		alignItem: 'stretch',
		hasGap: false,

		//Column
		align: "center",
		xs: 12,
		sm: 6,
		md: 4,
		lg: 3,
		xl: 2,
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
				<Row :justify="args.justify" :alignItem="args.alignItem" :hasGap="args.hasGap">
					<Column v-for="(index) in 12" :key="index" 
						:align="args.align" :xs="args.xs" :sm="args.sm" :md="args.md" :lg="args.lg" :xl="args.xl">
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
			// include: ['fluid', 'className', 'justify', 'align', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl'],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<Grid`,
						`  :fluid="${args.fluid}"`,
						`  :className="${args.className}"`,
						`>`,
						`  <Row`,
						`    :justify="${args.justify}"`,
						`    :alignItem="${args.alignItem}"`,
						`    :hasGap="${args.hasGap}"`,
						`  >`,
						`    <Column`,
						`      v-for="(index) in 12"`,
						`      :key="index"`,
						`      :align="${args.align}"`,
						`      :xs="${args.xs}"`,
						`      :sm="${args.sm}"`,
						`      :md="${args.md}"`,
						`      :lg="${args.lg}"`,
						`      :xl="${args.xl}"`,
						`    >`,
						`      <div`,
						`        class="diagonal-background"`,
						`        style="border:1px solid #ccc; padding:8px 16px;"`,
						`      >`,
						`        Column {{index}}`,
						`      </div>`,
						`    </Column>`,
						`  </Row>`,
						`</Grid>`,
					].join("\n").trim();
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
		justify: 'flex-start',
		alignItem: 'stretch',
		hasGap: false,

		//Column
		align: "center",
		xs: 12,
		sm: 6,
		md: 4,
		lg: 3,
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
				<Row :justify="args.justify" :alignItem="args.alignItem" :hasGap="args.hasGap">
					<Column v-for="(index) in 12" :key="index"
					        :align="args.align" :xs="args.xs" :sm="args.sm" :md="args.md" :lg="args.lg">
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
			// include: ['fluid', 'className', 'justify', 'align', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl'],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<Grid`,
						`  :fluid="${args.fluid}"`,
						`  :className="${args.className}"`,
						`>`,
						`  <Row`,
						`    :justify="${args.justify}"`,
						`    :alignItem="${args.alignItem}"`,
						`    :hasGap="${args.hasGap}"`,
						`  >`,
						`    <Column`,
						`      v-for="(index) in 12"`,
						`      :key="index"`,
						`      :align="${args.align}"`,
						`      :xs="${args.xs}"`,
						`      :sm="${args.sm}"`,
						`      :md="${args.md}"`,
						`      :lg="${args.lg}"`,
						`    >`,
						`      <div`,
						`        class="diagonal-background"`,
						`        style="border:1px solid #ccc; padding:8px 16px;"`,
						`      >`,
						`        Column {{index}}`,
						`      </div>`,
						`    </Column>`,
						`  </Row>`,
						`</Grid>`,
					].join("\n").trim();
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
		justify: 'flex-start',
		alignItem: 'stretch',
		hasGap: false,

		//Column
		align: "center",
		xs: 12,
		sm: 6,
		md: 4,
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
				<Row :justify="args.justify" :alignItem="args.alignItem" :hasGap="args.hasGap">
					<Column v-for="(index) in 12" :key="index"
					        :align="args.align" :xs="args.xs" :sm="args.sm" :md="args.md">
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
			// include: ['fluid', 'className', 'justify', 'align', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl'],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<Grid`,
						`  :fluid="${args.fluid}"`,
						`  :className="${args.className}"`,
						`>`,
						`  <Row`,
						`    :justify="${args.justify}"`,
						`    :alignItem="${args.alignItem}"`,
						`    :hasGap="${args.hasGap}"`,
						`  >`,
						`    <Column`,
						`      v-for="(index) in 12"`,
						`      :key="index"`,
						`      :align="${args.align}"`,
						`      :xs="${args.xs}"`,
						`      :sm="${args.sm}"`,
						`      :md="${args.md}"`,
						`    >`,
						`      <div`,
						`        class="diagonal-background"`,
						`        style="border:1px solid #ccc; padding:8px 16px;"`,
						`      >`,
						`        Column {{index}}`,
						`      </div>`,
						`    </Column>`,
						`  </Row>`,
						`</Grid>`,
					].join("\n").trim();
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
		justify: 'flex-start',
		alignItem: 'stretch',
		hasGap: false,

		//Column
		align: "center",
		xs: 12,
		sm: 6,
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
				<Row :justify="args.justify" :alignItem="args.alignItem" :hasGap="args.hasGap">
					<Column v-for="(index) in 12" :key="index"
					        :align="args.align" :xs="args.xs" :sm="args.sm">
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
						`<Grid`,
						`  :fluid="${args.fluid}"`,
						`  :className="${args.className}"`,
						`>`,
						`  <Row`,
						`    :justify="${args.justify}"`,
						`    :alignItem="${args.alignItem}"`,
						`    :hasGap="${args.hasGap}"`,
						`  >`,
						`    <Column`,
						`      v-for="(index) in 12"`,
						`      :key="index"`,
						`      :align="${args.align}"`,
						`      :xs="${args.xs}"`,
						`      :sm="${args.sm}"`,
						`    >`,
						`      <div`,
						`        class="diagonal-background"`,
						`        style="border:1px solid #ccc; padding:8px 16px;"`,
						`      >`,
						`        Column {{index}}`,
						`      </div>`,
						`    </Column>`,
						`  </Row>`,
						`</Grid>`,
					].join("\n").trim();
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
		justify: 'flex-start',
		alignItem: 'stretch',
		hasGap: false,

		//Column
		align: "center",
		xs: 12,
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
				<Row :justify="args.justify" :alignItem="args.alignItem" :hasGap="args.hasGap">
					<Column v-for="(index) in 12" :key="index"
					        :align="args.align" :xs="args.xs">
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
						`<Grid`,
						`  :fluid="${args.fluid}"`,
						`  :className="${args.className}"`,
						`>`,
						`  <Row`,
						`    :justify="${args.justify}"`,
						`    :alignItem="${args.alignItem}"`,
						`    :hasGap="${args.hasGap}"`,
						`  >`,
						`    <Column`,
						`      v-for="(index) in 12"`,
						`      :key="index"`,
						`      :align="${args.align}"`,
						`      :xs="${args.xs}"`,
						`      :sm="${args.sm}"`,
						`    >`,
						`      <div`,
						`        class="diagonal-background"`,
						`        style="border:1px solid #ccc; padding:8px 16px;"`,
						`      >`,
						`        Column {{index}}`,
						`      </div>`,
						`    </Column>`,
						`  </Row>`,
						`</Grid>`,
					].join("\n").trim();
				}
			}
		}
	},
};




