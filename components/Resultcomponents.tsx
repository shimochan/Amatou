import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { RootStackParamList } from '../types';
import { ZStack, HStack, VStack, Spacer } from 'react-native-stacks';
import DefaultStyle from '../constants/DefaultStyles';
import * as NativeStack from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import stressListController from '../hooks/stressList';
import { View } from '../components/Themed';
import { StressItem } from "../types";
import { getIntensityStyle, getIntensityLabel } from '../hooks/intensityConverter';

const Resultcomponents = (stress: StressItem, url: string, navigation: any) => {
  
    
  return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.push("Home", {stress: stress})}>
        <HStack style={styles.wrapper}>
        <Text style={styles.title}>{stress.title}</Text>
        <Spacer />
        <VStack spacing={5}>
          <Text style={[getIntensityStyle(stress.intensity)]}>{getIntensityLabel(stress.intensity)}</Text>
          <Text style={styles.dueDate}>
            解消
          </Text>
          <Spacer />
          <Image source={require(url)}></Image>
          <Spacer />
          <Text style={styles.title}>{stress.title} をやっつけた！</Text>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
        borderRadius: 20,
        backgroundColor: "#FFF59F",
        margin: 10,
        height: 90,
      },
      title: {
        padding: 10,
        fontSize: 24,
        fontWeight: "bold",
      },
      dueDate: {
        fontSize: 14,
        color: "#777777",
      },
});

export default Resultcomponents;
