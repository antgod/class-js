var numbers = [1,2,3,4,5,4,3,2,1];
var everyResult = numbers.every(function(item, index, array){   //每一项满足条件
    return item ;
});
console.log(everyResult); //false
var someResult = numbers.some(function(item, index, array){     //有一项满足条件
    return (item > 4);
});
console.log(someResult); //true


//ECMAScript 5 还新增了两个归并数组的方法：reduce()和 reduceRight()。这两个方法都会迭
//代数组的所有项，然后构建一个最终返回的值。其中，reduce()方法从数组的第一项开始，逐个遍历
//到最后。而 reduceRight()则从数组的最后一项开始，向前遍历到第一项。
var values = [1,2,3,4,5];
var sumReduce = values.reduce(function(prev, cur, index, array){
    return prev + cur;
});

var sumReduceRight = values.reduceRight(function(prev, cur, index, array){
    return prev + cur;
});

console.log(sumReduce,sumReduceRight); //15