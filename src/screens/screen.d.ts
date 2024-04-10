import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { HomeScreenProps } from './HomeScreen';
import type { ExcerciseDetailScreenProps } from './ExcerciseDetailScreen';

export type RootStackParamList = {
  Home: HomeScreenProps;
  ExcerciseDetail: ExcerciseDetailScreenProps;
};

export type ScreenProps<T> = NativeStackScreenProps<RootStackParamList, T>;