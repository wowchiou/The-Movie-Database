import http from '@/services'
import imageURL from '@/data/image-url.json'

export const state = () => ({
  lang: '',
  images: imageURL,
})

export const mutations = {
  SET_LANG(state, lang) {
    state.lang = lang
  },
}

export const actions = {
  getSearchMovie({ state }, { searchText, page }) {
    return http
      .getSearchMovie(searchText, page, state.lang)
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        throw err
      })
  },

  async getMovies({ dispatch }, { searchType, page }) {
    let movieResult
    switch (searchType) {
      case 'now':
        movieResult = await dispatch('fetchNowPlayingMovie', page)
        break
      case 'top':
        movieResult = await dispatch('fetchTopMovie', page)
        break
      case 'popular':
        movieResult = await dispatch('fetchPopularMovie', page)
        break
    }
    return movieResult
  },

  getHomeMovieSliders({ dispatch }) {
    const page = 1
    return Promise.all([
      dispatch('fetchNowPlayingMovie', page),
      dispatch('fetchTopMovie', page),
      dispatch('fetchPopularMovie', page),
    ])
      .then((values) => {
        return values
      })
      .catch((err) => {
        throw err
      })
  },

  fetchNowPlayingMovie({ state }, page) {
    return http
      .getNowPlayingMovie(page, state.lang)
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        throw err
      })
  },

  fetchTopMovie({ state }, page) {
    return http
      .getTopMovie(page, state.lang)
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        throw err
      })
  },

  fetchPopularMovie({ state }, page) {
    return http
      .getPopularMovie(page, state.lang)
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        throw err
      })
  },

  filterRepeatMovies(context, movies) {
    // 重編排成Map格式使之後可以篩選重複的資料
    const moviesFormateMap = movies.reduce((arr, el) => {
      return [...arr, [el.id, el]]
    }, [])
    // 篩選調重複的資料轉成物件陣列
    return [...new Map(moviesFormateMap)].reduce((arr, el) => {
      return [...arr, el[1]]
    }, [])
  },
}
