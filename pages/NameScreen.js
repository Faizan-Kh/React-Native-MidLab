import React, { useState } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';
import { useData } from '../components/DataContext'; // Import the useData hook
import Toast from 'react-native-toast-message';

const NameScreen = ({ navigation }) => {
  const { updateCombinedData } = useData(); // Access updateCombinedData from the context
  const [name, setName] = useState('');

  const addName = () => {
    if (name.trim() !== '') {
      const newData = { type: 'name', value: name };
      updateCombinedData(newData); // Update the shared data
      setName('');
      Toast.show({
        type: 'success',
        text1: 'Data Added',
        text2: `Name: ${name}`,
        visibilityTime: 3000, // Display duration in milliseconds
      });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button title="Add Name" onPress={addName} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    width: '80%',
  },
});

export default NameScreen;
