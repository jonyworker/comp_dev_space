import CardSimple from "@/ui/element/CardSimple/CardSimple.vue";
import Grid from "@/ui/layout/Grid/Grid.vue";
import Row from "@/ui/layout/Grid/Row.vue";
import Column from "@/ui/layout/Grid/Column.vue";

export default {
	components: {Column},
	title: "Component/Card-Simple",
	component: CardSimple,
	tags: ["autodocs"],
	argTypes: {
		layout: {
			description: "佈局",
			control: { type: "select" },
			options: ["horizontal", "vertical"],
			table: {
				type: {
					summary: "horizontal | vertical",
				}
			}
		},
		hasBorder: {
			description: '是否有邊框',
			control: { type: "boolean" },
		},
		imgSrc: {
			description: '圖片來源',
			control: { type: "text" },
		},
		buttonName: {
			description: '按鈕名稱',
			control: { type: "text" },
		},
		align: {
			description: "對齊方式",
			control: { type: "select" },
			options: ["left", "center", "right"],
			table: {
				type: {
					summary: "left | center | right",
				}
			}
		},
		title: {
			description: '卡片標題',
			control: { type: "text" },
		},
		subtitle: {
			description: '副標題',
			control: { type: "text" },
		},
		description: {
			description: '描述',
			control: { type: "text" },
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "CardSimple",
			description: {
				component: "卡片組件的呈現及說明。",
			},
		},
		actions: { disabled: true },
	},
};

//==== 預設項目 ====//
export const CardSimpleDefault = {
	name: "預設項目",
	args: {
		layout: "vertical",
		hasBorder: true,
		imgSrc: "https://storage.googleapis.com/ded-wds-bucket/card_bg.png",
		buttonName: "Button",
		align: "left",
		title: "Card Title",
		subtitle: "Subtitle",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s...",

	},
	render: (args) => ({
		components: { CardSimple, Grid, Row, Column },
		setup() {
			return {
				args,
			}
		},
		template: `
			<Grid>
				<Row>
					<Column :xs="12" :sm="6" :md="4">
						<CardSimple
							:layout="args.layout"
							:hasBorder="args.hasBorder"
							:imgSrc="args.imgSrc"
							:buttonName="args.buttonName"
							:align="args.align"
							:title="args.title"
							:subtitle="args.subtitle"
							:description="args.description"
						></CardSimple>
					</Column>
				</Row>
			</Grid>
		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<CardSimple`,
						`  layout="${args.layout}"`,
						`  :hasBorder="${args.hasBorder}"`,
						`  imgSrc="${args.imgSrc}"`,
						`  buttonName="${args.buttonName}"`,
						`  align="${args.align}"`,
						`  title="${args.title}"`,
						`  subtitle="${args.subtitle}"`,
						`  description="${args.description}"`,
						`></CardSimple>`,
					].join("\n").trim();
				}
			}
		}
	},
};

//==== 按鈕對齊方式 ====//
export const CardSimpleAlign = {
	name: "按鈕對齊方式",
	args: {
		layout: "vertical",
		hasBorder: true,
		imgSrc: "https://storage.googleapis.com/ded-wds-bucket/card_bg.png",
		buttonName: "Button",
		title: "Card Title",
		subtitle: "Subtitle",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500sis simply dummy text of the printing",

	},
	render: (args) => ({
		components: { CardSimple, Grid, Row, Column },
		setup() {
			return {
				args,
			}
		},
		template: `
			<Grid fluid>
				<Row hasGap>
					<Column :xs="12" :sm="6" :md="4">
						<CardSimple
							:layout="args.layout"
							:hasBorder="args.hasBorder"
							:imgSrc="args.imgSrc"
							:buttonName="args.buttonName"
							align="left"
							:title="args.title"
							:subtitle="args.subtitle"
							:description="args.description"
						></CardSimple>
					</Column>
					<Column :xs="12" :sm="6" :md="4">
						<CardSimple
							:layout="args.layout"
							:hasBorder="args.hasBorder"
							:imgSrc="args.imgSrc"
							:buttonName="args.buttonName"
							align="center"
							:title="args.title"
							:subtitle="args.subtitle"
							:description="args.description"
						></CardSimple>
					</Column>
					<Column :xs="12" :sm="6" :md="4">
						<CardSimple
							:layout="args.layout"
							:hasBorder="args.hasBorder"
							:imgSrc="args.imgSrc"
							:buttonName="args.buttonName"
							align="right"
							:title="args.title"
							:subtitle="args.subtitle"
							:description="args.description"
						></CardSimple>
					</Column>
				</Row>
			</Grid>
		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<CardSimple`,
						`  layout="${args.layout}"`,
						`  :hasBorder="${args.hasBorder}"`,
						`  imgSrc="${args.imgSrc}"`,
						`  buttonName="${args.buttonName}"`,
						`  align="left"`,
						`  title="${args.title}"`,
						`  subtitle="${args.subtitle}"`,
						`  description="${args.description}"`,
						`></CardSimple>`,
						`<CardSimple`,
						`  layout="${args.layout}"`,
						`  :hasBorder="${args.hasBorder}"`,
						`  imgSrc="${args.imgSrc}"`,
						`  buttonName="${args.buttonName}"`,
						`  align="center"`,
						`  title="${args.title}"`,
						`  subtitle="${args.subtitle}"`,
						`  description="${args.description}"`,
						`></CardSimple>`,
						`<CardSimple`,
						`  layout="${args.layout}"`,
						`  :hasBorder="${args.hasBorder}"`,
						`  imgSrc="${args.imgSrc}"`,
						`  buttonName="${args.buttonName}"`,
						`  align="right"`,
						`  title="${args.title}"`,
						`  subtitle="${args.subtitle}"`,
						`  description="${args.description}"`,
						`></CardSimple>`,
					].join("\n").trim();
				}
			}
		}
	},
};

//==== 水平佈局 ====//
export const CardHorizontalDefault = {
	name: "水平佈局",
	args: {
		layout: "vertical",
		hasBorder: true,
		imgSrc: "https://storage.googleapis.com/ded-wds-bucket/card_bg.png",
		buttonName: "Button",
		align: "left",
		title: "Card Title",
		subtitle: "Subtitle",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s...",

	},
	render: (args) => ({
		components: { CardSimple, Grid, Row, Column },
		setup() {
			return {
				args,
			}
		},
		template: `
			<Grid>
				<Row hasGap>
					<Column :xs="12" :sm="6" :md="3">
						<CardSimple
							:layout="args.layout"
							:hasBorder="args.hasBorder"
							:imgSrc="args.imgSrc"
							:buttonName="args.buttonName"
							:align="args.align"
							:title="args.title"
							:subtitle="args.subtitle"
							:description="args.description"
						></CardSimple>
					</Column>
					<Column :xs="12" :sm="6" :md="3">
						<CardSimple
							:layout="args.layout"
							:hasBorder="args.hasBorder"
							:imgSrc="args.imgSrc"
							:buttonName="args.buttonName"
							:align="args.align"
							:title="args.title"
							:subtitle="args.subtitle"
							:description="args.description"
						></CardSimple>
					</Column>
					<Column :xs="12" :sm="6" :md="3">
						<CardSimple
							:layout="args.layout"
							:hasBorder="args.hasBorder"
							:imgSrc="args.imgSrc"
							:buttonName="args.buttonName"
							:align="args.align"
							:title="args.title"
							:subtitle="args.subtitle"
							:description="args.description"
						></CardSimple>
					</Column>
					<Column :xs="12" :sm="6" :md="3">
						<CardSimple
							:layout="args.layout"
							:hasBorder="args.hasBorder"
							:imgSrc="args.imgSrc"
							:buttonName="args.buttonName"
							:align="args.align"
							:title="args.title"
							:subtitle="args.subtitle"
							:description="args.description"
						></CardSimple>
					</Column>
				</Row>
			</Grid>
		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<Grid>`,
						`  <Row hasGap>`,
						`    <Column :xs="12" :sm="6" :md="3">`,
						`      <CardSimple`,
						`        layout="${args.layout}"`,
						`        :hasBorder="${args.hasBorder}"`,
						`        imgSrc="${args.imgSrc}"`,
						`        buttonName="${args.buttonName}"`,
						`        align="${args.align}"`,
						`        title="${args.title}"`,
						`        subtitle="${args.subtitle}"`,
						`        description="${args.description}"`,
						`      ></CardSimple>`,
						`    </Column>`,
						`    <Column :xs="12" :sm="6" :md="3">`,
						`      <CardSimple`,
						`        layout="${args.layout}"`,
						`        :hasBorder="${args.hasBorder}"`,
						`        imgSrc="${args.imgSrc}"`,
						`        buttonName="${args.buttonName}"`,
						`        align="${args.align}"`,
						`        title="${args.title}"`,
						`        subtitle="${args.subtitle}"`,
						`        description="${args.description}"`,
						`      ></CardSimple>`,
						`    </Column>`,
						`    <Column :xs="12" :sm="6" :md="3">`,
						`      <CardSimple`,
						`        layout="${args.layout}"`,
						`        :hasBorder="${args.hasBorder}"`,
						`        imgSrc="${args.imgSrc}"`,
						`        buttonName="${args.buttonName}"`,
						`        align="${args.align}"`,
						`        title="${args.title}"`,
						`        subtitle="${args.subtitle}"`,
						`        description="${args.description}"`,
						`      ></CardSimple>`,
						`    </Column>`,
						`    <Column :xs="12" :sm="6" :md="3">`,
						`      <CardSimple`,
						`        layout="${args.layout}"`,
						`        :hasBorder="${args.hasBorder}"`,
						`        imgSrc="${args.imgSrc}"`,
						`        buttonName="${args.buttonName}"`,
						`        align="${args.align}"`,
						`        title="${args.title}"`,
						`        subtitle="${args.subtitle}"`,
						`        description="${args.description}"`,
						`      ></CardSimple>`,
						`    </Column>`,
						`  </Row>`,
						`</Grid>`,
					].join("\n").trim();
				}
			}
		}

	},
};

//==== 垂直佈局 ====//
export const CardVerticalDefault = {
	name: "垂直佈局",
	args: {
		layout: "horizontal",
		imgSrc: "https://storage.googleapis.com/ded-wds-bucket/card_bg.png",
		buttonName: "Button",
		align: "left",
		hasBorder: true,
		title: "Card Title",
		subtitle: "Subtitle",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s...",

	},
	render: (args) => ({
		components: { CardSimple, Grid, Row, Column },
		setup() {
			return {
				args,
			}
		},
		template: `
			<Grid>
				<Row hasGap>
					<Column :xs="6">
						<CardSimple
							:layout="args.layout"
							:imgSrc="args.imgSrc"
							:buttonName="args.buttonName"
							:align="args.align"
							:hasBorder="args.hasBorder"
							:title="args.title"
							:subtitle="args.subtitle"
							:description="args.description"
						></CardSimple>
					</Column>
					<Column :xs="6">
						<CardSimple
							:layout="args.layout"
							:imgSrc="args.imgSrc"
							:buttonName="args.buttonName"
							:align="args.align"
							:hasBorder="args.hasBorder"
							:title="args.title"
							:subtitle="args.subtitle"
							:description="args.description"
						></CardSimple>
					</Column>
				</Row>
			</Grid>
		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<Grid>`,
						`  <Row hasGap>`,
						`    <Column :xs="6">`,
						`      <CardSimple`,
						`        layout="${args.layout}"`,
						`        imgSrc="${args.imgSrc}"`,
						`        buttonName="${args.buttonName}"`,
						`        align="${args.align}"`,
						`        :hasBorder="${args.hasBorder}"`,
						`        title="${args.title}"`,
						`        subtitle="${args.subtitle}"`,
						`        description="${args.description}"`,
						`      ></CardSimple>`,
						`    </Column>`,
						`    <Column :xs="6">`,
						`      <CardSimple`,
						`        layout="${args.layout}"`,
						`        imgSrc="${args.imgSrc}"`,
						`        buttonName="${args.buttonName}"`,
						`        align="${args.align}"`,
						`        :hasBorder="${args.hasBorder}"`,
						`        title="${args.title}"`,
						`        subtitle="${args.subtitle}"`,
						`        description="${args.description}"`,
						`      ></CardSimple>`,
						`    </Column>`,
						`  </Row>`,
						`</Grid>`,
					].join("\n").trim();
				}
			}
		}
	},
};