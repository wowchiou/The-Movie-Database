import { mount } from '@vue/test-utils'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createVuexStore } from '@/store'
import { routes } from '@/router'
import MoviesList from './MoviesList.vue'

let wrapper
let store
let router

describe('MoviesList', () => {
  beforeEach(() => {
    store = createVuexStore()
    router = createRouter({
      history: createWebHashHistory(process.env.BASE_URL),
      routes,
    })
    wrapper = mount(MoviesList, {
      global: { plugins: [store, router] },
    })
  })

  it('MoviesList is exist', () => {
    expect(true).toBe(true)
  })
})
