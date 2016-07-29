###管理内存
使用具备垃圾收集机制的语言编写程序，开发人员一般不必操心内存管理的问题。

但是，JavaScript
在进行内存管理及垃圾收集时面临的问题还是有点与众不同。其中最主要的一个问题，就是分配给 Web浏览器的可用内存数量通常要比分配给桌面应用程序的少。这样做的目的主要是出于安全方面的考虑，目的是防止运行 JavaScript的网页耗尽全部系统内存而导致系统崩溃。

内存限制问题不仅会影响给变量分配内存，同时还会影响调用栈以及在一个线程中能够同时执行的语句数量。

因此，确保占用最少的内存可以让页面获得更好的性能。而优化内存占用的最佳方式，就是为执行中的代码只保存必要的数据。一旦数据不再有用，最好通过将其值设置为 null 来释放其引用——这个做法叫做解除引用（dereferencing）。这一做法适用于大多数全局变量和全局对象的属性。局部变量会在它们离开执行环境时自动被解除引用，如下面这个例子所示：

    function createPerson(name){
     var localPerson = new Object();
     localPerson.name = name;
     return localPerson;
    }
    var globalPerson = createPerson("Nicholas");
    // 手工解除 globalPerson 的引用
    globalPerson = null;

在这个例子中，变量 globalPerson 取得了 createPerson()函数返回的值。在createPerson()
函数内部，我们创建了一个对象并将其赋给局部变量 localPerson，然后又为该对象添加了一个名为
name 的属性。最后，当调用这个函数时，localPerson 以函数值的形式返回并赋给全局变量
globalPerson。由于 localPerson 在 createPerson()函数执行完毕后就离开了其执行环境，因此
无需我们显式地去为它解除引用。

但是对于全局变量 globalPerson 而言，则需要我们在不使用它的
时候手工为它解除引用，这也正是上面例子中最后一行代码的目的。
不过，解除一个值的引用并不意味着自动回收该值所占用的内存。解除引用的真正作用是让值脱离执行环境，以便垃圾收集器下次运行时将其回收。