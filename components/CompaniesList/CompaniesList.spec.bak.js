import { mount } from '@vue/test-utils'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createVuexStore } from '@/store'
import { routes } from '@/router'
import CompaniesList from './CompaniesList.vue'

let wrapper
let store
let router

describe('CompaniesList', () => {
  beforeEach(() => {
    store = createVuexStore()
    router = createRouter({
      history: createWebHashHistory(process.env.BASE_URL),
      routes,
    })
    wrapper = mount(CompaniesList, {
      global: { plugins: [store, router] },
    })
  })

  it('CompaniesList is exist', () => {
    expect(true).toBe(true)
  })
})
