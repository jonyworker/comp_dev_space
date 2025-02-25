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
				<Content>
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
						`<script setup>`,
						'import Layout, { Content } from "@ded-wds-vue/ui";',
						`</script>`,
						'',
						'<template>',
						`  <Layout`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  >`,
						`    <Content>`,
						`      <div style="`,
						`        width: 100%;`,
						`        height: 100%;`,
						`        display: flex;`,
						`        justify-content: center;`,
						`        align-items: center;`,
						`        background: #0958d9;`,
						`        color: #fff;`,
						`        font-size: 24px;`,
						`      ">`,
						`        content`,
						`      </div>`,
						`    </Content>`,
						`  </Layout>`,
						'</template>',
					].filter(Boolean).join('\n').trim();
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
				<Header>
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
				<Content>
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
				<Footer>
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
						`<script setup>`,
						'import Layout, { Header, Content, Footer } from "@ded-wds-vue/ui";',
						`</script>`,
						'',
						'<template>',
						`  <Layout`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`  >`,
						`    <Header>`,
						`      <div style="`,
						`        width: 100%;`,
						`        height: 100%;`,
						`        display: flex;`,
						`        justify-content: center;`,
						`        align-items: center;`,
						`        background: #4096ff;`,
						`        color: #fff;`,
						`        font-size: 24px;`,
						`      ">`,
						`        content`,
						`      </div>`,
						`    </Header>`,
						`    <Content>`,
						`      <div style="`,
						`        width: 100%;`,
						`        height: 100%;`,
						`        display: flex;`,
						`        justify-content: center;`,
						`        align-items: center;`,
						`        background: #0958d9;`,
						`        color: #fff;`,
						`        font-size: 24px;`,
						`      ">`,
						`        content`,
						`      </div>`,
						`    </Content>`,
						`    <Footer>`,
						`      <div style="`,
						`        width: 100%;`,
						`        height: 100%;`,
						`        display: flex;`,
						`        justify-content: center;`,
						`        align-items: center;`,
						`        background: #4096ff;`,
						`        color: #fff;`,
						`        font-size: 24px;`,
						`      ">`,
						`        content`,
						`      </div>`,
						`    </Footer>`,
						`  </Layout>`,
						'</template>',
					].filter(Boolean).join('\n').trim();
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
				<Header>
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
				<Layout>
					<Side>
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
					<Content>
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
				<Footer>
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
						`<script setup>`,
						'import Layout, { Header, Content, Side, Footer } from "@ded-wds-vue/ui";',
						`</script>`,
						'',
						'<template>',
						`  <Layout`,
						`    ${args.className ? `:className="${args.className}"` : ""}`,
						`  >`,
						`    <Header>`,
						`      <div style="`,
						`        width: 100%;`,
						`        height: 100%;`,
						`        display: flex;`,
						`        justify-content: center;`,
						`        align-items: center;`,
						`        background: #4096ff;`,
						`        color: #fff;`,
						`        font-size: 24px;`,
						`      ">`,
						`        Header`,
						`      </div>`,
						`    </Header>`,
						`  `,
						`    <Layout>`,
						`      <Side>`,
						`        <div style="`,
						`          min-width: 80px;`,
						`          width: 100%;`,
						`          height: 100%;`,
						`          display: flex;`,
						`          justify-content: center;`,
						`          align-items: center;`,
						`          background: #1677ff;`,
						`          color: #fff;`,
						`          font-size: 24px;`,
						`        ">`,
						`          Side`,
						`        </div>`,
						`      </Side>`,
						`  `,
						`      <Content>`,
						`        <div style="`,
						`          width: 100%;`,
						`          height: 100%;`,
						`          display: flex;`,
						`          justify-content: center;`,
						`          align-items: center;`,
						`          background: #0958d9;`,
						`          color: #fff;`,
						`          font-size: 24px;`,
						`        ">`,
						`          Content`,
						`        </div>`,
						`      </Content>`,
						`    </Layout>`,
						`  `,
						`    <Footer>`,
						`      <div style="`,
						`        width: 100%;`,
						`        height: 100%;`,
						`        display: flex;`,
						`        justify-content: center;`,
						`        align-items: center;`,
						`        background: #4096ff;`,
						`        color: #fff;`,
						`        font-size: 24px;`,
						`      ">`,
						`        Footer`,
						`      </div>`,
						`    </Footer>`,
						`  </Layout>`,
						'</template>',
					].filter(Boolean).join('\n').trim();
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
				<Header>
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
				<Layout>
					<Content>
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
					<Side>
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
				<Footer>
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
						`<script setup>`,
						'import Layout, { Header, Content, Side, Footer } from "@ded-wds-vue/ui";',
						`</script>`,
						'',
						'<template>',
						`  <Layout`,
						`    ${args.className ? `:className="${args.className}"` : ""}`,
						`  >`,
						`    <Header>`,
						`      <div style="`,
						`        width: 100%;`,
						`        height: 100%;`,
						`        display: flex;`,
						`        justify-content: center;`,
						`        align-items: center;`,
						`        background: #4096ff;`,
						`        color: #fff;`,
						`        font-size: 24px;`,
						`      ">`,
						`        Header`,
						`      </div>`,
						`    </Header>`,
						`  `,
						`    <Layout>`,
						`      <Content>`,
						`        <div style="`,
						`          width: 100%;`,
						`          height: 100%;`,
						`          display: flex;`,
						`          justify-content: center;`,
						`          align-items: center;`,
						`          background: #0958d9;`,
						`          color: #fff;`,
						`          font-size: 24px;`,
						`        ">`,
						`          Content`,
						`        </div>`,
						`      </Content>`,
						`  `,
						`      <Side>`,
						`        <div style="`,
						`          min-width: 80px;`,
						`          width: 100%;`,
						`          height: 100%;`,
						`          display: flex;`,
						`          justify-content: center;`,
						`          align-items: center;`,
						`          background: #1677ff;`,
						`          color: #fff;`,
						`          font-size: 24px;`,
						`        ">`,
						`          Side`,
						`        </div>`,
						`      </Side>`,
						`    </Layout>`,
						`  `,
						`    <Footer>`,
						`      <div style="`,
						`        width: 100%;`,
						`        height: 100%;`,
						`        display: flex;`,
						`        justify-content: center;`,
						`        align-items: center;`,
						`        background: #4096ff;`,
						`        color: #fff;`,
						`        font-size: 24px;`,
						`      ">`,
						`        Footer`,
						`      </div>`,
						`    </Footer>`,
						`  </Layout>`,
						'</template>',
					].filter(Boolean).join('\n').trim();
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
				<Side>
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
				<Layout>
					<Header>
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
					<Content>
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
					<Footer>
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
						`<script setup>`,
						'import Layout, { Header, Content, Side, Footer } from "@ded-wds-vue/ui";',
						`</script>`,
						'',
						'<template>',
						`  <Layout`,
						`    ${args.className ? `:className="${args.className}"` : ""}`,
						`  >`,
						`    <Side>`,
						`      <div style="`,
						`        min-width: 80px;`,
						`        width: 100%;`,
						`        height: 100%;`,
						`        display: flex;`,
						`        justify-content: center;`,
						`        align-items: center;`,
						`        background: #1677ff;`,
						`        color: #fff;`,
						`        font-size: 24px;`,
						`      ">`,
						`        Side`,
						`      </div>`,
						`    </Side>`,
						`  `,
						`    <Layout>`,
						`      <Header>`,
						`        <div style="`,
						`          width: 100%;`,
						`          height: 100%;`,
						`          display: flex;`,
						`          justify-content: center;`,
						`          align-items: center;`,
						`          background: #4096ff;`,
						`          color: #fff;`,
						`          font-size: 24px;`,
						`        ">`,
						`          Header`,
						`        </div>`,
						`      </Header>`,
						`  `,
						`      <Content>`,
						`        <div style="`,
						`          width: 100%;`,
						`          height: 100%;`,
						`          display: flex;`,
						`          justify-content: center;`,
						`          align-items: center;`,
						`          background: #0958d9;`,
						`          color: #fff;`,
						`          font-size: 24px;`,
						`        ">`,
						`          Content`,
						`        </div>`,
						`      </Content>`,
						`  `,
						`      <Footer>`,
						`        <div style="`,
						`          width: 100%;`,
						`          height: 100%;`,
						`          display: flex;`,
						`          justify-content: center;`,
						`          align-items: center;`,
						`          background: #4096ff;`,
						`          color: #fff;`,
						`          font-size: 24px;`,
						`        ">`,
						`          Footer`,
						`        </div>`,
						`      </Footer>`,
						`    </Layout>`,
						`  </Layout>`,
						'</template>',
					].filter(Boolean).join('\n').trim();
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
				<Header>
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
				<Layout>
					<Side>
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
					<Layout>
						<Content>
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
						<Footer>
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
						`<script setup>`,
						'import Layout, { Header, Content, Side, Footer } from "@ded-wds-vue/ui";',
						`</script>`,
						'',
						'<template>',
						`  <Layout`,
						`    ${args.className ? `:className="${args.className}"` : ""}`,
						`  >`,
						`    <Header>`,
						`      <div style="`,
						`        width: 100%;`,
						`        height: 100%;`,
						`        display: flex;`,
						`        justify-content: center;`,
						`        align-items: center;`,
						`        background: #4096ff;`,
						`        color: #fff;`,
						`        font-size: 24px;`,
						`      ">`,
						`        Header`,
						`      </div>`,
						`    </Header>`,
						`  `,
						`    <Layout>`,
						`      <Side>`,
						`        <div style="`,
						`          min-width: 80px;`,
						`          width: 100%;`,
						`          height: 100%;`,
						`          display: flex;`,
						`          justify-content: center;`,
						`          align-items: center;`,
						`          background: #1677ff;`,
						`          color: #fff;`,
						`          font-size: 24px;`,
						`        ">`,
						`          Side`,
						`        </div>`,
						`      </Side>`,
						`  `,
						`      <Layout>`,
						`        <Content>`,
						`          <div style="`,
						`            width: 100%;`,
						`            height: 100%;`,
						`            display: flex;`,
						`            justify-content: center;`,
						`            align-items: center;`,
						`            background: #0958d9;`,
						`            color: #fff;`,
						`            font-size: 24px;`,
						`          ">`,
						`            Content`,
						`          </div>`,
						`        </Content>`,
						`  `,
						`        <Footer>`,
						`          <div style="`,
						`            width: 100%;`,
						`            height: 100%;`,
						`            display: flex;`,
						`            justify-content: center;`,
						`            align-items: center;`,
						`            background: #4096ff;`,
						`            color: #fff;`,
						`            font-size: 24px;`,
						`          ">`,
						`            Footer`,
						`          </div>`,
						`        </Footer>`,
						`      </Layout>`,
						`    </Layout>`,
						`  </Layout>`,
						'</template>',
					].filter(Boolean).join('\n').trim();
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
				<Header>
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
				<Layout>
					<Side>
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
					<Layout>
						<Content>
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
						<Footer>
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
					<Side>
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
						`<script setup>`,
						'import Layout, { Header, Content, Side, Footer } from "@ded-wds-vue/ui";',
						`</script>`,
						'',
						'<template>',
						`  <Layout`,
						`    ${args.className ? `:className="${args.className}"` : ""}`,
						`  >`,
						`    <Header>`,
						`      <div style="`,
						`        width: 100%;`,
						`        height: 100%;`,
						`        display: flex;`,
						`        justify-content: center;`,
						`        align-items: center;`,
						`        background: #4096ff;`,
						`        color: #fff;`,
						`        font-size: 24px;`,
						`      ">`,
						`        Header`,
						`      </div>`,
						`    </Header>`,
						`  `,
						`    <Layout>`,
						`      <Side>`,
						`        <div style="`,
						`          min-width: 80px;`,
						`          width: 100%;`,
						`          height: 100%;`,
						`          display: flex;`,
						`          justify-content: center;`,
						`          align-items: center;`,
						`          background: #1677ff;`,
						`          color: #fff;`,
						`          font-size: 24px;`,
						`        ">`,
						`          Side`,
						`        </div>`,
						`      </Side>`,
						`  `,
						`      <Layout>`,
						`        <Content>`,
						`          <div style="`,
						`            width: 100%;`,
						`            height: 100%;`,
						`            display: flex;`,
						`            justify-content: center;`,
						`            align-items: center;`,
						`            background: #0958d9;`,
						`            color: #fff;`,
						`            font-size: 24px;`,
						`          ">`,
						`            Content`,
						`          </div>`,
						`        </Content>`,
						`  `,
						`        <Footer>`,
						`          <div style="`,
						`            width: 100%;`,
						`            height: 100%;`,
						`            display: flex;`,
						`            justify-content: center;`,
						`            align-items: center;`,
						`            background: #4096ff;`,
						`            color: #fff;`,
						`            font-size: 24px;`,
						`          ">`,
						`            Footer`,
						`          </div>`,
						`        </Footer>`,
						`      </Layout>`,
						`  `,
						`      <Side>`,
						`        <div style="`,
						`          min-width: 80px;`,
						`          width: 100%;`,
						`          height: 100%;`,
						`          display: flex;`,
						`          justify-content: center;`,
						`          align-items: center;`,
						`          background: #1677ff;`,
						`          color: #fff;`,
						`          font-size: 24px;`,
						`        ">`,
						`          Side`,
						`        </div>`,
						`      </Side>`,
						`    </Layout>`,
						`  </Layout>`,
						'</template>',
					].filter(Boolean).join('\n').trim();
				},
			}
		}
	},
};

//==== 文章導覽式佈局 ====//
export const LayoutArticleStory = {
	name: '文章導覽式佈局',
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
				<Side>
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
				<Content>
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
						`<script setup>`,
						'import Layout, { Content, Side } from "@ded-wds-vue/ui";',
						`</script>`,
						'',
						'<template>',
						`  <Layout`,
						`    ${args.className ? `:className="${args.className}"` : ""}`,
						`  >`,
						`    <Side>`,
						`      <div style="`,
						`        min-width: 80px;`,
						`        width: 100%;`,
						`        height: 100%;`,
						`        display: flex;`,
						`        justify-content: center;`,
						`        align-items: center;`,
						`        background: #1677ff;`,
						`        color: #fff;`,
						`        font-size: 24px;`,
						`      ">`,
						`        Side`,
						`      </div>`,
						`    </Side>`,
						`  `,
						`    <Content>`,
						`      <div style="`,
						`        width: 100%;`,
						`        height: 100%;`,
						`        display: flex;`,
						`        justify-content: center;`,
						`        align-items: center;`,
						`        background: #0958d9;`,
						`        color: #fff;`,
						`        font-size: 24px;`,
						`      ">`,
						`        Content`,
						`      </div>`,
						`    </Content>`,
						`  </Layout>`,
						'</template>',
					].filter(Boolean).join('\n').trim();
				},
			}
		}
	},
};