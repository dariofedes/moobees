import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@src/Genre/GenreListScree';
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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={MovieDetailsScreen} />
      </Stack.Navigator>
  )
}

export default Navigator
