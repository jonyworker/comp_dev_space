
import DOMPurify from 'dompurify';

// 將 HTML 字串安全化
export const sanitizeHtml = (html) => {
	return DOMPurify.sanitize(html);
};
