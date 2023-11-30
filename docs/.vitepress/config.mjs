import { defineConfig } from 'vitepress'
import { setSidebar } from './utils/autoSidebar.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blog/",
  title: "FEI自由",
  description: "FEI自由",
  ignoreDeadLinks: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: 'https://cdn.bili33.top/gh/sosfei/figurebed/PicGo/emoji_emoticon.png' }]
  ],
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
    theme: "one-dark-pro",
    lineNumbers: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebarDepth: 1,
    siteTitle: 'FEI自由',
    logo: 'https://cdn.bili33.top/gh/sosfei/figurebed/PicGo/emoji_emoticon.png',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/posts/' },
      { text: '项目', link: '/projects/' },
      { text: '热榜', link: '/hot' }
    ],

    sidebar: {
      '/posts/': setSidebar('/posts'),
      '/projects/': setSidebar('/projects')
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sosfei' }
    ]
  }
})
