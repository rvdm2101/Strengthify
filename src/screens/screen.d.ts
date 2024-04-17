import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { HomeScreenProps } from './HomeScreen';
import type { ExcerciseDetailScreenProps } from './ExcerciseDetailScreen';
import { LoginScreenProps } from './LoginScreen';
import { RegisterScreenProps } from './RegisterScreen';
import { WelcomeScreenProps } from './WelcomeScreen';

export type RootStackParamList = {
  Home: HomeScreenProps;
  Welcome: WelcomeScreenProps;
  Login: LoginScreenProps;
  Register: RegisterScreenProps;
  ExcerciseDetail: ExcerciseDetailScreenProps;
};

export type ScreenProps<T> = NativeStackScreenProps<RootStackParamList, T>;