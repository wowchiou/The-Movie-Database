import { mount } from '@vue/test-utils'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createVuexStore } from '@/store'
import { routes } from '@/router'
import RecommendationsCard from './RecommendationsCard.vue'

let wrapper
let store
let router

describe('RecommendationsCard', () => {
  beforeEach(() => {
    store = createVuexStore()
    router = createRouter({
      history: createWebHashHistory(process.env.BASE_URL),
      routes,
    })
    wrapper = mount(RecommendationsCard, {
      global: { plugins: [store, router] },
    })
  })

  it('RecommendationsCard is exist', () => {
    expect(true).toBe(true)
  })
})
