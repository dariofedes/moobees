import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native'

import { Header } from '@shared/components'

export default function App() {
  return (
    <SafeAreaView >
      <StatusBar />
      <ScrollView style={app.scrollable} contentInsetAdjustmentBehavior="automatic">
        <Header style={app.header}/>
      </ScrollView>
    </SafeAreaView>
  )
}

const app = StyleSheet.create({
  scrollable: {
    padding: 16,
  },

  header: {

  },
})
