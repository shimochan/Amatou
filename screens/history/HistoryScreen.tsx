import { ScrollView } from 'react-native';
import React from 'react';
import * as NativeStack from '@react-navigation/native-stack';
import { RootStackParamList, StressItem } from '../../types';
import StressItemView from '../../components/StressItem';
import DefaultStyle from '../../constants/DefaultStyles';
import { Spacer, VStack } from 'react-native-stacks';
import { useRecoilValue } from 'recoil';
import { finishedStressSelector } from '../../atoms/stressList';

export default function StressHistory({ navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'History'>) {
  const stressList: StressItem[] = useRecoilValue(finishedStressSelector);

  const listView = []

  for (const stress of stressList) {
    listView.push(StressItemView(stress, navigation, true));
  }

  return (
    <VStack style={[DefaultStyle.fullHeight, { width: '100%' }]}>
      <ScrollView style={{ width: '100%' }}>
        {listView}
        <Spacer />
      </ScrollView>
    </VStack>
  );
}