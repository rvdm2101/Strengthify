import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { TabScreenProps } from '../screen';

export const ExerciseOverviewScreen = ({ route }: TabScreenProps<"ExerciseOverview">) => {
    return (
      <View style={styles.container}>
        <Text>ExerciseOverviewScreen</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {},
});