import { defineConfig } from 'vitepress'
import algolia from './algolia'
import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    ['meta', { name: 'author', content: 'yikZero' }],
    ['meta', { name: 'keywords', content: '设计, 前端, 视觉设计, UI, 代码开发, HomeLab, 家庭实验室, 个性化定制家居方案, AI, 人工智能, ChatGPT' }],
    ['meta', { name: 'application-name', content: 'Blog｜Roominess' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Blog｜Roominess' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],
    ['meta', { name: 'theme-color', content: '#169bfa' }],

    //favicon
    ['link', { rel: 'mask-icon', href: '/favicon.svg', color: '#169bfa' }],
    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    // og
    ['meta', { property: 'og:title', content: 'Blog｜Roominess' }],
    ['meta', { property: 'og:description', content: '记录我所学到的，包括设计&前端、HomeLab、人工智能等' }],
    ['meta', { property: 'og:image', content: 'https://cdn.yikzero.com/social-card.png' }],
    ['meta', { property: 'og:url', content: 'https://blog.yikzero.com/' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'twitter:image', content: 'https://cdn.yikzero.com/social-card.png' }],
  ],
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
      { text: 'HomeLab', link: '/homelab/web'},
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
    algolia,
    sidebar,

  }
})
