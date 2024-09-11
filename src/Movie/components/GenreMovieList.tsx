import { StyleProp, ViewStyle } from 'react-native'
import { Genre } from '../types'
import useGenreMovies from '../useGenreMovies'
import MovieList from './MovieList'

export default function GenreMovieList({ style, genre }: GenreMovieListProps) {
  const { isLoading, movies, getNextPage } = useGenreMovies(genre.id)

  return movies && (
    <MovieList
      movies={movies}
      title={genre.name}
      isLoading={isLoading}
      onNextPage={getNextPage}
      style={style}
    />
  )
}

type GenreMovieListProps = {
  style?: StyleProp<ViewStyle>
  genre: Genre,
}
