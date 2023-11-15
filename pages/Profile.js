import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";


const Profile = ({navigation}) => {
  const goToTabNavigator = () => {
    navigation.navigate('TabNavigator')
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Welcome to Profile screen</Text>
        <Button title="Tab Navigator" onPress={goToTabNavigator}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    alignItems: "center",
  },

  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Profile;
