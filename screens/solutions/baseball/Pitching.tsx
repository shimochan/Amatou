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
import battingAction from '../../../hooks/actions/battingAction';

export default function Pitching({ route, navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'Pitching'>) {
  const pushToHomeRun = () => {
    navigation.push('Homerun', {sound: route.params.sound})
  }
  const { startListening, stopListening } = battingAction(pushToHomeRun);
  startListening();
  return (
    <View style={styles.container}>
      <Image source ={require("../../../assets/images/Pitching.png")} style = {styles.image}/>
    </View>
  );
}

const styles = StyleSheet.create({
    image:{
        width:"100%",
        resizeMode: 'contain',
     },
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


