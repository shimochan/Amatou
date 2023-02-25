import { StyleSheet, TouchableOpacity } from 'react-native';
import { View } from '../../../components/Themed';
import React, { useState, useEffect } from 'react';
import { Button, Text } from 'react-native';
import * as NativeStack from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types';
import { ZStack, HStack, VStack, Spacer } from 'react-native-stacks';
export default function Jogging({ navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'Jogging'>) {

  const [now, setNow] = useState(Date.now());
  const [count, setCount] = useState(10);
  const [textstring, setText] = useState("開始");
  const [mode, setMode] = useState(0);//0:初期、1:動作中、2:停止中
  // let mode = 0;
  let use: () => void;
  let time: number = 10;


  const switchMode = () => {
    switch (mode) {
      case 0:
        setMode(1);
        setText("停止");
        break;
      case 1:
        setMode(2);
        setText("再開");
        break;
      case 2:
        setMode(1);
        setCount(count);
        setText("停止");
        break;
    }
  }

  const reset = () => {
    setMode(0);
    setCount(10);
    setText("開始");
  }

  const countup = setTimeout(() => {
    if (mode == 1) {
      const next = Number((count - 0.1).toFixed(1));
      if (next < 0) {
        setCount(0.0);
        setMode(2);
      }
      else {
        setCount(next);
      }
    }
  }, 1 * 100);

  if (mode == 0) {
    countup;
  }

  return (
    <View style={styles.container}>
      <VStack spacing={10} style={styles.stack}>
        <Text style={styles.time}>{count}</Text>
        <TouchableOpacity activeOpacity={0.5} onPress={switchMode} style={styles.button}>
          <Text style={styles.text}>{textstring}</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity activeOpacity={0.5} onPress={reset}>
        <Text>reset</Text>
      </TouchableOpacity> */}
      </VStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  stack: {
    width: `80%`,
  },
  time: {
    width: '100%',
    textAlign: 'center',
    fontSize: 100,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'black',
    color: 'white',
  },
  button: {
    borderColor: 'black',
    borderWidth: 1,
    paddingTop: 20,
    paddingRight: 40,
    paddingBottom: 20,
    paddingLeft: 40,

  },
  text: {
    fontSize: 30
  }
});