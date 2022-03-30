import { mount } from '@vue/test-utils'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createVuexStore } from '@/store'
import { routes } from '@/router'
import CastSlider from './CastSlider.vue'

let wrapper
let store
let router

describe('CastSlider', () => {
  beforeEach(() => {
    store = createVuexStore()
    router = createRouter({
      history: createWebHashHistory(process.env.BASE_URL),
      routes,
    })
    wrapper = mount(CastSlider, {
      global: { plugins: [store, router] },
    })
  })

  it('CastSlider is exist', () => {
    expect(true).toBe(true)
  })
})
