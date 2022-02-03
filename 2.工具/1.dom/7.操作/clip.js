// 获取选取部分文本
const getSelectedText = () => window.getSelection().toString();

// 剪切
const copy = (string) => {
    const transfer = document.createElement('input');
    document.body.appendChild(transfer);
    transfer.value = string;
    transfer.focus();
    transfer.select();
    document.execCommand('copy');
    transfer.blur();
    document.body.removeChild(transfer);
}