# Midjourney生成头像尝试

## 图像关键词了解

Midjourney会有一个社区：[Midjourney Community Showcase](https://www.midjourney.com/showcase/recent/)，用来分享用户用各种关键词组合生成的图像，我们就从这里入手，找几个自己喜欢的图像风格，同时带着以下几个疑问：

* 「风格」的关键词是如何描述
* 「男女」的关键词是如何描述
* 能否根据自己上传的照片人物来进行创作

### 图像关键词分析

![beautiful painting of Audrey Hepburn in a futuristic space station preparing for battle](/img/beautiful\_painting\_of\_Audrey\_Hepburn\_in\_a\_futuristic\_space\_station\_pre.webp)

1. 是谁：**Audrey Hepburn**
2. 在哪里：**futuristic space station**
3. 在做什么：**preparing for battle**
4. 什么风格：**beautiful painting**

![a young baby sitting on grass field, mountains with snowy ice caps in the background, a angry mountain goat in the background, style final fantasy tactics, studio ghibli](/img/a\_young\_baby\_sitting\_on\_grass\_field\_mountains\_with\_snowy\_ice\_caps\_in.webp)

1. 是谁：**a young baby,a angry mountain goat**
2. 在哪里：**grass field,mountains with snowy ice caps in the background**
3. 在做什么：**sitting**
4. 什么风格：**final fantasy tactics,studio ghibli**

![photo of (modern geisha wearing headphones) cinematic lighting, masterful rim lighting, trending on Instagram, torso shot, shot by senseijaye](/img/photo\_of\_modern\_geisha\_wearing\_headphones\_cinematic\_lighting\_masterfu.webp)

1. 是谁：**modern geisha**
2. 在做什么：**wearing headphones**
3. 什么风格：**trending on Instagram,shot by senseijaye**
4. 景别：**torso shot**
5. 细节描述：**cinematic lighting, masterful rim lighting**

![gesture painting, guache on paper, female martial artist with bo staff, dynamic pose, professionally painted, in the style of Yoji Shinkawa](/img/gesture\_painting\_guache\_on\_paper\_female\_martial\_artist\_with\_bo\_staff.webp)

1. 是谁：**female martial artist**
2. 在做什么：**with bo staff, dynamic pose**
3. 什么风格：**gesture painting, guache on paper, professionally painted, in the style of Yoji Shinkawa**

#### 关键词总结

描述文字可以整句话，也可以使用英文逗号来进行分词。

描述内容大体上可以包含这几方面：

* \*\*主体是谁：\*\*可以是具体的人物名称，也可以是一个职业类别，可以带上性别描述
* \*\*主体在做什么：\*\*准备战斗、系鞋带、带着耳机、拿着棍子···
* \*\*主体在什么环境中：\*\*空间站、背后有一座雪山的草地上···
* \*\*图像的景别：\*\*人物的特写、近景、中景（Half body shot）、远景、全景···
* \*\*图像的风格：\*\*一种绘画派系、一位艺术家····
* 每一部分都可以增加细节描述，你在什么样子的草地上，背后的山具体形象，具体的光照、高分辨率、8K画质···

[官方文本描述小帖士](https://midjourney.gitbook.io/docs/resource-links/guide-to-prompting)

## imagine命令参数了解

参数是控制更改图像生成方式的命令选项

💡 所有的参数应该总是加在你的命令的最后。如果不这样做，可能会使你的工作部分或完全无法使用。

```sh
–-no //负面加权（–no plants 会尝试移除植物）
–-ar //图像宽高比（–-ar 16:9 会尝试生成横向尺寸的图像）
--hd //使用不同的算法，该算法可能更适合较大的图像，但构图的一致性较差，适合抽象和风景提示
--v //使用的Midjourney版本（--v 4 使用第四版mj）
--upbeta //使用Beta向上扩展的算法
--seed //通过envelope可以获取到图片的seed，然后可以根据seed来生成相似的画面
--sameseed //生成几张图差别不大
--iw //可以设置图片在prompt中的权重，默认权重为0.25，在V4版本中不可使用
--stylize //个性化,默认2500. 1000的话，就会忠于你输入的关键词
:: //可以用来增加相对应的关键词权重
```

参考图可上传至[Discord](https://discord.com/)，然后复制链接，直接将链接作为关键词贴在命令中。[来源](http://www.sucaijishi.com/articles-51-438-1.html)

## 构想自己图像的关键词

### 需求清单

* 一男一女情侣头像
* 个性、酷、潇洒
* 色彩艳丽
* 跟上传的人像相似
* 是否带场景均可

#### 关键词构建

对照所需内容罗列

* 主体是谁：**女、设计师**
* 主体在做什么：**带着眼镜、嘟着小嘴**
* 图像的景别：**近景**
* 图像的风格：**吉卜力工作室**
* 细节描述：**有一只可爱的小兔在人物的背后**

```sh
/imagine prompt: A female designer wearing glasses is beaming, a cute rabbit in the background, Personality, Close-up view, Studio Ghibli --ar 1:1 --v 4 --upbeta

8K detailed, very high res, HDR //可以补充一些增加清晰度的关键词
```

![选择第三张图V3（左下角）创建变体产生四个新的图像](</img/CleanShot\_2023-01-13\_at\_20.40.112x (1).png>) ![第四张的兔子更加的可爱，选择U4来进行像素的提升](/img/CleanShot\_2023-01-13\_at\_20.42.242x.png) ![最终生成结果](/img/CleanShot\_2023-01-13\_at\_20.46.462x.png)

## 最终结果展示

![](/img/Untitled.png)

最终的出图满足了要求，而且效果还不错。由于是实验，暂时也没加入参考照片，晚些时候试一试加入参考照片会不会跟本人更加像一点～

* MJ已经到V4版本了，出图效果已经比以前好很多了！
* 虽然图像是MJ生成的，但是如果你脑子里都不知道自己想要什么样的绘画风格，那是真的是啥都没办法喽。

## 小工具推荐

[img2prompt - reverse an image（图像转关键词）](https://replicate.com/methexis-inc/img2prompt)

[GPFGAN - to fix faces（可用来修复AI生成的人脸）](https://replicate.com/tencentarc/gfpgan)

[MidJourney Prompt Helper（辅助进行关键词筛选）](https://prompt.noonshot.com/)

## 参考资料

[【Youtube】Turn any idea into an image in seconds with Midjourney AI!](https://www.youtube.com/watch?v=znzt\_3fZdYg)

[Midjourney Documentation - Quick Start Guide](https://midjourney.gitbook.io/docs/)

[Midjourney Documentation - User Manual](https://midjourney.gitbook.io/docs/user-manual)

[Midjourney Showcase](https://midjourney.com/showcase/recent/)

[Midjourney入門示範影片](https://www.youtube.com/watch?v=jrkpMJ323Yo)

[MidJourney 資源懶人包](https://sites.google.com/view/midjourney-resource-tips/%E9%A6%96%E9%A0%81)
