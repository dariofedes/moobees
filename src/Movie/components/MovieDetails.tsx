import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { MovieResult } from '../types'
import { H2 } from '@shared/components'

export default function MovieDetails({ style, movie }: MovieDetailsProps) {
  return (
    <H2 style={[movieDetails.title, style]}>{movie.title}</H2>
  )
}

type MovieDetailsProps = {
  style?: StyleProp<ViewStyle>,
  movie: MovieResult,
}

const movieDetails = StyleSheet.create({
  title: {

  },
})
