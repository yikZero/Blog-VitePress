# SVG图标色彩调整的策略

## 基础了解

![研究图标展示](/img/试验图标.png)

分析这几个图标SVG代码：

```html
#Line
<path d="M16 12L12 8M12 8L8 12M12 8V16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#4186E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 

#Line gradient
<path d="M16 12L12 8M12 8L8 12M12 8V16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="url(#paint0_linear_1403_58)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_1403_58" x1="2" y1="2" x2="22" y2="2" gradientUnits="userSpaceOnUse">
<stop stop-color="#7F56D9"/>
<stop offset="1" stop-color="#9E77ED"/>
</linearGradient>
</defs>

#Flatten
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM7.29289 11.2929L11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071C16.3166 13.0976 15.6834 13.0976 15.2929 12.7071L13 10.4142V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V10.4142L8.70711 12.7071C8.31658 13.0976 7.68342 13.0976 7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929Z" fill="#4186E7"/>

#Duocolor
<path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4186E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 12L12 8M12 8L8 12M12 8V16" stroke="#4186E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

#Duotone
<path opacity="0.12" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#4186E7"/>
<path d="M16 12L12 8M12 8L8 12M12 8V16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#4186E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
```

- 纯色图标中，与色彩相关的是`fill`和`stroke`
- 渐变图标中，增加了`gradientUnits`渐变方式和`stop-color`渐变停止处使用的颜色
- 通过配合`xy`位置、`opacity`透明度属性来实现基本的色彩变化

[W3C的SVG属性索引](https://www.w3.org/TR/SVG/propidx.html)

[SVG支持&兼容性查询](https://caniuse.com/svg)

## 基础方案尝试

![直接在css中调整属性值](/img/web/svg-img-1.png)

如图所示，我们通过css只能调整SVG的背景颜色，并不能通过设置`stroke`、`fill`和`color`来对SVG图标的颜色产生影响。

## 常见解决方案

### 1. 调整内部色彩

![测试方案1-1](/img/web/svg-icon-1.svg)
![测试方案1-2](/img/web/svg-icon-2.svg)

在SVG图形中，我们可以通过调整`stroke`和`fill`属性的参数值来改变图标的颜色。 

```css
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill="#4186E7" fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM7.29289 11.2929L11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071C16.3166 13.0976 15.6834 13.0976 15.2929 12.7071L13 10.4142V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V10.4142L8.70711 12.7071C8.31658 13.0976 7.68342 13.0976 7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929Z"/> // [!code focus]
</svg>
```

| 缺点 | 描述 |
| --- | --- |
| 复杂性 | 对于复杂的SVG图像，手动调整内部色彩可能会非常困难和耗时。 |
| 不适合动态更改 | 如果你需要根据用户的输入或其他因素动态更改SVG的颜色，那么调整内部色彩可能不是最佳选择。因为这需要重新计算和应用新的颜色值。 |
| 不支持CSS样式和动画 | 当SVG作为图像（例如，使用`<img>`标签或CSS背景图像）嵌入时，内部的CSS样式和动画可能不会被保留。这意味着你不能依赖CSS来调整颜色。 |

另外，我们也可以通过在SVG内部设置`fill="currentColor"`或`stroke="currentColor"`，然后通过在CSS中设定SVG或其父元素的`stroke`、`fill`的颜色来调整SVG图标的颜色。

```css
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM7.29289 11.2929L11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071C16.3166 13.0976 15.6834 13.0976 15.2929 12.7071L13 10.4142V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V10.4142L8.70711 12.7071C8.31658 13.0976 7.68342 13.0976 7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929Z"/> // [!code focus]
</svg>
```

::: info **currentColor**使用提醒
当SVG是以`img`的格式加载时，SVG被当作图片，`currentColor`调整不生效。将SVG直接粘贴在Html中，这样就会生效了。但。。代码看起来又不整洁了。。
:::


::: details 研究色彩时发现的SVG规律：`width`、`height`和`viewBox`关系

大家通过上面两个测试SVG代码可以发现，我定义的SVG宽度、高度是48px，viewBox设定的宽度、高度是24px，但是SVG图标是以48px大小显示的，我测试了Chrome、Safari浏览器，都显示正常。

据此我们可以了解到：

> `viewBox`属性是用来定义SVG的长宽比和坐标系的，而不是它的实际尺寸。SVG的实际大小是由SVG元素本身的宽度和高度属性决定的。如果SVG的内容大于`viewBox`，而SVG元素的宽度和高度没有明确定义（或者被设置为大于`viewBox`的值），那么SVG将不会被限制在`viewBox`的尺寸内，而是会膨胀以填充可用的空间。

![测试方案1-3](/img/web/svg-icon-3.svg)
怎么去理解这句话呢：假设我定义`viewBox`宽高为48px。但SVG宽高设定为24px。因此，SVG 内容（在 48x48 坐标系内定义）正在按比例缩小以适应 24x24 的图标。

不同比例尺条件下显示的地理位置大小总是不一样的。上面示例的图标，看起来就像是12px。

![测试方案1-4](/img/web/svg-icon-4.svg)
而这个图标我定义了SVG宽高为48px，`viewBox`宽高为24px。设定的SVG本身宽高大于设定的`viewBox`宽高，那么SVG图标就按照48px显示，不受限于`viewBox`。

:::

### 2. 使用Mask调整色彩

<div class="test2-1"></div>

<style>
    .test2-1{
        background-color: green;
        -webkit-mask-image: url(/img/web/svg-icon-5.svg);
        -webkit-mask-repeat: no-repeat;
        mask-image: url(/img/web/svg-icon-5.svg);
        mask-repeat: no-repeat;

        margin-top: 16px;
        width: 48px;
        height: 48px;
    }
</style>

在SVG图形中，我们可以通过使用`mask-image`属性来改变图标的颜色。这种方法的优点是，我们可以使用任何CSS颜色或背景图像作为SVG图标的颜色。

```html
<div class="test2-1"></div>

<style>
    .test2-1{
        -webkit-mask-image: url(/img/web/svg-icon-5.svg); // [!code focus]
        -webkit-mask-repeat: no-repeat; // [!code focus]
        mask-image: url(/img/web/svg-icon-5.svg); // [!code focus]
        mask-repeat: no-repeat; // [!code focus]

        background-color: green; // [!code focus]

        margin-top: 16px;
        width: 48px;
        height: 48px;
    }
</style>
```
[mask-image支持&兼容性查询](https://caniuse.com/?search=mask-image)
| 注意点 | 描述 |
| --- | --- |
| 性能问题 | 使用mask-image可能会增加浏览器的渲染负担，尤其是在处理大型SVG图像或复杂的mask图像时。 |
| 灵活性问题 | mask-image方案可能无法实现一些更复杂的颜色调整效果，比如渐变色、模式填充等。 |
| 使用复杂性 | 相比于直接在SVG文件中调整颜色，使用mask-image方案需要更多的CSS知识和技巧。 |

### 3. 使用filter过滤调整色彩

<img src="/img/web/svg-icon-6.svg" class="test3-1">
<img src="/img/web/svg-icon-7.svg" class="test3-2">

<style>
    .test3-1{
        margin-top: 16px;
    }
    .test3-2{
        filter: brightness(0) saturate(100%) invert(71%) sepia(71%) saturate(6130%) hue-rotate(182deg) brightness(101%) contrast(96%);
        -webkit-filter: brightness(0) saturate(100%) invert(71%) sepia(71%) saturate(6130%) hue-rotate(182deg) brightness(101%) contrast(96%);
    }
</style>

我们可以在[isotopic](https://isotropic.co/tool/hex-color-to-css-filter/)将HEX转化为filter过滤色值。

需要注意的是，如果图像本身不是黑色，需要将`brightness(0)`、`saturate(100%)`加入到过滤器的开头。这样SVG图标的色彩都是从黑色这个基准值来调整的。调整出来的颜色相对准确，还有点抽盲盒的感觉。

```html
<img src="/img/web/svg-icon-6.svg" class="test3-1">
<img src="/img/web/svg-icon-7.svg" class="test3-2">

<style>
    .test3-2{
        filter: brightness(0) saturate(100%) invert(71%) sepia(71%) saturate(6130%) hue-rotate(182deg) brightness(101%) contrast(96%); // [!code focus]
        -webkit-filter: brightness(0) saturate(100%) invert(71%) sepia(71%) saturate(6130%) hue-rotate(182deg) brightness(101%) contrast(96%); // [!code focus]
    }
</style>
```

[filter支持&兼容性查询](https://caniuse.com/?search=filter)

| 注意点 | 详细描述 |
| --- | --- |
| 视觉问题 | 使用filter会对色彩还原度产生影响，看上面的例子就知道，虽然是设定的相同色彩，但依旧有些许差别。 |
| 性能问题 | 使用filter可能会对性能产生影响，特别是当使用一些复杂的filter（如模糊或颜色转换）时，可能会导致页面加载速度变慢，影响用户体验。 |
| 可访问性问题 | filter可能会影响到网站的可访问性。例如，如果你使用filter改变了文本的颜色，可能会导致颜色对比度不足，使得一些用户难以阅读文本。 |
| 控制限制 | filter提供的控制可能不如直接在图像编辑软件中编辑图像那么精细。例如，你可能无法精确地控制模糊效果的程度或颜色转换的精确颜色。 |

### 4. 使用filter:drop-shadow、transform调整色彩

<div class="test-4-box">
<img src="/img/web/svg-icon-7.svg" class="test4-1">
</div>

<style>
    .test-4-box{
        margin-top: 16px;
        width: 48px;
        height:48px;
        overflow: hidden;
    }

    .test4-1{
        filter: drop-shadow(green 48px 0);
        transform: translateX(-48px);
    }
</style>

设定`drop-shadow`的颜色与位置坐标，生成一个投影。然后通过`transform`将原始SVG图标移出视线外。这也算是比较聪明巧妙的方案。

```html
<div class="test-4-box">
<img src="/img/web/svg-icon-7.svg" class="test4-1">
</div>

<style>
    .test-4-box{ // [!code focus]
        margin-top: 16px;
        width: 48px;
        height:48px;
        overflow: hidden; // [!code focus]
    } // [!code focus]

    .test4-1{ // [!code focus]
        filter: drop-shadow(green 48px 0); // [!code focus]
        transform: translateX(-48px); // [!code focus]
    } // [!code focus]
</style>
```

- [drop-shadow支持&兼容性查询](https://caniuse.com/?search=drop-shadow)
- [transform支持&兼容性查询](https://caniuse.com/?search=transform)

| 注意点 | 详细描述 |
| --- | --- |
| 位置移动 | 这种方法实际上是在原始图标上添加了一层颜色，而不是真正地改变了图标的颜色。这可能会导致一些不期望的问题。例如：看得见摸不着，图标只有眼睛看起来在那个位置。 |
| 代码复杂性 | 使用`drop-shadow`和`transform`需要编写更多的CSS代码，这可能会增加代码的复杂性和维护难度。 |
| 性能问题 | 使用`drop-shadow`和`transform`可能会导致性能问题，特别是在处理大量的SVG图标时。这是因为这两个属性都需要浏览器进行复杂的计算和渲染。 |
| 兼容性问题 | 不是所有的浏览器都支持CSS的`drop-shadow`和`transform`属性，特别是一些旧的或者非主流的浏览器。 |

### 5. SVG Sprite

<svg style="height:0; width:0; display:none; viewBox=0 0 0 0;" xmlns="http://www.w3.org/2000/svg">

<symbol id="icon-1" width="48" height="48" viewBox="0 0 24 24">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM7.29289 11.2929L11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071C16.3166 13.0976 15.6834 13.0976 15.2929 12.7071L13 10.4142V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V10.4142L8.70711 12.7071C8.31658 13.0976 7.68342 13.0976 7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929Z" fill="#169bfa"/>
</symbol>

<symbol id="icon-2" width="48" height="48" viewBox="0 0 24 24">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM7.29289 11.2929L11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071C16.3166 13.0976 15.6834 13.0976 15.2929 12.7071L13 10.4142V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V10.4142L8.70711 12.7071C8.31658 13.0976 7.68342 13.0976 7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929Z" fill="green"/>
</symbol>

</svg>

<svg style="width:48px; height:48px;"><use xlink:href="#icon-1"/></svg>
<svg style="width:48px; height:48px;"><use xlink:href="#icon-2"/></svg>

关于[SVG Sprite](https://juejin.cn/post/6844903501890338829#heading-0)的介绍可以看看这篇。

CSS雪碧图中是把多个背景图片放在一张大的图片中，而SVG雪碧图则是把多个`symbol`放在一个大的SVG中，每个`symbol`代表了一个图标，以后每次想要使用图标，只需要写这么一段代码即可：

```html
<svg>
    <use :xlink:href="#icon-1"></use>
</svg>
```

我们可以通过[svg-sprite-loader](https://github.com/JetBrains/svg-sprite-loader)将所有SVG图标集合在一起。

### 6. SVG 组件

SVG组件就是将`SVG Sprite`封装成方便调用的形式。

[**SVGR**](https://github.com/gregberge/svgr)使用原始SVG并将其转化为**现成的React组件**

[**vue-svg-loader**](https://github.com/damianstasik/vue-svg-loader)使我们在Vue中能以组件形式使用SVG的webpack loader。

具体如何调用，对于刚了解这个内容的我，感觉还有点难。以后会针对「SVG 组件」这个调用SVG的方式再做研究，写一篇文章。

## 写在最后

这篇文章其实是越写是越失落的。从刚开始最初级的，直接在SVG内部进行调整颜色，到最后的封装成组件。由于自己对这方面的不了解，所以大篇幅都在讲一些「奇技淫巧」，算不上正统的解决方案。就跟写论文一样，以为自己的方案很好，资料查着查着，发现别人十年前就已经将这个方案实践了，并写成论文了。这种失落感。。

但另一方面，通过写这篇文章，我也了解到了「SVG 组件」这种相对现代化的处理方式，一下子将自己的认知提升了十年（笑

## 参考文章

- [How can I change the color of an 'svg' element?](https://stackoverflow.com/questions/22252472/how-can-i-change-the-color-of-an-svg-element)
- [img 使用 svg 后如何改变颜色](https://zongzi531.com/2020/12/16/img%E6%A0%87%E7%AD%BE%E4%BD%BF%E7%94%A8svg%E5%90%8E%E5%A6%82%E4%BD%95%E6%94%B9%E5%8F%98%E9%A2%9C%E8%89%B2/)
- [一组独特而强大的工具：SVG 过滤器](https://morioh.com/p/91ef7c31fded)
- [未来必热：SVG Sprites技术介绍](https://www.zhangxinxu.com/wordpress/2014/07/introduce-svg-sprite-technology/)
- [SVG进阶-sprite 雪碧图](https://blog.csdn.net/baidu_38242832/article/details/115220009)
- [SVG Sprite 使用简介](https://juejin.cn/post/6844903501890338829)