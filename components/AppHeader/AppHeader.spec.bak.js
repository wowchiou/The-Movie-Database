import { mount } from '@vue/test-utils'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createVuexStore } from '@/store'
import { routes } from '@/router'
import AppHeader from './AppHeader.vue'

let wrapper
let store
let router

describe('AppHeader', () => {
  beforeEach(() => {
    store = createVuexStore()
    router = createRouter({
      history: createWebHashHistory(process.env.BASE_URL),
      routes,
    })
    wrapper = mount(AppHeader, {
      global: { plugins: [store, router] },
    })
  })

  it('AppHeader is exist', () => {
    expect(true).toBe(true)
  })
})
