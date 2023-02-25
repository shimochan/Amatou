import { StyleSheet } from 'react-native';

export const getIntensityLabel = (intensity: number) => {
  switch (intensity) {
    case 0: return "小";
    case 1: return "中";
    case 2: return "大";
  }
}

export const getIntensityStyle = (intensity: number) => {
  switch (intensity) {
    case 0: return styles.smallText;
    case 1: return styles.mediumText;
    case 2: return styles.largeText;
  }
}

const styles = StyleSheet.create({
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