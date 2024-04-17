import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { ScreenProps } from '../screen';
import { useCallback, useState } from 'react';
import { TitleBlock } from '@components/TitleBlock';

export const RegisterScreen = ({ navigation }: ScreenProps<"Register">) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const backToWelcomeAction = useCallback(() => navigation.navigate('Welcome', {}), []);
    const signupAction = useCallback(() => navigation.navigate('Home', {}), []);
    const lostPasswordAction = useCallback(() => {}, []);

    return (
      <SafeAreaView style={styles.container}>
        <TitleBlock title='Hi!' subtitle='Create a new account' topbarProps={{ backAction: backToWelcomeAction }} />
        <View style={styles.inputContainer}>
          <TextInput label="Username" onChangeText={setUsername} value={username} textContentType="username" />
          <TextInput label="Email address" onChangeText={setEmail} value={email} textContentType="emailAddress" />
          <TextInput label="Password" onChangeText={setPassword} value={password} secureTextEntry textContentType="password" />
        </View>
        <View style={styles.actionContainer}>
          <Button mode='contained' onPress={signupAction}>Sign up</Button>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    inputContainer: {
      marginTop: 32,
      marginHorizontal: 16,
      gap: 16,
    },
    actionContainer: {
      marginTop: 'auto',
      marginHorizontal: 48,
      marginBottom: 172,
      flexDirection: 'column',
      justifyContent: 'flex-end',
    }
});
