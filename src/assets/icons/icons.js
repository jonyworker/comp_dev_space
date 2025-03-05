// let formattedIcons = {};
//
// try {
//     // 確保使用者有將 icons.js 和 SVG 圖片放在 `src/assets/icons/`
//     const icons = import.meta.glob('./*.svg', { eager: true, import: 'default' });
//     formattedIcons = Object.fromEntries(
//         Object.entries(icons).map(([path, component]) => {
//             const name = path.replace('./', '').replace('.svg', ''); // 移除 "./" 和 ".svg"
//             return [name, component];
//         })
//     );
//
// // eslint-disable-next-line no-unused-vars
// } catch (error) {
//     console.warn("⚠️ 無法加載 SVG 圖標，請確認 icons.js 和 SVG 檔案已放入 `src/assets/icons/`！");
// }
//
// export default formattedIcons;
