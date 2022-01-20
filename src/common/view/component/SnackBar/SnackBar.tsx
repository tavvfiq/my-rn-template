import React from 'react';
import { View, Text } from 'react-native';

interface Props {
  renderContent?: () => React.ReactNode;
}

const SnackBar = ({}: Props) => {
  return (
    <View>
      <Text />
    </View>
  );
};

export default SnackBar;
