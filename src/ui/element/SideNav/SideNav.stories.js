import SideNav from "./SideNav.vue";
import Row from "@/ui/layout/Grid/Row.vue";
import Column from "@/ui/layout/Grid/Column.vue";
import Grid from "@/ui/layout/Grid/Grid.vue";
function formatDataSource(dataSource) {
	return `[
	    ${dataSource.map(item => `{
	        title: '${item.title}',
	        prefix: '${item.prefix}',
	        path: '${item.path}',
	        ${item.children ? `children: [
	            ${item.children.map(child => `{
	                title: '${child.title}',
	                prefix: '${child.prefix}',
	                path: '${child.path}'
	            }`).join(',\n            ')}
	        ]` : ''}
	    }`).join(',\n    ')}
	]`;
}

const dataSource = [
	{
		title: 'Home',
		prefix: 'SvgHome',
		path: '/Home',

	},
	{
		title: 'User',
		prefix: 'SvgUser',
		path: '/users',
		children: [
			{
				title: 'Profile',
				path: '/user/profile'
			},
			{
				title: 'Account',
				path: '/user/account'
			}
		]
	},
	{
		title: 'Chart',
		prefix: 'SvgBarChart',
		path: '/chart',
		children: [
			{
				title: 'Profile',
				path: '/chart/profile'
			},
			{
				title: 'Account',
				path: '/chart/account'
			},
			{
				title: 'Account',
				path: '/chart/account'
			},
			{
				title: 'Account',
				path: '/chart/account'
			}
		]
	},
	{
		title: 'Database',
		prefix: 'SvgDatabase',
		path: '/database',
	},
	{
		title: 'Favorite',
		prefix: 'SvgFavorite',
		path: '/favorite',
	},
	{
		title: 'Calendar',
		prefix: 'SvgCalendar',
		path: '/calendar',
	},
	{
		title: 'Notification',
		prefix: 'SvgNotification',
		path: '/notification',
	},
	{
		title: 'Language',
		prefix: 'SvgLanguage',
		path: '/language',
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
					summary: "{ title: string; prefix: string; path: string; children?: [ title: string; prefix: string; path:string;] }[]",
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
		themeColor: "yellow",
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



