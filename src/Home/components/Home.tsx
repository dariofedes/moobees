import { StyleSheet, View } from 'react-native'
import useGenres from '@src/Genre/useGenres'
import { Genre } from '@src/Genre/types'
import GenreMovieList from '@src/Genre/components/GenreMovieList'
import { WishlistMovieList } from '@src/Wishlist/components'
import spacing from '@styles/spacing'

export default function Home() {
  const { genres } = useGenres()

  return (
    <View style={home.wrapper}>
      {genres && genres.map((genre: Genre) => <GenreMovieList style={home.movieList} genre={genre} key={genre.id} />)}
      <WishlistMovieList style={home.movieList} />
    </View>
  )
}

const home = StyleSheet.create({
  wrapper: {
    gap: spacing.lg,
  },

  movieList: {
  },
})
