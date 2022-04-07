import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
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

describe('Home', () => {
  beforeAll(async () => {
    NuxtStore = await import(`@/store`)
    router = new VueRouter()
  })

  beforeEach(async () => {
    store = await new Vuex.Store(NuxtStore)
    wrapper = mount(Home, {
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
