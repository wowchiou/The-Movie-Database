import axios from 'axios'

const API_KEY = process.env.TMDB_KEY

export const axiosTMDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getNowPlayingMovie(page, lang) {
    return axiosTMDB.get(
      `/movie/now_playing?api_key=${API_KEY}&language=${lang}&page=${page}`
    )
  },
  getPopularMovie(page, lang) {
    return axiosTMDB.get(
      `/movie/popular?api_key=${API_KEY}&language=${lang}&page=${page}`
    )
  },
  getTopMovie(page, lang) {
    return axiosTMDB.get(
      `/movie/top_rated?api_key=${API_KEY}&language=${lang}&page=${page}`
    )
  },
  getDetailMovie(movieID, lang) {
    return axiosTMDB.get(
      `/movie/${movieID}?api_key=${API_KEY}&language=${lang}`
    )
  },
  getCastMovie(movieID, lang) {
    return axiosTMDB.get(
      `/movie/${movieID}/credits?api_key=${API_KEY}&language=${lang}`
    )
  },
  getReviewMovie(movieID, page, lang) {
    return axiosTMDB.get(
      `/movie/${movieID}/reviews?api_key=${API_KEY}&language=${lang}&page=${page}`
    )
  },
  getRecommendations(movieID, lang) {
    return axiosTMDB.get(
      `/movie/${movieID}/recommendations?api_key=${API_KEY}&language=${lang}&page=1`
    )
  },
  getSearchMovie(searchText, page, lang) {
    return axiosTMDB.get(
      `/search/movie?api_key=${API_KEY}&language=${lang}&page=${page}&query=${searchText}`
    )
  },
}
