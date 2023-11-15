import React, { useState } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';

const NameScreen = ({ navigation }) => {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState('');

  const addName = () => {
    if (newName.trim() !== '') {
      const nameData = { type: 'name', value: newName };
      setNames((prevNames) => [...prevNames, nameData]);
      setNewName(''); // Clear the input field after adding
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          value={newName}
          onChangeText={(text) => setNewName(text)}
        />
        <Button title="Add" onPress={addName} />
      </View>

      
      <Button
        title="View All Names"
        onPress={() => {
          navigation.navigate('AllInfo', { data: names });
        }}
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
});

export default NameScreen;
