import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { HomeScreenProps } from './HomeScreen';
import type { ExcerciseDetailScreenProps } from './ExcerciseDetailScreen';
import { LoginScreenProps } from './LoginScreen';
import { RegisterScreenProps } from './RegisterScreen';

export type RootStackParamList = {
  Home: HomeScreenProps;
  ExcerciseDetail: ExcerciseDetailScreenProps;
  Login: LoginScreenProps;
  Register: RegisterScreenProps;
};

export type ScreenProps<T> = NativeStackScreenProps<RootStackParamList, T>;