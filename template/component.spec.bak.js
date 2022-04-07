import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import COMPONENT_NAME from './COMPONENT_NAME.vue'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
localVue.use(VueI18n)

let wrapper
let NuxtStore
let store
let router

describe(COMPONENT_NAME, () => {
  beforeAll(async () => {
    NuxtStore = await import(`@/store`)
  })

  beforeEach(async () => {
    router = new VueRouter()
    store = await new Vuex.Store(NuxtStore)
    wrapper = mount(Home, {
      localVue,
      store,
      router,
      mocks: { $t: (msg) => msg, localePath: (i) => i },
      data() {
        return {}
      },
    })
  })
})
