import Dashboard from "@/ui/template/Dashboard/Dashboard.vue";
import Grid from "@/ui/layout/Grid/Grid.vue";
import Row from "@/ui/layout/Grid/Row.vue";
import Column from "@/ui/layout/Grid/Column.vue";
import Button from "@/ui/element/Button/Button.vue";
import Checkbox from "@/ui/element/Checkbox/Checkbox.vue";
import Input from "@/ui/element/Input/Input.vue";

export default {
    title: 'Template/Dashboard',
    component: Dashboard,
    tags: ["autodocs"],
    argTypes: {
        isGridSystem: {
            description: "開啟格線系統",
            control: { type: "boolean" },
        },
        className: {
            description: '客製化樣式',
            control: { type: 'text' },
        },
    },
    parameters: {
        // 自動文件
        docs: {
            title: 'Dashboard',
            description: {
                component: 'Dashboard 組件的呈現及說明。',
            },
        },
    },
};

//==== 預設項目 ====//
export const defaultDashboardStory = {
    name: '預設項目',
    args: {
        //props
        isGridSystem:false,
        className:"",
    },
    render: (args) => ({
        components: { Dashboard, Grid, Row, Column, Checkbox, Button, Input },
        setup() {
            return {
                args,
            };
        },
        template: `
            <Dashboard
                :isGridSystem="args.isGridSystem"
                :className="args.className"
            >
            </Dashboard>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['fluid', 'className', 'justify', 'align', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl'],
        },
    },
};