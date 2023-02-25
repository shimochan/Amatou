import { Platform, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { View } from '../../components/Themed';
import React, { useEffect, useState } from 'react';
import { Image, Button, Text } from 'react-native';
import * as NativeStack from '@react-navigation/native-stack';
import { RootStackParamList, StressItem } from '../../types';
import { ZStack, HStack, VStack, Spacer } from 'react-native-stacks';
import DefaultStyle from '../../constants/DefaultStyles';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { stressListState } from '../../atoms/stressList';
import { useRecoilState } from 'recoil';


export default function AddStress({ navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'AddStress'>) {
  const [stressList, setStressList] = useRecoilState(stressListState);

  const [text, onChangeText] = useState("");
  const [isPressed_S, onPress_S] = useState(false);
  const [isPressed_M, onPress_M] = useState(true);
  const [isPressed_L, onPress_L] = useState(false);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date: Date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const updateState_S = () => {
    onPress_S(true);
    onPress_M(false);
    onPress_L(false);
  }

  const updateState_M = () => {
    onPress_S(false);
    onPress_M(true);
    onPress_L(false);
  }

  const updateState_L = () => {
    onPress_S(false);
    onPress_M(false);
    onPress_L(true);
  }

  const addAndNavigate = () => {
    if (text == "" ) return;
    const stressCount = stressList.length;
    const newStress: StressItem = { key: stressCount, title: text, intensity: 0, dueDate: new Date(), isDone: false };
    setStressList([...stressList, newStress]);
    console.log([...stressList, newStress]);
    navigation.pop();
    navigation.push('StressSelect');
  }

  return (
    <VStack spacing={2} style={DefaultStyle.fullHeight}>
      <ZStack>
        <Image source={require("../../assets/images/worry.png")} style={styles.inputbutton} />
        <TextInput
          style={styles.addtext}
          onChangeText={onChangeText}
          value={text}
          placeholder="- タップ -"
        />
      </ZStack>
      <HStack spacing={8}>
        <TouchableOpacity activeOpacity={0.5} onPress={updateState_S} style={isPressed_S ? styles.pressedColor_S : styles.defaultColor_S}>
          <ZStack style={DefaultStyle.fill}>
            <Text style={styles.text}>小</Text>
          </ZStack>
        </TouchableOpacity>


        <TouchableOpacity activeOpacity={0.5} onPress={updateState_M} style={isPressed_M ? styles.pressedColor_M : styles.defaultColor_M}>
          <ZStack style={DefaultStyle.fill}>
            <Text style={styles.text}>中</Text>
          </ZStack>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={updateState_L} style={isPressed_L ? styles.pressedColor_L : styles.defaultColor_L}>
          <ZStack style={DefaultStyle.fill}>
            <Text style={styles.text}>大</Text>
          </ZStack>
        </TouchableOpacity>
      </HStack>
      <HStack spacing={0}>
        <Image source={require("../../assets/images/character_shimekiri.png")} style={styles.character_shimekiri} />
        <Button title="期限：＿曜日＿月＿日  ＿時＿分" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </HStack>

      <TouchableOpacity activeOpacity={0.5} onPress={() => addAndNavigate()} style={DefaultStyle.largeButton}>
        <ZStack style={DefaultStyle.fill}>
          <Text style={[DefaultStyle.title2, { color: "#fff" }]}>ストレスを追加</Text>
        </ZStack>
      </TouchableOpacity>


    </VStack>



  );
}

const styles = StyleSheet.create({
  inputbutton: {
    maxwidth: '100%',
    resizeMode: 'contain',
  },
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
  pressedColor_S: {
    backgroundColor: '#4587c1',
    borderColor: "#000000",
    borderWidth: 2,
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  defaultColor_S: {
    backgroundColor: '#ffffff',
    borderColor: "#000000",
    borderWidth: 2,
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  pressedColor_M: {
    backgroundColor: '#4587c1',
    borderColor: "#000000",
    borderWidth: 2,
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  defaultColor_M: {
    backgroundColor: '#ffffff',
    borderColor: "#000000",
    borderWidth: 2,
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  pressedColor_L: {
    backgroundColor: '#4587c1',
    borderColor: "#000000",
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  defaultColor_L: {
    backgroundColor: '#ffffff',
    borderColor: "#000000",
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
  },

  addtext: {
    maxheight: 20,
    margin: 10,
    padding: 5,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  character_shimekiri: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  timelimit: {

  }


});