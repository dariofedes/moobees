import { useEffect, useState } from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native'
import axios from 'axios'
import { API_KEY, API_URL } from '@env'
import { MovieResult } from '@src/Movie/types'
import { Header } from '@shared/components'
import MovieList from '@src/Movie/components/MovieList'
import { spacing } from '@styles'

export default function App() {
  const [movies, setMovies] = useState<MovieResult[]>()

  useEffect(() => {
    (async () => {
      try {
        const getMoviesUrl = `${API_URL}/discover/movie?with_genres=12&sort_by=popularity.desc&page=1&api_key=${API_KEY}`
        const movies = await axios.get(getMoviesUrl)

        setMovies(movies.data.results)
      } catch(error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <SafeAreaView>
      <StatusBar />
      <Header style={app.header}/>
      {movies && <MovieList style={app.movieList} movies={movies} title={'Adventures'} />}
    </SafeAreaView>
  )
}

const app = StyleSheet.create({
  movieList: {
  },

  header: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },
})
