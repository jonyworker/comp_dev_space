import Breadcrumb from "./Breadcrumb.vue";
function formatDataSource(dataSource) {
    return `[
        ${dataSource.map(item => `{
            label: "${item.label}",
            href: "${item.href}",
        }`).join(',\n    ')}
    ]`;
}


export default {
    title: "Component/Breadcrumb",
    component: Breadcrumb,
    tags: ["autodocs"],
    argTypes: {
        dataSource: {
            description: "資料來源",
            control: { type: "object" },
            table: {
                type: {
                    summary: '{ label: string; href?: string | undefined; }[]',
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
        deepControls: { enabled: true, },
        docs: {
            title: "Breadcrumb",
            description: {
                component: "Breadcrumb 組件的呈現及說明。",
            },
        },
    },
};

//==== 預設項目 ====//
export const BreadcrumbMany = {
    name: "預設項目",
    args: {
        dataSource: [
            {
                "label": "Home",
                "href": "/"
            },
            {
                "label": "Level1",
                "href": "/first"
            },
            {
                "label": "Level2",
                "href": "https://tw.yahoo.com"
            },
            {
                "label": "Level3",
                "href": "/first/second/third/n"
            },
            {
                "label": "Current"
            }
        ],
        className: ""
    },
    render: (args) => ({
        components: { Breadcrumb },
        setup() {
            return {
                args,
            };
        },
        template: `
            <Breadcrumb
                :dataSource="args.dataSource"
                :className="args.className"
            ></Breadcrumb>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            include: ['dataSource', 'className' ],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    const dataSourceString = formatDataSource(args.dataSource);
                    return [
                        `<script setup>`,
                        `import Breadcrumb from "@/ui/element/Breadcrumb/Breadcrumb.vue";`,
                        `</script>`,
                        '',
                        '<template>',
                        '  <Breadcrumb',
                        `    :dataSource='${dataSourceString}'`,
                        `    ${args.className ? `className="${args.className}"` : ""}`,
                        '  >',
                        '  </Breadcrumb>',
                        '</template>',
                    ].join('\n').trim();
                }
            }
        }
    },
};