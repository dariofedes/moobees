import { StyleSheet, View } from 'react-native'
import useGenres from '../useGenres'
import { Genre } from '../types'
import GenreMovieList from './GenreMovieList'
import spacing from '@styles/spacing'

export default function GenreList() {
  const { genres } = useGenres()

  return (
    <View style={genreList.wrapper}>
      {genres && genres.map((genre: Genre) => <GenreMovieList style={genreList.movieList} genre={genre} key={genre.id} />)}
    </View>
  )
}

const genreList = StyleSheet.create({
  wrapper: {
    gap: spacing.lg,
  },

  movieList: {

  },
})
