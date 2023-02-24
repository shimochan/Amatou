import { StyleSheet } from 'react-native';
import { View } from '../../components/Themed';
import React from 'react';
import {  Button } from 'react-native';
import * as NativeStack from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

export default function History({ navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'History'>) {
  return (
    <View style={styles.container}>
      <Button color = "green" title='ホーム画面へ' onPress={() => navigation.goBack()} />
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
});
