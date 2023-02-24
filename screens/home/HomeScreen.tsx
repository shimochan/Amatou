import React from 'react';
import { Pressable, StyleSheet, Image } from 'react-native';
import { Button, View, Text } from 'react-native';
import { RootStackParamList, RootTabScreenProps } from '../../types';
import { ZStack, HStack, VStack, Spacer } from 'react-native-stacks';
import DefaultStyle from '../../constants/DefaultStyles';
import * as NativeStack from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';


const HomeScreen = ({ navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'Home'>) => {
  return (
    <SafeAreaView style={DefaultStyle.safeAreaBackground}>
      <VStack spacing={15} style={DefaultStyle.fullHeight}>
        <Text style={DefaultStyle.title}>抱えているストレス</Text>
        <Text style={DefaultStyle.title2}>0こ</Text>

        <Spacer />

        <Image source={require("../../assets/images/home_stones/00.jpeg")} style={DefaultStyle.homeImage} />

        <Spacer />

        <Pressable onPress={() => navigation.push('StressSelect')} style={DefaultStyle.largeButton}>
          <ZStack style={DefaultStyle.fill}>
            <Text style={[DefaultStyle.title2, {color: "#fff"}]}>ストレス一覧</Text>
          </ZStack>
        </Pressable>

        <HStack>
          <Spacer />

          <Pressable onPress={() => navigation.push('History')} style={[DefaultStyle.smallButton, { backgroundColor: '#9BCDA0' }]}>
            <Text>りれき</Text>
          </Pressable>

          <Spacer />

          <Pressable onPress={() => navigation.push('AddStress')}  style={[DefaultStyle.smallButton, { backgroundColor: '#C09BCD' }]}>
            <Text>ついか</Text>
          </Pressable>

          <Spacer />
        </HStack>
      </VStack>
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
