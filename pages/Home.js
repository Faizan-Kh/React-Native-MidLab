import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

const Home = ({navigation}) => {
  const goToProfile = () => {
    navigation.navigate('ProfileScreen')
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Welcome to home screen</Text>
        <Button title="Go to Profile" onPress={goToProfile}/>
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
    alignItems: 'center',
  },

  text: {
    fontSize: 24,
    marginBottom: 20,
  }
});
export default Home;
