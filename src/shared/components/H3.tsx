import { StyleSheet, Text, TextProps } from 'react-native';
import { colors, textSize } from '@styles';

export default function H3({ style, children, ...restProps }: H3Props) {
  return <Text style={[h3.title, style]} {...restProps}>{children}</Text>
}

type H3Props = TextProps

const h3 = StyleSheet.create({
  title: {
    fontSize: textSize.h3,
    color: colors.title,
  },
})
