import { Image, StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native'
import { MovieResult } from '../types'
import { colors, textSize, spacing } from '@styles'
import { Rating } from '@shared/components'
import { H3, P1 } from '@shared/components'
import { useNavigation } from '@react-navigation/native'
import { usePoster } from '@shared/hooks'

export default function LineMovie({ style, movie }: LineMovieProps) {
  const navigation = useNavigation()
  const { getSmallPosterUrl } = usePoster()

  return(
    <TouchableOpacity style={[lineMovie.wrapper, style]} onPress={() => navigation.navigate('Details', {movie})}>
      <Image style={lineMovie.poster}
        source={{uri: getSmallPosterUrl(movie.poster_path)}}
      />
      <View style={lineMovie.details}>
        <View style={lineMovie.data}>
          <H3 style={lineMovie.title} numberOfLines={2} ellipsizeMode="tail">{movie.title}</H3>
          <P1 style={lineMovie.premiereDate}>{movie.release_date}</P1>
        </View>
        <Rating
          style={lineMovie.rating}
          average={movie.vote_average}
          votes={movie.vote_count}
        />
      </View>
    </TouchableOpacity>
  )
}

type LineMovieProps = {
  style?: StyleProp<ViewStyle>,
  movie: MovieResult,
}

const lineMovie = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    gap: spacing.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
  },

  poster: {
    height: 150,
    width: 100,
    resizeMode: 'contain',
  },

  details: {
    justifyContent: 'space-between',
    flex: 1,
  },

  data: {
    gap: spacing.md,
    width: '100%',
  },

  title: {
  },

  premiereDate:{
    fontSize: textSize.p1,
    color: colors.text,
  },

  rating: {
  },
})
