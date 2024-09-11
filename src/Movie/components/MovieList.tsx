import { FlatList, StyleProp, ViewStyle, Dimensions, StyleSheet, View, Text } from 'react-native'
import { MovieResult } from '../types'
import LineMovie from './LineMovie'
import { colors, textSize, spacing } from '@styles'

const width = Dimensions.get('window').width

export default function MovieList({ style, movies, title }: MovieListProps) {
  return (
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
      />
    </View>
  )
}

type MovieListProps = {
  style?: StyleProp<ViewStyle>,
  movies: MovieResult[],
  title: string
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
