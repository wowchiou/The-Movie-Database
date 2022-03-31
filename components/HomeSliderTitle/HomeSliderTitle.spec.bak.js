import { mount } from '@vue/test-utils'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createVuexStore } from '@/store'
import { routes } from '@/router'
import HomeSliderTitle from './HomeSliderTitle.vue'

let wrapper
let store
let router

describe('HomeSliderTitle', () => {
  beforeEach(() => {
    store = createVuexStore()
    router = createRouter({
      history: createWebHashHistory(process.env.BASE_URL),
      routes,
    })
    wrapper = mount(HomeSliderTitle, {
      global: { plugins: [store, router] },
    })
  })

  it('HomeSliderTitle is exist', () => {
    expect(true).toBe(true)
  })
})
