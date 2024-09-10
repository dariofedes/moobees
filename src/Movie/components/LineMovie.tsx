import { Image, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import { MovieResult } from '../types'
import Icon from 'react-native-vector-icons/AntDesign'

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
          <Icon style={rating.icon} name="star" size={16} color="#fbd50b" />
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
    gap: 16,
    padding: 8,
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
    gap: 8,
    width: '100%',
  },

  title: {
    fontSize: 20,
    color: '#111111',
  },

  premiereDate:{
    fontSize: 16,
    color: '#3b3b3b',
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
    fontSize: 14,
    color: '#555555',
  },

  icon: {
    marginRight: 4,
  },

  votes: {
    fontSize: 12,
    color: '#555555',
  },
})
