import { HStack, Spacer, VStack } from "react-native-stacks";
import { StressItem } from "../types";
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getIntensityStyle, getIntensityLabel } from '../hooks/intensityConverter';

export default function StressItemView(stress: StressItem, navigation: any) {

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.push("SolutionSelect", {stress: stress})} key={stress.key}>
      <HStack style={styles.wrapper}>
        <Text style={styles.title}>{stress.title}</Text>
        <Spacer />
        <VStack spacing={5}>
          <Text style={[getIntensityStyle(stress.intensity)]}>{getIntensityLabel(stress.intensity)}</Text>
          <Text style={styles.dueDate}>
            期限: {stress.dueDate.toLocaleDateString()}
          </Text>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#FFF59F",
    margin: 10,
    height: 90,
  },
  title: {
    padding: 10,
    fontSize: 24,
    fontWeight: "bold",
  },
  dueDate: {
    fontSize: 14,
    color: "#777777",
  },
});