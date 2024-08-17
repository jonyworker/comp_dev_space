import Button from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/Button',
  component: Button,
  // tags: ["autodocs"],
  argTypes: {
    icon: {
      control: { type: 'text' },
    },

    //以下參數不刪
    content: {
      control: { type: 'text' },
      description: '為按鈕添加文字',
    },
    variant: {
      description: '按鈕樣式',
      control: { type: 'select' },
      options: ['contained', 'outlined', 'text'],
    },
    themeColor: {
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
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: '設定按鈕尺寸',
    },

    prefix: {
      control: { type: 'select' },
      options: ['home', 'folder', 'academi', 'arrow-forward', 'finger-print'],
      description: '設定位於按鈕前方的 icon',
    },
    suffix: {
      control: { type: 'select' },
      options: ['home', 'folder'],
      description: '設定位於按鈕後方的 icon',
    },
  },
  parameters: {
    // docs: {
    //   controls: { exclude: ['style'] },
    // },
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
  render: (args) => ({
    components: { Button },
    setup() {
      return {
        args,
      };
    },
    template: '<Button v-bind="args">{{args.content}}</Button>',
  }),
  args: {
    content: 'Button Text',
    variant: 'contained',
    prefix: 'folder',
    isDisable: false,
  },
  // 控制各個stroys能夠顯示controls的量
  parameters: {
    controls: {
      include: ['variant', 'content', 'themeColor', 'isDisable', 'prefix'],
    },
  },
};
