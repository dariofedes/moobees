import { StyleSheet, View, Image, StyleProp, ViewStyle } from 'react-native'
import H1 from './H1'
import { spacing, textSize } from '@styles';
import logo from '@assets/logo.png'


export default function Header({ style }: HeaderProps) {
  return (
    <View style={[header.wrapper, style]}>
      <Image source={logo} style={header.logo} />
      <H1 style={header.title}>Moobees</H1>
    </View>
  )
}

type HeaderProps = {
  style?: StyleProp<ViewStyle>
}

const header = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.md,
    marginBottom: spacing.lg,
  },

  logo: {
    width: textSize.logo,
    height: textSize.logo,
  },

  title: {
  },
})
