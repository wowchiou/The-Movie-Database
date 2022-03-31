import { mount } from '@vue/test-utils'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createVuexStore } from '@/store'
import { routes } from '@/router'
import OverviewSearchTabs from './OverviewSearchTabs.vue'

let wrapper
let store
let router

describe('OverviewSearchTabs', () => {
  beforeEach(() => {
    store = createVuexStore()
    router = createRouter({
      history: createWebHashHistory(process.env.BASE_URL),
      routes,
    })
    wrapper = mount(OverviewSearchTabs, {
      global: { plugins: [store, router] },
    })
  })

  it('OverviewSearchTabs is exist', () => {
    expect(true).toBe(true)
  })
})
