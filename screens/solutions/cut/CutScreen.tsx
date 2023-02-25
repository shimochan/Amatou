import { StyleSheet } from 'react-native';
import { View } from '../../../components/Themed';
import React, { useEffect } from 'react';
import { Text, Image, Button } from 'react-native';
import * as NativeStack from '@react-navigation/native-stack';
import { ActionType, RootStackParamList } from '../../../types';
import cutAction from '../../../hooks/actions/cutAction';
import DefaultStyle from '../../../constants/DefaultStyles';
import { Spacer, VStack, HStack, ZStack } from 'react-native-stacks';
import BackButton from '../../../components/BackButton';

export default function CutAction({ route, navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'CutAction'>) {

  const onFinal = () => {
    navigation.push('Result', { stress: route.params.stress, type: ActionType.Cutting });
  }

  const { opacity, setFinalState, startListening } = cutAction(onFinal);

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

      <Button title='とどめをさす' onPress={() => {
        setFinalState(true);
      }} />

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
