//コピペ段階
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Themed';
import React from 'react';
import {  Button } from 'react-native';
import * as Haptics from 'expo-haptics';
import * as NativeStack from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types';
import { useState } from 'react';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import { Image ,ImageBackground} from 'react-native';

export default function Batting({ navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'Batting'>) {
  if (window.location.pathname === "../Batting") {
    setTimeout(() => {
      window.location.href = "../Piching";
    }, 3 * 1000);
  }

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


