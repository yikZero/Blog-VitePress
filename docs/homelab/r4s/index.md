# 设备信息

## 配置介绍

* 型号：FriendlyElec NanoPi R4S
* 架构：ARMv8 Processor x 6
* 内存：4G
* 固件：[immortalwrt](https://github.com/immortalwrt/immortalwrt)

于BigDongDong处购入

## 固件体验

以下体验仅个人感受，主观性极强！按时间顺序排列

### 骷髅头NanoPi-R4S

固件地址：[NanoPi-R4S-R4SE](https://github.com/DHDAXCW/NanoPi-R4S-R4SE/releases/latest)

刚买来的时候，固件自带的是iStore，本着「自带的就不用原则」，找到了网上较为热门的「骷髅头」R4S固件

优点：
- 软件比较全，基本比较热门的软件都有
- 更新频率也相对较高
- 多版本，适合需求不同的用户
- 开箱即用，不用复杂配置，即可顺畅使用

缺点：
- 稍微有些臃肿，我想用docker版，但又想使用所有软件（自己的问题）
- 最近几个版本（四月、五月），一两天就死机，死机也不重启，找不到问题所在

### immortalwrt

固件地址：[ImmortalWrt 固件选择器](https://firmware-selector.immortalwrt.org/)

由于近期我刷「骷髅头」固件老是死机。一死机，就无法登陆后台，也没办法看到日志，没办法排查问题。所以尝试换一个固件



## 相关链接

### 固件

* [immortalwrt](https://github.com/immortalwrt/immortalwrt)
* [iStoreOS](https://fw.koolcenter.com/iStoreOS/r4s/)
  * [相关文档](https://doc.linkease.com/zh/guide/istoreos/)
* [骷髅头](https://github.com/DHDAXCW/NanoPi-R4S-R4SE)
* [BigDongDong固件大全](http://www.jldup.com:5244/)

### 写卡工具

* [balenaEtcher(支持Mac、Windows)](https://github.com/balena-io/etcher)
* [rufus(支持Windows)](https://rufus.ie/)

::: info 多次写入系统或出现异常情况时
可尝试先格式化内存卡，清卡工具：[SD Memory Card Formatter](https://www.sdcard.org/downloads/formatter/)
:::

### 其他

* [Zero-R4S](https://github.com/yikZero/Zero-R4S)