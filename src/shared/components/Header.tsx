import { StyleSheet, Text, View, Image, StyleProp, ViewStyle } from 'react-native'
import logo from '@assets/logo.png'

export default function Header({ style }: HeaderProps) {
  return (
    <View style={[header.wrapper, style]}>
      <Image source={logo} style={header.logo} />
      <Text style={header.title}>Moobees</Text>
    </View>
  )
}

type HeaderProps = {
  style?: StyleProp<ViewStyle>
}

const header = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  logo: {
    width: 32,
    height: 32,
  },

  title: {
    fontSize: 32,
    fontWeight: '200',
  },
})
