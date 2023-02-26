import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { VStack } from 'react-native-stacks';
import { ActionType, StressItem } from "../types";
import DefaultStyle from '../constants/DefaultStyles';
import { useEffect } from 'react';
import { useState } from 'react';

const Resultcomponents = (stress: StressItem, type: ActionType, navigation: any) => {
  const initialimageUrl = require('../assets/images/monster.webp');
  const [imageurl, setimageurl] = useState(initialimageUrl)
  const setUrl = () => {
    switch (type) {
      case ActionType.Cutting: setimageurl(require('../assets/images/monster.webp')); break;
      case ActionType.Batting: setimageurl(require('../assets/images/bg_baseball_ground.webp')); break;
      case ActionType.Joggnig: setimageurl(require('../assets/images/sport_jogging_woman.webp')); break;
      case ActionType.PuchiPuchi: setimageurl(require('../assets/images/bakuhatsu.webp')); break;
    }
  }

  useEffect(() => {
    setUrl();
  }, []);

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.push("Home", { stress: stress })}>
      <VStack style={DefaultStyle.fullHeight} spacing={5}>
        <Text style={[styles.title, styles.headertext]} numberOfLines={1} ellipsizeMode="tail">{stress.title}</Text>
        <Text style={styles.solve}>
          解消
        </Text>
        <Image source={imageurl} style={styles.imagestyle}></Image>
        <Text style={styles.title}>{stress.title} をやっつけた！</Text>
      </VStack>
    </TouchableOpacity>
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

export default Resultcomponents;
