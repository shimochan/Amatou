import { SafeAreaView,StyleSheet,TextInput } from 'react-native';
import { View } from '../../components/Themed';
import React from 'react';
import {  Button } from 'react-native';
import * as NativeStack from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

export default function AddStress({ navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'AddStress'>) {
  
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
  return (
    <View style={styles.container}>
       <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Button color = "green" title='ホーム画面へ' onPress={() => navigation.goBack()} />
    </View>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});



 
