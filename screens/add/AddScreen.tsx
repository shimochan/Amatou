import { SafeAreaView,StyleSheet,TextInput } from 'react-native';
import { View } from '../../components/Themed';
import React from 'react';
import { Image, Button } from 'react-native';
import * as NativeStack from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { ZStack, HStack, VStack } from 'react-native-stacks';
import { Spacer } from 'react-native-flex-layout';
import DefaultStyle from '../../constants/DefaultStyles';

export default function AddStress({ navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'AddStress'>) {
    
    const [text, onChangeText] = React.useState("");
  return (
    <VStack spacing={15} style={DefaultStyle.fullHeight}>
      <ZStack>
        <Image source ={require ("../../assets/images/cloud.png")}/>
        <TextInput
        style={styles.addtext}
        onChangeText={onChangeText}
        value={text}
        placeholder="- タップ -"
        />
      </ZStack>
      <Image source ={require ("../../assets/images/worry.png")}/>
      <Spacer/>
      <Button color = "green" title='ホーム画面へ' onPress={() => navigation.goBack()} />
      <Spacer/>
    </VStack>
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
  addtext: {
    height: 40,
    margin: 12,
    padding: 10,
  },
});



 
