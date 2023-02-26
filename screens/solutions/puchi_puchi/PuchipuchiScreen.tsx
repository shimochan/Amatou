import { StyleSheet } from 'react-native';
import { View } from '../../../components/Themed';
import React from 'react';
import * as NativeStack from '@react-navigation/native-stack';
import { ActionType, RootStackParamList, RootStackScreenProps, StressItem } from '../../../types';
import { useState } from 'react';
import PuchiPuchione from '../../../components/PuchiPuchione'
import { HStack, Spacer } from 'react-native-stacks';
import DefaultStyle from '../../../constants/DefaultStyles';
import BackButton from '../../../components/BackButton';

export default function PuchiPuchi({ route, navigation }: RootStackScreenProps<'PuchiPuchi'>) {

  const items = [];
  let initialtapCount = 0;
  const [tapCount, settapCount] = useState(initialtapCount)

  const onTap = (tapCount: number) => {
    settapCount(tapCount += 1);
    if (tapCount === 30) {
      navigation.replace("Result", { stress: route.params?.stress, type: ActionType.PuchiPuchi });
    }
  }

  for (let v = 0; v < 6; v++) {
    items.push(hPuchiPuchi(v, navigation, route.params?.stress, () => { onTap(tapCount) }));
  }

  return (
    <View style={styles.container}>
      {items}
      <HStack style={DefaultStyle.footer}>
        {BackButton(navigation)}
        <Spacer />
      </HStack>
    </View>
  );
}

function hPuchiPuchi(vKey: number, navigation: NativeStack.NativeStackNavigationProp<RootStackParamList, "PuchiPuchi", undefined>, stress: StressItem, onTap: () => void) {
  const hItems = [];

  for (let h = 0; h < 5; h++) {
    hItems.push(PuchiPuchione(vKey + h, onTap, navigation, stress));
  }

  return (
    <HStack>
      {hItems}
    </HStack>
  );
}

const styles = StyleSheet.create({
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
