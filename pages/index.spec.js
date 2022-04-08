import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
// import flushPromises from 'flush-promises'
// import Http from '@/services'
import MOVIE_SLIDERS from '@/mocks/home-movie-sliders.json'

import Home from '@/pages/index.vue'
import HomeBanner from '@/components/HomeBanner'
import SearchBar from '@/components/SearchBar'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
localVue.use(VueI18n)

let wrapper
let NuxtStore
let store
let router
let context

describe('Home', () => {
  beforeAll(async () => {
    NuxtStore = await import(`@/store`)
  })

  beforeEach(() => {
    jest.clearAllMocks()
    router = new VueRouter()
    store = new Vuex.Store(NuxtStore)
    context = {
      app: {
        i18n: {
          locale: 'zh',
          t: jest.fn(),
        },
      },
      store,
      error: jest.fn(),
    }
    wrapper = shallowMount(Home, {
      localVue,
      store,
      router,
      mocks: { $t: (msg) => msg, localePath: (i) => i },
      data() {
        return {
          movieSliders: MOVIE_SLIDERS,
        }
      },
    })
  })

  it(`app initial language is chinese`, async () => {
    await Home.asyncData(context)
    expect(store.state.lang).toBe('zh')
  })

  // it(`display error page when getHomeMovieSliders call fail`, async () => {
  //   jest.spyOn(Http, 'getNowPlayingMovie').mockRejectedValueOnce()
  //   wrapper = shallowMount(Home, {
  //     localVue,
  //     store,
  //     router,
  //     mocks: { $t: (msg) => msg, localePath: (i) => i },
  //     data() {
  //       return {
  //         movieSliders: MOVIE_SLIDERS,
  //       }
  //     },
  //   })
  //   await Home.asyncData(context)
  //   await flushPromises()
  //   expect(Http.getNowPlayingMovie).toBeCalledTimes(1)
  // })

  it(`show banner`, () => {
    expect(wrapper.findComponent(HomeBanner).exists()).toBeTruthy()
  })

  it(`click search bar route to search page`, async () => {
    const $SEARCH_BAR = wrapper.findComponent(SearchBar)
    expect($SEARCH_BAR.exists()).toBeTruthy()
    await wrapper.vm.searchHandler(123)
    expect(wrapper.vm.$route.name).toBe('Search')
    expect(wrapper.vm.$route.query).toEqual({ searchText: 123 })
  })

  it(`has ${MOVIE_SLIDERS.length} sliders`, () => {
    expect(wrapper.findAll('[data-test="movie-slider"]')).toHaveLength(
      MOVIE_SLIDERS.length
    )
  })
})
