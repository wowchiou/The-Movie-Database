import { mount } from '@vue/test-utils'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createVuexStore } from '@/store'
import { routes } from '@/router'
import SearchBar from './SearchBar.vue'

let wrapper
let store
let router

describe('SearchBar', () => {
  beforeEach(() => {
    store = createVuexStore()
    router = createRouter({
      history: createWebHashHistory(process.env.BASE_URL),
      routes,
    })
    wrapper = mount(SearchBar, {
      global: { plugins: [store, router] },
    })
  })

  it('SearchBar is exist', () => {
    expect(true).toBe(true)
  })
})
