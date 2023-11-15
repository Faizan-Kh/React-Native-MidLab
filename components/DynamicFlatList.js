import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const DynamicFlatList = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState('123');
  const [name, setName] = useState('');
  const [regNo, setRegNo] = useState('');
  const [age, setAge] = useState('');

  const addItem = () => {
    if (id && name && regNo && age) {
      setData(prevData => [
        ...prevData,
        {
          id: id,
          name: name,
          regNo: regNo,
          age: age,
        },
      ]);
      setId('');
      setName('');
      setRegNo('');
      setAge('');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>ID: {item.id}</Text>
      <Text>Name: {item.name}</Text>
      <Text>RegNo: {item.regNo}</Text>
      <Text>Age: {item.age}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="ID"
          value={id}
          onChangeText={text => setId(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="RegNo"
          value={regNo}
          onChangeText={text => setRegNo(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          value={age}
          onChangeText={text => setAge(text)}
        />
        <Button title="Add Item" onPress={addItem} />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
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

export default DynamicFlatList;
