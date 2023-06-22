# Tailscale

如果没有公网IPV4，那就只能寻找其他方式来进行家庭网络的访问。

tailscale就是基于Wireguard的一个联网工具，无需公网地址，通过去中心化，实现各个节点之间点对点的连接。配置简单友好，支持的各类平台和客户端。下面介绍在OpenWrt上的配置过程。

## 安装步骤

### 1、下载解压软件

将Tailscale软件包下载到指定目录。单击[这里](https://github.com/adyanth/openwrt-tailscale-enabler)，找到最新的软件包，下载到本地。然后使用Termius工具将下载的软件上传至OpenWrt的/tmp目录下，也可以找到下载链接，直接使用wget命令下载。

```sh
wget https://github.com/adyanth/openwrt-tailscale-enabler/releases/download/v1.36.1-fb2f6cf-autoupdate/openwrt-tailscale-enabler-v1.36.1-fb2f6cf-autoupdate.tgz #下载安装包
tar x -zvC / -f openwrt-tailscale-enabler-v1.36.1-fb2f6cf-autoupdate.tgz #解压缩软件
```

### 2、安装依赖包

```sh
opkg update
opkg install libustream-openssl ca-bundle kmod-tun
```

### 3、设置开机启动，验证开机启动

```sh
/etc/init.d/tailscale enable
ls /etc/rc.d/S*tailscale*
```

### 4、启动tailscale

```sh
/etc/init.d/tailscale start
```

### 5、获取登录链接，配置路由

```sh
tailscale up
```

复制显示的地址，并在浏览器中打开，使用谷歌或微软帐号登录tailscale的管理主页进行验证。

### 6、开启子网网路由

在OpenWrt上输入以下命令，打开本地子路由。子网地址是OpenWrt的lan网络。

```sh
tailscale up --advertise-routes=192.168.31.0/24 --accept-dns=false
```

现在在OpenWrt上已经可以ping通其他tailscale节点了，但其他节点还无法连接OpenWrt节点，还需要在OpenWrt上添加tailscale接口。

### 7、开启子网网路由

![](/img/RoShot_2023-05-02_at_10.40.52@2x.png)
![](/img/RoShot_2023-05-02_at_10.41.54@2x.png)

在OpenWrt上新建一个接口，协议选静态地址，设备选tailscale0，地址为taliscale管理页面上分配的地址，掩码255.0.0.0。防火墙区域选lan区域。

### 8、添加防火墙规则

将以下内容，加到防火墙的自定义规则当中，并重启防火墙。

```sh
iptables -I FORWARD -i tailscale0 -j ACCEPT
iptables -I FORWARD -o tailscale0 -j ACCEPT
iptables -t nat -I POSTROUTING -o tailscale0 -j MASQUERADE
```

现在各个tailscale节点之间已经可以正常互访了。



本文转载自[鐵血男兒](https://pfschina.org/wp/?p=9151)
