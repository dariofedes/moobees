import { StyleProp, ViewStyle } from 'react-native'
import { MovieList } from '@src/Movie/components'
import useWishlist from '../useWishlist'

export default function WishlistMovieList({ style }: WishlistMovieListProps) {
  const { moviesInWishlist } = useWishlist()

  return (
    <MovieList
      movies={moviesInWishlist}
      title="Wishlist"
      isLoading={false}
      style={style}
      emptyMessage="Your wishlist is empty"
    />
  )
}

type WishlistMovieListProps = {
  style?: StyleProp<ViewStyle>
}
