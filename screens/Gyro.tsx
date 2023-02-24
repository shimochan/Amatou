import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';
import * as NativeStack from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { Accelerometer } from 'expo-sensors';
import * as Haptics from 'expo-haptics';

export default function Gyro({ navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'Gyro'>) {
  let sumCount = 0;
  const [{ x, y, z }, setData] = useState({ x: 0, y: 0, z: 0 });
  let { xSum, ySum, zSum } = { xSum: 0, ySum: 0, zSum: 0 };

  Accelerometer.setUpdateInterval(200);

  return (
    <View style={styles.container}>
      <Button title='Start' onPress={() => {
        Accelerometer.addListener( (gyroscopeData) => {
          setData(gyroscopeData);

          if (sumCount >= 5) {
            // Passed for 200ms * 5 = 1sec
            console.log("Finished");
            console.log(`x: ${gyroscopeData.x}`);
            console.log(`y: ${gyroscopeData.y}`);
            console.log(`z: ${gyroscopeData.z}`);
            console.log(`xSum: ${xSum}`);
            console.log(`ySum: ${ySum}`);
            console.log(`zSum: ${zSum}`);

            const xInRange = (-4.0 <= xSum && xSum <= 4.0);
            const yInRange = (-5.0 <= ySum && ySum <= -0.8);
            const zInRange = (-3.5 <= zSum && zSum <= 3.5);
            if (xInRange && yInRange && zInRange) {
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            }

            Accelerometer.removeAllListeners();
            sumCount = 0;
            xSum = 0;
            ySum = 0;
            zSum = 0;
          } else {
            console.log(sumCount);
            
            sumCount += 1;

            xSum += gyroscopeData.x;
            ySum += gyroscopeData.y;
            zSum += gyroscopeData.z;
          }
        });
      }} />
      <Button title='Stop' onPress={() => {
        Accelerometer.removeAllListeners();
        sumCount = 0;
        xSum = 0;
        ySum = 0;
        zSum = 0;
      }} />
      <Text style={styles.text}>x: {Math.round(x * 100) / 100}</Text>
      <Text style={styles.text}>y: {Math.round(y * 100) / 100}</Text>
      <Text style={styles.text}>z: {Math.round(z * 100) / 100}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
