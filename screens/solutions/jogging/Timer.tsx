import { StyleSheet } from 'react-native';
import { View } from '../../../components/Themed';
import React, { useState, useEffect } from 'react';
import {  Button } from 'react-native';
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

  useEffect(() => {
    const timer = setTimeout(() => {
      //some action
      console.log(
        '10 seconds has passed. TimerID ' +
          String(timer) +
          ' has finished.'
      );
    }, 10 * 1000);
    console.log('TimerID ' + String(timer) + ' has started.');

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
      <div>
        ・このページを開くと10秒のカウントが開始します。
      </div>
      <div>
        ・カウントが完了すると「10 seconds has passed.」と出力されます。
      </div>
      <div>
        ・Restartボタンをクリックすると、タイマーが0秒から再開始されます。以前のタイマーはキャンセルされます。
      </div>
      <div>
        <button
          onClick={() => {
            setNow(Date.now());
          }}
        >
          Restart
        </button>
      </div>
    </>
  );
};
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
});
