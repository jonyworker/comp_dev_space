/** @type { import('@storybook/vue3').Preview } */
import '@/style/globals.scss';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../index.css';
import './preview.scss';
import { setup } from '@storybook/vue3'; // 正確的 Vue 3 setup 方法
import icons from '../src/assets/icons/icons.js'; // 確保正確路徑

// ✅ 在 Storybook 初始化時 `provide` icons
setup((app) => {
	app.provide('icons', icons);
});

const preview = {
	parameters: {
		backgrounds: {
			values: [
				{ name: 'light', value: '#fff' },
				{ name: 'dark', value: '#333' },
				{ name: 'gray', value: '#f0f0f0' },
			],
		},
		options: {
			storySort: {
				method: 'alphabetical',
				order: ['Introduction', 'Components'],
				locales: 'en-US',
			},
		},
		viewport: {
			viewports: INITIAL_VIEWPORTS,
		},
		controls: {
			expanded: true,
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	tags: ['autodocs'],
};

export default preview;
