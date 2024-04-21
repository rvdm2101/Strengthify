import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@screens/screen';

interface HorizontalScrollListItemProps {
    title: string;
    id: number;
}

interface HorizontalScrollListProps {
    title: string;
    items: HorizontalScrollListItemProps[];
}

export const HorizontalScrollList = ({ title, items }: HorizontalScrollListProps) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <View style={styles.container}>
          <Text variant='headlineSmall' style={styles.title}>{title}</Text>
          <ScrollView horizontal contentContainerStyle={styles.itemContainer}>
            {items.map((item, index) => (
                <View style={styles.item} key={index}>
                    <TouchableRipple rippleColor="rgba(0, 0, 0, .32)" onPress={() => navigation.navigate('ExerciseDetail', { exerciseId: item.id })}>
                            <View style={styles.itemContent}>
                                <Text>{item.title}</Text>
                            </View>
                    </TouchableRipple>
                </View>
            ))}
          </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
    },
    title: {
        marginBottom: 8,
    },
    itemContainer: {
        gap: 8,
    },
    item: {
        borderRadius: 16,
        width: 160,
        height: 160,
        backgroundColor: '#D9D9D9',
    },
    itemContent: {
        marginTop: 'auto',
        marginHorizontal: 8,
        marginBottom: 8,
    },
  });