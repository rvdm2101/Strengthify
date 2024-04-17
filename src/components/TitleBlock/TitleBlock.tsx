import { Topbar, TopbarProps } from '@components/Topbar/Topbar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

interface TitleBlockProps {
    title: string;
    subtitle?: string;
    topbarProps?: TopbarProps;
}

export const TitleBlock = ({ title, subtitle, topbarProps }: TitleBlockProps) => {
    return (
        <View style={styles.titleBlock}>
            {topbarProps && <Topbar {...topbarProps} />}
            <View style={[styles.titleContainer, topbarProps ? styles.titleContainerWithTopbar : styles.titleContainerWithoutTopbar]}>
                <Text variant='displaySmall'>{title}</Text>
                {subtitle && <Text variant='headlineSmall'>{subtitle}</Text>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titleBlock: {
        marginBottom: 64,
    },
    titleContainer: {
        marginHorizontal: 16,
    },
    titleContainerWithoutTopbar: {
        marginTop: 128,
    },
    titleContainerWithTopbar: {
        marginTop: 35,
    }
});