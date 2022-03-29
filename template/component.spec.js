import { mount } from '@vue/test-utils'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createVuexStore } from '@/store'
import { routes } from '@/router'
import COMPONENT_NAME from './COMPONENT_NAME.vue'

let wrapper
let store
let router

describe('COMPONENT_NAME', () => {
  beforeEach(() => {
    store = createVuexStore()
    router = createRouter({
      history: createWebHashHistory(process.env.BASE_URL),
      routes,
    })
    wrapper = mount(COMPONENT_NAME, {
      global: { plugins: [store, router] },
    })
  })

  it('COMPONENT_NAME is exist', () => {
    expect(true).toBe(true)
  })
})
