import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { HomeScreenProps } from './HomeScreen';
import type { ExcerciseDetailScreenProps } from './ExcerciseDetailScreen';
import { LoginScreenProps } from './LoginScreen';

export type RootStackParamList = {
  Home: HomeScreenProps;
  ExcerciseDetail: ExcerciseDetailScreenProps;
  Login: LoginScreenProps;
};

export type ScreenProps<T> = NativeStackScreenProps<RootStackParamList, T>;