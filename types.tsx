/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Audio } from 'expo-av';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  PuchiPuchi: { sound: Audio.Sound |undefined ,stress: StressItem };
  Gyro: undefined;
  AddStress: {sound: Audio.Sound };
  Batting: { sound: Audio.Sound |undefined ,stress: StressItem };
  Pitching: {sound: Audio.Sound | undefined,  stress: StressItem};
  Homerun: {sound: Audio.Sound | undefined, stress: StressItem};
  CutAction: {sound: Audio.Sound|undefined, stress: StressItem };
  FinallyAddStress: {sound: Audio.Sound };
  History: {sound: Audio.Sound };
  Jogging: { sound: Audio.Sound |undefined ,stress: StressItem };
  SelectDeadline: {sound: Audio.Sound };
  SelectSize: {sound: Audio.Sound };
  SolutionSelect: { sound: Audio.Sound | undefined, stress: StressItem };
  WriteStress:{sound: Audio.Sound };
  StressSelect: {sound: Audio.Sound  };
  Home: {sound: Audio.Sound };
  Result: {sound: Audio.Sound, stress: StressItem, type: ActionType };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Home: undefined;
  Settings: undefined;
};

export enum ActionType {
  Cutting, Batting, Joggnig, PuchiPuchi
};

export interface StressItem {
  key: number;
  title: String;
  intensity: number;  // 0: Normal, 1: Moderate, 2: Heavy
  dueDate: Date;
  isDone: boolean;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
