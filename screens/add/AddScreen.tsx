import { Platform, SafeAreaView,StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import { View } from '../../components/Themed';
import React, { useEffect, useState } from 'react';
import { Image, Button,Text } from 'react-native';
import * as NativeStack from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { ZStack, HStack, VStack,Spacer } from 'react-native-stacks';
import DefaultStyle from '../../constants/DefaultStyles';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

export default function AddStress({ navigation }: NativeStack.NativeStackScreenProps<RootStackParamList, 'AddStress'>) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event: DateTimePickerEvent, selectedDate: Date) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode: React.SetStateAction<string>) => {
    if (Platform.OS === 'android') {
      setShow(false);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

    
  const [text, onChangeText] = useState("");
  const [isPressed_S, onPress_S] = useState(false);
  const [isPressed_M, onPress_M] = useState(true);
  const [isPressed_L, onPress_L] = useState(false);

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

  return (
    <VStack spacing={0} style={DefaultStyle.fullHeight}>
      <ZStack>
        <Image source ={require("../../assets/images/cloud.png")} style={styles.inputbutton}/>
        <TextInput
        style={styles.addtext}
        onChangeText={onChangeText}
        value={text}
        placeholder="- タップ -"
        />
      </ZStack>
      <Image source ={require ("../../assets/images/worry.png")} style={styles.worry}/>
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
      
      {/* <Button title="Open" onPress={() => setOpen(true)} /> */}

      <Button onPress={showDatepicker} title="Show date picker!" />
      <Button onPress={showTimepicker} title="Show time picker!" />
      <Text>selected: {date.toLocaleString()}</Text>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'datetime'}
          is24Hour={true}
        />
      
    </VStack>
 

    
  );
}

const styles = StyleSheet.create({
  inputbutton:{
    maxwidth: '100%',
    resizeMode: 'contain',
  },
  worry:{
    width:150,
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
    borderColor:"#000000",
    borderWidth: 2,
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  defaultColor_S: {
    backgroundColor: '#ffffff',
    borderColor:"#000000",
    borderWidth: 2,
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  pressedColor_M: {
    backgroundColor: '#4587c1',
    borderColor:"#000000",
    borderWidth: 2,
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  defaultColor_M: {
    backgroundColor: '#ffffff',
    borderColor:"#000000",
    borderWidth: 2,
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  pressedColor_L: {
    backgroundColor: '#4587c1',
    borderColor:"#000000",
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  defaultColor_L: {
    backgroundColor: '#ffffff',
    borderColor:"#000000",
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
  text:{
    fontSize: 25,
    fontWeight: 'bold',
  }


});



 
