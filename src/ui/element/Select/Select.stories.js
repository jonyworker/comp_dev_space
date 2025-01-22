import { ref } from 'vue';
import Select from "@/ui/element/Select/Select.vue";
function formatDataSource(dataSource) {
    return `[
    ${dataSource.map(item => `{
        label: '${item.label}',
        value: '${item.value}',
    }`).join(',\n    ')}
  ]`;
}

export default {
    title: 'Component/Select',
    component: Select,
    tags: ["autodocs"],
    argTypes: {
        dataSource: {
            description: "選項",
            control: { type: "object" },
            table: {
                type: {
                    summary: '{ label: string; value: string | number; }[]',
                }
            }
        },
        placeholder: {
            description: '輸入提示',
            control: { type: 'text' },
        },
        suffix: {
            description: "後綴圖示",
            control: {
                type: "select",
                labels: {
                    "": "none",
                    SvgAccount: "SvgAccount",
                    SvgSearch: "SvgSearch",
                    SvgVisibility: "SvgVisibility",
                    SvgVisibilityOff: "SvgVisibilityOff",
                }
            },
            options: [ "", "SvgAccount", "SvgSearch", "SvgVisibility", "SvgVisibilityOff"],
        },
        isDisabled: {
            description: "是否禁用",
            control: { type: 'boolean' },
        },
        className: {
            description: '客製化樣式',
            control: { type: 'text' },
        },
    },
    parameters: {
        // 自動文件
        docs: {
            title: 'Select',
            description: {
                component: 'Select 組件的呈現及說明。',
            },
        },
    },
};

//==== 預設項目 ====//
export const SelectDefault = {
    name: '預設項目',
    args: {
        dataSource: [
            {
                "label": "Option 1",
                "value": "1"
            },
            {
                "label": "Option 2",
                "value": "2"
            },
            {
                "label": "Option 3",
                "value": "3"
            }
        ],
        placeholder: "Select an option",
        suffix: "SvgArrowDropDown",
        isDisabled: false,
        className: ""
    },
    render: (args) => ({
        components: { Select },
        setup() {
            const selectedOption = ref("");
            return {
                args,
                selectedOption
            };
        },
        template: `
			<Select 
				:dataSource="args.dataSource"
				:placeholder="args.placeholder"
                :suffix="args.suffix"
                :isDisabled="args.isDisabled"
				:className="args.className"
                v-model="selectedOption"
			>
			</Select>
            
            選到的值: {{selectedOption}}
            `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['objectFit', 'src', 'value', 'name' ],
        },
        // docs: {
        //     source: {
        //         transform: (src, storyContext) => {
        //             const { args } = storyContext;
        //             const dataSourceString = formatDataSource(args.dataSource);
        //             return [
        //                 '<Dropdown',
        //                 `  :datasource="${dataSourceString}"`,
        //                 `  :label="${args.label}"`,
        //                 `  :placeholder="${args.placeholder}"`,
        //                 `  :size="${args.size}"`,
        //                 `  :maxHeight="${args.maxHeight}"`,
        //                 `  :className="${args.className}"`,
        //                 '>',
        //                 '</Dropdown>',
        //             ].join('\n').trim();
        //         }
        //     }
        // }
    },
};