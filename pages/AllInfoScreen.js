import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const AllInfoScreen = ({ route }) => {
  const { data } = route.params;
  console.log(data);

  const renderDataItem = ({ item }) => {
    if (item.type === 'registration') {
      return (
        <View style={styles.item}>
          <Text>Registration Number: {item.value}</Text>
        </View>
      );
    } else if (item.type === 'name') {
      return (
        <View style={styles.item}>
          <Text>Name: {item.value}</Text>
        </View>
      );
    } else if (item.type === 'contact') {
      return (
        <View style={styles.item}>
          <Text>Contact: {item.value}</Text>
        </View>
      );
    }
    // Add more conditions for other types of data if needed

    return null; // Return null for unhandled types
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
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
