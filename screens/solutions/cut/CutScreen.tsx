import { StyleSheet } from 'react-native';
import { View } from '../../../components/Themed';
import React from 'react';
import { Text, Image, Button } from 'react-native';
import * as NativeStack from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types';
import cutAction from '../../../hooks/actions/cutAction';

export default function CutAction({ navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'CutAction'>) {
  const { opacity, startListening, stopListening } = cutAction();

  startListening();

  return (
  <View style={styles.container}>
    <Button title='Start' onPress={startListening} />
    <Button title='Stop' onPress={stopListening} />
    <Image style={[styles.effect, { opacity: opacity }]} source={require('../../../assets/images/cut-effect.png')} />
  </View>
  );
}

const styles = StyleSheet.create({
  effect: {
    width: 400,
    resizeMode: 'contain',
  },
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
