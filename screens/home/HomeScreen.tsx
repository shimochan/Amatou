import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, ScrollView } from 'react-native';
import { RootStackParamList, StressItem } from '../../types';
import { ZStack, HStack, VStack, Spacer } from 'react-native-stacks';
import DefaultStyle from '../../constants/DefaultStyles';
import * as NativeStack from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRecoilState, useRecoilValue } from 'recoil';
import { unDoneStressSelector } from '../../atoms/stressList';
import { Audio } from 'expo-av';
import { useEffect } from 'react';
import { soundState } from '../../atoms/soundState';


function HomeScreen({ navigation, route }: NativeStack.NativeStackScreenProps<RootStackParamList, 'Home'>): JSX.Element {
  const stressList: StressItem[] = useRecoilValue(unDoneStressSelector);
  const [globalSound, setGlobalSound] = useRecoilState(soundState);

  const getStoneImagePath = (count: number) => {
    const basePath = "../../assets/images/home_stones/";
    switch (count) {
      case 0: return require(basePath + "00.webp");
      case 1: return require(basePath + "01.webp");
      case 2: return require(basePath + "02.webp");
      case 3: return require(basePath + "03.webp");
      case 4: return require(basePath + "04.webp");
      case 5: return require(basePath + "05.webp");
      case 6: return require(basePath + "06.webp");
      case 7: return require(basePath + "07.webp");
      default: return require(basePath + "many.webp");
    }
  };

  // Background Music
  async function setAudio() {
    const sound = new Audio.Sound();
    await sound.loadAsync(require('../../assets/Audio/orokanarumono.mp3'));
    await sound.setIsLoopingAsync(true);
    setGlobalSound(sound);
  }

  useEffect(() => {
    setAudio();
  }, []);

  useEffect(() => {
    if (globalSound != undefined) {
      globalSound.playAsync();
    }
  }, [globalSound]);


  return (
    <SafeAreaView style={{ backgroundColor: "#fff", height: '100%' }}>
      <ScrollView style={DefaultStyle.safeAreaBackground}>
        <VStack spacing={15} style={DefaultStyle.fullHeight}>
          <Text style={DefaultStyle.title}>抱えているストレス</Text>
          <Text style={DefaultStyle.title2}>{stressList.length}こ</Text>

          <Spacer />

          <Image source={getStoneImagePath(stressList.length)} style={DefaultStyle.homeImage} />

          <Spacer />

          <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.push('StressSelect')} style={DefaultStyle.largeButton}>
            <ZStack style={DefaultStyle.fill}>
              <Text style={[DefaultStyle.title2, { color: "#fff" }]}>ストレス一覧</Text>
            </ZStack>
          </TouchableOpacity>

          <HStack>
            <Spacer />

            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.push('History')} style={[DefaultStyle.smallButton, { backgroundColor: '#9BCDA0' }]}>
              <Text>りれき</Text>
            </TouchableOpacity>

            <Spacer />

            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.push('AddStress')} style={[DefaultStyle.smallButton, { backgroundColor: '#C09BCD' }]}>
              <Text>ついか</Text>
            </TouchableOpacity>

            <Spacer />
          </HStack>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
  },
  button: {
    opacity: 0.5,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default HomeScreen;
