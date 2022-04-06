import { mount } from '@vue/test-utils'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createVuexStore } from '@/store'
import { routes } from '@/router'
import MoviesListLoader from './MoviesListLoader.vue'

let wrapper
let store
let router

describe('MoviesListLoader', () => {
  beforeEach(() => {
    store = createVuexStore()
    router = createRouter({
      history: createWebHashHistory(process.env.BASE_URL),
      routes,
    })
    wrapper = mount(MoviesListLoader, {
      global: { plugins: [store, router] },
    })
  })

  it('MoviesListLoader is exist', () => {
    expect(true).toBe(true)
  })
})
