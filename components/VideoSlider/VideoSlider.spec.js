import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import flushPromises from 'flush-promises'
import MOVIES_LIST from '@/mocks/movies-list.json'
import IMAGE_URL from '@/data/image-url.json'
import VideoSlider from './VideoSlider.vue'
import AppIcon from '@/components/AppIcon'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
localVue.use(VueI18n)
localVue.use(VueAwesomeSwiper)

let wrapper
let NuxtStore
let store
let router

describe('VideoSlider', () => {
  beforeAll(async () => {
    NuxtStore = await import(`@/store`)
  })

  beforeEach(() => {
    store = new Vuex.Store(NuxtStore)
    router = new VueRouter()
    wrapper = mount(VideoSlider, {
      localVue,
      store,
      router,
      mocks: { $t: (msg) => msg, localePath: (i) => i },
      stubs: {
        NuxtLink: true,
      },
      propsData: {
        movies: MOVIES_LIST.results,
        imageURL: IMAGE_URL.post,
        videoType: 'Movie',
      },
    })
  })

  it(`render AppIcon`, () => {
    expect(wrapper.findAllComponents(AppIcon)).toHaveLength(2)
  })

  it(`show ${MOVIES_LIST.results.length} movie-slides`, () => {
    expect(wrapper.findAll('[data-test="movie-slide"]')).toHaveLength(
      MOVIES_LIST.results.length
    )
  })
})
