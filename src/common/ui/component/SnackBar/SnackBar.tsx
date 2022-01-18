import React from 'react';
import { View, Text } from 'react-native';

interface Props {
  renderContent?: () => React.ReactNode;
}

const SnackBar = ({ renderContent } : Props) => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default SnackBar;
