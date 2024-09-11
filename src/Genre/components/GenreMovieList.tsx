import { StyleProp, ViewStyle } from 'react-native'
import { Genre } from '../types'
import useGenreMovies from '../useGenreMovies'
import { MovieList } from '@src/Movie/components'
import { useNavigation } from '@react-navigation/native'
import { MovieResult } from '@src/Movie/types'

export default function GenreMovieList({ style, genre }: GenreMovieListProps) {
  const { isLoading, movies, getNextPage } = useGenreMovies(genre.id)
  const navigation = useNavigation()

  return movies && (
    <MovieList
      movies={movies}
      title={genre.name}
      isLoading={isLoading}
      onNextPage={getNextPage}
      onMoviePress={(movie: MovieResult) => navigation.navigate('Details', { movie, genre: genre.name.toLowerCase() })}
      style={style}
    />
  )
}

type GenreMovieListProps = {
  style?: StyleProp<ViewStyle>
  genre: Genre,
}
