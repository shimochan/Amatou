import { StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { Text, Image, Button } from 'react-native';
import * as NativeStack from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types';
import DefaultStyle from '../../../constants/DefaultStyles';
import { Spacer, VStack, HStack } from 'react-native-stacks';
import BackButton from '../../../components/BackButton';
import cutAction from '../../../hooks/actions/cutAction';

export default function CutAction({ route, navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'CutAction'>) {
  const { opacity, startFinalListening, startListening } = cutAction(navigation, route.params.stress);

  useEffect(() => {
    startListening();
  }, []);

  return (
    <VStack style={DefaultStyle.fullHeight}>
      <Spacer />

      <Text style={DefaultStyle.title}>{route.params.stress.title}</Text>

      <Spacer />

      <Image style={styles.monster} source={require('../../../assets/images/monster.webp')} />
      <Image style={[styles.effect, { opacity: opacity }]} source={require('../../../assets/images/cut-effect.webp')} />

      <Spacer />

      <Button title='とどめをさす' onPress={startFinalListening} />

      <HStack style={DefaultStyle.footer}>
        {BackButton(navigation)}
        <Spacer />
      </HStack>
    </VStack>
  );
}

const styles = StyleSheet.create({
  effect: {
    resizeMode: 'contain',
    height: 200,
    zIndex: 100,
    marginTop: -200,
  },
  monster: {
    height: 200,
    resizeMode: 'contain',
    margipanTop: 150,
    zIndex: 50,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
