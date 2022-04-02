import { mount } from '@vue/test-utils'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createVuexStore } from '@/store'
import { routes } from '@/router'
import AppIcon from './AppIcon.vue'

let wrapper
let store
let router

describe('AppIcon', () => {
  beforeEach(() => {
    store = createVuexStore()
    router = createRouter({
      history: createWebHashHistory(process.env.BASE_URL),
      routes,
    })
    wrapper = mount(AppIcon, {
      global: { plugins: [store, router] },
    })
  })

  it('AppIcon is exist', () => {
    expect(true).toBe(true)
  })
})
