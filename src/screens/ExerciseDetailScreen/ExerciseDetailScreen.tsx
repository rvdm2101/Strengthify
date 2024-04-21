import { StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '../screen';

export const ExerciseDetailScreen = ({ route }: StackScreenProps<"ExerciseDetail">) => {
    return (
      <View style={styles.container}>
        <Text>ExcerciseDetail {route.params.exerciseId}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});