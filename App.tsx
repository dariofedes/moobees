import { useEffect, useState } from 'react'
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native'
import axios from 'axios'
import { API_KEY, API_URL } from '@env'
import { MovieResult } from '@src/Movie/types'
import LineMovie from '@src/Movie/components/LineMovie'
import { Header } from '@shared/components'

const width = Dimensions.get('window').width

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
      <FlatList
        data={movies}
        renderItem={({ item }) => <LineMovie movie={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width * 0.8}
        decelerationRate="fast"
        contentContainerStyle={app.carousel}
      />
    </SafeAreaView>
  )
}

const app = StyleSheet.create({
  carousel: {
    paddingHorizontal: 16,
    gap: 16,
  },

  header: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
})
