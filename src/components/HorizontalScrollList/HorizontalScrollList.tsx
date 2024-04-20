import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

interface HorizontalScrollListItemProps {
    title: string;
}

interface HorizontalScrollListProps {
    title: string;
    items: HorizontalScrollListItemProps[];
}

export const HorizontalScrollList = ({ title, items }: HorizontalScrollListProps) => {
    return (
        <View style={styles.container}>
          <Text variant='headlineSmall' style={styles.title}>{title}</Text>
          <ScrollView horizontal contentContainerStyle={styles.itemContainer}>
            {items.map((item, index) => (
                <View style={styles.item} key={index}>
                    <View style={styles.itemContent}>
                        <Text>{item.title}</Text>
                    </View>
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
        width: 170,
        height: 170,
        backgroundColor: '#D9D9D9',
    },
    itemContent: {
        marginTop: 'auto',
        marginHorizontal: 8,
        marginBottom: 8,
    },
  });