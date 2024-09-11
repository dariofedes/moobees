import { StyleSheet, Text, TextProps } from 'react-native';
import { colors, textSize } from '@styles';

export default function H2({ style, children, ...restProps }: H2Props) {
  return <Text style={[h2.title, style]} {...restProps}>{children}</Text>
}

type H2Props = TextProps

const h2 = StyleSheet.create({
  title: {
    fontSize: textSize.h2,
    color: colors.title,
  },
})
