import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { ScreenProps } from '../screen';
import { useCallback, useState } from 'react';

export const LoginScreen = ({ navigation }: ScreenProps<"Login">) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginAction = useCallback(() => navigation.navigate('Home', {}), []);
    const registerAction = useCallback(() => navigation.navigate('Register', {}), []);
    const lostPasswordAction = useCallback(() => {}, []);

    return (
      <View style={styles.container}>
          <Text>Login with your account, to continue</Text>
          <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={setUsername}
                defaultValue={username}
                textContentType="username"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={setPassword}
                defaultValue={password}
                secureTextEntry={true}
                textContentType="password"
            />
          </View>
          <View style={styles.actionContainer}>
            <Button
            title="Login"
            onPress={loginAction}
            />
            <Button
            title="Sign-up"
            onPress={registerAction}
            />
            <Button
            title="Forgot password"
            onPress={lostPasswordAction}
            />
          </View>
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
    input: {
        height: 40,
    },
    inputContainer: {},
    actionContainer: {
        flexDirection: 'row',
        gap: 10,
    }
});
