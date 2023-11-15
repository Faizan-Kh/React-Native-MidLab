import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const NameScreen = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');

  const addName = () => {
    if (name.trim() !== '') {
      setData(prevData => [...prevData, { key: String(prevData.length + 1), name: name }]);
      setName('');
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <Button title="Add Name" onPress={addName} />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
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

export default NameScreen;
