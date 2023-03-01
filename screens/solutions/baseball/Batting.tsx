import { StyleSheet, TouchableOpacity } from 'react-native';
import { View } from '../../../components/Themed';
import { useState } from 'react';
import * as NativeStack from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types';
import { useEffect } from 'react';
import { Image } from 'react-native';
import { Audio } from 'expo-av';
import { useRecoilState } from 'recoil';
import { soundState } from '../../../atoms/soundState';

export default function Batting({ route, navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'Batting'>) {
  const [sound, setSound] = useState<Audio.Sound>();
  const [globalSound, setGlobalSound] = useRecoilState(soundState);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(require('../../../assets/Audio/ouenka.mp3'));
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() =>
      navigation.addListener('beforeRemove', (e) => {
        sound?.unloadAsync();
        e.preventDefault();
      }),
    [navigation]
  );

  useEffect(() => {
    if (globalSound != undefined) {
      globalSound.unloadAsync();
      playSound();
    }
  }, []);

  useEffect(() =>
    navigation.addListener('beforeRemove', () => {
      sound?.unloadAsync();
    }),
    [navigation]
  );

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.replace('Pitching', { sound: sound, stress: route.params.stress })} style={styles.container}>
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


