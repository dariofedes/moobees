import { StyleSheet, Text, TextProps } from 'react-native';
import { colors, textSize } from '@styles';

export default function Label({ style, children, ...restProps }: LabelProps) {
  return <Text style={[label.title, style]} {...restProps}>{children}</Text>
}

type LabelProps = TextProps

const label = StyleSheet.create({
  title: {
    fontSize: textSize.label,
    color: colors.textDetails,
  },
})
