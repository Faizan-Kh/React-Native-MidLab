import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const ContactsScreen = () => {
  const [data, setData] = useState([]);
  const [contact, setContact] = useState('');

  const addContact = () => {
    if (contact.trim() !== '') {
      setData(prevData => [...prevData, { key: String(prevData.length + 1), contact: contact }]);
      setContact('');
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>{item.contact}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Contact"
          value={contact}
          onChangeText={text => setContact(text)}
        />
        <Button title="Add Contact" onPress={addContact} />
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

export default ContactsScreen;
