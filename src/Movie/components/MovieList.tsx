import { FlatList, StyleProp, ViewStyle, Dimensions, StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import { MovieResult } from '../types'
import LineMovie from './LineMovie'
import { colors, textSize, spacing } from '@styles'

const width = Dimensions.get('window').width

export default function MovieList({ style, movies, title, isLoading, onNextPage }: MovieListProps) {
  return movies && (
    <View style={[movieList.wrapper, style]}>
      <Text style={movieList.title}>{title}</Text>
      <FlatList
        data={movies}
        renderItem={({ item }) => <LineMovie movie={item} />}
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
