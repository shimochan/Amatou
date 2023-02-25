import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { RootStackParamList } from '../../types';
import { ZStack, HStack, VStack, Spacer } from 'react-native-stacks';
import DefaultStyle from '../../constants/DefaultStyles';
import * as NativeStack from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import stressListController from '../../hooks/stressList';
import { View } from '../../components/Themed';


const ResultScreen = ({ navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'Result'>) => {
  
    
  return (
    <View>
        <Text>テスト</Text>
        <Text>解消</Text>
        <Image ></Image>
        <Text>130m飛ばした。</Text>
        <Text>100人のファンを得た。</Text>
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
