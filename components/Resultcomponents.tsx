import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { VStack } from 'react-native-stacks';
import { ActionType, StressItem } from "../types";
import DefaultStyle from '../constants/DefaultStyles';
import { useEffect } from 'react';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { stressListState } from '../atoms/stressList';
import { useRecoilState } from 'recoil';

const Resultcomponents = (stress: StressItem, type: ActionType, navigation: any) => {
  const [stressList, setStressList] = useRecoilState(stressListState);
  const initialimageUrl = require('../assets/images/monster.webp');
  const [imageurl, setimageurl] = useState(initialimageUrl);
  
  const setUrl = () => {
    switch (type) {
      case ActionType.Cutting: setimageurl(require('../assets/images/monster.webp')); break;
      case ActionType.Batting: setimageurl(require('../assets/images/baseballResult.png')); break;
      case ActionType.Joggnig: setimageurl(require('../assets/images/sport_jogging_woman.webp')); break;
      case ActionType.PuchiPuchi: setimageurl(require('../assets/images/bakuhatsu.webp')); break;
    }
  }

  useEffect(() => {
    setUrl();

    const newStress: StressItem = {
      key: stress.key,
      title: stress.title,
      intensity: stress.intensity,
      dueDate: stress.dueDate,
      isDone: (stress.isDone) ? false : true,
    }

    const newStressList = stressList.map((val) => {
      if (val.key === newStress.key){
        return newStress;
      } else {
        return val;
      }
    })
    
    console.log(newStressList);

    setStressList(newStressList);
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: "#fff"}}>
      <TouchableOpacity activeOpacity={0.5} onPress={() => {
        stress.isDone = true;
        navigation.popToTop();
      }}>
        <VStack style={DefaultStyle.fullHeight} spacing={5}>
          <Text style={styles.title}>{stress.title}</Text>
          <Text style={styles.solve}>
            解消
          </Text>
          <Image source={imageurl} style={styles.imagestyle}></Image>
          <Text style={styles.title}>{stress.title} をやっつけた！</Text>
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
  }
});

export default Resultcomponents;
