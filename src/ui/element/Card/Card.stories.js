import Card from "@/ui/element/Card/Card.vue";
import CardSimple from "@/ui/element/CardSimple/CardSimple.vue";
import Button from "@/ui/element/Button/Button.vue";
import Title from "@/ui/element/Title/Title.vue";
import Grid from "@/ui/layout/Grid/Grid.vue";
import Row from "@/ui/layout/Grid/Row.vue";
import Column from "@/ui/layout/Grid/Column.vue";

export default {
	components: {Grid},
	title: "Component/Card",
	component: Card,
	tags: ["autodocs"],
	argTypes: {
		hasHeaderDivider: {
			description:"是否有標題分隔線",
			control: { type: "boolean" },
		},
		className: {
			description: "客製化樣式",
			control: { type: "text" },
		},
		cardHeader: {
			description: "卡片標題",
			control: { type: "text" },
			table: {
				type: {
					summary: "Vue Component | HTML"
				},
			},
		},
		default: {
			description: "卡片內容",
			control: { type: "text" },
			table: {
				type: {
					summary: "Vue Component | HTML"
				},
			},
		},
		cardFooter: {
			description: "卡片底部",
			control: { type: "text" },

			table: {
				type: {
					summary: "Vue Component | HTML"
				},
			},
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "Card",
			description: {
				component: "卡片組件的呈現及說明。",
			},
		},
		actions: { disabled: true },
	},
};

//==== 預設項目 ====//
export const CardDefault = {
	name: "預設項目",
	args: {
		hasHeaderDivider: false,
		className: '',
		cardHeader: `<Title themeColor="primary" :level="2" >Header Title</Title>`,
		default: `<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>`,
		cardFooter: `<Button themeColor="primary" variant="filled" suffix="SvgArrowDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>`,
	},
	render: (args) => ({
		components: { Card, Grid, Row, Column, Button, Title, CardSimple },
		setup() {
			return {
				args,
			}
		},
		template: `
			<Grid>
				<Row>
					<Column :xs="4" :md="6" :lg="4">
						<Card
							:hasHeaderDivider="args.hasHeaderDivider"
							:className="args.cardHeader"
						>
							<template #cardHeader>
								<Title themeColor="primary" :level="2" >Header Title</Title>
							</template>

							<CardSimple
								:hasBorder="false"
								imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"
								align="left"
								title="Card Title"
								subtitle="Subtitle"
								description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
							></CardSimple>

							<template #cardFooter>
								<Button
									themeColor="primary"
									variant="filled"
									suffix="SvgArrowDown"
									size="medium"
									width="fit"
									borderWidth="1px"
									radius="4px"
								>
									Button
								</Button>
							</template>
						</Card>
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
						`<script setup>`,
						`import Card from "@/ui/element/Card/Card.vue";`,
						`import CardSimple from "@/ui/element/CardSimple/CardSimple.vue";`,
						`import Button from "@/ui/element/Button/Button.vue";`,
						`import Title from "@/ui/element/Title/Title.vue";`,
						`import Grid from "@/ui/layout/Grid/Grid.vue";`,
						`import Row from "@/ui/layout/Grid/Row.vue";`,
						`import Column from "@/ui/layout/Grid/Column.vue";`,
						`</script>`,
						'',
						'<template>',
						`<Grid>`,
						`  <Row>`,
						`    <Column :xs="4" :md="6" :lg="4">`,
						`      <Card`,
						`        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`,
						`        ${args.className ? `className="${args.className}"` : ""}`,
						`      >`,
						`        <template #cardHeader>`,
						`          <Title themeColor="primary" :level="2">Header Title</Title>`,
						`        </template>`,
						``,
						`        <CardSimple`,
						`          :hasBorder="false"`,
						`          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`,
						`          align="left"`,
						`          title="Card Title"`,
						`          subtitle="Subtitle"`,
						`          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`,
						`        ></CardSimple>`,
						``,
						`        <template #cardFooter>`,
						`          <Button`,
						`            themeColor="primary"`,
						`            variant="filled"`,
						`            suffix="SvgArrowDown"`,
						`            size="medium"`,
						`            width="fit"`,
						`            borderWidth="1px"`,
						`            radius="4px"`,
						`          >`,
						`            Button`,
						`          </Button>`,
						`        </template>`,
						`      </Card>`,
						`    </Column>`,
						`  </Row>`,
						`</Grid>`,
						'</template>',
					].filter(Boolean).join("\n").trim();
				}
			}
		}
	},
};

//==== 垂直佈局 ====//
export const CardVerticalDefault = {
	name: "垂直佈局",
	args: {
		hasHeaderDivider: false,
		className: '',
		cardHeader: `<Title themeColor="primary" :level="2" >Header Title</Title>`,
		default: `<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>`,
		cardFooter: `<Button themeColor="primary" variant="filled" suffix="SvgArrowDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>`,
	},
	render: (args) => ({
		components: { Card, Grid, Row, Column, Button, Title, CardSimple },
		setup() {
			return {
				args,
			}
		},
		template: `
			<Grid>
				<Row hasGap>
					<Column :xs="12" :md="6" :lg="3">
						<Card
							:hasHeaderDivider="args.hasHeaderDivider"
							:className="args.cardHeader"
						>
							<template #cardHeader>
								<Title themeColor="primary" :level="2" >Header Title</Title>
							</template>

							<CardSimple
								imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"
								align="left"
								:hasBorder="false"
								title="Card Title"
								subtitle="Subtitle"
								description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
							></CardSimple>

							<template #cardFooter>
								<Button
									themeColor="primary"
									variant="filled"
									suffix="SvgArrowDown"
									size="medium"
									width="fit"
									borderWidth="1px"
									radius="4px"
								>
									Button
								</Button>
							</template>
						</Card>
					</Column>
					<Column :xs="12" :md="6" :lg="3">
						<Card
							:hasHeaderDivider="args.hasHeaderDivider"
							:className="args.cardHeader"
						>
							<template #cardHeader>
								<Title themeColor="primary" :level="2" >Header Title</Title>
							</template>

							<CardSimple
								imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"
								align="left"
								:hasBorder="false"
								title="Card Title"
								subtitle="Subtitle"
								description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
							></CardSimple>

							<template #cardFooter>
								<Button
									themeColor="primary"
									variant="filled"
									suffix="SvgArrowDown"
									size="medium"
									width="fit"
									borderWidth="1px"
									radius="4px"
								>
									Button
								</Button>
							</template>
						</Card>
					</Column>
					<Column :xs="12" :md="6" :lg="3">
						<Card
							:hasHeaderDivider="args.hasHeaderDivider"
							:className="args.cardHeader"
						>
							<template #cardHeader>
								<Title themeColor="primary" :level="2" >Header Title</Title>
							</template>

							<CardSimple
								imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"
								align="left"
								:hasBorder="false"
								title="Card Title"
								subtitle="Subtitle"
								description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
							></CardSimple>

							<template #cardFooter>
								<Button
									themeColor="primary"
									variant="filled"
									suffix="SvgArrowDown"
									size="medium"
									width="fit"
									borderWidth="1px"
									radius="4px"
								>
									Button
								</Button>
							</template>
						</Card>
					</Column>
					<Column :xs="12" :md="6" :lg="3">
						<Card
							:hasHeaderDivider="args.hasHeaderDivider"
							:className="args.cardHeader"
						>
							<template #cardHeader>
								<Title themeColor="primary" :level="2" >Header Title</Title>
							</template>

							<CardSimple
								imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"
								align="left"
								:hasBorder="false"
								title="Card Title"
								subtitle="Subtitle"
								description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
							></CardSimple>

							<template #cardFooter>
								<Button
									themeColor="primary"
									variant="filled"
									suffix="SvgArrowDown"
									size="medium"
									width="fit"
									borderWidth="1px"
									radius="4px"
								>
									Button
								</Button>
							</template>
						</Card>
					</Column>
				</Row>
			</Grid>

		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			exclude: ['hasHeaderDivider'],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<script setup>`,
						`import Card from "@/ui/element/Card/Card.vue";`,
						`import CardSimple from "@/ui/element/CardSimple/CardSimple.vue";`,
						`import Button from "@/ui/element/Button/Button.vue";`,
						`import Title from "@/ui/element/Title/Title.vue";`,
						`import Grid from "@/ui/layout/Grid/Grid.vue";`,
						`import Row from "@/ui/layout/Grid/Row.vue";`,
						`import Column from "@/ui/layout/Grid/Column.vue";`,
						`</script>`,
						'',
						'<template>',
						`<Grid>`,
						`  <Row hasGap>`,
						`    <Column :xs="4" :md="6" :lg="4">`,
						`      <Card`,
						`        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`,
						`        ${args.className ? `className="${args.className}"` : ""}`,
						`      >`,
						`        <template #cardHeader>`,
						`          <Title themeColor="primary" :level="2">Header Title</Title>`,
						`        </template>`,
						``,
						`        <CardSimple`,
						`          :hasBorder="false"`,
						`          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`,
						`          align="left"`,
						`          title="Card Title"`,
						`          subtitle="Subtitle"`,
						`          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`,
						`        ></CardSimple>`,
						``,
						`        <template #cardFooter>`,
						`          <Button`,
						`            themeColor="primary"`,
						`            variant="filled"`,
						`            suffix="SvgArrowDown"`,
						`            size="medium"`,
						`            width="fit"`,
						`            borderWidth="1px"`,
						`            radius="4px"`,
						`          >`,
						`            Button`,
						`          </Button>`,
						`        </template>`,
						`      </Card>`,
						`    </Column>`,
						`    <Column :xs="4" :md="6" :lg="4">`,
						`      <Card`,
						`        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`,
						`        ${args.className ? `className="${args.className}"` : ""}`,
						`      >`,
						`        <template #cardHeader>`,
						`          <Title themeColor="primary" :level="2">Header Title</Title>`,
						`        </template>`,
						``,
						`        <CardSimple`,
						`          :hasBorder="false"`,
						`          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`,
						`          align="left"`,
						`          title="Card Title"`,
						`          subtitle="Subtitle"`,
						`          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`,
						`        ></CardSimple>`,
						``,
						`        <template #cardFooter>`,
						`          <Button`,
						`            themeColor="primary"`,
						`            variant="filled"`,
						`            suffix="SvgArrowDown"`,
						`            size="medium"`,
						`            width="fit"`,
						`            borderWidth="1px"`,
						`            radius="4px"`,
						`          >`,
						`            Button`,
						`          </Button>`,
						`        </template>`,
						`      </Card>`,
						`    </Column>`,
						`    <Column :xs="4" :md="6" :lg="4">`,
						`      <Card`,
						`        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`,
						`        ${args.className ? `className="${args.className}"` : ""}`,
						`      >`,
						`        <template #cardHeader>`,
						`          <Title themeColor="primary" :level="2">Header Title</Title>`,
						`        </template>`,
						``,
						`        <CardSimple`,
						`          :hasBorder="false"`,
						`          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`,
						`          align="left"`,
						`          title="Card Title"`,
						`          subtitle="Subtitle"`,
						`          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`,
						`        ></CardSimple>`,
						``,
						`        <template #cardFooter>`,
						`          <Button`,
						`            themeColor="primary"`,
						`            variant="filled"`,
						`            suffix="SvgArrowDown"`,
						`            size="medium"`,
						`            width="fit"`,
						`            borderWidth="1px"`,
						`            radius="4px"`,
						`          >`,
						`            Button`,
						`          </Button>`,
						`        </template>`,
						`      </Card>`,
						`    </Column>`,
						`    <Column :xs="4" :md="6" :lg="4">`,
						`      <Card`,
						`        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`,
						`        ${args.className ? `className="${args.className}"` : ""}`,
						`      >`,
						`        <template #cardHeader>`,
						`          <Title themeColor="primary" :level="2">Header Title</Title>`,
						`        </template>`,
						``,
						`        <CardSimple`,
						`          :hasBorder="false"`,
						`          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`,
						`          align="left"`,
						`          title="Card Title"`,
						`          subtitle="Subtitle"`,
						`          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`,
						`        ></CardSimple>`,
						``,
						`        <template #cardFooter>`,
						`          <Button`,
						`            themeColor="primary"`,
						`            variant="filled"`,
						`            suffix="SvgArrowDown"`,
						`            size="medium"`,
						`            width="fit"`,
						`            borderWidth="1px"`,
						`            radius="4px"`,
						`          >`,
						`            Button`,
						`          </Button>`,
						`        </template>`,
						`      </Card>`,
						`    </Column>`,
						`  </Row>`,
						`</Grid>`,
						'</template>',
					].filter(Boolean).join("\n").trim();
				}
			}
		}
	},
};

//==== 水平佈局 ====//
export const CardHorizontalDefault = {
	name: "水平佈局",
	args: {
		hasHeaderDivider: false,
		className: '',
		cardHeader: `<Title themeColor="primary" :level="2" >Header Title</Title>`,
		default: `<CardSimple imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png" align="left" :hasBorder="false" title="Card Title" subtitle="Subtitle" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."></CardSimple>`,
		cardFooter: `<Button themeColor="primary" variant="filled" suffix="SvgArrowDown" size="medium" width="fit" borderWidth="1px" radius="4px">Button</Button>`,
	},
	render: (args) => ({
		components: { Card, Grid, Row, Column, Button, Title, CardSimple },
		setup() {
			return {
				args,
			}
		},
		template: `
			<Grid>
				<Row hasGap>
					<Column :xs="6">
						<Card
							:hasHeaderDivider="args.hasHeaderDivider"
							:className="args.cardHeader"
						>
							<template #cardHeader>
								<Title themeColor="primary" :level="2" >Header Title</Title>
							</template>

							<CardSimple
								layout="horizontal"
								imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"
								align="left"
								:hasBorder="false"
								title="Card Title"
								subtitle="Subtitle"
								description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
							></CardSimple>

							<template #cardFooter>
								<Button
									themeColor="primary"
									variant="filled"
									suffix="SvgArrowDown"
									size="medium"
									width="fit"
									borderWidth="1px"
									radius="4px"
								>
									Button
								</Button>
							</template>
						</Card>
					</Column>
					<Column :xs="6">
						<Card
							:hasHeaderDivider="args.hasHeaderDivider"
							:className="args.cardHeader"
						>
							<template #cardHeader>
								<Title themeColor="primary" :level="2" >Header Title</Title>
							</template>

							<CardSimple
								layout="horizontal"
								imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"
								align="left"
								:hasBorder="false"
								title="Card Title"
								subtitle="Subtitle"
								description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
							></CardSimple>

							<template #cardFooter>
								<Button
									themeColor="primary"
									variant="filled"
									suffix="SvgArrowDown"
									size="medium"
									width="fit"
									borderWidth="1px"
									radius="4px"
								>
									Button
								</Button>
							</template>
						</Card>
					</Column>
					<Column :xs="6">
						<Card
							:hasHeaderDivider="args.hasHeaderDivider"
							:className="args.cardHeader"
						>
							<template #cardHeader>
								<Title themeColor="primary" :level="2" >Header Title</Title>
							</template>

							<CardSimple
								layout="horizontal"
								imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"
								align="left"
								:hasBorder="false"
								title="Card Title"
								subtitle="Subtitle"
								description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
							></CardSimple>

							<template #cardFooter>
								<Button
									themeColor="primary"
									variant="filled"
									suffix="SvgArrowDown"
									size="medium"
									width="fit"
									borderWidth="1px"
									radius="4px"
								>
									Button
								</Button>
							</template>
						</Card>
					</Column>
					<Column :xs="6">
						<Card
							:hasHeaderDivider="args.hasHeaderDivider"
							:className="args.cardHeader"
						>
							<template #cardHeader>
								<Title themeColor="primary" :level="2" >Header Title</Title>
							</template>

							<CardSimple
								layout="horizontal"
								imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"
								align="left"
								:hasBorder="false"
								title="Card Title"
								subtitle="Subtitle"
								description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
							></CardSimple>

							<template #cardFooter>
								<Button
									themeColor="primary"
									variant="filled"
									suffix="SvgArrowDown"
									size="medium"
									width="fit"
									borderWidth="1px"
									radius="4px"
								>
									Button
								</Button>
							</template>
						</Card>
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
						`<script setup>`,
						`import Card from "@/ui/element/Card/Card.vue";`,
						`import CardSimple from "@/ui/element/CardSimple/CardSimple.vue";`,
						`import Button from "@/ui/element/Button/Button.vue";`,
						`import Title from "@/ui/element/Title/Title.vue";`,
						`import Grid from "@/ui/layout/Grid/Grid.vue";`,
						`import Row from "@/ui/layout/Grid/Row.vue";`,
						`import Column from "@/ui/layout/Grid/Column.vue";`,
						`</script>`,
						'',
						'<template>',
						`<Grid>`,
						`  <Row hasGap>`,
						`    <Column :xs="6">`,
						`      <Card`,
						`        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`,
						`        ${args.className ? `className="${args.className}"` : ""}`,
						`      >`,
						`        <template #cardHeader>`,
						`          <Title themeColor="primary" :level="2">Header Title</Title>`,
						`        </template>`,
						``,
						`        <CardSimple`,
						`          layout="horizontal"`,
						`          :hasBorder="false"`,
						`          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`,
						`          align="left"`,
						`          title="Card Title"`,
						`          subtitle="Subtitle"`,
						`          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`,
						`        ></CardSimple>`,
						``,
						`        <template #cardFooter>`,
						`          <Button`,
						`            themeColor="primary"`,
						`            variant="filled"`,
						`            suffix="SvgArrowDown"`,
						`            size="medium"`,
						`            width="fit"`,
						`            borderWidth="1px"`,
						`            radius="4px"`,
						`          >`,
						`            Button`,
						`          </Button>`,
						`        </template>`,
						`      </Card>`,
						`    </Column>`,
						`    <Column :xs="6">`,
						`      <Card`,
						`        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`,
						`        ${args.className ? `className="${args.className}"` : ""}`,
						`      >`,
						`        <template #cardHeader>`,
						`          <Title themeColor="primary" :level="2">Header Title</Title>`,
						`        </template>`,
						``,
						`        <CardSimple`,
						`          layout="horizontal"`,
						`          :hasBorder="false"`,
						`          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`,
						`          align="left"`,
						`          title="Card Title"`,
						`          subtitle="Subtitle"`,
						`          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`,
						`        ></CardSimple>`,
						``,
						`        <template #cardFooter>`,
						`          <Button`,
						`            themeColor="primary"`,
						`            variant="filled"`,
						`            suffix="SvgArrowDown"`,
						`            size="medium"`,
						`            width="fit"`,
						`            borderWidth="1px"`,
						`            radius="4px"`,
						`          >`,
						`            Button`,
						`          </Button>`,
						`        </template>`,
						`      </Card>`,
						`    </Column>`,
						`    <Column :xs="6">`,
						`      <Card`,
						`        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`,
						`        ${args.className ? `className="${args.className}"` : ""}`,
						`      >`,
						`        <template #cardHeader>`,
						`          <Title themeColor="primary" :level="2">Header Title</Title>`,
						`        </template>`,
						``,
						`        <CardSimple`,
						`          layout="horizontal"`,
						`          :hasBorder="false"`,
						`          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`,
						`          align="left"`,
						`          title="Card Title"`,
						`          subtitle="Subtitle"`,
						`          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`,
						`        ></CardSimple>`,
						``,
						`        <template #cardFooter>`,
						`          <Button`,
						`            themeColor="primary"`,
						`            variant="filled"`,
						`            suffix="SvgArrowDown"`,
						`            size="medium"`,
						`            width="fit"`,
						`            borderWidth="1px"`,
						`            radius="4px"`,
						`          >`,
						`            Button`,
						`          </Button>`,
						`        </template>`,
						`      </Card>`,
						`    </Column>`,
						`    <Column :xs="6">`,
						`      <Card`,
						`        ${args.hasHeaderDivider !== undefined ? `:hasHeaderDivider="${args.hasHeaderDivider}"` : ""}`,
						`        ${args.className ? `className="${args.className}"` : ""}`,
						`      >`,
						`        <template #cardHeader>`,
						`          <Title themeColor="primary" :level="2">Header Title</Title>`,
						`        </template>`,
						``,
						`        <CardSimple`,
						`          layout="horizontal"`,
						`          :hasBorder="false"`,
						`          imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"`,
						`          align="left"`,
						`          title="Card Title"`,
						`          subtitle="Subtitle"`,
						`          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."`,
						`        ></CardSimple>`,
						``,
						`        <template #cardFooter>`,
						`          <Button`,
						`            themeColor="primary"`,
						`            variant="filled"`,
						`            suffix="SvgArrowDown"`,
						`            size="medium"`,
						`            width="fit"`,
						`            borderWidth="1px"`,
						`            radius="4px"`,
						`          >`,
						`            Button`,
						`          </Button>`,
						`        </template>`,
						`      </Card>`,
						`    </Column>`,
						`  </Row>`,
						`</Grid>`,
						'</template>',
					].filter(Boolean).join("\n").trim();
				}
			}
		}
	},
};