import { HStack, Spacer, VStack } from "react-native-stacks";
import { StressItem } from "../types";
import { Text, StyleSheet } from 'react-native';

export default function StressItemView(stress: StressItem) {
  const getIntensityLabel = (intensity: number) => {
    switch (intensity) {
      case 0: return "小";
      case 1: return "中";
      case 2: return "大";
    }
  }

  const getIntensityStyle = (intensity: number) => {
    switch (intensity) {
      case 0: return styles.smallText;
      case 1: return styles.mediumText;
      case 2: return styles.largeText;
    }
  }

  return (
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
  smallText: {
    fontSize: 18,
  },
  mediumText: {
    fontSize: 26,
  },
  largeText: {
    fontSize: 32,
  }
});