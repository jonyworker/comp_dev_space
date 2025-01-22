import SideNav from "./SideNav.vue";
import Row from "@/ui/layout/Grid/Row.vue";
import Column from "@/ui/layout/Grid/Column.vue";
import Grid from "@/ui/layout/Grid/Grid.vue";
function formatDataSource(dataSource) {
	return `[
	    ${dataSource.map(item => `{
	        label: '${item.label}',
	        path: '${item.path}',
	        prefix: '${item.prefix}',
	        order: '${item.order}',
	        ${item.children ? `children: [
	            ${item.children.map(child => `{
	                label: '${child.title}',
	                path: '${child.path}',
	                prefix: '${child.prefix}',
	                order: '${child.order}',
	            }`).join(',\n            ')}
	        ]` : ''}
	    }`).join(',\n    ')}
	]`;
}

const dataSource = [
	{
		label: 'Home',
		path: '/Home',
		prefix: 'SvgHome',
		order: '1',
	},
	{
		label: 'User',
		path: '/users',
		prefix: 'SvgUser',
		order: '2',
		children: [
			{
				label: 'Profile',
				path: '/user/profile',
				order: '1',
			},
			{
				label: 'Account',
				path: '/user/account',
				order: '2',
			}
		]
	},
	{
		label: 'Chart',
		path: '/chart',
		prefix: 'SvgBarChart',
		order: '3',
		children: [
			{
				label: 'Profile',
				path: '/chart/profile',
				order: '1',
			},
			{
				label: 'Account',
				path: '/chart/account',
				order: '2',
			},
			{
				label: 'Account',
				path: '/chart/account',
				order: '3',
			},
			{
				label: 'Account',
				path: '/chart/account',
				order: '4',
			}
		]
	},
	{
		label: 'Database',
		path: '/database',
		prefix: 'SvgDatabase',
		order: '4',
	},
	{
		label: 'Favorite',
		path: '/favorite',
		prefix: 'SvgFavorite',
		order: '5',
	},
	{
		label: 'Calendar',
		path: '/calendar',
		prefix: 'SvgCalendar',
		order: '6',
	},
	{
		label: 'Notification',
		path: '/notification',
		prefix: 'SvgNotification',
		order: '7',
	},
	{
		label: 'Language',
		path: '/language',
		prefix: 'SvgLanguage',
		order: '8',
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
		logoSrc: {
			description: "Logo 圖片",
			control: { type: "text" },
		},
		logo: {
			description: "Logo 圖示",
			control: { type: "text" },
		},
		logoLink: {
			description: "Logo 連結",
			control: { type: "text" },
		},
		hasRWD: {
			description: "是否有側邊導覽",
			control: { type: "boolean" },
		},
		hasLogo: {
			description: "是否有 Logo",
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
					summary: "{ label: string; path: string; prefix: string; order: string; children?: [" +
						" title:string; path:string; prefix:string; order: string;] }[]",
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
		logoSrc: "https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg",
		logo: "SvgAuo",
		logoLink: "https://www.auo.com",
		hasRWD: false,
		hasLogo: true,
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
							:logoSrc="args.logoSrc"
							:logo="args.logo"
							:logoLink="args.logoLink"
							:hasRWD="args.hasRWD"
							:hasLogo="args.hasLogo"
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
						'  <SideNav',
						`    themeColor="${args.themeColor}"`,
						`    logoSrc="${args.logoSrc}"`,
						`    logo="${args.logo}"`,
						`    logoLink="${args.logoLink}"`,
						`    :hasRWD="${args.hasRWD}"`,
						`    :hasLogo="${args.hasLogo}"`,
						`    :hasSearch="${args.hasSearch}"`,
						`    :dataSource="${dataSourceString}"`,
						`    className="${args.className}"`,
						'  ></SideNav>',
					].join('\n').trim();
				}
			}
		}
	},
};



