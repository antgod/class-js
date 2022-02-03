// 打乱数组顺序
const shuffle = arr => arr.sort(() => 0.5 - Math.random())

// 计算平均值
const average = (arr) => arr.reduce((a, b) => a + b) / arr.length

// 扁平化
//用reduce实现
function fn(arr){
  return arr.reduce((prev,cur)=>{
     return prev.concat(Array.isArray(cur)?fn(cur):cur)
  },[])
}

var arr = [1, 2, 3, [4, 5], [6, [7, [8]]]]

/** * 使用递归的方式处理 * wrap 内保
存结果 ret * 返回一个递归函数 **/
function flatten() {
    var ret = [];
    return function flat(a) {
        for (var item of
            a) {
                if (item.constructor === Array) {
                    ret.concat(flat(item))
                } else {
                    ret.push(item)
                }
        }
        return ret
    }
} 
console.log(flatten()(arr));