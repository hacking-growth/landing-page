import Vue from 'vue'
import NuxtContent from './nuxt-content.dev'

Vue.component(NuxtContent.name, NuxtContent)

export default (ctx, inject) => {
  const $content = ctx.ssrContext.$content

  inject('content', $content)
  ctx.$content = $content
}
