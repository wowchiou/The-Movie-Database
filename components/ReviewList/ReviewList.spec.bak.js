import { mount } from '@vue/test-utils'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createVuexStore } from '@/store'
import { routes } from '@/router'
import ReviewList from './ReviewList.vue'

let wrapper
let store
let router

describe('ReviewList', () => {
  beforeEach(() => {
    store = createVuexStore()
    router = createRouter({
      history: createWebHashHistory(process.env.BASE_URL),
      routes,
    })
    wrapper = mount(ReviewList, {
      global: { plugins: [store, router] },
    })
  })

  it('ReviewList is exist', () => {
    expect(true).toBe(true)
  })
})
