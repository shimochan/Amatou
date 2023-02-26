import { StyleSheet, TouchableOpacity } from 'react-native';
import { View } from '../../../components/Themed';
import React from 'react';
import * as NativeStack from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types';
import { useEffect } from 'react';
import { Image } from 'react-native';
import { Audio } from 'expo-av';

export default function Batting({ route, navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'Batting'>) {
  const [sound, setSound] = React.useState<Audio.Sound>();
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('../../../assets/Audio/ouenka.mp3')
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
    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.push('Pitching', { sound: sound, stress: route.params.stress })} style={styles.container}>
      <Image source={require("../../../assets/images/batting.png")} style={styles.image} />
    </TouchableOpacity>
  );






}

const styles = StyleSheet.create({
  image: {
    width: "100%",
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


