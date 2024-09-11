import { Alert, Image, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { MovieResult } from '../types'
import { H2, H3, P1, P2, Rating } from '@shared/components'
import { usePoster } from '@shared/hooks'
import { fonts, spacing } from '@styles'
import Button from '@shared/components/Button'

export default function MovieDetails({ style, movie, genre }: MovieDetailsProps) {
  const { getLargePosterUrl } = usePoster()
  const fontFamily = fonts[genre]

  return (
    <View style={[movieDetails.wrapper, style]}>
      <H2 style={{ ...movieDetails.title, fontFamily }}>{movie.title}</H2>
      <View style={movieDetails.main}>
        <Image
          source={{uri: getLargePosterUrl(movie.poster_path)}}
          style={movieDetails.poster}
        />
        <View style={movieDetails.info}>
          <Button title="Add to wishlist" onPress={() => Alert.alert('will add to wishlist')} />
          <P1 style={{ ...movieDetails.premiereDate, fontFamily }}>{movie.release_date}</P1>
          <Rating average={movie.vote_average} votes={movie.vote_count} />
        </View>
      </View>
      <View style={movieDetails.descriptionWrapper}>
        <H3 style={{ ...movieDetails.descriptionTitle, fontFamily }}>Description:</H3>
        <P2 style={{ ...movieDetails.description, fontFamily }}>{movie.overview}</P2>
      </View>
    </View>
  )
}

type MovieDetailsProps = {
  style?: StyleProp<ViewStyle>,
  movie: MovieResult,
  genre: string,
}

const movieDetails = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    gap: spacing.xl,
  },

  title: {
  },

  main: {
    flexDirection: 'row',
    gap: spacing.lg,
  },

  poster: {
    flex: 1,
    height: 270,
    resizeMode: 'contain',
  },

  info: {
    flex: 1,
    gap: spacing.lg,
  },

  premiereDate: {

  },

  descriptionWrapper: {
    gap: spacing.md,
  },

  descriptionTitle: {
  },

  description: {
  },
})
