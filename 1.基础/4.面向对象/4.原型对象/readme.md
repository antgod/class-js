1. 所有的构造函数的prototype都不能为空, 就是说Superman.prototype = null 会被引擎无视;
2. Object.prototype添加的方法，任何Function实例都会带有，因为Function在Object.prototype的原型链上