import React, { useState } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';

const ContactsScreen = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState('');

  const addContact = () => {
    if (newContact.trim() !== '') {
      const contactData = { type: 'contact', value: newContact };
      setContacts((prevContacts) => [...prevContacts, contactData]);
      setNewContact(''); // Clear the input field after adding
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Contact"
          value={newContact}
          onChangeText={(text) => setNewContact(text)}
        />
        <Button title="Add" onPress={addContact} />
      </View>

      
      <Button
        title="View All Contacts"
        onPress={() => {
          navigation.navigate('AllInfo', { data: contacts });
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

export default ContactsScreen;
