import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import * as Haptics from 'expo-haptics';
import * as NativeStack from '@react-navigation/native-stack';
import { RootStackParamList, StressItem } from '../types';
import { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { Audio } from 'expo-av';

export default function PuchiPuchione(key: number, tapAction: () => void, navigation: NativeStack.NativeStackNavigationProp<RootStackParamList, "PuchiPuchi", undefined>, stress: StressItem) {
  const [sound, setSound] = useState<Audio.Sound>();
  async function puchipuchiSound() {
    const { sound } = await Audio.Sound.createAsync(require('../assets/Audio/Bubble_Wrap03-2.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  }
  
  const imagepuchipuchi2 = require("../assets/images/puchipuchi/puchi_after.webp")
  const [imagepuchipuchi, setimagepuchipuchi] = useState(require("../assets/images/puchipuchi/puchi_before.webp"))
  const puchipuchiimage = () => {
    if (imagepuchipuchi === require("../assets/images/puchipuchi/puchi_before.webp")) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
      setimagepuchipuchi(imagepuchipuchi2)
      tapAction();
      puchipuchiSound();
    }
  }

  return (
    <TouchableOpacity activeOpacity={0.5} key={key} onPress={puchipuchiimage} style={{ width: '20%' }}>
      <Image style={styles.imagestyle} source={imagepuchipuchi} />
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
  imagestyle: {
    width: '100%',
    resizeMode: 'contain',
  },
  touchableOpacitystyle: {
    display: 'flex'
  }
});
