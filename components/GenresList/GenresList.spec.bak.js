import { mount } from '@vue/test-utils'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createVuexStore } from '@/store'
import { routes } from '@/router'
import GenresList from './GenresList.vue'

let wrapper
let store
let router

describe('GenresList', () => {
  beforeEach(() => {
    store = createVuexStore()
    router = createRouter({
      history: createWebHashHistory(process.env.BASE_URL),
      routes,
    })
    wrapper = mount(GenresList, {
      global: { plugins: [store, router] },
    })
  })

  it('GenresList is exist', () => {
    expect(true).toBe(true)
  })
})
