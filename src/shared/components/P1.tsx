import { StyleSheet, Text, TextProps } from 'react-native';
import { colors, textSize } from '@styles';

export default function P1({ style, children, ...restProps }: P1Props) {
  return <Text style={[p1.title, style]} {...restProps}>{children}</Text>
}

type P1Props = TextProps

const p1 = StyleSheet.create({
  title: {
    fontSize: textSize.p1,
    color: colors.text,
  },
})
