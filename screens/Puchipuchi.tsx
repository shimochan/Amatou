import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import React from 'react';
import {  Button } from 'react-native';
import * as Haptics from 'expo-haptics';
import * as NativeStack from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { useState } from 'react';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import { Image ,ImageBackground} from 'react-native';


export default function PuchiPuchi({ navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'PuchiPuchi'>) {
  const initialpuchipuchi = {uri : "../assets/images/konpou_puchipuchi.png"}
  const imagepuchipuchi2 = {uri : "../assets/images/ubble-wrap_10623.png"}
  const [imagepuchipuchi,setimagepuchipuchi] = useState(initialpuchipuchi)
  function puchipuchiimage(){
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    setimagepuchipuchi(imagepuchipuchi2)
  }
  return (
    <View style={styles.container}>
      <ImageBackground source = {imagepuchipuchi} resizeMode="cover">
        <Button color = "green" title='プチプチ' onPress={() => puchipuchiimage}/>
        <Button color = "green" title='ホーム画面へ' onPress={() => navigation.goBack()} />
      </ImageBackground>
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
