import React from 'react';
import { View, Text } from 'react-native';

const AllInfoScreen = ({ route }) => {
  const { params } = route;
  
  return (
    <View>
      <Text>{params.type}: {params.value}</Text>
    </View>
  );
};

export default AllInfoScreen;
