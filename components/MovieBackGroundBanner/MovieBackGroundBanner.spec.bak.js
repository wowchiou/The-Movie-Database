import { mount } from '@vue/test-utils'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createVuexStore } from '@/store'
import { routes } from '@/router'
import MovieBackGroundBanner from './MovieBackGroundBanner.vue'

let wrapper
let store
let router

describe('MovieBackGroundBanner', () => {
  beforeEach(() => {
    store = createVuexStore()
    router = createRouter({
      history: createWebHashHistory(process.env.BASE_URL),
      routes,
    })
    wrapper = mount(MovieBackGroundBanner, {
      global: { plugins: [store, router] },
    })
  })

  it('MovieBackGroundBanner is exist', () => {
    expect(true).toBe(true)
  })
})
