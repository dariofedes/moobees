import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GenreListScreen from '@src/Genre/GenreListScree';
import { colors } from '@styles';
import MovieDetailsScreen from '@src/Movie/MovieDetailsScreen';

const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: colors.lightBackground,
          },
        }}
      >
        <Stack.Screen name="Home" component={GenreListScreen} />
        <Stack.Screen name="Details" component={MovieDetailsScreen} />
      </Stack.Navigator>
  )
}

export default Navigator
