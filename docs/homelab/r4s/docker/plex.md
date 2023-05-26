# Plex

## 踩坑记录

### 架构问题

现有大部分教导docker搭建plex的都是基x86架构的，如果你根据[plexinc/pms-docker](https://hub.docker.com/r/plexinc/pms-docker/)的docker镜像搭建的话，会在docker容器日志中报错：`stderr: exec /init: exec format error`

这就是因为你安装的也是跟你系统架构不相同的docker容器。

所以寻找到[linuxserver/plex](https://hub.docker.com/r/linuxserver/plex)的ARM架构的PLEX开始安装：

```sh
docker run \
-d \
--name plex \
-p 32400:32400/tcp \
-p 3005:3005/tcp \
-p 8324:8324/tcp \
-p 32469:32469/tcp \
-p 1901:1900/udp \
-p 32410:32410/udp \
-p 32412:32412/udp \
-p 32413:32413/udp \
-p 32414:32414/udp \
-e TZ=Asia/Shanghai \
-e PLEX_CLAIM=claim-xfczZtmEH5QPvZQc1HsF \
-e ADVERTISE_IP="http://192.168.31.1:32400/" \
-h Zero-R4s \
-v /myplex/plex/database:/config \
-v /myplex/transcode/temp:/transcode \
-v /mnt/sda/Media:/data \
--restart unless-stopped \
lscr.io/linuxserver/plex:latest
```

具体操作教程在[linuxserver/plex](https://hub.docker.com/r/linuxserver/plex)也可以找到，根据自己的情况进行调整即可。

### PLEX服务器登陆无初始化页面

这句话的意思是，在初次进入 Plex 应用界面时，可能会由于未开启远程访问而出现“找不到服务器”的问题，此时可以使用以下两种方法来解决：

1. SSH转发端口：需要在本地计算机上打开 PowerShell 工具，然后运行上述命令，将远程服务器的 Plex 端口（默认为 32400）转发到本地计算机的端口（例如 8888）。转发端口成功后，可以在本地计算机的浏览器中访问`localhost:8888/web`来打开 Plex 应用界面。
2. 直接连接：如果远程服务器已经允许了远程访问，可以尝试在浏览器中直接访问远程服务器的 IP 地址和 Plex 端口（例如`http://13.124.4.66:32400/web`）来打开 Plex 应用界面。

#### 解决方法

在 macOS 上，可以使用 Terminal 应用程序来设置 SSH 转发端口，具体步骤如下：

1. 打开 Terminal 应用程序
2. 输入以下命令来连接远程服务器，其中 username 是远程服务器上的用户名，remote\_server\_ip 是远程服务器的 IP 地址：

`ssh -L 8888:localhost:32400 username@remote_server_ip`

这将会在本地计算机的 8888 端口将远程服务器上 Plex 的 32400 端口转发到本地计算机上。

1. 输入远程服务器上的密码并验证。
2. 现在，可以打开本地计算机上的浏览器，然后输入 `http://localhost:8888/web` 来访问远程服务器上的 Plex 界面。

#### 再次报错

```sh
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ED25519 key sent by the remote host is
SHA256:OC9qmnB9nQtFN/OiPH7jGEoKb/zbX4NghGv/glu5dwQ.
Please contact your system administrator.
Add correct host key in /Users/yikzero/.ssh/known_hosts to get rid of this message.
Offending ED25519 key in /Users/yikzero/.ssh/known_hosts:1
Host key for 192.168.31.1 has changed and you have requested strict checking.
Host key verification failed.
```

这个错误提示表明之前连接的远程服务器的密钥发生了变化，可能是服务器进行了系统更新或者管理员更改了服务器的密钥。为了保护信息安全，SSH 客户端会检查远程服务器的密钥并进行验证，如果密钥发生变化，就会出现这个错误提示。

为了解决这个问题，需要更新本地计算机上存储的远程服务器的密钥数据。可以按照以下步骤操作：

1. 打开 Terminal 应用程序
2. 输入以下命令来删除本地计算机上存储的旧密钥数据：

`ssh-keygen -R <remote_server_ip>`

1. 输入以下命令来连接远程服务器：

`ssh username@remote_server_ip`

1. 会提示”Are you sure you want to continue connecting (yes/no)?”，请输入 yes 并按回车键。
2. 输入您在远程服务器上的密码并验证。
3. 现在，您可以重新运行之前的命令来设置 SSH 转发端口。

如此设置便可访问PLEX服务端了！
