import { mount } from '@vue/test-utils'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createVuexStore } from '@/store'
import { routes } from '@/router'
import LocaleSwitcher from './LocaleSwitcher.vue'

let wrapper
let store
let router

describe('LocaleSwitcher', () => {
  beforeEach(() => {
    store = createVuexStore()
    router = createRouter({
      history: createWebHashHistory(process.env.BASE_URL),
      routes,
    })
    wrapper = mount(LocaleSwitcher, {
      global: { plugins: [store, router] },
    })
  })

  it('LocaleSwitcher is exist', () => {
    expect(true).toBe(true)
  })
})
