测试结果见下面. 在这里先给出结论.
- setTimeout设置的函数, 会在readyState为complete时触发, 但是触发时间点是在图片资源加载完毕后.

- readyState为interactive时, DOM结构并没有稳定, 此时依然会有脚本修改DOM元素.

- readyState为complete时, 图片已经加载完毕, 实验中对图片加载设置了延时.所以complete虽然在window.onload前执行, 但是还是太晚.

- 外部script:如果将此script放在页面上方, 则无法稳定触发. 并且触发时DOM结构依然可能发生变化.

- 内部script:与外部script同样的问题, 触发的时间过早.

- doScroll: doScroll通过时readyState可能为interactive, 也可能为complete. 但是一定会在DOM结构稳定后, 图片加载完毕前执行.

所以可以看出, 目前的setTimeout方法, 外部script和内部script方法, 都是存在错误的.应该说这些方法不能安全可靠的实现DomReady事件.
而单纯使用readyState属性是无法判断出Dom Ready事件的. interactive状态过早(DOM没有稳定), complete状态过晚(图片加载完毕).
jQuery实现中使用的doScroll方法是目前唯一可用的方法.
在本文的最后, 提供了使用本原理实现的ready函数. 其实和jQuery中的Dom Ready原理几乎一样. 但是其中加入了延时, 可以指定win对象(即支持iframe)等功能.