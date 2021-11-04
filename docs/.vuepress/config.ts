import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'en-US',
    title: 'Hi VuePress',
    description: '这是啥',
    themeConfig: {
        sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 2, // 侧边栏显示2级
        navbar: [
            {
                text: '前端核心',
                children: [
                    {
                        text: 'ES6',
                        link: '/es6/',
                    },
                    {
                        text: 'TS',
                        link: '/ts/',
                    },
                ]
            },
            {
                text: '框架',
                children: [
                    {
                        text: 'Vue',
                        link: '/vue/'
                    },
                    {
                        text: 'React',
                        link: '/react/'
                    }
                ]
            }
        ]
    }
})