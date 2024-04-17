import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export interface TopbarProps {
    title?: string;
    backAction?: () => void;
}

export const Topbar = ({ title, backAction }: TopbarProps) => {
    return (
        <Appbar.Header style={styles.container}>
            {backAction && <Appbar.BackAction onPress={backAction} />}
            {title && <Appbar.Content title={title} />}
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
});