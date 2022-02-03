// 文档最后插入
const insertHTMLAfter = (html, el) => el.insertAdjacentHTML('afterend', html);

// 检测是否聚焦
const domFocus = el => el === document.activeElement;