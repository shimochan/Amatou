import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import * as NativeStack from '@react-navigation/native-stack';
import { ActionType, RootStackParamList } from '../../../types';
import { useEffect } from 'react';
import { Image } from 'react-native';
import { Audio } from 'expo-av';

export default function Homerun({ route, navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'Homerun'>) {
  const [sound, setSound] = React.useState<Audio.Sound>();
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(require('../../../assets/Audio/金属バットと歓声.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  }
  React.useEffect(() => {
    return sound
      ? () => {
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
    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.push('Result', {sound:sound!, stress: route.params.stress, type: ActionType.Batting })} style={styles.container}>

      <Image source={require("../../../assets/images/homerun.png")} style={styles.image} />

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


