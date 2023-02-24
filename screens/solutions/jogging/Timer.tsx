import { StyleSheet } from 'react-native';
import { View } from '../../../components/Themed';
import React, { useState, useEffect } from 'react';
import {  Button, Text } from 'react-native';
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
  const [count, setCount] = useState(Date.now());

  useEffect(() => {
    const count = setTimeout(() => {
      console.log('10 seconds has passed. TimerID');
    }, 1 * 100);

    const timer = setTimeout(() => {
      console.log('10 seconds has passed. TimerID');
    }, 10 * 1000);

    //クリーンアップ
    return () => {
      console.log(
        'Restart button has clicked. TimerID ' + String(timer) + ' has canceled.'
      );
      clearTimeout(timer);
    };
  }, [now]);

  return (
    <>
      <Text>
        {count}
      </Text>
    </>
  );
};