import React, { useState } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';
import { useData } from '../components/DataContext'; // Import the useData hook
import Toast from 'react-native-toast-message';

const RegNoScreen = ({ navigation }) => {
  const { updateCombinedData } = useData(); // Access updateCombinedData from the context
  const [regNo, setRegNo] = useState('');

  const addRegNo = () => {
    if (regNo.trim() !== '') {
      const newData = { type: 'regNo', value: regNo };
      updateCombinedData(newData); // Update the shared data
      setRegNo('');
      Toast.show({
        type: 'success',
        text1: 'Data Added',
        text2: `Registration Number: ${regNo}`,
        visibilityTime: 3000, // Display duration in milliseconds
      });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Registration Number"
        value={regNo}
        onChangeText={(text) => setRegNo(text)}
      />
      <Button title="Add Reg No" onPress={addRegNo} />
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

export default RegNoScreen;
