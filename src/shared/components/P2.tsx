import { StyleSheet, Text, TextProps } from 'react-native';
import { colors, textSize } from '@styles';

export default function P2({ style, children, ...restProps }: P2Props) {
  return <Text style={[p2.title, style]} {...restProps}>{children}</Text>
}

type P2Props = TextProps

const p2 = StyleSheet.create({
  title: {
    fontSize: textSize.p2,
    color: colors.textDetails,
  },
})
