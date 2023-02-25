import { StyleSheet, TouchableOpacity } from 'react-native';
import { View } from '../../../components/Themed';
import React from 'react';
import { Button } from 'react-native';
import * as Haptics from 'expo-haptics';
import * as NativeStack from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types';
import { useState } from 'react';
import { Image } from 'react-native';


export default function PuchiPuchi({ navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'PuchiPuchi'>) {
  const initialpuchipuchi = require("../../../assets/images/puchipuchitubusumae.png")
  const imagepuchipuchi2 = require("../../../assets/images/puchipuchitubushitaato.png")

  const [imagepuchipuchi, setimagepuchipuchi] = useState(initialpuchipuchi)
  const puchipuchiimage = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    setimagepuchipuchi(imagepuchipuchi2)
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} onPress={puchipuchiimage}>
        <Image source={imagepuchipuchi} />
      </TouchableOpacity>
      <Button color="green" title='ホーム画面へ' onPress={() => navigation.goBack()} />
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
