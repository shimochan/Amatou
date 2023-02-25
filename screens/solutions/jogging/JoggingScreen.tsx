import { StyleSheet, TouchableOpacity } from 'react-native';
import { View } from '../../../components/Themed';
import React, { useState, useEffect } from 'react';
import { Button, Text } from 'react-native';
import * as NativeStack from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types';
import { ZStack, HStack, VStack, Spacer } from 'react-native-stacks';
import { Pedometer } from 'expo-sensors';

export default function Jogging({ navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'Jogging'>) {

  let time: number = 20;
  const [currentStepCount, setCurrentStepCount] = useState(0);
  // const [end, setEnd] = useState();

  let end: Date;
  const [stepCount, setStepCount] = useState(0);
  const [stepNotCount, setNotCount] = useState(0);

  const [now, setNow] = useState(Date.now());
  const [count, setCount] = useState(time);
  const [text, setText] = useState("開始");
  const [mode, setMode] = useState(0);//0:初期、1:動作中、2:停止中
  // const [start, setStart] = useState(new Date());
  // const [now, setNow] = useState(Date.now());
  // let mode = 0;
  let use: () => void;
  const [start, setStart] = useState(new Date());

  // useEffect(() => {
  //   setStart(new Date());
  //   return () => {
  //   };
  // }, []);

  // if (mode == 1) {
  //   const subscribe = async () => {
  //     const isAvailable = await Pedometer.isAvailableAsync();

  //     if (isAvailable) {
  //       // start = new Date();
  //       // const start = new Date();
  //       // console.log(end.getDate() - 1);
  //       //console.log(end.getDate() - 1);
  //       // start.setDate(end.getDate() - 1);
  //       // //console.log(end.getDate() - 1);
  //       // const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);


  //       return Pedometer.watchStepCount(result => {
  //         setCurrentStepCount(result.steps);
  //       });
  //     }
  //   };
  //   subscribe();
  // };


  const switchMode = () => {
    switch (mode) {
      case 0://スタートボタン押されたとき
        setMode(1);
        setStart(new Date());
        setText("停止");
        console.log(new Date());
        break;
      case 1://中断ボタン押されたとき
        setMode(2);
        setCurrentStepCount(0);
        setText("再開");
        break;
      case 2://再開ボタン押されたとき
        setMode(1);
        setCount(count);
        setText("停止");
        break;
    }
  }

  const getcount = async () => {
    console.log("CALLED");
    const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
    console.log("LOG" + start);
    console.log("LOG" + end);
    console.log("LOG" + pastStepCountResult.steps);
    setStepCount(pastStepCountResult.steps);
  }

  const reset = () => {
    setMode(0);
    setCount(time);
    setText("開始");
  }

  const countdown = setTimeout(() => {
    if (mode == 1) {//タイマー動作中は
      const next = Number((count - 0.1).toFixed(1));
      if (next < 0) {//タイマー切れた瞬間
        setCount(0);
        setMode(2);
        // getcount();
        console.log(currentStepCount);
        console.log(new Date());
      }
      else {//タイマー絶賛動作中は
        setCount(next);
      }
      end = new Date();
      getcount();
    }
  }, 1 * 100);

  // if (mode == 0) {
  //   countdown;
  // }

  return (
    <View style={styles.container}>
      <VStack spacing={10} style={styles.stack}>
        <Text style={styles.time}>{count}</Text>
        <Text style={styles.count}>{stepCount}</Text>
        <TouchableOpacity activeOpacity={0.5} onPress={switchMode} style={styles.button}>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={reset}>
          <Text>reset</Text>
        </TouchableOpacity>
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
  count: {
    width: '100%',
    textAlign: 'center',
    fontSize: 70,
    paddingTop: 10,
    paddingBottom: 10,
    // backgroundColor: 'black',
    color: '#74b9ff',
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