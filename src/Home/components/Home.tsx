import { StyleSheet, View } from 'react-native'
import useGenres from '../../Genre/useGenres'
import { Genre } from '../../Genre/types'
import GenreMovieList from '../../Genre/components/GenreMovieList'
import spacing from '@styles/spacing'
import { WishlistMovieList } from '@src/Wishlist/components'

export default function Home() {
  const { genres } = useGenres()

  return (
    <View style={genreList.wrapper}>
      {genres && genres.map((genre: Genre) => <GenreMovieList style={genreList.movieList} genre={genre} key={genre.id} />)}
      <WishlistMovieList />
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
