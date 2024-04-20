import React, { useCallback, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { ScreenProps } from '../screen';
import { TitleBlock } from '@components/TitleBlock';
import { AuthContext } from '@context/AuthContext';
import { commonStyles } from 'commonStyles';

export const LoginScreen = ({ navigation }: ScreenProps<"Login">) => {
    const { login } = React.useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const backToWelcomeAction = useCallback(() => navigation.navigate('Welcome', {}), []);
    const loginAction = useCallback(() => {
      login(username, password);
    }, [username, password]);
    const lostPasswordAction = useCallback(() => {}, []);

    return (
      <SafeAreaView style={styles.container}>
        <TitleBlock title='Welcome!' subtitle='Sign in with your account to continue' topbarProps={{ backAction: backToWelcomeAction }} />
        <View style={styles.inputContainer}>
          <TextInput label="Username" onChangeText={setUsername} value={username} textContentType="username" />
          <TextInput label="Password" onChangeText={setPassword} value={password} secureTextEntry textContentType="password" />
        </View>
        <View style={styles.actionContainer}>
          <Button mode='contained' onPress={loginAction}>Login</Button>
          <Button onPress={lostPasswordAction}>Forgot password?</Button>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    inputContainer: {
      ...commonStyles.horizontalScreenSpacing,
      marginTop: 32,
      gap: 16,
    },
    actionContainer: {
      marginTop: 'auto',
      marginHorizontal: 48,
      marginBottom: 172,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      gap: 16,
    }
});
