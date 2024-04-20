import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { ScreenProps } from '../screen';
import { Topbar } from '@components/Topbar';
import { commonStyles } from 'commonStyles';
import { HorizontalScrollList } from 'components/HorizontalScrollList';
import { AuthContext } from '@context/AuthContext';

export const HomeScreen = ({ navigation }: ScreenProps<"Home">) => {
  const { profile } = React.useContext(AuthContext);

  const items = [
    { title: 'Upperbody workout' },
    { title: 'Upperbody workout' },
    { title: 'Upperbody workout' },
    { title: 'Upperbody workout' },
  ]

    return (
      <SafeAreaView style={styles.container}>
        <Topbar title={`Hi ${profile?.username}!`} />
        <View style={styles.content}>
          <HorizontalScrollList title='Quick daily workout programs' items={items} />
          <HorizontalScrollList title='Featured workouts' items={items} />
          <HorizontalScrollList title='Featured exercises' items={items} />
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  content: {
    ...commonStyles.horizontalScreenSpacing,
    marginTop: 10,
  },
});
