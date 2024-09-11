import { Image, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import { MovieResult } from '../types'
import Icon from 'react-native-vector-icons/AntDesign'
import { colors, textSize, spacing } from '@styles'

export default function LineMovie({ style, movie }: LineMovieProps) {
  return(
    <View style={[lineMovie.wrapper, style]}>
      <Image style={lineMovie.poster}
        source={{uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}}
      />
      <View style={lineMovie.details}>
        <View style={lineMovie.data}>
          <Text style={lineMovie.title} numberOfLines={2} ellipsizeMode="tail">{movie.title}</Text>
          <Text style={lineMovie.premiereDate}>{movie.release_date}</Text>
        </View>
        <View style={[rating.wrapper, lineMovie.rating]}>
          <Text style={rating.average}>{`${movie.vote_average.toFixed(1)}`}</Text>
          <Icon style={rating.icon} name="star" size={textSize.body} color={colors.primary} />
          <Text style={rating.votes}>{`(${movie.vote_count})`}</Text>
        </View>
      </View>
    </View>
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
    fontSize: textSize.h3,
    color: colors.title,
  },

  premiereDate:{
    fontSize: textSize.body,
    color: colors.text,
  },

  rating: {
  },
})

const rating = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },

  average: {
    fontSize: textSize.secondary,
    color: colors.textDetails,
  },

  icon: {
    marginRight: spacing.sm,
  },

  votes: {
    fontSize: textSize.label,
    color: colors.textDetails,
  },
})
