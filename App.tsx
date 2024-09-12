import { SafeAreaView } from 'react-native'
import Navigator from '@src/Navigation/Navigator'
import { NavigationContainer } from '@react-navigation/native'
import { SingletonHooksContainer } from 'react-singleton-hook';
import { Header } from '@shared/components'

export default function App() {
  return (
    <>
      <SingletonHooksContainer />
      <SafeAreaView />
      <NavigationContainer>
        <Header />
        <Navigator />
      </NavigationContainer>
      <SafeAreaView />
    </>
  )
}
