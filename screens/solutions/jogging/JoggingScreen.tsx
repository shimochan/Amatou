import { StyleSheet, TouchableOpacity } from 'react-native';
import { View } from '../../../components/Themed';
import React, { useState } from 'react';
import { Text } from 'react-native';
import * as NativeStack from '@react-navigation/native-stack';
import { ActionType, RootStackParamList } from '../../../types';
import { VStack } from 'react-native-stacks';
import { Pedometer } from 'expo-sensors';
import RNPickerSelect from 'react-native-picker-select';

export default function Jogging({ route, navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'Jogging'>) {

  let time: number = 20;

  const list = [
    { label: '10秒', value: 10 },
    { label: '20秒', value: 20 },
    { label: '5分', value: 5 * 60 },
    { label: '10分', value: 10 * 60 },
    { label: '15分', value: 15 * 60 },
    { label: '20分', value: 20 * 60 },
    { label: '25分', value: 25 * 60 },
    { label: '30分', value: 30 * 60 },
    { label: '35分', value: 35 * 60 },
    { label: '40分', value: 40 * 60 },
    { label: '45分', value: 45 * 60 },
    { label: '50分', value: 50 * 60 },
    { label: '55分', value: 55 * 60 },
    { label: '60分', value: 60 * 60 },
    { label: '65分', value: 65 * 60 },
    { label: '70分', value: 70 * 60 },
    { label: '75分', value: 75 * 60 },
    { label: '80分', value: 80 * 60 },
    { label: '85分', value: 85 * 60 },
    { label: '90分', value: 90 * 60 }
  ];

  const [limit, setLimit] = useState<number>();

  let end: Date;
  const [stepCount, setStepCount] = useState(0);
  const [pastCount, setPastCount] = useState(0);

  const [count, setCount] = useState(time);
  const [text, setText] = useState("開始");
  const [mode, setMode] = useState(0);  //0:初期、1:動作中、2:停止中 3:終了後

  const [start, setStart] = useState(new Date());


  const switchMode = () => {
    switch (mode) {
      case 0:
        //スタートボタン押されたとき
        setMode(1);
        setStart(new Date());
        setText("停止");
        break;
      case 1:
        //中断ボタン押されたとき
        setMode(2);
        setText("再開");
        break;
      case 2:
        //再開ボタン押されたとき
        setPastCount(pastCount + stepCount);
        setStepCount(0);
        setMode(1);
        setStart(new Date());
        setCount(count);
        setText("停止");
        break;
      case 3:
        //結果画面ボタン押されたとき
        navigation.replace('Result', { stress: route.params.stress, type: ActionType.Joggnig })
        break;
    }
  }

  const getcount = async () => {
    const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
    setStepCount(pastStepCountResult.steps);
  }

  const reset = () => {
    setMode(0);
    setStepCount(0);
    setPastCount(0);
    setCount(time);
    setText("開始");
  }

  const countdown = setTimeout(() => {
    if (mode == 1) {
      //タイマー動作中は
      const next = Number((count - 0.1).toFixed(1));

      if (next < 0) {
        //タイマー切れた瞬間
        setCount(0);
        end = new Date();
        getcount();
        setMode(3);
        setText("結果画面へ");
      }
      else {
        //タイマー絶賛動作中は
        setCount(next);
      }

      end = new Date();
      getcount();
    }
  }, 1 * 100);

  const handleonchange = (value: number) => {
    setCount(value != undefined ? value : 0);
    if (value == null && limit == undefined) {
      setMode(4);
      setText("走行時間を選択");
    }
    else {
      setMode(0);
      setText("開始");
    }
  }
  const judge = () => {
    if (limit != undefined) {
      return true
    }
    else {
      return false
    }
  }

  const countDisplay = () => {
    const hour = Math.floor(count / (60 * 60));
    const min = Math.floor(count / 60 - hour * 60);
    const sec = Math.floor(count % 60);
    const stMin = (min < 10 ? "0" + min.toString() : min.toString());
    const stSec = (sec < 10 ? "0" + sec.toString() : sec.toString());
    if (hour != 0) {
      return (
        <Text style={styles.time}>{hour}:{stMin}:{stSec}</Text>
      )
    }
    else if (min != 0) {
      return (
        <Text style={styles.time}>{min}:{stSec}</Text>
      )
    }
    else if (count > 10) {
      return (
        <Text style={styles.time}>{sec}</Text>
      )
    }
    else {
      return (
        <Text style={styles.time}>{count}</Text>
      )
    }
    // const min = ((count / 60)-(Number(hour))*60).toFixed;
    // const sec = count

  }


  return (
    <View style={styles.container}>
      <VStack spacing={10} style={styles.stack}>
        <Text>
          <RNPickerSelect
            onValueChange={(value) => handleonchange(value)}
            items={list}
            style={pickerSelectStyles}
            disabled={judge()}
          />
        </Text>
        {countDisplay()}
        <Text style={styles.count}>{pastCount + stepCount}<Text style={styles.ho}>歩</Text></Text>
        <TouchableOpacity activeOpacity={0.5} onPress={switchMode} style={styles.button}>
          <Text style={styles.text}>{text}</Text>
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
    width: `100%`,
  },
  time: {
    width: '85%',
    textAlign: 'center',
    fontSize: 80,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 30
  },
  button: {
    borderColor: 'black',
    borderWidth: 1,
    paddingTop: 20,
    paddingRight: 40,
    paddingBottom: 20,
    paddingLeft: 40,
    textAlign: 'center',
    borderRadius: 30
  },
  text: {
    lineHeight: 100,
    fontSize: 30,
    textAlign: 'center'
  },
  ho: {
    fontSize: 30
  }
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 20,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 3,
    borderColor: '#b2bec3',
    borderRadius: 30,
    color: 'black',
    backgroundColor: '#dfe6e9',
    textAlign: 'center',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: '#b2bec3',
    backgroundColor: '#dfe6e9',
    borderRadius: 30,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});