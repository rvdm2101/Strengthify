import React, { useCallback } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { ScreenProps } from '../screen';

export const WelcomeScreen = ({ navigation }: ScreenProps<"Welcome">) => {
    const loginAction = useCallback(() => navigation.navigate('Login', {}), []);
    const registerAction = useCallback(() => navigation.navigate('Register', {}), []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text variant='displaySmall'>Strengtify</Text>
                <Text variant='headlineSmall'>The workout manager</Text>
            </View>
            <View style={styles.actionContainer}>
                <View style={styles.action}>
                    <Button onPress={registerAction}>Sign up</Button>
                </View>
                <View style={styles.action}>
                    <Button
                        mode='contained'
                        icon='chevron-right'
                        contentStyle={styles.loginActionContent}
                        style={styles.loginAction}
                        onPress={loginAction}
                    >
                        Login
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    titleContainer: {
        flexDirection: 'column',
        flex: 1,
        marginTop: 128,
        marginHorizontal: 16,
    },
    actionContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        gap: 64,
        marginBottom: 86,
    },
    action: {
        flex: 1,
    },
    loginAction: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
    },
    loginActionContent: {
        flexDirection: 'row-reverse'
    }
});
