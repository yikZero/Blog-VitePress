export default {
  "/begin/": [
    {
      text: "开始阅读",
      collapsed: false,
      items: [
        { text: "阅读须知", link: "/begin/guide" },
        { text: "关于博主", link: "/begin/myself" },
      ],
    },
  ],
  "/web/": [
    {
      text: "设计",
      collapsed: false,
      items: [
        {
          text: "Figma",
          items: [{ text: "Figma Config 2023", link: "/web/design/FigmaConfig2023" }],
        },
      ],
    },
    {
      text: "前端",
      collapsed: false,
      items: [
        {
          text: "图标",
          items: [{ text: "SVG图标色彩调整的策略", link: "/web/frontEnd/svgcolor" }],
        },
      ],
    },
  ],
  "/homelab/": [
    {
      text: "家庭网络",
      collapsed: false,
      items: [
        { text: "网络概况", link: "/homelab/web" },
        { text: "光猫桥接", link: "/homelab/bridge" },
      ],
    },
    {
      "text": "R4S",
      collapsed: false,
      "items": [
        { "text": "设备信息", "link": "/homelab/r4s/" },
        { "text": "基础设置", "link": "/homelab/r4s/setting" },
        { "text": "Tailscale", "link": "/homelab/r4s/ipk/tailscale" },
        {
          "text": "Docker",
          "items": [
            { "text": "概述", "link": "/homelab/r4s/docker/" },
            {
              "text": "Homeassistant",
              "link": "/homelab/r4s/docker/homeassistant",
            },
            { "text": "plex", "link": "/homelab/r4s/docker/plex" },
          ],
        },
        // {
          // "text": "ipk",
          // "items": [
          //   { "text": "概述", "link": "/homelab/r4s/ipk/" },
          //   { "text": "SmartDNS", "link": "/homelab/r4s/ipk/smartdns" },
            // { "text": "Lighttpd", "link": "/homelab/r4s/ipk/lighttpd" },
          // ],
        // },
      ],
    },
    {
      "text": "Linksys",
      "collapsed": false,
      "items": [
        { "text": "概述", "link": "/homelab/linksys/" },
        { "text": "Linksys桥接模式", "link": "/homelab/linksys/linksys-1" },
      ],
    },
    {
      "text": "Mac mini",
      "collapsed": false,
      "items": [
        { "text": "概述", "link": "/homelab/macmini/" },
      ],
    }
  ],  
  "/ai/": [
    {
      text: "ChatGPT",
      collapsed: false,
      items: [
        { text: "注册使用注意事项", link: "/ai/chatgpt-1" },
        { text: "ChatGPT课程学习笔记", link: "/ai/chatgpt-2" },
      ],
    },
    {
      text: "Midjourney",
      collapsed: false,
      items: [{ text: "Midjourney生成头像尝试", link: "/ai/midjourney-1" }],
    },
  ],
};
