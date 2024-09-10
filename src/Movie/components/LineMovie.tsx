import { Image, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { MovieResult } from '../types';

export default function LineMovie({ style, movie }: LineMovieProps) {
  return(
    <View style={[lineMovie.wrapper, style]}>
      <Image style={{height: 150, resizeMode: 'contain'}} source={{uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}} />
      <Text>{movie.title}</Text>
      <Text>{movie.release_date}</Text>
      <Text>{`${movie.vote_average.toFixed(1)} (${movie.vote_count})`}</Text>
    </View>
  )
}

type LineMovieProps = {
  style?: StyleProp<ViewStyle>,
  movie: MovieResult,
}

const lineMovie = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
  },

  title: {

  },
})
