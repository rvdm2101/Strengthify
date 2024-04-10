import { StyleSheet, Text, View } from 'react-native';
import { ScreenProps } from '../screen';

export const ExcerciseDetailScreen = ({ route }: ScreenProps<"ExcerciseDetail">) => {
    return (
      <View style={styles.container}>
        <Text>ExcerciseDetail {route.params.excerciseId}</Text>
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