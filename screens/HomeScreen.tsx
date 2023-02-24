import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, View } from 'react-native';
import { RootTabScreenProps } from '../types';
import { Pressable } from 'react-native';

const HomeScreen = ({ navigation }: RootTabScreenProps<'Home'>) => {
  return (
    <View style={styles.container}>
      <Button color = "green" title='プチプチへ' onPress={() => navigation.push('PuchiPuchi')} />
      <Button color = "green" title='Gyroへ' onPress={() => navigation.push('Gyro')} />
      <Button color = "green" title='ストレス追加画面へ' onPress={() => navigation.push('AddStress')} />
      <Button color = "green" title='野球へ' onPress={() => navigation.push('Batting')} />
      <Button color = "green" title='キルアクションへ' onPress={() => navigation.push('CutAction')} />
      <Button color = "green" title='ストレス履歴画面へ' onPress={() => navigation.push('History')} />
      <Button color = "green" title='ジョギングへ' onPress={() => navigation.push('Jogging')} />
      <Button color = "green" title='締切り画面へ' onPress={() => navigation.push('SelectDeadline')} />
      <Button color = "green" title='ストレスサイズ選択画面へ' onPress={() => navigation.push('SelectSize')} />
      <Button color = "green" title='ゲーム選択画面へ' onPress={() => navigation.push('SolutionSelect')} />
      <Button color = "green" title='ストレス書く画面へ' onPress={() => navigation.push('WriteStress')} />
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
  button: {
    opacity: 0.5,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default HomeScreen;
