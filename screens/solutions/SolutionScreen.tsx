import { StyleSheet, TouchableOpacity } from 'react-native';
import { View } from '../../components/Themed';
import React from 'react';
import {  Button } from 'react-native';
import * as NativeStack from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { Image} from 'react-native';

export default function SolutionSelect({ navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'SolutionSelect'>) {
  return (
    <View style={styles.container}>
      <TouchableOpacity   activeOpacity={0.5} onPress={() => navigation.push("CutAction")}>
        <Image source = {require("../../assets/images/kiruyatu.png")} style={styles.imagesize}/>
      </TouchableOpacity>
      <TouchableOpacity   activeOpacity={0.5} onPress={() => navigation.push("Jogging")}>
        <Image source = {require("../../assets/images/sport_jogging_man_cap.png")} style={styles.imagesize}/>
      </TouchableOpacity>
      <TouchableOpacity   activeOpacity={0.5} onPress={() => navigation.push("PuchiPuchi")}>
        <Image source = {require("../../assets/images/bakuhatsu.png")} style={styles.imagesize}/>
      </TouchableOpacity>
      <Button color = "green" title='ホーム画面へ' onPress={() => navigation.goBack()} />

    </View>
  );
}

const styles = StyleSheet.create({
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
  imagesize: {
    alignItems: 'center',
    width: 100,
    height: 100

  }
});
