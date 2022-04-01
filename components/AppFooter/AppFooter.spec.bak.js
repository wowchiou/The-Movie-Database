import { mount } from '@vue/test-utils'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createVuexStore } from '@/store'
import { routes } from '@/router'
import AppFooter from './AppFooter.vue'

let wrapper
let store
let router

describe('AppFooter', () => {
  beforeEach(() => {
    store = createVuexStore()
    router = createRouter({
      history: createWebHashHistory(process.env.BASE_URL),
      routes,
    })
    wrapper = mount(AppFooter, {
      global: { plugins: [store, router] },
    })
  })

  it('AppFooter is exist', () => {
    expect(true).toBe(true)
  })
})
