import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import { Header } from '@shared/components'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { API_KEY, API_URL } from '@env'
import { MovieResult } from '@src/Movie/types'
import LineMovie from '@src/Movie/components/LineMovie'

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
    <SafeAreaView >
      <StatusBar />
      <ScrollView style={app.scrollable} contentInsetAdjustmentBehavior="automatic">
        <Header style={app.header}/>
        <View style={app.movieList}>
          {movies && movies.map(movie => <LineMovie movie={movie} />)}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const app = StyleSheet.create({
  scrollable: {
    padding: 16,
  },

  header: {
  },

  movieList: {

  },
})
