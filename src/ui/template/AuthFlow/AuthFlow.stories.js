import Grid from "@/ui/layout/Grid/Grid.vue"
import Row from "@/ui/layout/Grid/Row.vue"
import Column from "@/ui/layout/Grid/Column.vue"
import AuthFlow from "@/ui/template/AuthFlow/AuthFlow.vue";

export default {
    title: 'Component/Auth-Flow',
    component: {},
    tags: ["autodocs"],
    argTypes: {

        bgColorSrc: {
            description: "背景顏色",
            control: { type: "text" },
        },
        bgImgSrc: {
            description: "背景圖片",
            control: { type: "text" },
        },
        title: {
            description: "標題",
            control: { type: "text" },
        },
        description: {
            description: "描述",
            control: { type: "text" },
        },
        className: {
            description: '客製化樣式',
            control: { type: 'text' },
        },
    },
    parameters: {
        // 自動文件
        docs: {
            title: 'Auth-Flow',
            description: {
                component: '驗證流程的呈現及說明。',
            },
        },
    },
};

//==== 預設項目 ====//
export const GridDefaultStory = {
    name: '預設項目',
    args: {
        bgColorSrc:"",
        bgImgSrc:"https://uedteam.github.io/DED-WDS_REACT/assets/auth-bg-CfQJDDOf.png",
        title:"Welcome Back",
        description:"",
        className:"",
    },
    render: (args) => ({
        components: { AuthFlow },
        setup() {
            return {
                args,
            };
        },
        template: `
            <AuthFlow
                :bgColorSrc="args.bgColorSrc"
                :bgImgSrc="args.bgImgSrc"
                :title="args.title"
                :description="args.description"
                :className="args.className"
            >
                
            </AuthFlow>
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
                        // `<Grid`,
                        // `  :fluid="${args.fluid}"`,
                        // `  :gap="${args.gap}"`,
                        // `  :className="${args.className}"`,
                        // `>`,
                        // `  <Row`,
                        // `    :justify="${args.justify}"`,
                        // `    :alignItem="${args.alignItem}"`,
                        // `    :hasGap="${args.hasGap}"`,
                        // `  >`,
                        // `    <Column`,
                        // `      v-for="(index) in 12"`,
                        // `      :key="index"`,
                        // `      :align="${args.align}"`,
                        // `      :xs="${args.xs}"`,
                        // `      :sm="${args.sm}"`,
                        // `      :md="${args.md}"`,
                        // `      :lg="${args.lg}"`,
                        // `      :xl="${args.xl}"`,
                        // `    >`,
                        // `      <div`,
                        // `        class="diagonal-background"`,
                        // `        style="border:1px solid #ccc; padding:8px 16px;"`,
                        // `      >`,
                        // `        Column {{index}}`,
                        // `      </div>`,
                        // `    </Column>`,
                        // `  </Row>`,
                        // `</Grid>`,
                    ].join("\n").trim();
                }
            }
        }
    },
};