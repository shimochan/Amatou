import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Image, Text } from 'react-native';
import { RootStackScreenProps, StressItem } from '../../types';
import { VStack, HStack, Spacer } from 'react-native-stacks';
import BackButton from '../../components/BackButton';
import DefaultStyle from '../../constants/DefaultStyles';
import { getIntensityStyle, getIntensityLabel } from '../../hooks/intensityConverter';

export default function SolutionSelect({ route, navigation }: RootStackScreenProps<'SolutionSelect'>) {
  return (
    <VStack style={DefaultStyle.fullHeight}>

      <HStack spacing={15} style={styles.header}>
        <Spacer/>
        <Text style={DefaultStyle.title}>{route.params?.stress.title}</Text>
        <Spacer/>
          <Text style={[getIntensityStyle(route.params?.stress.intensity)]}>{getIntensityLabel(route.params?.stress.intensity)}</Text>
          <Text style={styles.dueDate}>
            期限: {route.params?.stress.dueDate.toLocaleDateString()}
          </Text>
      </HStack>

      <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.push("CutAction")} style={styles.imageOuter}>
        <HStack>
          <Spacer />
          <Text style={styles.text}>斬る</Text>
          <Spacer />
          <Image source={require("../../assets/images/kiruyatu.webp")} style={styles.imagesize} />
          <Spacer />
        </HStack>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.push("Jogging")} style={styles.imageOuter}>
        <HStack>
          <Spacer />
          <Text style={styles.text}>走る</Text>
          <Spacer />
          <Image source={require("../../assets/images/sport_jogging_woman.webp")} style={styles.imagesize} />
          <Spacer />
        </HStack>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.push("PuchiPuchi", { stress: route.params?.stress })} style={styles.imageOuter}>
        <HStack>
          <Spacer />
          <Text style={styles.text}>潰す</Text>
          <Spacer />
          <Image source={require("../../assets/images/bakuhatsu.webp")} style={styles.imagesize} />
          <Spacer />
        </HStack>
      </TouchableOpacity>
      <Spacer />

      <HStack style={styles.footer}>
        {BackButton(navigation)}
        <Spacer />
      </HStack>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    paddingVertical: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  imageOuter: {
    width: '90%',
    height: 100,
    borderRadius: 20,
    backgroundColor: "lightblue",
    margin: 10,
  },
  imagesize: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  footer: {
    padding: 40,
    marginBottom: 10,
  },
  text: {
    fontSize: 40,
    alignItems: "center",
    padding: 30
  },
  dueDate: {
    fontSize: 14,
    color: "#777777",
  },
});
