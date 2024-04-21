import { StyleSheet, View } from 'react-native';
import { TabScreenProps } from '../screen';
import { HorizontalScrollList } from '@components/HorizontalScrollList';
import { commonStyles } from 'commonStyles';

export const FeaturedOverviewScreen = (props: TabScreenProps<"FeaturedOverview">) => {
    const items = [
        { title: 'Upperbody workout', id: 2 },
        { title: 'Upperbody workout', id: 2 },
        { title: 'Upperbody workout', id: 2 },
        { title: 'Upperbody workout', id: 2 },
    ];

    return (
        <View style={styles.container}>
            <HorizontalScrollList title='Quick daily workout programs' items={items} />
            <HorizontalScrollList title='Featured workouts' items={items} />
            <HorizontalScrollList title='Featured exercises' items={items} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      ...commonStyles.horizontalScreenSpacing,
      marginTop: 10,
    },
});