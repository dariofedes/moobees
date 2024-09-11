import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native'
import { Header } from '@shared/components'
import { spacing } from '@styles'
import { GenreList } from '@src/Genre/components'

export default function App() {

  return (
    <SafeAreaView>
      <StatusBar />
      <Header style={app.header}/>
      <GenreList />
    </SafeAreaView>
  )
}

const app = StyleSheet.create({
  movieList: {
  },

  header: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xl,
  },
})
