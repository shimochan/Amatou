import { StyleSheet, TouchableOpacity } from 'react-native';
import { View } from '../components/Themed';
import React from 'react';
import {  Button } from 'react-native';
import * as Haptics from 'expo-haptics';
import * as NativeStack from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { useState } from 'react';
import { Image} from 'react-native';
import FastImage from 'react-native-fast-image';

export default function PuchiPuchione(key: number) {
  const imagepuchipuchi2 = require("../assets/images/puchipuchitubushitaato.webp")
  const [imagepuchipuchi, setimagepuchipuchi] = useState(require("../assets/images/puchipuchitubusumae.webp"))
  let puchipuchicount = 0
  const puchipuchiimage = () => {
    if(puchipuchicount === 0){
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
      setimagepuchipuchi(imagepuchipuchi2)
      puchipuchicount++;
    }
  }
      
  return (
      <TouchableOpacity  activeOpacity={0.5} key={key} onPress={puchipuchiimage} style={{width: '20%'}}>
        <Image style = {styles.imagestyle} source={imagepuchipuchi} />
      </TouchableOpacity>
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
  imagestyle:{
    width: '100%',
    resizeMode: 'contain',
  },
  touchableOpacitystyle:{
    display:'flex'
  }
});
