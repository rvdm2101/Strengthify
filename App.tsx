import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ExcerciseDetailScreen } from '@screens/ExcerciseDetailScreen';
import { HomeScreen } from '@screens/HomeScreen';
import type { RootStackParamList } from '@screens/screen';
import { LoginScreen } from '@screens/LoginScreen';
import { RegisterScreen } from '@screens/RegisterScreen';
import { WelcomeScreen } from '@screens/WelcomeScreen';
import { AuthProvider } from '@context/AuthContext';
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="ExcerciseDetail" component={ExcerciseDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
