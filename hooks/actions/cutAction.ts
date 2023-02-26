import DeviceMotion, { DeviceMotionMeasurement } from "expo-sensors/build/DeviceMotion";
import * as NativeStack from '@react-navigation/native-stack';
import { useRef, useState } from "react";
import * as Haptics from 'expo-haptics';
import { Animated } from "react-native";
import { ActionType, RootStackParamList } from "../../types";
import { StressItem } from "../../types";

const cutAction = (navigation: NativeStack.NativeStackNavigationProp<RootStackParamList, "CutAction", undefined>, stress: StressItem) => {
  const [opacity, setOpacity] = useState(0);
  const opacityAnimation = useRef(new Animated.Value(0)).current;
  opacityAnimation.addListener((value) => { setOpacity(value.value); });
  let isAnimationStarted = false;

  const animation = Animated.timing(opacityAnimation, {
    toValue: 1.0,
    duration: 200,
    useNativeDriver: true,
  });

  const interval = 100;
  let sumCount = 0;

  const [{ x, y, z }, setData] = useState({ x: 0, y: 0, z: 0 });

  // Accelerometer Values
  let { xAccSum, yAccSum, zAccSum } = { xAccSum: 0, yAccSum: 0, zAccSum: 0 };
  let { xAccAvg, yAccAvg, zAccAvg } = { xAccAvg: 0, yAccAvg: 0, zAccAvg: 0 };
  // Rotation Values
  let { alphaSum, betaSum, gammaSum } = { alphaSum: 0, betaSum: 0, gammaSum: 0 };
  let { alphaAvg, betaAvg, gammaAvg } = { alphaAvg: 0, betaAvg: 0, gammaAvg: 0 };

  DeviceMotion.setUpdateInterval(interval);

  // On Start
  const startListening = () => {
    DeviceMotion.addListener((motionData) => {
      if (!isAnimationStarted) {
        setData(motionData.acceleration ?? { x: 0, y: 0, z: 0 });

        if (sumCount >= 5) {
          motionReset(false);
        }

        if (sumCount >= 10) {
          sumCount = 0;
        }

        if (sumCount >= 30) {
          initializeValues();
        }

        motionSumUp(motionData);
      }
    });
  }

  // On Stop
  const stopListening = () => {
    DeviceMotion.removeAllListeners();
    initializeValues();
  }

  const motionReset = (isFinal: boolean) => {
    console.log(isFinal);

    xAccAvg = xAccSum / sumCount;
    yAccAvg = yAccSum / sumCount;
    zAccAvg = zAccSum / sumCount;
    alphaAvg = alphaSum / sumCount;
    betaAvg = betaSum / sumCount;
    gammaAvg = gammaSum / sumCount;

    // Right to Left || Left to Right
    if (xAccAvg < -4.0 || 4.0 < xAccAvg) {
      console.log("CALLED 2");

      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      isAnimationStarted = true;
      animation.start((_) => {
        Animated.timing(opacityAnimation, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start((_) => {
          console.log("CALLED");
          if (isFinal) {
            console.log("FINAL");
            navigation.replace('Result', { stress: stress, type: ActionType.Cutting });
            stopListening();
          }
          isAnimationStarted = false;
        });
      });
      initializeValues();
    }
  }

  const motionSumUp = (motionData: DeviceMotionMeasurement) => {
    sumCount += 1;

    xAccSum += motionData.acceleration?.x ?? 0;
    yAccSum += motionData.acceleration?.y ?? 0;
    zAccSum += motionData.acceleration?.z ?? 0;

    alphaSum += motionData.rotation.alpha;
    betaSum += motionData.rotation.beta;
    gammaSum += motionData.rotation.gamma;
  }

  const initializeValues = () => {
    sumCount = 0;
    xAccSum = 0;
    yAccSum = 0;
    zAccSum = 0;
    alphaSum = 0;
    betaSum = 0;
    gammaSum = 0;
  }

  const startFinalListening = () => {
    stopListening();

    DeviceMotion.addListener((motionData) => {
      if (!isAnimationStarted) {
        setData(motionData.acceleration ?? { x: 0, y: 0, z: 0 });

        if (sumCount >= 5) {
          motionReset(true);
        }

        if (sumCount >= 10) {
          sumCount = 0;
        }

        if (sumCount >= 30) {
          initializeValues();
        }

        motionSumUp(motionData);
      }
    });
  }

  return { opacity, startFinalListening, startListening, stopListening }
}

export default cutAction;