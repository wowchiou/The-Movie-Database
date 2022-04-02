import http from '@/services'

export const state = () => ({
  images: {
    origin: `https://image.tmdb.org/t/p/original/`,
    cast: `https://www.themoviedb.org/t/p/w138_and_h175_face/`,
    screen: `https://image.tmdb.org/t/p/w1920_and_h800_face/`,
    card: `https://www.themoviedb.org/t/p/w250_and_h141_face/`,
    post: `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/`,
    profile: `https://www.themoviedb.org/t/p/w45_and_h45_face/`,
  },
  nowPlayingMovie: [],
  topMovie: [],
  popularMovie: [],
})

export const mutations = {
  SET_NOW_PLAYING_MOVIE(state, movie) {
    state.nowPlayingMovie.push(...movie)
  },

  SET_TOP_MOVIE(state, movie) {
    state.topMovie.push(...movie)
  },

  SET_POPULAR_MOVIE(state, movie) {
    state.popularMovie.push(...movie)
  },
}

export const actions = {
  getSearchMovie(context, { searchText, page }) {
    return http
      .getSearchMovie(searchText, page)
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

  fetchNowPlayingMovie(context, page) {
    return http
      .getNowPlayingMovie(page)
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        throw err
      })
  },

  fetchTopMovie(context, page) {
    return http
      .getTopMovie(page)
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        throw err
      })
  },

  fetchPopularMovie(context, page) {
    return http
      .getPopularMovie(page)
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        throw err
      })
  },
}
