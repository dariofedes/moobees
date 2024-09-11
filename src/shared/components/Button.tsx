import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'
import { colors, spacing, textSize } from '@styles'

export default function Button({ style, title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={[button.wrapper, style]} onPress={() => onPress()}>
      <Text style={{fontSize: textSize.button}}>{title}</Text>
    </TouchableOpacity>
  )
}

type ButtonProps = {
  style?: StyleProp<ViewStyle>,
  title: string,
  onPress: Function,
}

const button = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
})
