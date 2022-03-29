import { mount } from '@vue/test-utils'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createVuexStore } from '@/store'
import { routes } from '@/router'
import Home from './Home.vue'

let wrapper
let store
let router

describe('Home', () => {
  beforeEach(() => {
    store = createVuexStore()
    router = createRouter({
      history: createWebHashHistory(process.env.BASE_URL),
      routes,
    })
    wrapper = mount(Home, {
      global: { plugins: [store, router] },
    })
  })

  it('Home is exist', () => {
    expect(true).toBe(true)
  })
})
