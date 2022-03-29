import { mount } from '@vue/test-utils'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createVuexStore } from '@/store'
import { routes } from '@/router'
import _id from './_id.vue'

let wrapper
let store
let router

describe('_id', () => {
  beforeEach(() => {
    store = createVuexStore()
    router = createRouter({
      history: createWebHashHistory(process.env.BASE_URL),
      routes,
    })
    wrapper = mount(_id, {
      global: { plugins: [store, router] },
    })
  })

  it('_id is exist', () => {
    expect(true).toBe(true)
  })
})
