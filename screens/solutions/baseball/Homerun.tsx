import { StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import * as NativeStack from '@react-navigation/native-stack';
import { ActionType, RootStackParamList } from '../../../types';
import { useEffect } from 'react';
import { Image } from 'react-native';
import { Audio } from 'expo-av';
import { useRecoilState } from 'recoil';
import { battingSoundState } from '../../../atoms/battingSoundState';

export default function Homerun({ route, navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'Homerun'>) {
  const [battingSound, setBattingSound] = useRecoilState(battingSoundState);
  const [homerunSound, setHomerunSound] = useState<Audio.Sound | undefined>(undefined);

  // Background Music
  async function setAudio() {
    const sound = new Audio.Sound();
    await sound.loadAsync(require('../../../assets/Audio/金属バットと歓声.mp3'));
    setHomerunSound(sound);
  }

  useEffect(() => {
    setAudio();
  }, []);

  useEffect(() => {
    if (homerunSound != undefined) {
      homerunSound.playAsync();
    }
  }, [homerunSound]);

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => {
        if (battingSound != undefined) {
          battingSound.unloadAsync();
        }
        if (homerunSound != undefined) {
          homerunSound.unloadAsync();
        }
        navigation.replace('Result', { stress: route.params.stress, type: ActionType.Batting })
      }} style={styles.container}>

      <Image source={require("../../../assets/images/batting/homerun.png")} style={styles.image} />

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


