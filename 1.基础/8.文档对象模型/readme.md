//        DOM1 级（DOM Level 1）于1998 年10 月成为W3C 的推荐标准。DOM1 级由两个模块组成：DOM
//        核心（DOM Core）和DOM HTML。其中，DOM 核心规定的是如何映射基于XML 的文档结构，以便
//        简化对文档中任意部分的访问和操作。DOM HTML 模块则在DOM 核心的基础上加以扩展，添加了针
//        对HTML 的对象和方法。


//        请读者注意，DOM 并不只是针对JavaScript 的，很多别的语言也都实现了DOM。
//        不过，在Web 浏览器中，基于ECMAScript 实现的DOM的确已经成为JavaScript 这
//        门语言的一个重要组成部分。


//        如果说 DOM1 级的目标主要是映射文档的结构，那么DOM2 级的目标就要宽泛多了。DOM2 级在
//        原来DOM 的基础上又扩充了（DHTML 一直都支持的）鼠标和用户界面事件、范围、遍历（迭代DOM
//        文档的方法）等细分模块，而且通过对象接口增加了对CSS（Cascading Style Sheets，层叠样式表）的
//        支持。DOM1 级中的DOM核心模块也经过扩展开始支持XML 命名空间。

//        DOM2 级引入了下列新模块，也给出了众多新类型和新接口的定义。
//         DOM 视图（DOM Views）：定义了跟踪不同文档（例如，应用CSS 之前和之后的文档）视图的
//        接口；
//         DOM 事件（DOM Events）：定义了事件和事件处理的接口；
//         DOM 样式（DOM Style）：定义了基于CSS 为元素应用样式的接口；
//         DOM 遍历和范围（DOM Traversal and Range）：定义了遍历和操作文档树的接口。


//        DOM3 级则进一步扩展了DOM，引入了以统一方式加载和保存文档的方法——在DOM 加载和保
//        存（DOM Load and Save）模块中定义；新增了验证文档的方法——在DOM 验证（DOM Validation）模

//其他DOM 标准
//除了 DOM核心和DOM HTML 接口之外，另外几种语言还发布了只针对自己的DOM标准。下面
//列出的语言都是基于XML 的，每种语言的DOM 标准都添加了与特定语言相关的新方法和新接口：
// SVG（Scalable Vector Graphic，可伸缩矢量图）1.0；
// MathML（Mathematical Markup Language，数学标记语言）1.0；
// SMIL（Synchronized Multimedia Integration Language，同步多媒体集成语言）。
//还有一些语言也开发了自己的DOM 实现，例如Mozilla 的XUL（XML User Interface Language，XML
//用户界面语言）。但是，只有上面列出的几种语言是W3C 的推荐标准。