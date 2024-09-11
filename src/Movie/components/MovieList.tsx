import { FlatList, StyleProp, ViewStyle, Dimensions, StyleSheet, View, ActivityIndicator } from 'react-native'
import { MovieResult } from '../types'
import LineMovie from './LineMovie'
import { colors, textSize, spacing } from '@styles'
import { H2 } from '@shared/components'

const width = Dimensions.get('window').width

export default function MovieList({ style, movies, title, isLoading, onNextPage, onMoviePress }: MovieListProps) {
  return movies && (
    <View style={[movieList.wrapper, style]}>
      <H2 style={movieList.title}>{title}</H2>
      <FlatList
        data={movies}
        renderItem={({ item }) => <LineMovie movie={item} onPress={() => onMoviePress(item)} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width * 0.8}
        decelerationRate="fast"
        contentContainerStyle={movieList.carousel}
        onEndReached={() => onNextPage()}
        onEndReachedThreshold={2}
        ListFooterComponent={isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
      />
    </View>
  )
}

type MovieListProps = {
  style?: StyleProp<ViewStyle>,
  movies: MovieResult[],
  title: string,
  isLoading: boolean,
  onNextPage: Function,
  onMoviePress?: Function,
}

const movieList = StyleSheet.create({
  wrapper: {
    gap: spacing.md,
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
})
