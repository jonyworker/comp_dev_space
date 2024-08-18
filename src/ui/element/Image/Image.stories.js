import Image from './Image.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Design System/Image',
  component: Image,
  tags: ["autodocs"],
  argTypes: {
    //以下參數不刪
    objectFit: {
      description: '調整圖片適合其容器',
      control: { type: 'select' },
      options: ['cover', 'contain', 'fill', 'none'],
    },
    ratio: {
      description: '調整圖片比例',
      control: { type: 'select' },
      options: ['1/1', '4/3', '5/4', '16/9'],
      mapping: {
        '1/1': '11',
        '4/3': '43',
        '5/4': '54',
        '16/9': '169',
      },
    },
  },
  parameters: {
    // 自動文件
    docs: {
      title: '圖片',
      description: {
        component: '圖片組件的呈現及說明。',
      },
    },
  },

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
};

export const ButtonDefault = {
  name: '圖片',
  args: {
    ratio: '43',
    objectFit: 'cover',
  },
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['variant', 'content', 'themeColor', 'isDisable', 'prefix'],
    },
  },
};


