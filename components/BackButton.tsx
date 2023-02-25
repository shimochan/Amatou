import { HStack, Spacer, VStack } from "react-native-stacks";
import { StressItem } from "../types";
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function BackButton(navigation: any) {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.wrapper} onPress={() => navigation.goBack()}>
      <Image source={require("../assets/images/icons/back.webp")} style={styles.backIcon}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 40,
    height: 40,
    padding: 5,
  },
  backIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  }
});
