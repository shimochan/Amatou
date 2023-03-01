import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import React from 'react';
import * as NativeStack from '@react-navigation/native-stack';
import { RootStackParamList, StressItem } from '../../types';
import StressItemView from '../../components/StressItem';
import DefaultStyle from '../../constants/DefaultStyles';
import { Spacer, VStack, HStack, ZStack } from 'react-native-stacks';
import BackButton from '../../components/BackButton';
import { useRecoilValue } from 'recoil';
import { unDoneStressSelector } from '../../atoms/stressList';

export default function StressSelect({ route, navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'StressSelect'>) {
  const stressList: StressItem[] = useRecoilValue(unDoneStressSelector);

  const listView = [];

  for (const stress of stressList) {
    listView.push(StressItemView(stress, navigation));
  }

  return (
    <VStack style={[DefaultStyle.fullHeight, { width: '100%' }]}>
      <ScrollView style={{ width: '100%' }}>
        {listView}
        <Spacer />
      </ScrollView>
      <HStack style={DefaultStyle.footer}>
        {BackButton(navigation)}
        <Spacer />
        <TouchableOpacity activeOpacity={0.5} style={styles.addButton} onPress={() => navigation.push('AddStress')}>
          <ZStack style={DefaultStyle.fill}>
            <Text>ストレスを追加</Text>
          </ZStack>
        </TouchableOpacity>
        <Spacer />
        <View style={{ width: 40, height: 0 }}></View>
      </HStack>
    </VStack>
  );
}

const styles = StyleSheet.create({
  addButton: {
    width: 150,
    height: 80,
    borderRadius: 20,
    backgroundColor: "#C09BCD"
  },
  footer: {
    padding: 40,
    marginBottom: 10,
  },
});
