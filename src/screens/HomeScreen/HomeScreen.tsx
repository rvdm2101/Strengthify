import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';

import { RootTabParamList, StackScreenProps } from '../screen';
import { Topbar } from '@components/Topbar';
import { AuthContext } from '@context/AuthContext';
import { CommonActions } from '@react-navigation/native';
import { BottomNavigation, Icon } from 'react-native-paper';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { FeaturedOverviewScreen } from '@screens/FeaturedOverviewScreen';
import { InsightScreen } from '@screens/InsightScreen';
import { ExerciseOverviewScreen } from '@screens/ExerciseOverviewScreen';
import { WorkoutOverviewScreen } from '@screens/WorkoutOverviewScreen';

const Tab = createBottomTabNavigator<RootTabParamList>();

const BottomTabBar = ({ navigation, state, descriptors, insets }: BottomTabBarProps) => (
  <BottomNavigation.Bar
    navigationState={state}
    safeAreaInsets={insets}
    onTabPress={({ route, preventDefault }) => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (event.defaultPrevented) {
        preventDefault();
      } else {
       navigation.dispatch({
          ...CommonActions.navigate(route.name, route.params),
          target: state.key,
        });
      }
    }}
    renderIcon={({ route, focused, color }) => {
      const { options } = descriptors[route.key];
      if (options.tabBarIcon) {
        return options.tabBarIcon({ focused, color, size: 24 });
      }

      return null;
    }}
    getLabelText={({ route }) => {
      const { options } = descriptors[route.key];
      return `${options.tabBarLabel}`;
    }}
  />
)

export const HomeScreen = ({ navigation }: StackScreenProps<"Home">) => {
  const { profile } = React.useContext(AuthContext);
  NavigationBar.setPositionAsync("absolute");
  NavigationBar.setButtonStyleAsync("dark");
  NavigationBar.setBackgroundColorAsync('#ffffff01');

    return (
      <SafeAreaView style={styles.container}>
        <Topbar title={`Hi ${profile?.username}!`} />
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={BottomTabBar}>
          <Tab.Screen
            name="FeaturedOverview"
            component={FeaturedOverviewScreen}
            options={{
              tabBarLabel: 'Featured',
              tabBarIcon: ({ color, size }) => {
                return <Icon source="star-box" size={size} color={color} />;
              }
            }}
          />
          <Tab.Screen
            name="WorkoutOverview"
            component={WorkoutOverviewScreen}
            options={{
              tabBarLabel: 'Workout',
              tabBarIcon: ({ color, size }) => {
                return <Icon source="weight-lifter" size={size} color={color} />;
              }
            }}
          />
          <Tab.Screen
            name="ExerciseOverview"
            component={ExerciseOverviewScreen}
            options={{
              tabBarLabel: 'Exercise',
              tabBarIcon: ({ color, size }) => {
                return <Icon source="yoga" size={size} color={color} />;
              }
            }}
          />
          <Tab.Screen
            name="Insight"
            component={InsightScreen}
            options={{
              tabBarLabel: 'Insight',
              tabBarIcon: ({ color, size }) => {
                return <Icon source="chart-line-variant" size={size} color={color} />;
              }
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
