import { defineConfig } from 'vitepress'
import algolia from './algolia'
import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  locales: {
    root: { label: '简体中文', lang: 'zh-CN' },
  },
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
      { text: 'AI', link: '/ai/' },
      { text: '畅谈', link: '/journal/' },
    ],
    
    editLink: {
      pattern: 'https://github.com/yikZero/Blog-VitePress/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yikZero' },
    ],

    footer: {
      message: 'Build with <a href="https://vitepress.dev/">VitePress</a>',
      copyright: 'Copyright © 2022-2023 yikZero'
    },

    head: [
      { name: 'link', attrs: { rel: 'shortcut icon', href: '/favicon.ico' }},
    ],
    algolia,
    sidebar,

  }
})
