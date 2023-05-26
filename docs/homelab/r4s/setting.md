# 基础设置

### 解决重启后自动调整「忽略解析文件」
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