import { mount } from '@vue/test-utils'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createVuexStore } from '@/store'
import { routes } from '@/router'
import Tv from './Tv.vue'

let wrapper
let store
let router

describe('Tv', () => {
  beforeEach(() => {
    store = createVuexStore()
    router = createRouter({
      history: createWebHashHistory(process.env.BASE_URL),
      routes,
    })
    wrapper = mount(Tv, {
      global: { plugins: [store, router] },
    })
  })

  it('Tv is exist', () => {
    expect(true).toBe(true)
  })
})
