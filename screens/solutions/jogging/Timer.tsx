import { StyleSheet, TouchableOpacity } from 'react-native';
import { View } from '../../../components/Themed';
import React, { useState, useEffect } from 'react';
import { Button, Text } from 'react-native';
import * as NativeStack from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types';
// export default function Jogging({ navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'Jogging'>) {
//   return (
//     <View style={styles.container}>
//       <Button color = "green" title='ホーム画面へ' onPress={() => navigation.goBack()} />
//     </View>
//   );
// }
export const Timer = () => {
  const [now, setNow] = useState(Date.now());
  const [count, setCount] = useState(10);
  let time: number = 10;
  let stop: number = 0;

  const switchstop = () => {
    stop == 0 ? 1 : 0;
  }


  const pushbutton = () => {

    clearTimeout
  }

  
  const countup = setTimeout(() => {
    if(stop == 0){
      const next = Number((count - 0.1).toFixed(1));
      if (next < 0) {
        setCount(0.0);
        stop = 1;
      }
      else {
        setCount(next);
      }
    }
  }, 1 * 100);

  if(stop==0){
    countup;
  }


  const stoptimer = () => {
    if (stop == 1) {
      stop = 0;
    }
    else {
      stop = 1;
    }
    console.log(stop);
  }

  const restart = () =>{
    setCount(count);
  }

  const reset = () =>{
    setCount(10);
  }

  return (
    <>
      <Text>
        {count},{stop}
        <TouchableOpacity activeOpacity={0.5} onPress={stoptimer}>
          <Text>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={restart}>
          <Text>Restart</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={reset}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </Text>
    </>
  );
};