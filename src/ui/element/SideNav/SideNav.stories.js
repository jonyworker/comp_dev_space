import SideNav from "@/ui/element/SideNav/SideNav.vue";
import Row from "@/ui/layout/Grid/Row.vue";
import Column from "@/ui/layout/Grid/Column.vue";
import Grid from "@/ui/layout/Grid/Grid.vue";
function formatDataSource(dataSource) {
	return `[
        ${dataSource.map(item => {
		const properties = [
			item.label ? `label: '${item.label}'` : '',
			item.prefix !== undefined && item.prefix !== null ? `prefix: '${item.prefix}'` : '',
			item.path ? `path: '${item.path}'` : '',
			item.order !== undefined && item.order !== null ? `order: '${item.order}'` : '',
			item.children && item.children.length ? `children: [
            ${item.children.map(child => {
				const childProps = [
					child.label ? `label: '${child.label}'` : '',
					child.prefix !== undefined && child.prefix !== null ? `prefix: '${child.prefix}'` : '',
					child.path ? `path: '${child.path}'` : '',
					child.order !== undefined && child.order !== null ? `order: '${child.order}'` : '',
				].filter(Boolean).join(',\n                        ');

				return `{\n                        ${childProps}\n                    }`;
			}).join(',\n                    ')}
                ]` : ''
		].filter(Boolean).join(',\n            ');

		return `{\n            ${properties}\n        }`;
	}).join(',\n        ')}
    ]`;
}


const dataSource = [
	{
		label: 'Home',
		prefix: 'SvgHome',
		path: '/Home',
		order: 1,
	},
	{
		label: 'User',
		prefix: 'SvgUser',
		path: '/users',
		order: 2,
		children: [
			{
				label: 'Profile',
				path: '/user/profile',
				order: 1,
			},
			{
				label: 'Account',
				path: '/user/account',
				order: 2,
			}
		]
	},
	{
		label: 'Chart',
		prefix: 'SvgBarChart',
		path: '/chart',
		order: 3,
		children: [
			{
				label: 'Profile',
				path: '/chart/profile',
				order: 1,
			},
			{
				label: 'Account',
				path: '/chart/account',
				order: 2,
			},
			{
				label: 'Account',
				path: '/chart/account',
				order: 3,
			},
			{
				label: 'Account',
				path: '/chart/account',
				order: 4,
			}
		]
	},
	{
		label: 'Database',
		prefix: 'SvgDatabase',
		path: '/database',
		order: 4,
	},
	{
		label: 'Favorite',
		prefix: 'SvgFavorite',
		path: '/favorite',
		order: 5,
	},
	{
		label: 'Calendar',
		prefix: 'SvgCalendar',
		path: '/calendar',
		order: 6,
	},
	{
		label: 'Notification',
		prefix: 'SvgNotification',
		path: '/notification',
		order: 7,
	},
	{
		label: 'Language',
		prefix: 'SvgLanguage',
		path: '/language',
		order: 8,
	},
]

export default {
	components: {Grid, Column, Row},
	title: "Component/SideNav",
	component: SideNav,
	tags: ["autodocs"],
	argTypes: {
		themeColor: {
			description: '背景顏色',
			control: { type: 'select' },
			options: ['blue', 'yellow', 'grape', 'black'],
			table: {
				type: {
					summary: "blue | yellow | grape | black",
				}
			}
		},
		mobileLogoSrc: {
			description: "手機 Logo 圖片",
			control: { type: "text" },
		},
		desktopLogoSrc: {
			description: "桌機 Logo 圖片",
			control: { type: "text" },
		},
		logoLink: {
			description: "Logo 連結",
			control: { type: "text" },
		},
		hasLogo: {
			description: "是否有 Logo",
			control: { type: "boolean" },
		},
		hasRWD: {
			description: "是否有側邊導覽",
			control: { type: "boolean" },
		},
		hasSearch: {
			description: "是否有搜尋欄",
			control: { type: "boolean" },
		},
		dataSource: {
			description: "資料來源",
			control: { type: "object" },
			table: {
				type: {
					summary: "{ label: string; prefix: string; path: string; order: number; children?: [" +
						" label:string; path:string; order: number;] }[]",
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
			title: "SideNav",
			description: {
				component: "側邊導覽組件的呈現及說明。",
			},
		},
	},
};

//==== 預設項目 ====//
export const SideNavDefault = {
	name: "預設項目",
	args: {
		themeColor: "blue",
		mobileLogoSrc: "https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg",
		desktopLogoSrc: "https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO_W.svg",
		logoLink: "https://www.auo.com",
		hasLogo: true,
		hasRWD: true,
		hasSearch: true,
		dataSource: dataSource,
		className: ""
	},
	render: (args) => ({
		components: { SideNav, Grid, Column, Row },
		setup() {
			return {
				args,
			};
		},
		template: `
			<Grid fluid>
				<Row hasGap>
					<Column xs="12" sm="4" md="4" style="text-align: start;">
						<SideNav
							:themeColor="args.themeColor"
							:mobileLogoSrc="args.mobileLogoSrc"
							:desktopLogoSrc="args.desktopLogoSrc"
							:logoLink="args.logoLink"
							:hasLogo="args.hasLogo"
							:hasRWD="args.hasRWD"
							:hasSearch="args.hasSearch"
							:dataSource="args.dataSource"
							:className="args.className"
						></SideNav>
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
					const dataSourceString = formatDataSource(args.dataSource);
					return [
						`<script setup>`,
						`import { SideNav, Grid, Row, Column } from "@ded-wds-vue/ui";`,
						`</script>`,
						'',
						'<template>',
						`  <Grid fluid>`,
						`    <Row hasGap>`,
						`      <Column xs="12" sm="4" md="4" style="text-align: start;">`,
						`        <SideNav`,
						`          ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`,
						`          ${args.mobileLogoSrc ? `mobileLogoSrc="${args.mobileLogoSrc}"` : ""}`,
						`          ${args.desktopLogoSrc ? `desktopLogoSrc="${args.desktopLogoSrc}"` : ""}`,
						`          ${args.logoLink ? `logoLink="${args.logoLink}"` : ""}`,
						`          ${args.hasLogo !== undefined ? `:hasLogo="${args.hasLogo}"` : ""}`,
						`          ${args.hasRWD !== undefined ? `:hasRWD="${args.hasRWD}"` : ""}`,
						`          ${args.hasSearch !== undefined ? `:hasSearch="${args.hasSearch}"` : ""}`,
						`          ${dataSourceString !== undefined ? `:dataSource="${dataSourceString}"` : ""}`,
						`          ${args.className ? `className="${args.className}"` : ""}`,
						`        ></SideNav>`,
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



