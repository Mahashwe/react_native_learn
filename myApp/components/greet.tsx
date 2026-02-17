import React from 'react';
import { View, Text } from 'react-native';
type greet = {
  name: string;
};

export const Greet: React.FC<greet> = ({ name }) => {
  return (
    <View>
      <Text style={{ fontSize: 40, color: 'black', fontStyle: 'italic' }}>
        Hello, {name}!
      </Text>
    </View>
  );
};
