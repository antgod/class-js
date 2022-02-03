String.prototype.startsWith = function (text) {
	return this.indexOf(text) === 0;
}

/**
 * string模板方法
 */
 function stringTemplate(str,data,regexp){
	return str.replace(regexp || /\\?\{([^{}]+)\}/g, function (match, name) {
		return (data[name] === undefined) ? '' : data[name];
	});
}

// 获取字符串中的字符数
const characterCount = (str, char) => str.split(char).length - 1;

// 反转
const reverse = str => str.split('').reverse().join('');

// 转驼峰
var f = function(s) {
  return s.replace(/-\w/g, function(x) {
      return x.slice(1).toUpperCase();
  })
}

// 查找出现个数
let str = "abcabcabcbbccccc";
let num = 0;
let char = '';

 // 使其按照一定的次序排列
str = str.split('').sort().join('');
// "aaabbbbbcccccccc"

// 定义正则表达式
let re = /(\w)\1+/g;
str.replace(re,($0,$1) => {
    if(num < $0.length){
        num = $0.length;
        char = $1;        
    }
});
console.log(`字符最多的是${char}，出现了${num}次`);