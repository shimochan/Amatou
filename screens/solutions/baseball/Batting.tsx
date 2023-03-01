import { StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import * as NativeStack from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types';
import { useEffect } from 'react';
import { Image } from 'react-native';
import { Audio } from 'expo-av';
import { useRecoilState } from 'recoil';
import { globalSoundState } from '../../../atoms/globalSoundState';
import { battingSoundState } from '../../../atoms/battingSoundState';

export default function Batting({ route, navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'Batting'>) {
  const [globalSound, setGlobalSound] = useRecoilState(globalSoundState);
  const [battingSound, setBattingSound] = useRecoilState(battingSoundState);
  
  async function setAudio() {
    // if (battingSound != undefined) {
    //   await battingSound.unloadAsync();
    //   setBattingSound(undefined);
    // }
    const sound = new Audio.Sound();
    await sound.loadAsync(require('../../../assets/Audio/ouenka.mp3'));
    await sound.setIsLoopingAsync(true);
    setBattingSound(sound);
  }

  async function unloadSound() {
    if (globalSound != undefined) {
      await globalSound.unloadAsync();
      setGlobalSound(undefined);
    }
  }

  useEffect(() => {
    unloadSound();
    setAudio();
  }, []);

  useEffect(() => {
    if (battingSound != undefined) {
      battingSound.playAsync();
    }
  }, [battingSound]);

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.replace('Pitching', { stress: route.params.stress })} style={styles.container}>
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


