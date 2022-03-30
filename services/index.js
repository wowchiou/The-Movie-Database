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
  getLatestMovie() {
    return axiosTMDB.get(`/movie/latest?api_key=${API_KEY}&language=zh-TW`)
  },
  getNowPlayingMovie(page) {
    return axiosTMDB.get(
      `/movie/now_playing?api_key=${API_KEY}&language=zh-TW&page=${page}`
    )
  },
  getPopularMovie(page) {
    return axiosTMDB.get(
      `/movie/popular?api_key=${API_KEY}&language=zh-TW&page=${page}`
    )
  },
  getTopMovie(page) {
    return axiosTMDB.get(
      `/movie/top_rated?api_key=${API_KEY}&language=zh-TW&page=${page}`
    )
  },
  getLatestTV() {
    return axiosTMDB.get(`/tv/latest?api_key=${API_KEY}&language=zh-TW`)
  },
  getPopularTV(page) {
    return axiosTMDB.get(
      `/tv/popular?api_key=${API_KEY}&language=zh-TW&page=${page}`
    )
  },
  getTopTV(page) {
    return axiosTMDB.get(
      `/tv/top_rated?api_key=${API_KEY}&language=zh-TW&page=${page}`
    )
  },
  getDetailTV(tvID) {
    return axiosTMDB.get(`/tv/${tvID}?api_key=${API_KEY}&language=zh-TW`)
  },
  getCastTV(tvID) {
    return axiosTMDB.get(
      `/tv/${tvID}/aggregate_credits?api_key=${API_KEY}&language=zh-TW`
    )
  },
  getReviewTV(tvID, page) {
    return axiosTMDB.get(
      `/tv/${tvID}/reviews?api_key=${API_KEY}&language=([a-z]{2})-([A-Z]{2})&page=${page}`
    )
  },
  getReview(id) {
    return axiosTMDB.get(`/review/${id}?api_key=${API_KEY}`)
  },
}
