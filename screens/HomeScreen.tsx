import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, View } from 'react-native';
import { RootTabScreenProps } from '../types';
import { Pressable } from 'react-native';

const HomeScreen = ({ navigation }: RootTabScreenProps<'Home'>) => {
  return (
    <View style={styles.container}>
      <Button color = "green" title='プチプチへ' onPress={() => navigation.push('PuchiPuchi')} />
      <Button color = "green" title='Gyroへ' onPress={() => navigation.push('Gyro')} />
    </View>
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
  button: {
    opacity: 0.5,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default HomeScreen;
