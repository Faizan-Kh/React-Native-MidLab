import React, { useState } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';
import { useData } from '../components/DataContext'; // Import the useData hook
import Toast from 'react-native-toast-message';

const ContactScreen = ({ navigation }) => {
  const { updateCombinedData } = useData(); // Access updateCombinedData from the context
  const [contact, setContact] = useState('');

  const addContact = () => {
    if (contact.trim() !== '') {
      const newData = { type: 'contact', value: contact };
      updateCombinedData(newData); // Update the shared data
      setContact('');
      Toast.show({
        type: 'success',
        text1: 'Data Added',
        text2: `Contact: ${contact}`,
        visibilityTime: 3000, // Display duration in milliseconds
      });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Contact"
        value={contact}
        onChangeText={(text) => setContact(text)}
      />
      <Button title="Add Contact" onPress={addContact} />
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

export default ContactScreen;
