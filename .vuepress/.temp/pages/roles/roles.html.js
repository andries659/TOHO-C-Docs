import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles/roles.html.vue"
const data = JSON.parse("{\"path\":\"/roles/roles.html\",\"title\":\"Roles\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Roles\",\"image\":\"/images/roles.jpg\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"roles/roles.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
