import React, { useState } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';

const RegNoScreen = ({ navigation }) => {
  const [regNos, setRegNos] = useState([]);
  const [newRegNo, setNewRegNo] = useState('');

  const addRegNo = () => {
    if (newRegNo.trim() !== '') {
      const regData = { type: 'registration', value: newRegNo };
      setRegNos((prevRegNos) => [...prevRegNos, regData]);
      setNewRegNo(''); // Clear the input field after adding
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Registration Number"
          value={newRegNo}
          onChangeText={(text) => setNewRegNo(text)}
        />
        <Button title="Add" onPress={addRegNo} />
      </View>

      {/* Button to navigate to AllInfo screen */}
      <Button
        title="View All Registration Numbers"
        onPress={() => {
          navigation.navigate('AllInfo', { data: regNos });
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

export default RegNoScreen;
