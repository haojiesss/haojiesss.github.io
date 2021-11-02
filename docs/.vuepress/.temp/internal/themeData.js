export const themeData = {
  "sidebar": "auto",
  "sidebarDepth": 2,
  "navbar": [
    {
      "text": "前端核心",
      "children": [
        {
          "text": "ES6",
          "link": "/es6/"
        },
        {
          "text": "TS",
          "link": "/ts/"
        }
      ]
    },
    {
      "text": "框架",
      "children": [
        {
          "text": "Vue",
          "children": [
            {
              "text": "Vue2.xx",
              "link": "vue2"
            },
            {
              "text": "Vue3.xx",
              "link": "vue3"
            }
          ]
        },
        {
          "text": "React",
          "link": "react"
        }
      ]
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "logo": null,
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
