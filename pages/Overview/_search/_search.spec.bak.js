import { mount } from '@vue/test-utils'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createVuexStore } from '@/store'
import { routes } from '@/router'
import _search from './_search.vue'

let wrapper
let store
let router

describe('_search', () => {
  beforeEach(() => {
    store = createVuexStore()
    router = createRouter({
      history: createWebHashHistory(process.env.BASE_URL),
      routes,
    })
    wrapper = mount(_search, {
      global: { plugins: [store, router] },
    })
  })

  it('_search is exist', () => {
    expect(true).toBe(true)
  })
})
