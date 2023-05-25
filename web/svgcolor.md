# SVG图标色彩调整的策略

## 基础了解

![研究图标展示](/img/试验图标.png)

分析这几个图标的svg代码：

```html
<path d="M16 12L12 8M12 8L8 12M12 8V16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#4186E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> #Line

<path d="M16 12L12 8M12 8L8 12M12 8V16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="url(#paint0_linear_1403_58)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_1403_58" x1="2" y1="2" x2="22" y2="2" gradientUnits="userSpaceOnUse">
<stop stop-color="#7F56D9"/>
<stop offset="1" stop-color="#9E77ED"/>
</linearGradient>
</defs> #Line gradient

<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM7.29289 11.2929L11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071C16.3166 13.0976 15.6834 13.0976 15.2929 12.7071L13 10.4142V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V10.4142L8.70711 12.7071C8.31658 13.0976 7.68342 13.0976 7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929Z" fill="#4186E7"/> #Flatten

<path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4186E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 12L12 8M12 8L8 12M12 8V16" stroke="#4186E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> #Duocolor

<path opacity="0.12" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#4186E7"/>
<path d="M16 12L12 8M12 8L8 12M12 8V16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#4186E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> #Duotone
```

```html
<defs>
<linearGradient id="paint0_linear_1403_58" x1="2" y1="2" x2="22" y2="2" gradientUnits="userSpaceOnUse">
<stop stop-color="#7F56D9"/>
<stop offset="1" stop-color="#9E77ED"/>
</linearGradient>
</defs>
```
::: info W3C的svg属性索引
[https://www.w3.org/TR/SVG/propidx.html](https://www.w3.org/TR/SVG/propidx.html)
:::

- 纯色图标中，与色彩相关的是`fill`和`stroke`
- 渐变图标中，增加了`gradientUnits`渐变方式和`stop-color`渐变停止处使用的颜色
- 通过配合`xy`位置、`opacity`透明度属性来实现基本的色彩变化

那么我们直接通过`img`引入`svg`，调整`img`的色彩属性是否能够解决这个问题

## 方案测试

### 基础方案

![直接在css中调整属性值](/img/svg-img-1.png)

如图所示，我们通过css只能调整svg的背景颜色，并不能通过设置`stroke`、`fill`和`color`来对svg图标的色彩产生影响。
