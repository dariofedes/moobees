import { SafeAreaView } from 'react-native'
import Navigator from '@src/Navigation/Navigator'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <>
      <SafeAreaView />
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
      <SafeAreaView />
    </>
  )
}
