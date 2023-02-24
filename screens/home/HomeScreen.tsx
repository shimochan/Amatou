import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Button, View, Text } from 'react-native';
import { RootTabScreenProps } from '../../types';
import { Stack, HStack, VStack } from 'react-native-flex-layout';

const HomeScreen = ({ navigation }: RootTabScreenProps<'Home'>) => {
  return (
    <View style={styles.container}>
      <Text>抱えているストレス</Text>
      <Text>Nこ</Text>
      <Text>石の画像</Text>
      <Pressable><Text>ストレスを解消する</Text></Pressable>

      <View style={{ flex: 2, flexDirection: "row", justifyContent: 'space-between', padding: 10 }}>
        <Pressable onPress={() => navigation.push('History')}>
          
        </Pressable>
        <Pressable onPress={() => navigation.push('SolutionSelect')}>
          <Text>ついか</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
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
