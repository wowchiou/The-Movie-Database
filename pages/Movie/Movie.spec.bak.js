import { mount } from '@vue/test-utils'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createVuexStore } from '@/store'
import { routes } from '@/router'
import Movie from './Movie.vue'

let wrapper
let store
let router

describe('Movie', () => {
  beforeEach(() => {
    store = createVuexStore()
    router = createRouter({
      history: createWebHashHistory(process.env.BASE_URL),
      routes,
    })
    wrapper = mount(Movie, {
      global: { plugins: [store, router] },
    })
  })

  it('Movie is exist', () => {
    expect(true).toBe(true)
  })
})
