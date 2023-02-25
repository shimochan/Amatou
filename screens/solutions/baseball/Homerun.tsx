//コピペ段階
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Themed';
import React from 'react';
import {  Button } from 'react-native';
import * as Haptics from 'expo-haptics';
import * as NativeStack from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types';
import { useState ,useEffect } from 'react';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import { Image ,ImageBackground} from 'react-native';
import { Audio } from 'expo-av';
import Batting from './Batting';

export default function Homerun({ route, navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'Homerun'>) {
  const [sound, setSound] = React.useState<Audio.Sound>();
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../../../assets/Audio/金属バットと歓声.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  }
  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

 



  
  useEffect(() => {
    if (route.params.sound != undefined) {
      route.params.sound.unloadAsync();
      playSound();
    }
  }, [])

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.push("Home")} style={styles.container}>
    
      <Image source ={require("../../../assets/images/homerun.png")} style = {styles.image}/>
  
    </TouchableOpacity>
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


