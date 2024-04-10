import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ExcerciseDetailScreen } from '@screens/ExcerciseDetailScreen';
import { HomeScreen } from '@screens/HomeScreen';
import type { RootStackParamList } from '@screens/screen';
import { LoginScreen } from '@screens/LoginScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome Henk'}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="ExcerciseDetail"
          component={ExcerciseDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
