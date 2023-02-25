import React from 'react';
import { StyleSheet } from 'react-native';
import { RootStackParamList } from '../../types';
import * as NativeStack from '@react-navigation/native-stack';
import { View } from '../../components/Themed';
import Resultcomponents from '../../components/Resultcomponents';

const ResultScreen = ({ route, navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'Result'>) => {
  return (
    <View>
        {Resultcomponents(route.params?.stress, route.params?.type, navigation)}
    </View>
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

export default ResultScreen;
