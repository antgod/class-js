##语法
ECMAScript 的语法大量借鉴了 C 及其他类 C 语言（如 Java 和 Perl）的语法。因此，熟悉这些语言
的开发人员在接受 ECMAScript 更加宽松的语法时，一定会有一种轻松自在的感觉。
###区分大小写
要理解的第一个概念就是 ECMAScript中的一切（变量、函数名和操作符）都区分大小写。这也就意味着，变量名 test 和变量名 Test 分别表示两个不同的变量，而函数名不能使用 typeof，因为它是一个关键字（3.2 节介绍关键字），但 typeOf 则完全可以是一个有效的函数名。
###标识符
所谓标识符，就是指变量、函数、属性的名字，或者函数的参数。标识符可以是按照下列格式规则组合起来的一或多个字符：

1. 第一个字符必须是一个字母、下划线（_）或一个美元符号（$）；
1. 其他字符可以是字母、下划线、美元符号或数字。
1. 标识符中的字母也可以包含扩展的 ASCII 或 Unicode 字母字符（如 À 和 Æ），但我们不推荐这样做。

按照惯例，ECMAScript标识符采用驼峰大小写格式，也就是第一个字母小写，剩下的每个单词的首字母大写，例如：

    firstSecond
    myCar
    doSomethingImportant
虽然没有谁强制要求必须采用这种格式，但为了与 ECMAScript 内置的函数和对象命名格式保持一
致，可以将其当作一种最佳实践。
不能把关键字、保留字、true、false 和 null 用作标识符。

###注释
ECMAScript 使用 C 风格的注释，包括单行注释和块级注释。单行注释以两个斜杠开头，如下所示：

    // 单行注释

块级注释以一个斜杠和一个星号（/*）开头，以一个星号和一个斜杠（*/）结尾，如下所示：
    
    /*
    * 这是一个多行
    * （块级）注释
    */
虽然上面注释中的第二和第三行都以一个星号开头，但这不是必需的。之所以添加那两个星号，纯粹是为了提高注释的可读性（这种格式在企业级应用中用得比较多）。

###严格模式
ECMAScript 5 引入了严格模式（strict mode）的概念。严格模式是为 JavaScript 定义了一种不同的解析与执行模型。在严格模式下，ECMAScript3中的一些不确定的行为将得到处理，而且对某些不安全的操作也会抛出错误。要在整个脚本中启用严格模式，可以在顶部添加如下代码：

    "use strict";
    
这行代码看起来像是字符串，而且也没有赋值给任何变量，但其实它是一个编译指示（pragma），用于告诉支持的 JavaScript 引擎切换到严格模式。这是为不破坏 ECMAScript 3 语法而特意选定的语法。

在函数内部的上方包含这条编译指示，也可以指定函数在严格模式下执行：

    function doSomething(){
     "use strict";
     //函数体
    }
严格模式下，JavaScript的执行结果会有很大不同，因此本书将会随时指出严格模式下的区别。支持严格模式的浏览器包括 IE10+、Firefox 4+、Safari 5.1+、Opera 12+和 Chrome。

###关键字/保留字
ECMAScript的全部关键字（带*号上标的是第 5 版新增的关键字）：

    break do instanceof typeof
    case else new var
    catch finally return void
    continue for switch while
    debugger* function this with
    default if throw
    delete in try

ECMA-262 第 3 版定义的全部保留字：

    abstract enum int short
    boolean export interface static
    byte extends long super
    char final native synchronized
    class float package throws
    const goto private transient
    debugger implements protected volatile
    double import public 
    
第 5 版把在非严格模式下运行时的保留字缩减为下列这些：

    class enum extends super
    const export import
    在严格模式下，第 5 版还对以下保留字施加了限制：
    implements package public
    interface private static
    let protected yield

注意，let 和 yield 是第 5 版新增的保留字；其他保留字都是第 3 版定义的。为了最大程度地保
证兼容性，建议读者将第 3 版定义的保留字外加 let 和 yield 作为编程时的参考。
在实现 ECMAScript 3 的 JavaScript 引擎中使用关键字作标识符，会导致“Identifier Expected”错误。
而使用保留字作标识符可能会也可能不会导致相同的错误，具体取决于特定的引擎。