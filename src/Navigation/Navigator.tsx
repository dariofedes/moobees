import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GenreListScreen from '@src/Genre/GenreListScree';
import { Header } from '@shared/components';
import { colors } from '@styles';

const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
      <Stack.Navigator
        initialRouteName="GenreListScreen"
        screenOptions={{
          // eslint-disable-next-line react/no-unstable-nested-components
          header: () => <Header />,
          contentStyle: {
            backgroundColor: colors.lightBackground,
          },
        }}
      >
        <Stack.Screen name="GenreListScreen" component={GenreListScreen} />
        {/* <Stack.Screen name="MovieDetailsScreen" component={GenreListScreen} /> */}
      </Stack.Navigator>
  )
}

export default Navigator
