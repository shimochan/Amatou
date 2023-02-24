import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Button, View, Text } from 'react-native';
import { RootTabScreenProps } from '../../types';
import { ZStack, HStack, VStack } from 'react-native-stacks';
import DefaultStyle from '../../constants/DefaultStyles';
import { Spacer } from 'react-native-flex-layout';


const HomeScreen = ({ navigation }: RootTabScreenProps<'Home'>) => {
  return (
    <VStack spacing={15} style={DefaultStyle.fullHeight}>
      <Text style={DefaultStyle.title}>抱えているストレス</Text>
      <Text style={DefaultStyle.title2}>Nこ</Text>

      <Spacer/>

      <Text>石の画像</Text>
      
      <Spacer/>

      <Pressable>
        <Text>ストレスを解消する</Text>
      </Pressable>
      
      <HStack>
        <Spacer/>

        <Pressable onPress={() => navigation.push('History')}>
          <Text>りれき</Text>
        </Pressable>

        <Spacer/>

        <Pressable onPress={() => navigation.push('AddStress')}>
          <Text>ついか</Text>
        </Pressable>

        <Spacer/>
      </HStack>
    </VStack>
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
