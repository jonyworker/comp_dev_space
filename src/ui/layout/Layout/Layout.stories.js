import Layout, { Header, Content, Side, Footer } from '@/ui/layout/Layout'

export default {
	components: { Layout, Header, Content, Side, Footer },
	title: 'Component/Layout',
	tags: ["autodocs"],
	argTypes: {
		className: {
			description: '客製化樣式',
			control: { type: 'text' },
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: 'Layout',
			description: {
				component: '佈局組件的呈現及說明。',
			},
		},
	},
};

//==== 預設項目 ====//
export const LayoutDefaultStory = {
	name: '預設項目',
	args: {
		className: '',
	},
	render: (args) => ({
		components: { Layout, Header, Content, Side, Footer },
		setup() {
			return {
				args,
			};
		},
		template: `
			<Layout :className="args.className">
				<Content :className="args.className">
					<div style="
						width: 100%;
						height: 100%;
						display:flex;
						justify-content: center;
						align-items: center;
						background: #0958d9;
						color: #fff;
						font-size: 24px;
					"> Content </div>
				</Content>
			</Layout>
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
						'<Layout :className="${args.className}">',
						'  <Content :className="${args.className}">',
						'    <div style="',
						'      width: 100%;',
						'      height: 100%;',
						'      display: flex;',
						'      justify-content: center;',
						'      align-items: center;',
						'      background: #0958d9;',
						'      color: #fff;',
						'      font-size: 24px;',
						'    ">',
						'      content',
						'    </div>',
						'  </Content>',
						'</Layout>',
					].join('\n').trim();
				},
			}
		}
	},
};

//==== 三段式佈局 ====//
export const LayoutThirdStory = {
	name: '三段式佈局',
	args: {
		className: '',
	},
	render: (args) => ({
		components: { Layout, Header, Content, Side, Footer },
		setup() {
			return {
				args,
			};
		},
		template: `
			<Layout :className="args.className">
				<Header :className="args.className" >
					<div style="
						width: 100%;
						height: 100%;
						display:flex;
						justify-content: center;
						align-items: center;
						background: #4096ff;
						color: #fff;
						font-size: 24px;
					"> Header </div>
				</Header>
				<Content :className="args.className">
					<div style="
						width: 100%;
						height: 100%;
						display:flex;
						justify-content: center;
						align-items: center;
						background: #0958d9;
						color: #fff;
						font-size: 24px;
					"> Content </div>
				</Content>
				<Footer :className="args.className">
					<div style="
						width: 100%;
						height: 100%;
						display:flex;
						justify-content: center;
						align-items: center;
						background: #4096ff;
						color: #fff;
						font-size: 24px;
					"> Footer </div>
				</Footer>
			</Layout>
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
						`<Layout :className="${args.className}">`,
						`  <Header :className="${args.className}">`,
						'    <div style="',
						'      width: 100%;',
						'      height: 100%;',
						'      display: flex;',
						'      justify-content: center;',
						'      align-items: center;',
						'      background: #4096ff;',
						'      color: #fff;',
						'      font-size: 24px;',
						'    ">',
						'      Header',
						'    </div>',
						'  </Header>',
						`  <Content :className="${args.className}">`,
						'    <div style="',
						'      width: 100%;',
						'      height: 100%;',
						'      display: flex;',
						'      justify-content: center;',
						'      align-items: center;',
						'      background: #0958d9;',
						'      color: #fff;',
						'      font-size: 24px;',
						'    ">',
						'      Content',
						'    </div>',
						'  </Content>',
						`  <Footer :className="${args.className}">`,
						'    <div style="',
						'      width: 100%;',
						'      height: 100%;',
						'      display: flex;',
						'      justify-content: center;',
						'      align-items: center;',
						'      background: #4096ff;',
						'      color: #fff;',
						'      font-size: 24px;',
						'    ">',
						'      Footer',
						'    </div>',
						'  </Footer>',
						'</Layout>',
					].join('\n').trim();
				},
			}
		}
	},
};

//==== 左側欄三段式佈局 ====//
export const LayoutLeftDrawerStory = {
	name: '左側欄三段式佈局',
	args: {
		className: '',
	},
	render: (args) => ({
		components: { Layout, Header, Content, Side, Footer },
		setup() {
			return {
				args,
			};
		},
		template: `
			<Layout :className="args.className">
				<Header :className="args.className" >
					<div style="
						width: 100%;
						height: 100%;
						display:flex;
						justify-content: center;
						align-items: center;
						background: #4096ff;
						color: #fff;
						font-size: 24px;
					"> Header </div>
				</Header>
				<Layout :className="args.className">
					<Side :className="args.className" >
						<div style="
							min-width: 80px;
							width: 100%;
							height: 100%;
							display:flex;
							justify-content: center;
							align-items: center;
							background: #1677ff;
							color: #fff;
							font-size: 24px;
						"> Side </div>
					</Side>
					<Content :className="args.className">
						<div style="
							width: 100%;
							height: 100%;
							display:flex;
							justify-content: center;
							align-items: center;
							background: #0958d9;
							color: #fff;
							font-size: 24px;
						"> Content </div>
					</Content>
				</Layout>
				<Footer :className="args.className">
					<div style="
						width: 100%;
						height: 100%;
						display:flex;
						justify-content: center;
						align-items: center;
						background: #4096ff;
						color: #fff;
						font-size: 24px;
					"> Footer </div>
				</Footer>
			</Layout>
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
						`<Layout :className="${args.className}">`,
						`  <Header :className="${args.className}">`,
						'    <div style="',
						'      width: 100%;',
						'      height: 100%;',
						'      display: flex;',
						'      justify-content: center;',
						'      align-items: center;',
						'      background: #4096ff;',
						'      color: #fff;',
						'      font-size: 24px;',
						'    ">',
						'      Header',
						'    </div>',
						'  </Header>',
						`  <div style="display: flex; height: 100%;">`, // 包裹 Side 和 Content 的 div
						`    <Side :className="${args.className}">`,
						'      <div style="',
						'        min-width: 80px;',
						'        width: 100%;',
						'        height: 100%;',
						'        display: flex;',
						'        justify-content: center;',
						'        align-items: center;',
						'        background: #1677ff;',
						'        color: #fff;',
						'        font-size: 24px;',
						'      ">',
						'        Side',
						'      </div>',
						'    </Side>',
						`    <Content :className="${args.className}">`,
						'      <div style="',
						'        width: 100%;',
						'        height: 100%;',
						'        display: flex;',
						'        justify-content: center;',
						'        align-items: center;',
						'        background: #0958d9;',
						'        color: #fff;',
						'        font-size: 24px;',
						'      ">',
						'        Content',
						'      </div>',
						'    </Content>',
						'  </div>', // 結束包裹 Side 和 Content 的 div
						`  <Footer :className="${args.className}">`,
						'    <div style="',
						'      width: 100%;',
						'      height: 100%;',
						'      display: flex;',
						'      justify-content: center;',
						'      align-items: center;',
						'      background: #4096ff;',
						'      color: #fff;',
						'      font-size: 24px;',
						'    ">',
						'      Footer',
						'    </div>',
						'  </Footer>',
						'</Layout>',
					].join('\n').trim();
				},
			}
		}
	},
};

//==== 右側欄三段式佈局 ====//
export const LayoutRightDrawerStory = {
	name: '右側欄三段式佈局',
	args: {
		className: '',
	},
	render: (args) => ({
		components: { Layout, Header, Content, Side, Footer },
		setup() {
			return {
				args,
			};
		},
		template: `
			<Layout :className="args.className">
				<Header :className="args.className" >
					<div style="
						width: 100%;
						height: 100%;
						display:flex;
						justify-content: center;
						align-items: center;
						background: #4096ff;
						color: #fff;
						font-size: 24px;
					"> Header </div>
				</Header>
				<Layout :className="args.className">
					<Content :className="args.className">
						<div style="
							width: 100%;
							height: 100%;
							display:flex;
							justify-content: center;
							align-items: center;
							background: #0958d9;
							color: #fff;
							font-size: 24px;
						"> Content </div>
					</Content>
					<Side :className="args.className" >
						<div style="
							min-width: 80px;
							width: 100%;
							height: 100%;
							display:flex;
							justify-content: center;
							align-items: center;
							background: #1677ff;
							color: #fff;
							font-size: 24px;
						"> Side </div>
					</Side>
				</Layout>
				<Footer :className="args.className">
					<div style="
						width: 100%;
						height: 100%;
						display:flex;
						justify-content: center;
						align-items: center;
						background: #4096ff;
						color: #fff;
						font-size: 24px;
					"> Footer </div>
				</Footer>
			</Layout>
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
						`<Layout :className="${args.className}">`,
						`  <Header :className="${args.className}">`,
						'    <div style="',
						'      width: 100%;',
						'      height: 100%;',
						'      display: flex;',
						'      justify-content: center;',
						'      align-items: center;',
						'      background: #4096ff;',
						'      color: #fff;',
						'      font-size: 24px;',
						'    ">',
						'      Header',
						'    </div>',
						'  </Header>',
						`  <div style="display: flex; height: 100%;">`, // 包裹 Side 和 Content 的 div
						`    <Content :className="${args.className}">`,
						'      <div style="',
						'        width: 100%;',
						'        height: 100%;',
						'        display: flex;',
						'        justify-content: center;',
						'        align-items: center;',
						'        background: #0958d9;',
						'        color: #fff;',
						'        font-size: 24px;',
						'      ">',
						'        Content',
						'      </div>',
						'    </Content>',
						`    <Side :className="${args.className}">`,
						'      <div style="',
						'        min-width: 80px;',
						'        width: 100%;',
						'        height: 100%;',
						'        display: flex;',
						'        justify-content: center;',
						'        align-items: center;',
						'        background: #1677ff;',
						'        color: #fff;',
						'        font-size: 24px;',
						'      ">',
						'        Side',
						'      </div>',
						'    </Side>',
						'  </div>', // 結束包裹 Side 和 Content 的 div
						`  <Footer :className="${args.className}">`,
						'    <div style="',
						'      width: 100%;',
						'      height: 100%;',
						'      display: flex;',
						'      justify-content: center;',
						'      align-items: center;',
						'      background: #4096ff;',
						'      color: #fff;',
						'      font-size: 24px;',
						'    ">',
						'      Footer',
						'    </div>',
						'  </Footer>',
						'</Layout>',
					].join('\n').trim();
				},
			}
		}
	},
};

//==== 左側欄固定佈局 ====//
export const LayoutLeftFixedStory = {
	name: '左側欄固定佈局',
	args: {
		className: '',
	},
	render: (args) => ({
		components: { Layout, Header, Content, Side, Footer },
		setup() {
			return {
				args,
			};
		},
		template: `
			<Layout :className="args.className">
				<Side :className="args.className" >
					<div style="
							min-width: 80px;
							width: 100%;
							height: 100%;
							display:flex;
							justify-content: center;
							align-items: center;
							background: #1677ff;
							color: #fff;
							font-size: 24px;
						"> Side </div>
				</Side>
				<Layout :className="args.className">
					<Header :className="args.className" >
						<div style="
							width: 100%;
							height: 100%;
							display:flex;
							justify-content: center;
							align-items: center;
							background: #4096ff;
							color: #fff;
							font-size: 24px;
						"> Header </div>
					</Header>
					<Content :className="args.className">
						<div style="
							width: 100%;
							height: 100%;
							display:flex;
							justify-content: center;
							align-items: center;
							background: #0958d9;
							color: #fff;
							font-size: 24px;
						"> Content </div>
					</Content>
					<Footer :className="args.className">
						<div style="
						width: 100%;
						height: 100%;
						display:flex;
						justify-content: center;
						align-items: center;
						background: #4096ff;
						color: #fff;
						font-size: 24px;
					"> Footer </div>
					</Footer>
				</Layout>
			</Layout>
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
						`<Layout :className="${args.className}">`,
						`  <Side :className="${args.className}">`,
						'    <div style="',
						'      min-width: 80px;',
						'      width: 100%;',
						'      height: 100%;',
						'      display: flex;',
						'      justify-content: center;',
						'      align-items: center;',
						'      background: #1677ff;',
						'      color: #fff;',
						'      font-size: 24px;',
						'    ">',
						'      Side',
						'    </div>',
						'  </Side>',
						`  <div style="display: flex; height: 100%;">`,
						`    <Header :className="${args.className}">`,
						'      <div style="',
						'        width: 100%;',
						'        height: 100%;',
						'        display: flex;',
						'        justify-content: center;',
						'        align-items: center;',
						'        background: #4096ff;',
						'        color: #fff;',
						'        font-size: 24px;',
						'      ">',
						'        Header',
						'      </div>',
						'    </Header>',
						`    <Content :className="${args.className}">`,
						'      <div style="',
						'        width: 100%;',
						'        height: 100%;',
						'        display: flex;',
						'        justify-content: center;',
						'        align-items: center;',
						'        background: #0958d9;',
						'        color: #fff;',
						'        font-size: 24px;',
						'      ">',
						'        Content',
						'      </div>',
						'    </Content>',
						`    <Footer :className="${args.className}">`,
						'      <div style="',
						'        width: 100%;',
						'        height: 100%;',
						'        display: flex;',
						'        justify-content: center;',
						'        align-items: center;',
						'        background: #4096ff;',
						'        color: #fff;',
						'        font-size: 24px;',
						'      ">',
						'        Footer',
						'      </div>',
						'    </Footer>',
						'  </div>',
						'</Layout>',
					].join('\n').trim();
				},
			}
		}
	},
};

//==== 標準左側佈局 ====//
export const LayoutLeftStory = {
	name: '標準左側佈局',
	args: {
		className: '',
	},
	render: (args) => ({
		components: { Layout, Header, Content, Side, Footer },
		setup() {
			return {
				args,
			};
		},
		template: `
			<Layout :className="args.className">
				<Header :className="args.className" >
					<div style="
						width: 100%;
						height: 100%;
						display:flex;
						justify-content: center;
						align-items: center;
						background: #4096ff;
						color: #fff;
						font-size: 24px;
					"> Header </div>
				</Header>
				<Layout :className="args.className">
					<Side :className="args.className" >
						<div style="
							min-width: 80px;
							width: 100%;
							height: 100%;
							display:flex;
							justify-content: center;
							align-items: center;
							background: #1677ff;
							color: #fff;
							font-size: 24px;
						"> Side </div>
					</Side>
					<Layout :className="args.className">
						<Content :className="args.className">
							<div style="
								width: 100%;
								height: 100%;
								display:flex;
								justify-content: center;
								align-items: center;
								background: #0958d9;
								color: #fff;
								font-size: 24px;
							"> Content </div>
						</Content>
						<Footer :className="args.className">
							<div style="
								width: 100%;
								height: 100%;
								display:flex;
								justify-content: center;
								align-items: center;
								background: #4096ff;
								color: #fff;
								font-size: 24px;
							"> Footer </div>
						</Footer>
					</Layout>
				</Layout>
			</Layout>
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
						`<Layout :className="${args.className}">`,
						`  <Header :className="${args.className}">`,
						'    <div style="',
						'      width: 100%;',
						'      height: 100%;',
						'      display: flex;',
						'      justify-content: center;',
						'      align-items: center;',
						'      background: #4096ff;',
						'      color: #fff;',
						'    ">',
						'      Header',
						'    </div>',
						'  </Header>',
						`  <div style="display: flex; height: 100%;">`,
						`    <Side :className="${args.className}">`,
						'      <div style="',
						'        min-width: 80px;',
						'        width: 100%;',
						'        height: 100%;',
						'        display: flex;',
						'        justify-content: center;',
						'        align-items: center;',
						'        background: #1677ff;',
						'        color: #fff;',
						'        font-size: 24px;',
						'      ">',
						'        Side',
						'      </div>',
						'    </Side>',
						`    <div style="display: flex; height: 100%;">`,
						`      <Content :className="${args.className}">`,
						'        <div style="',
						'          width: 100%;',
						'          height: 100%;',
						'          display: flex;',
						'          justify-content: center;',
						'          align-items: center;',
						'          background: #0958d9;',
						'          color: #fff;',
						'          font-size: 24px;',
						'        ">',
						'          Content',
						'        </div>',
						'      </Content>',
						`      <Footer :className="${args.className}">`,
						'        <div style="',
						'          width: 100%;',
						'          height: 100%;',
						'          display: flex;',
						'          justify-content: center;',
						'          align-items: center;',
						'          background: #4096ff;',
						'          color: #fff;',
						'          font-size: 24px;',
						'        ">',
						'          Footer',
						'        </div>',
						'      </Footer>',
						'    </div>',
						'  </div>',
						'</Layout>',
					].join('\n').trim();

				},
			}
		}
	},
};

//==== 官網佈局 ====//
export const LayoutOfficialStory = {
	name: '官網佈局',
	args: {
		className: '',
	},
	render: (args) => ({
		components: { Layout, Header, Content, Side, Footer },
		setup() {
			return {
				args,
			};
		},
		template: `
			<Layout :className="args.className">
				<Header :className="args.className" >
					<div style="
						width: 100%;
						height: 100%;
						display:flex;
						justify-content: center;
						align-items: center;
						background: #4096ff;
						color: #fff;
						font-size: 24px;
					"> Header </div>
				</Header>
				<Layout :className="args.className">
					<Side :className="args.className" >
						<div style="
							min-width: 80px;
							width: 100%;
							height: 100%;
							display:flex;
							justify-content: center;
							align-items: center;
							background: #1677ff;
							color: #fff;
							font-size: 24px;
						"> Side </div>
					</Side>
					<Layout :className="args.className">
						<Content :className="args.className">
							<div style="
								width: 100%;
								height: 100%;
								display:flex;
								justify-content: center;
								align-items: center;
								background: #0958d9;
								color: #fff;
								font-size: 24px;
							"> Content </div>
						</Content>
						<Footer :className="args.className">
							<div style="
								width: 100%;
								height: 100%;
								display:flex;
								justify-content: center;
								align-items: center;
								background: #4096ff;
								color: #fff;
								font-size: 24px;
							"> Footer </div>
						</Footer>
					</Layout>
					<Side :className="args.className" >
						<div style="
							min-width: 80px;
							width: 100%;
							height: 100%;
							display:flex;
							justify-content: center;
							align-items: center;
							background: #1677ff;
							color: #fff;
							font-size: 24px;
						"> Side </div>
					</Side>
				</Layout>
			</Layout>
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
						`<Layout :className="${args.className}">`,
						`  <Header :className="${args.className}">`,
						'    <div style="',
						'      width: 100%;',
						'      height: 100%;',
						'      display: flex;',
						'      justify-content: center;',
						'      align-items: center;',
						'      background: #4096ff;',
						'      color: #fff;',
						'      font-size: 24px;',
						'    ">',
						'      Header',
						'    </div>',
						'  </Header>',
						`  <div style="display: flex; height: 100%;">`,
						`    <Side :className="${args.className}">`,
						'      <div style="',
						'        min-width: 80px;',
						'        width: 100%;',
						'        height: 100%;',
						'        display: flex;',
						'        justify-content: center;',
						'        align-items: center;',
						'        background: #1677ff;',
						'        color: #fff;',
						'        font-size: 24px;',
						'      ">',
						'        Side',
						'      </div>',
						'    </Side>',
						`    <div style="display: flex; height: 100%;">`,
						`      <Content :className="${args.className}">`,
						'        <div style="',
						'          width: 100%;',
						'          height: 100%;',
						'          display: flex;',
						'          justify-content: center;',
						'          align-items: center;',
						'          background: #0958d9;',
						'          color: #fff;',
						'          font-size: 24px;',
						'        ">',
						'          Content',
						'        </div>',
						'      </Content>',
						`      <Footer :className="${args.className}">`,
						'        <div style="',
						'          width: 100%;',
						'          height: 100%;',
						'          display: flex;',
						'          justify-content: center;',
						'          align-items: center;',
						'          background: #4096ff;',
						'          color: #fff;',
						'          font-size: 24px;',
						'        ">',
						'          Footer',
						'        </div>',
						'      </Footer>',
						'    </div>',
						`    <Side :className="${args.className}">`,
						'      <div style="',
						'        min-width: 80px;',
						'        width: 100%;',
						'        height: 100%;',
						'        display: flex;',
						'        justify-content: center;',
						'        align-items: center;',
						'        background: #1677ff;',
						'        color: #fff;',
						'        font-size: 24px;',
						'      ">',
						'        Side',
						'      </div>',
						'    </Side>',
						'  </div>',
						'</Layout>',
					].join('\n').trim();
				},
			}
		}
	},
};