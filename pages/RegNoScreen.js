import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const RegNoScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [regNo, setRegNo] = useState('');

  const addRegNo = () => {
    if (regNo.trim() !== '') {
      setData(prevData => [...prevData, { key: String(prevData.length + 1), regNo: regNo }]);
      setRegNo('');
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>{item.regNo}</Text>
      </View>
    );
  };

  const navigateToAllInfo = () => {
    if (data.length > 0) {
      navigation.navigate('AllInfoScreen', { regData: data }); // Pass all registration data to AllInfoScreen
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Registration Number"
          value={regNo}
          onChangeText={text => setRegNo(text)}
        />
        <Button title="Add Reg No" onPress={addRegNo} />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        style={styles.list}
      />
      <Button title="Go to All Info" onPress={navigateToAllInfo} />
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

export default RegNoScreen;
