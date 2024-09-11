import { StyleSheet, Text, TextProps } from 'react-native';
import { colors, textSize } from '@styles';

export default function H1({ style, children, ...restProps }: H1Props) {
  return <Text style={[h1.title, style]} {...restProps}>{children}</Text>
}

type H1Props = TextProps

const h1 = StyleSheet.create({
  title: {
    fontSize: textSize.h1,
    color: colors.title,
    fontWeight: '200',
  },
})
