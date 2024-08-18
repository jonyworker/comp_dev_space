import Button from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Design System/Button',
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    //以下參數不刪
    content: {
      description: '為按鈕添加文字',
      control: { type: 'text' },
    },
    variant: {
      description: '按鈕樣式',
      control: { type: 'select' },
      options: ['contained', 'outlined', 'text'],
    },
    themeColor: {
      description: '主題顏色',
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'tertiary',
        'success',
        'warning',
        'error',
        'info',
      ],
    },
    isDisable: {
      description: '是否禁用',
      control: { type: 'boolean' },
    },
    size: {
      description: '按鈕尺寸',
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    prefix: {
      description: '設定位於按鈕前方的 icon',
      control: { type: 'select' },
      options: ['None', 'home', 'folder', 'academi', 'arrow-forward', 'finger-print'],
      mapping: {
        None: null,
      },
    },
    suffix: {
      description: '設定位於按鈕後方的 icon',
      control: { type: 'select' },
      options: ['None', 'home', 'folder', 'academi', 'arrow-forward', 'finger-print'],
      mapping: {
        None: null,
      },
    },
    customClass: {
      description: '客製化樣式',
      control: { type: 'text' },
    },
  },
  parameters: {
    // 自動文件
    docs: {
      title: '按鈕',
      description: {
        component: '按鈕組件的呈現及說明。',
      },
    },
  },

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
};

export const ButtonDefault = {
  name: '標準按鈕',
  args: {
    content: 'Button Text',
    variant: 'contained',
    prefix: 'folder',
    size: 'medium',
    isDisable: false
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return {
        args,
      };
    },
    template:
        `<Button v-bind="args">
            {{args.content}}
        </Button>
        `,
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['variant', 'content', 'themeColor', 'isDisable', 'prefix'],
    },
  },
};

export const MultipleButton = {
  name: '多個按鈕',
  args: {
    content: 'Button Text',
    isDisable: false
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return {
        args,
      };
    },
    template: `<div style="display:flex; gap: 16px">
                  <Button v-bind="args" variant="contained" themeColor="primary" size="medium" prefix="home">
                   {{args.content}}
                  </Button>
                  <Button v-bind="args" variant="contained" themeColor="secondary" size="medium" prefix="home">
                    {{args.content}}
                  </Button>
                  <Button v-bind="args" variant="contained" themeColor="tertiary" size="medium" prefix="home">
                    {{args.content}}
                  </Button>
                  <Button v-bind="args" variant="contained" themeColor="success" size="medium" prefix="home">
                    {{args.content}}
                  </Button>
                  <Button v-bind="args" variant="contained" themeColor="warning" size="medium" prefix="home">
                    {{args.content}}
                  </Button>
                  <Button v-bind="args" variant="contained" themeColor="error" size="medium" prefix="home">
                    {{args.content}}
                  </Button>
                  <Button v-bind="args" variant="contained" themeColor="info" size="medium" prefix="home">
                    {{args.content}}
                  </Button>
               </div>
                `,
  }),
};
