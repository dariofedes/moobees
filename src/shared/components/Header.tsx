import { StyleSheet, View, Image, StyleProp, ViewStyle, TouchableOpacity } from 'react-native'
import H1 from './H1'
import { colors, spacing, textSize } from '@styles'
import logo from '@assets/logo.png'
import { useNavigation, useNavigationState } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Header({ style }: HeaderProps) {
  const navigation = useNavigation()
  const showBackButton = useNavigationState(state => state?.index > 0)

  return (
    <View style={[header.wrapper, style]}>
      { showBackButton &&
        <TouchableOpacity
          style={header.navigateBackButton}
          onPress={() => navigation.goBack()}
        >
          <Icon
            name="chevron-back"
            size={textSize.h1}
            color={colors.text}
            style={header.navigateBackIcon}
          />
        </TouchableOpacity>
      }
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

  navigateBackIcon: {
  },

  navigateBackButton:{
    position: 'absolute',
    left: spacing.md,
  },
})
