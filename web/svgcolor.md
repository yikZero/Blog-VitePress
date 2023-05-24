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

**非渐变svg图标与色彩相关的属性：**

| 键名            | 功能说明                                            | 默认值 | 可用值/要求                                                 | 举例                       |
|-----------------|-----------------------------------------------------|-------|----------------------------------------------------------|----------------------------|
| fill            | 定义形状内部的填充颜色                              | 无    | 十六进制颜色，RGB颜色，RGBA颜色，颜色名称，无颜色          | fill="#4186E7"            |
| stroke          | 定义形状边框的颜色                                  | 无    | 十六进制颜色，RGB颜色，RGBA颜色，颜色名称，无颜色          | stroke="purple"           |
| fill-opacity    | 定义形状内部填充颜色的透明度                        | 无    | 0到1之间的透明度值                                        | fill-opacity="0.8"        |
| stroke-opacity  | 定义形状边框颜色的透明度                            | 无    | 0到1之间的透明度值                                        | stroke-opacity="0.5"      |

**渐变svg图标与色彩相关的属性：**
```html
<defs>
<linearGradient id="paint0_linear_1403_58" x1="2" y1="2" x2="22" y2="2" gradientUnits="userSpaceOnUse">
<stop stop-color="#7F56D9"/>
<stop offset="1" stop-color="#9E77ED"/>
</linearGradient>
</defs>
```

| 键名            | 功能说明                                                    | 默认值          | 可用值/要求                                        | 举例                      |
|:---:|:----------:|:---:|:---:|:---:|
| defs            | 包含渐变色彩的定义                                          | 无             | 无                                                | <defs>...</defs>          |
| linearGradient  | 创建线性渐变                                                | 无             | 无                                                | <linearGradient>...</linearGradient> |
| x1              | 线性渐变的起点x坐标                                         | 无             | 数值或百分比                                       | x1="2"                    |
| y1              | 线性渐变的起点y坐标                                         | 无             | 数值或百分比                                       | y1="2"                    |
| x2              | 线性渐变的终点x坐标                                         | 无             | 数值或百分比                                       | x2="22"                   |
| y2              | 线性渐变的终点y坐标                                         | 无             | 数值或百分比                                       | y2="2"                    |
| gradientUnits   | 渐变的坐标系类型                                            | objectBoundingBox | objectBoundingBox, userSpaceOnUse       | gradientUnits="userSpaceOnUse" |
| stroke          | 将属性绑定到具有特定id的元素                                | 无             | url(#id)                                          | stroke="url(#id)"         |
| stop            | 创建渐变的停止点                                            | 无             | 无                                                | <stop .../>               |
| stop-color      | 停止点的颜色值                                              | 无             | 颜色值（例如 #7F56D9）                              | stop-color="#7F56D9"      |
| offset          | 停止点在渐变中的相对位置，范围为0到1                        | 0              | 0到1的数值或百分比                                 | offset="1"                |

如果我们需要调整图标的色彩，那么我们主要在fill和stroke属性入手。

## 方案测试

