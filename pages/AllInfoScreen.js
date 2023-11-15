import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useData } from '../components/DataContext'; // Import the useData hook

const AllInfoScreen = () => {
  const { combinedData } = useData(); // Access combinedData from the context

  const renderDataItem = ({ item }) => {
    if (item.type === 'name') {
      return (
        <View style={styles.item}>
          <Text>Name: {item.value}</Text>
        </View>
      );
    } else if (item.type === 'regNo') {
      return (
        <View style={styles.item}>
          <Text>Registration Number: {item.value}</Text>
        </View>
      );
    } else if (item.type === 'contact') {
      return (
        <View style={styles.item}>
          <Text>Contact: {item.value}</Text>
        </View>
      );
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={combinedData}
        renderItem={renderDataItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  list: {
    flex: 1,
  },
  item: {
    backgroundColor: '#84b8dc',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default AllInfoScreen;
