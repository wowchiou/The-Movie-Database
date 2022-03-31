import { mount } from '@vue/test-utils'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createVuexStore } from '@/store'
import { routes } from '@/router'
import Search from './Search.vue'

let wrapper
let store
let router

describe('Search', () => {
  beforeEach(() => {
    store = createVuexStore()
    router = createRouter({
      history: createWebHashHistory(process.env.BASE_URL),
      routes,
    })
    wrapper = mount(Search, {
      global: { plugins: [store, router] },
    })
  })

  it('Search is exist', () => {
    expect(true).toBe(true)
  })
})
