import { SafeAreaView } from 'react-native'
import Navigator from '@src/Navigation/Navigator'
import { NavigationContainer } from '@react-navigation/native'
import { Header } from '@shared/components'

export default function App() {
  return (
    <>
      <SafeAreaView />
      <NavigationContainer>
        <Header />
        <Navigator />
      </NavigationContainer>
      <SafeAreaView />
    </>
  )
}
