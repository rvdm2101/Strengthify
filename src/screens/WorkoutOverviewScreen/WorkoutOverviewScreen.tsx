import { StyleSheet, View } from 'react-native';
import { TabScreenProps } from '../screen';
import { Text } from 'react-native-paper';

export const WorkoutOverviewScreen = ({ route }: TabScreenProps<"WorkoutOverview">) => {
    return (
      <View style={styles.container}>
        <Text>WorkoutOverviewScreen</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {},
});