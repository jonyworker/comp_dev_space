// src/icons.js
const icons = import.meta.glob('./assets/icons/*.svg', { eager: true });

export default Object.fromEntries(
    Object.entries(icons).map(([key, value]) => {
        const name = key.match(/\/([^/]+)\.svg$/)[1]; // 取得 SVG 檔案名稱
        return [name, value.default];
    })
);