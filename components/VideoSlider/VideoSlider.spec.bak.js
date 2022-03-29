import { mount } from '@vue/test-utils'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createVuexStore } from '@/store'
import { routes } from '@/router'
import VideoSlider from './VideoSlider.vue'

let wrapper
let store
let router

describe('VideoSlider', () => {
  beforeEach(() => {
    store = createVuexStore()
    router = createRouter({
      history: createWebHashHistory(process.env.BASE_URL),
      routes,
    })
    wrapper = mount(VideoSlider, {
      global: { plugins: [store, router] },
    })
  })

  it('VideoSlider is exist', () => {
    expect(true).toBe(true)
  })
})
