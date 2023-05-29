# 基础设置

## PPPOE拨号

路径：**网络 -> 接口 -> WAN口 -> 编辑 -> 协议：PPPOE**

![R4S-PPPOE设置](/img/homelab/r4s-pppoe.png)

## 路由器后台登录地址调整

路径：**网络 -> 接口 -> LAN口 -> 编辑 -> IPV4地址**

我这边R4S后台IPV4设定为`192.168.31.1`

## 重启后自动复原「忽略解析文件」
注释`etc/init.d/turboacc`中有关`noresolv`的设置：
```sh
change_dns() {
 	uci -q delete dhcp.@dnsmasq[0].server
	uci add_list dhcp.@dnsmasq[0].server="127.0.0.1#5333"
	# uci set dhcp.@dnsmasq[0].noresolv="1"
	uci commit dhcp
}

revert_dns() {
#   uci set dhcp.@dnsmasq[0].noresolv="0"
	uci -q del_list dhcp.@dnsmasq[0].server="127.0.0.1#5333"
	if [ -d "/tmp/resolv.conf.d" ]; then
		uci set dhcp.@dnsmasq[0].resolvfile="/tmp/resolv.conf.d/resolv.conf.auto"
	else
		uci set dhcp.@dnsmasq[0].resolvfile="/tmp/resolv.conf.auto"
	fi
	uci commit dhcp
}
```