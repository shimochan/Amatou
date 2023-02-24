import { StyleSheet, TouchableOpacity } from 'react-native';
import { View } from '../../components/Themed';
import React from 'react';
import { Button, Image, Text } from 'react-native';
import { HStack, Spacer } from 'react-native-flex-layout';
import * as NativeStack from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

export default function SolutionSelect({ navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'SolutionSelect'>) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.push("CutAction")} style={styles.imageOuter}>
        <HStack>
          <Spacer />
          <Text style={styles.text}>斬る</Text>
          <Spacer />
          <Image source={require("../../assets/images/kiruyatu.png")} style={styles.imagesize} />
          <Spacer />
        </HStack>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.push("Jogging")} style={styles.imageOuter}>
        <HStack>
          <Spacer />
          <Text style={styles.text}>走る</Text>
          <Spacer />
          <Image source={require("../../assets/images/sport_jogging_woman.png")} style={styles.imagesize} />
          <Spacer />
        </HStack>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.push("PuchiPuchi")} style={styles.imageOuter}>
        <HStack>
          <Spacer />
          <Text style={styles.text}>潰す</Text>
          <Spacer />
          <Image source={require("../../assets/images/bakuhatsu.png")} style={styles.imagesize} />
          <Spacer />
        </HStack>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  imageOuter: {
    width: '90%',
    height: 100,
    borderRadius: 20,
    backgroundColor: "lightblue",
    margin: 10,
  },
  imagesize: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    // overflow: "hidden",
  },
  text: {
    fontSize: 40,
    alignItems: "center",
    padding: 30
  }
});
