import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PressableOpacity } from '~common/ui/component/PressableOpacity';

interface Props {
  counter: number;
  increase: () => void;
  decrease: () => void;
}

const CounterView = ({ counter, increase, decrease }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{counter}</Text>
      <View style={styles.buttonContainer}>
        <PressableOpacity style={styles.button} onPress={increase}>
          <Text style={styles.text}>Increase</Text>
        </PressableOpacity>
        <PressableOpacity style={styles.button} onPress={decrease}>
          <Text style={styles.text}>Decrease</Text>
        </PressableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    color: 'blue',
  },
  text: {
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'red',
    flexGrow: 1,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CounterView;
