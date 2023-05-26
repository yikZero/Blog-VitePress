# IPK

IPK文件是OpenWrt系统中用于软件包管理的文件格式。

在OpenWrt系统中，您可以使用opkg软件包管理器来安装IPK文件。以下是安装IPK文件的基本命令：

```sh
opkg install /path/to/your-package.ipk #安装ipk文件
opkg remove package-name #卸载ipk文件
opkg update #升级ipk软件包
opkg upgrade package-name #升级ipk软件包
```