import { FlatList, StyleProp, ViewStyle, Dimensions, StyleSheet, View, ActivityIndicator } from 'react-native'
import { MovieResult } from '../types'
import LineMovie from './LineMovie'
import { colors, textSize, spacing } from '@styles'
import { H2, P2 } from '@shared/components'

const width = Dimensions.get('window').width

export default function MovieList({ style, movies, title, isLoading, onNextPage, onMoviePress, emptyMessage }: MovieListProps) {
  return movies && (
    <View style={[movieList.wrapper, style]}>
      <H2 style={movieList.title}>{title}</H2>
      {movies.length > 0 &&
        <FlatList
          data={movies}
          renderItem={({ item }) => <LineMovie movie={item} onPress={() => onMoviePress && onMoviePress(item)} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width * 0.8}
          decelerationRate="fast"
          contentContainerStyle={movieList.carousel}
          onEndReached={() => onNextPage && onNextPage()}
          onEndReachedThreshold={2}
          ListFooterComponent={isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
        /> ||
        <P2 style={movieList.emptyMessage}>{emptyMessage}</P2>
      }
    </View>
  )
}

type MovieListProps = {
  style?: StyleProp<ViewStyle>,
  movies: MovieResult[],
  title: string,
  isLoading: boolean,
  onNextPage?: Function,
  onMoviePress?: Function,
  emptyMessage?: string,
}

const movieList = StyleSheet.create({
  wrapper: {
    gap: spacing.sm,
  },

  title: {
    fontSize: textSize.h2,
    marginLeft: spacing.lg,
    color: colors.title,
  },

  carousel: {
    paddingHorizontal: spacing.lg,
    gap: spacing.lg,
  },

  emptyMessage: {
    marginLeft: spacing.lg,
  },
})
