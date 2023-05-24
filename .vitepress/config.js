import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Roominess",
  description: "记录我所学到的",
  lastUpdated: true,
  markdown: {
    theme: 'one-dark-pro',
  },
  themeConfig: {
    logo: '/logo.svg',
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    search: {
      provider: 'local'
    },
    returnToTopLabel: '返回顶部',
    outlineTitle: '导航栏',
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '目录',
    lastUpdatedText: '最后一次更新于',
    nav: [
      { text: '设计&前端', link: '/web/'},
      { text: 'HomeLab',
        items: [
            { text: 'R4S', link: '/homelab/r4s/' },
            { text: 'Linksys', link: '/homelab/linksys/' }
        ] },
      { text: 'AI', link: '/ai/' }
    ],

    sidebar: {
      '/web/': [
        {
          text: '设计',
          // collapsed: false,
          items: []
        },
        {
          text: '前端',
          items: [
            {
              text: '图标',
              items: [
                { text: 'SVG图标色彩调整的策略', link: '/web/svgcolor' }
              ]
            }
          ]
        }
      ],
      '/homelab/r4s/': [
        {
          text: 'R4S',
          items: [
            { text: '设备信息', link: '/homelab/r4s/' },
            { text: '基础设置', link: '/homelab/r4s/setting' },
            { text: '光猫桥接', link: '/homelab/r4s/bridge' },
            { 
              text: 'Docker',
              items: [
                { text: '概述', link: '/homelab/r4s/docker/' },
                { text: 'Homeassistant', link: '/homelab/r4s/docker/homeassistant' },
                { text: 'plex', link: '/homelab/r4s/docker/plex' }
              ],
            },
            { 
              text: 'ipk',
              items: [
                { text: '概述', link: '/homelab/r4s/ipk/' },
                { text: 'SmartDNS', link: '/homelab/r4s/ipk/smartdns' },
                { text: 'Lighttpd', link: '/homelab/r4s/ipk/lighttpd' },
                { text: 'tailscale', link: '/homelab/r4s/ipk/tailscale' }
              ],
            }
          ]
        }
      ],
      '/homelab/linksys/': [
        {
          text: 'Linksys',
          // collapsed: false,
          items: [
            { text: '概述', link: '/homelab/linksys/' },
            { text: 'Linksys桥接模式', link: '/homelab/linksys/linksys-1' },
          ]
        }
      ],
      '/ai/': [
        {
          text: 'ChatGPT',
          collapsed: false,
          items: [
            { text: '注册使用注意事项', link: '/ai/chatgpt-1' },
            { text: 'ChatGPT课程学习笔记', link: '/ai/chatgpt-2' }
          ]
        },
        {
          text: 'Midjourney',
          collapsed: false,
          items: [
            { text: 'Midjourney生成头像尝试', link: '/ai/midjourney-1' }
          ]
        }
      ]
    },
    
    editLink: {
      pattern: 'https://github.com/yikZero/Blog-VitePress/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yikZero' },
    ],

    footer: {
      message: 'Build with VitePress',
      copyright: 'Copyright © 2022-2023 yikZero'
    },

    head: [
      { name: 'link', attrs: { rel: 'shortcut icon', href: '/favicon.ico' }},
    ]    

  }
})
