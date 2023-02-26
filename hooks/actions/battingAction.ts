import DeviceMotion, { DeviceMotionMeasurement } from "expo-sensors/build/DeviceMotion";
import { useRef, useState } from "react";
import * as Haptics from 'expo-haptics';

const battingAction = (pushToHomeRUn: () => void) => {
  const interval = 100;
  let sumCount = 0;

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
      if (sumCount >= 5) {
        motionReset();
      }

      if (sumCount >= 10) {
        sumCount = 0;
        initializeValues();
      }


      motionSumUp(motionData);
    });
  }

  // On Stop
  const stopListening = () => {
    DeviceMotion.removeAllListeners();
    initializeValues();
  }

  const motionReset = () => {
    xAccAvg = xAccSum / sumCount;
    yAccAvg = yAccSum / sumCount;
    zAccAvg = zAccSum / sumCount;
    alphaAvg = alphaSum / sumCount;
    betaAvg = betaSum / sumCount;
    gammaAvg = gammaSum / sumCount;
    console.log(xAccAvg);

    // Right to Left || Left to Right
    if (xAccAvg < -4.0 || 4.0 < xAccAvg) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      pushToHomeRUn();
      stopListening();
      return;
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

  return { startListening, stopListening }
}

export default battingAction;