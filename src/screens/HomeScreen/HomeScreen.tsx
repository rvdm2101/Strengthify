import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ScreenProps } from '../screen';
import { Topbar } from '@components/Topbar';

export const HomeScreen = ({ navigation }: ScreenProps<"Home">) => {
    return (
      <SafeAreaView style={styles.container}>
        <Topbar title='Hi name' />
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('ExcerciseDetail', { excerciseId: 2 })}
        />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
