import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import infiniteScroll from 'vue-infinite-scroll'
import flushPromises from 'flush-promises'
import MOVIES_LIST from '@/mocks/movies-list.json'
import IMAGE_URL from '@/data/image-url.json'
import MoviesList from './MoviesList.vue'
import MoviesListLoader from '@/components/MoviesListLoader'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
localVue.use(VueI18n)
localVue.use(infiniteScroll)

let wrapper
let NuxtStore
let store
let router

describe('MoviesList', () => {
  beforeAll(async () => {
    NuxtStore = await import(`@/store`)
  })

  beforeEach(() => {
    store = new Vuex.Store(NuxtStore)
    router = new VueRouter()
    wrapper = mount(MoviesList, {
      localVue,
      store,
      router,
      mocks: { $t: (msg) => msg, localePath: (i) => i },
      stubs: {
        NuxtLink: true,
      },
      propsData: {
        movies: MOVIES_LIST.results,
        picUrl: IMAGE_URL.post,
        loadMovies: jest.fn(),
        busy: false,
      },
    })
  })

  it(`initial list has ${MOVIES_LIST.results.length} movies`, () => {
    expect(wrapper.findAll('[data-test="movie-item"]')).toHaveLength(
      MOVIES_LIST.results.length
    )
  })

  it(`do not show movie loader`, () => {
    expect(wrapper.findComponent(MoviesListLoader).exists()).toBeFalsy()
  })

  it(`show movie loader when busy is true`, async () => {
    await wrapper.setProps({ busy: true })
    expect(wrapper.findComponent(MoviesListLoader).exists()).toBeTruthy()
  })

  it(`movie-item show current movie poster`, () => {
    expect(wrapper.find('[data-test="movie-poster"]').attributes().src).toBe(
      'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/vUvbf30OrzAUA25FNPaVikD2tFg.jpg'
    )
  })

  // it(`click movie-item route to movie page`, async () => {
  //   const $MOVIE_LINKS = wrapper.find('[data-test="movie-link"]')
  //   console.log(wrapper.vm.$route)
  //   await $MOVIE_LINKS.trigger('click')
  //   await flushPromises()
  //   console.log(wrapper.vm.$route)
  //   expect(wrapper.vm.$route.name).toContain('Movie-id')
  // })
})
