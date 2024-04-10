import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ScreenProps } from '../screen';
import { useEffect } from 'react';

export const HomeScreen = ({ navigation }: ScreenProps<"Home">) => {
  useEffect(() => {
    navigation.navigate('Login', {});
  }, []);

    return (
      <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
          <Button
          title="Go to Details"
          onPress={() => navigation.navigate('ExcerciseDetail', { excerciseId: 2 })}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
