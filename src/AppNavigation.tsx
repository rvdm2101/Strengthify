import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ExerciseDetailScreen } from 'screens/ExerciseDetailScreen';
import { HomeScreen } from '@screens/HomeScreen';
import { LoginScreen } from '@screens/LoginScreen';
import { RegisterScreen } from '@screens/RegisterScreen';
import { WelcomeScreen } from '@screens/WelcomeScreen';
import type { RootStackParamList } from '@screens/screen';

import { AuthContext } from '@context/AuthContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  const { profile } = React.useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {profile?.username ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ExerciseDetail" component={ExerciseDetailScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}