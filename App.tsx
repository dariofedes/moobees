import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native'
import { Genre} from '@src/Genre/types'
import { Header } from '@shared/components'
import { spacing } from '@styles'
import useGenres from '@src/Genre/useGenres'
import { GenreMovieList } from '@src/Genre/components'

export default function App() {
  const { genres } = useGenres()

  return (
    <SafeAreaView>
      <StatusBar />
      <Header style={app.header}/>
      {genres && genres.map((genre: Genre) => <GenreMovieList genre={genre} key={genre.id} />)}
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
