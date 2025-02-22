import Table from "@/ui/element/Table/Table.vue";
import Button from "@/ui/element/Button/Button.vue";

const dataSource = [
	{ head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },
	{ head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },
	{ head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },
	{ head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },
]
const columns = [
	{ key: "head", title: "TH", width: "50px" },
	{ key: "column1", title: "TH", width: "100px" },
	{ key: "column2", title: "TH", width: "100px" },
	{ key: "column3", title: "TH", width: "100px" },
	{ key: "column4", title: "TH", width: "50px" },
	{ key: "column5", title: "TH", width: "50px", align: "center" },
]

export default {
	components: {Button},
	title: "Component/Table",
	component: Table,
	tags: ["autodocs"],
	argTypes: {
		columns: {
			description: "欄位",
			control: { type: "object" },
			table: {
				type: {
					summary: "{ key: string; title: string; width: string; align?: string }[]",
				},
			},
		},
		dataSource: {
			description: "資料來源",
			control: { type: "object" },
			table: {
				type: {
					summary: "{ head: string; key1: string; key2: string; ..., keyX: string }[]",
				},
			},
		},
		showCheckbox: {
			description: "是否顯示 checkbox",
			control: { type: "boolean" },
		},
		showVerticalBorders: {
			description: "是否顯示垂直邊框",
			control: { type: "boolean" },
		},
		isSprite: {
			description: "是否顯示條紋背景",
			control: { type: "boolean" },
		},
		className: {
			description: "客製化樣式",
			control: { type: "text" },
		},
		'columns.[key]': {
			description: "columns 中 `key` 的值可直接作為 slot 名稱，例如 `<template #[key]>`",
			control: false,
			table: {
				type: {
					summary: "Vue Component | HTML"
				},
				category: 'SLOTS',
			},
		}
	},
	parameters: {
		docs: {
			title: "Table",
			description: {
				component: "Table 組件的呈現及說明。",
			},
		},
		actions: { disabled: true },
	},
};

//==== 預設項目 ====//
export const TableDefault = {
	name: "預設項目",
	args: {
		dataSource: dataSource,
		columns: columns,
		showCheckbox: false,
		showVerticalBorders: false,
		isSprite: true,
		className: "",
	},
	render: (args) => ({
		components: { Table },
		setup() {
			return { args };
		},
		template: `
			<Table
				:dataSource="args.dataSource"
				:columns="args.columns"
				:showCheckbox="args.showCheckbox"
				:showVerticalBorders="args.showVerticalBorders"
				:isSprite="args.isSprite"
				:className="args.className"
			/>
    `,
	}),
	parameters: {
		controls: {
			exclude: ["col.key"]
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<script setup>`,
						`import Table from "@/ui/element/Table/Table.vue";`,
						`const dataSource = [`,
						`	{ head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
						`	{ head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
						`	{ head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
						`	{ head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
						`]`,
						`const columns = [`,
						`	{ key: "head", title: "TH", width: "50px" },`,
						`	{ key: "column1", title: "TH", width: "100px" },`,
						`	{ key: "column2", title: "TH", width: "100px" },`,
						`	{ key: "column3", title: "TH", width: "100px" },`,
						`	{ key: "column4", title: "TH", width: "50px" },`,
						`	{ key: "column5", title: "TH", width: "50px", align: "center" },`,
						`]`,
						`</script>`,
						'',
						'<template>',
						`  <Table`,
						`    :dataSource='dataSource'`,
						`    :columns='columns'`,
						`    ${args.showCheckbox !== undefined ? `:showCheckbox="${args.showCheckbox}"` : ""}`,
						`    ${args.showVerticalBorders !== undefined ? `:showVerticalBorders="${args.showVerticalBorders}"` : ""}`,
						`    ${args.isSprite !== undefined ? `:isSprite="${args.isSprite}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  />`,
						'</template>',
					].filter(Boolean).join('\n').trim();
				},
			},
		},
	},
};

//==== 框線表格 ====//
export const TableBorder = {
	name: "框線表格",
	args: {
		dataSource: dataSource,
		columns: columns,
		showCheckbox: false,
		showVerticalBorders: true,
		isSprite: false,
		className: "",
	},
	render: (args) => ({
		components: { Table },
		setup() {
			return { args };
		},
		template: `
			<Table
				:dataSource="args.dataSource"
				:columns="args.columns"
				:showCheckbox="args.showCheckbox"
				:showVerticalBorders="args.showVerticalBorders"
				:isSprite="args.isSprite"
				:className="args.className"
			/>
    `,
	}),
	parameters: {
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<script setup>`,
						`import Table from "@/ui/element/Table/Table.vue";`,
						`const dataSource = [`,
						`	{ head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
						`	{ head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
						`	{ head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
						`	{ head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
						`]`,
						`const columns = [`,
						`	{ key: "head", title: "TH", width: "50px" },`,
						`	{ key: "column1", title: "TH", width: "100px" },`,
						`	{ key: "column2", title: "TH", width: "100px" },`,
						`	{ key: "column3", title: "TH", width: "100px" },`,
						`	{ key: "column4", title: "TH", width: "50px" },`,
						`	{ key: "column5", title: "TH", width: "50px", align: "center" },`,
						`]`,
						`</script>`,
						'',
						'<template>',
						`  <Table`,
						`    :dataSource='dataSource'`,
						`    :columns='columns'`,
						`    ${args.showCheckbox !== undefined ? `:showCheckbox="${args.showCheckbox}"` : ""}`,
						`    ${args.showVerticalBorders !== undefined ? `:showVerticalBorders="${args.showVerticalBorders}"` : ""}`,
						`    ${args.isSprite !== undefined ? `:isSprite="${args.isSprite}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  />`,
						'</template>',
					].filter(Boolean).join('\n').trim();
				},
			},
		},
	},
};

//==== 客製化欄位 ====//
export const TableSlot = {
	name: "客製化欄位",
	args: {
		dataSource: dataSource,
		columns: columns,
		showCheckbox: false,
		showVerticalBorders: false,
		isSprite: false,
		className: "",
	},
	render: (args) => ({
		components: { Table, Button },
		setup() {
			const onClick = (val) => {
				window.alert(val);
			};
			return { args, onClick };
		},
		template: `
			<Table
			:columns="args.columns"
			:dataSource="args.dataSource"
			:showCheckbox="args.showCheckbox"
			:showVerticalBorders="args.showVerticalBorders"
			:isSprite="args.isSprite"
			:className="args.className"
			>
				<template #column5="{item}">
					<Button
						themeColor="primary"
						variant="filled"
						size="small"
						width="fit"
						borderWidth="1px"
						radius="4px"
						@click="onClick(item.column5)"
					>
						View
					</Button>
				</template>
			</Table>
    `,
	}),
	parameters: {
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<script setup>`,
						`import Table from "@/ui/element/Table/Table.vue";`,
						`import Button from "@/ui/element/Button/Button.vue";`,
						`const dataSource = [`,
						`	{ head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
						`	{ head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
						`	{ head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
						`	{ head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
						`]`,
						`const columns = [`,
						`	{ key: "head", title: "TH", width: "50px" },`,
						`	{ key: "column1", title: "TH", width: "100px" },`,
						`	{ key: "column2", title: "TH", width: "100px" },`,
						`	{ key: "column3", title: "TH", width: "100px" },`,
						`	{ key: "column4", title: "TH", width: "50px" },`,
						`	{ key: "column5", title: "TH", width: "50px", align: "center" },`,
						`]`,
						`const onClick = (val) => {`,
						`	window.alert(val.head + " " + val.column5);`,
						`};`,
						`</script>`,
						'',
						'<template>',
						`  <Table`,
						`    :dataSource='dataSource'`,
						`    :columns='columns'`,
						`    ${args.showCheckbox !== undefined ? `:showCheckbox="${args.showCheckbox}"` : ""}`,
						`    ${args.showVerticalBorders !== undefined ? `:showVerticalBorders="${args.showVerticalBorders}"` : ""}`,
						`    ${args.isSprite !== undefined ? `:isSprite="${args.isSprite}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  >`,
						`    <template #column5="{item}">`,
						`      <Button`,
						`        themeColor="primary"`,
						`        variant="filled"`,
						`        size="small"`,
						`        width="fit"`,
						`        borderWidth="1px"`,
						`        radius="4px"`,
						`        @click="onClick(item)"`,
						`      >`,
						`        View`,
						`      </Button>`,
						`    </template>`,
						`  </Table>`,
						'</template>',
					].filter(Boolean).join('\n').trim();
				},
			},
		},
	},
};

//==== 可勾選資料列 ====//
export const TableCheck = {
	name: "可勾選資料列",
	args: {
		dataSource: dataSource,
		columns: columns,
		showCheckbox: true,
		showVerticalBorders: true,
		isSprite: false,
		className: "",
	},
	render: (args) => ({
		components: { Table },
		setup() {
			return { args };
		},
		template: `
			<Table
				:columns="args.columns"
				:dataSource="args.dataSource"
				:showCheckbox="args.showCheckbox"
				:showVerticalBorders="args.showVerticalBorders"
				:isSprite="args.isSprite"
				:className="args.className"
			/>
    `,
	}),
	parameters: {
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<script setup>`,
						`import Table from "@/ui/element/Table/Table.vue";`,
						`const dataSource = [`,
						`	{ head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
						`	{ head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
						`	{ head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
						`	{ head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
						`]`,
						`const columns = [`,
						`	{ key: "head", title: "TH", width: "50px" },`,
						`	{ key: "column1", title: "TH", width: "100px" },`,
						`	{ key: "column2", title: "TH", width: "100px" },`,
						`	{ key: "column3", title: "TH", width: "100px" },`,
						`	{ key: "column4", title: "TH", width: "50px" },`,
						`	{ key: "column5", title: "TH", width: "50px", align: "center" },`,
						`]`,
						`</script>`,
						'',
						'<template>',
						`  <Table`,
						`    :dataSource='dataSource'`,
						`    :columns='columns'`,
						`    ${args.showCheckbox !== undefined ? `:showCheckbox="${args.showCheckbox}"` : ""}`,
						`    ${args.showVerticalBorders !== undefined ? `:showVerticalBorders="${args.showVerticalBorders}"` : ""}`,
						`    ${args.isSprite !== undefined ? `:isSprite="${args.isSprite}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  />`,
						'</template>',
					].filter(Boolean).join('\n').trim();
				},
			},
		},
	},
};