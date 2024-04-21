import { StyleSheet, View } from 'react-native';
import { TabScreenProps } from '../screen';
import { Text } from 'react-native-paper';

export const InsightScreen = ({ route }: TabScreenProps<"Insight">) => {
    return (
      <View style={styles.container}>
        <Text>InsightScreen</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {},
});