import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import Button from './button.vue';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Design System/Sample/Button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: '按鈕樣式',
      control: {
        type: 'radio',
      },
      options: ['contained', 'outlined', 'text'],
    },
    theme: {
      description: '按鈕主題',
      control: {
        type: 'select',
      },
      options: ['primary', 'success', 'warning', 'danger'],
    },
    content: {
      description: '按鈕內容',
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    docs: {
      title: '按鈕',
      description: {
        component: '按鈕組件的呈現及說明。',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
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
    variant: 'contained',
    theme: 'primary',
    content: '送出',
    onClick: (e) => action('click')(e),
  },
};
