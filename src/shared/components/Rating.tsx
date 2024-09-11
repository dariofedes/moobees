import { colors, spacing, textSize } from '@styles'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import P2 from './P2'
import Label from './Label'

export default function Rating({ style, average, votes }: RatingProps) {
  return (
    <View style={[rating.wrapper, style]}>
      <P2 style={rating.average}>{`${average.toFixed(1)}`}</P2>
      <Icon style={rating.icon} name="star" size={textSize.icon} color={colors.primary} />
      <Label style={rating.votes}>{`(${votes})`}</Label>
    </View>
  )
}

type RatingProps = {
  style?: StyleProp<ViewStyle>,
  average: number,
  votes: number,
}

const rating = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },

  average: {
    fontSize: textSize.p2,
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
