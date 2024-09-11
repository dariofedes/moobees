import { useRoute } from '@react-navigation/native'
import { MovieDetails } from './components'

export default function MovieDetailsScreen() {
  const { params }: any = useRoute()

  return (
    <MovieDetails movie={params?.movie} />
  )
}
