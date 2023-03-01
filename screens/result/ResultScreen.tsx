import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { ActionType, RootStackParamList, StressItem } from '../../types';
import * as NativeStack from '@react-navigation/native-stack';
import { VStack } from 'react-native-stacks';
import { useRecoilState } from 'recoil';
import { stressListState } from '../../atoms/stressList';
import DefaultStyle from '../../constants/DefaultStyles';

const ResultScreen = ({ route, navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'Result'>) => {
  const [stressList, setStressList] = useRecoilState(stressListState);
  const initialimageUrl = require('../../assets/images/monster.webp');
  const [imageurl, setimageurl] = useState(initialimageUrl);

  const setUrl = () => {
    switch (route.params.type) {
      case ActionType.Cutting: setimageurl(require('../../assets/images/monster.webp')); break;
      case ActionType.Batting: setimageurl(require('../../assets/images/baseballResult.png')); break;
      case ActionType.Joggnig: setimageurl(require('../../assets/images/sport_jogging_woman.webp')); break;
      case ActionType.PuchiPuchi: setimageurl(require('../../assets/images/bakuhatsu.webp')); break;
    }
  }

  useEffect(() => {
    if (route.params.sound != undefined) {
      route.params.sound.unloadAsync();
    }
    setUrl();

    const stress = route.params.stress;
    const newStress: StressItem = {
      key: stress.key,
      title: stress.title,
      intensity: stress.intensity,
      dueDate: stress.dueDate,
      isDone: (stress.isDone) ? false : true,
    }

    const newStressList = stressList.map((val) => {
      if (val.key === newStress.key) {
        return newStress;
      } else {
        return val;
      }
    })

    setStressList(newStressList);
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <TouchableOpacity activeOpacity={0.5} onPress={() => {
        navigation.popToTop();
      }}>
        <VStack style={DefaultStyle.fullHeight} spacing={5}>
          <Text style={[styles.title, styles.headertext]} numberOfLines={1} ellipsizeMode="tail">{route.params.stress.title}</Text>
          <Text style={styles.solve}>解消</Text>
          <Image source={imageurl} style={styles.imagestyle}></Image>
          <Text style={styles.title}> よくできました！</Text>
        </VStack>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    padding: 10,
    fontSize: 24,
    fontWeight: "bold",
    justifyContent: "center",
  },
  solve: {
    fontSize: 30,
    color: "#777777",
  },
  imagestyle: {
    resizeMode: 'contain',
    width: '90%',
    flex: 1
  },
  headertext: {
    maxWidth: '90%'
  }
});

export default ResultScreen;
