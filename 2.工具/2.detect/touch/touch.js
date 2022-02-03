// 检查设备上的触摸支持
const touchSupported = () => ('ontouchstart' in window || DocumentTouch && document instanceof DocumentTouch)