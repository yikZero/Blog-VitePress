# Homeassistant

## 安装

```sh
docker run -d \
  --name homeassistant \
  --privileged \
  --restart=unless-stopped \
  -e TZ=Asia/Shanghai \
  -v /homeassistant:/config \
  --network=host \
  ghcr.io/home-assistant/home-assistant:stable
```

### 插件安装

[hass-xiaomi-miot](https://github.com/al-one/hass-xiaomi-miot) 下载并将`custom_components/xiaomi_miot`文件夹复制到**HomeAssistant**配置文件夹中的`custom_components`文件夹中

## Q\&A

::: details HomeAssistant和hass-xiaomi-miot安装都很顺利，但是在扫码添加到家庭应用时一直转圈，或偶尔添加成功后，经常会无响应？

在Homeassistant的配置-系统-网络中，将网络适配器的自动选择改为手动选择`br-lan`这个适配器，让Homeassistant始终保持在与家庭网络同一网段。如果是WiFi路由器，要开启WiFi5兼容模式。

![](/img/RoShot\_2023-04-29\_at\_16.42.52@2x.png)

:::
