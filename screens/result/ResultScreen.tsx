import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { RootStackParamList } from '../../types';
import * as NativeStack from '@react-navigation/native-stack';
import { View } from '../../components/Themed';
import Resultcomponents from '../../components/Resultcomponents';

const ResultScreen = ({ route, navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'Result'>) => {
  React.useEffect(() => {
    return route.params.sound
      ? () => {
        if (route.params.sound != null) {
          route.params.sound.unloadAsync();
        }
      }
      : undefined;
  }, [route.params.sound]);

  useEffect(() => {
    if (route.params.sound != undefined) {
      route.params.sound.unloadAsync();
    }
  }, [])

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
