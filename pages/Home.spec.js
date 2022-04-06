import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'
import MOVIE_SLIDERS from '@/mocks/home-movie-sliders.json'
import Home from '@/pages/index.vue'
import HomeBanner from '@/components/HomeBanner'
import SearchBar from '@/components/SearchBar'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueI18n)

let wrapper
let NuxtStore
let store

describe('Home', () => {
  beforeAll(async () => {
    NuxtStore = await import(`@/store`)
  })

  beforeEach(async () => {
    store = await new Vuex.Store(NuxtStore)
    wrapper = mount(Home, {
      localVue,
      store,
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
  })

  it(`has ${MOVIE_SLIDERS.length} sliders`, () => {
    expect(wrapper.findAll('[data-test="movie-slider"]')).toHaveLength(
      MOVIE_SLIDERS.length
    )
  })
})
