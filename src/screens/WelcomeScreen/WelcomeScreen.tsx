import React, { useCallback } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { ScreenProps } from '../screen';
import { TitleBlock } from '@components/TitleBlock';

export const WelcomeScreen = ({ navigation }: ScreenProps<"Welcome">) => {
    const loginAction = useCallback(() => navigation.navigate('Login', {}), []);
    const registerAction = useCallback(() => navigation.navigate('Register', {}), []);

    return (
        <SafeAreaView style={styles.container}>
            <TitleBlock title='Strengtify' subtitle='The workout manager' />
            <View style={styles.actionContainer}>
                <Button onPress={registerAction} style={styles.action}>Sign up</Button>
                <Button
                    mode='contained'
                    icon='chevron-right'
                    contentStyle={styles.loginActionContent}
                    style={[styles.action, styles.loginAction]}
                    onPress={loginAction}
                >
                    Login
                </Button>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    actionContainer: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 'auto',
        justifyContent: 'space-between',
        gap: 64,
        marginBottom: 64,
    },
    action: {
        flex: 1,
    },
    loginAction: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 8,
    },
    loginActionContent: {
        flexDirection: 'row-reverse'
    }
});
