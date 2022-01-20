import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PressableOpacity } from '~common/ui/component/PressableOpacity';

interface Props {
  counter: number;
  increase: () => void;
  decrease: () => void;
  navigateToCounter2: () => void;
  showOverlay: () => void;
  showModal: () => void;
  showBottomsheet: () => void;
}

const DemoView = ({
  counter,
  increase,
  decrease,
  navigateToCounter2,
  showOverlay,
  showModal,
  showBottomsheet,
}: Props) => {
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
      <View style={styles.buttonContainer}>
        <PressableOpacity style={styles.button} onPress={showOverlay}>
          <Text style={styles.text}>show notification</Text>
        </PressableOpacity>
        <PressableOpacity style={styles.button} onPress={showOverlay}>
          <Text style={styles.text}>show notification</Text>
        </PressableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <PressableOpacity style={styles.button2} onPress={showModal}>
          <Text style={styles.text}>show modal</Text>
        </PressableOpacity>
        <PressableOpacity style={styles.button2} onPress={showBottomsheet}>
          <Text style={styles.text}>show bottomsheet</Text>
        </PressableOpacity>
      </View>
      <PressableOpacity style={styles.button3} onPress={navigateToCounter2}>
        <Text style={styles.text}>go to counter 2</Text>
      </PressableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  button2: {
    backgroundColor: 'yellow',
    flexGrow: 1,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button3: {
    backgroundColor: 'green',
    flexGrow: 1,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DemoView;
