import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { HomeScreenProps } from './HomeScreen';
import type { ExerciseDetailScreenProps } from './ExerciseDetailScreen';
import { LoginScreenProps } from './LoginScreen';
import { RegisterScreenProps } from './RegisterScreen';
import { WelcomeScreenProps } from './WelcomeScreen';
import { FeaturedOverviewScreenProps } from './FeaturedOverviewScreen';
import { WorkoutOverviewScreenProps } from './WorkoutOverviewScreen';
import { ExerciseOverviewScreenProps } from './ExerciseOverviewScreen';
import { InsightScreenProps } from './InsightScreen';

export type RootStackParamList = {
  Home: HomeScreenProps;
  Welcome: WelcomeScreenProps;
  Login: LoginScreenProps;
  Register: RegisterScreenProps;
  ExerciseDetail: ExerciseDetailScreenProps;
};

export type RootTabParamList = {
  FeaturedOverview: FeaturedOverviewScreenProps;
  WorkoutOverview: WorkoutOverviewScreenProps;
  ExerciseOverview: ExerciseOverviewScreenProps;
  Insight: InsightScreenProps;
};

export type StackScreenProps<T> = NativeStackScreenProps<RootStackParamList, T>;
export type TabScreenProps<T> = BottomTabScreenProps<RootTabParamList, T>;