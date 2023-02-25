/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  PuchiPuchi: undefined;
  Gyro: undefined;
  AddStress: undefined;
  Batting: undefined;
  CutAction: undefined;
  FinallyAddStress: undefined;
  History: undefined;
  Jogging: undefined;
  SelectDeadline: undefined;
  SelectSize: undefined;
  SolutionSelect: undefined;
  WriteStress: undefined;
  StressSelect: { stress: StressItem };
  Home: undefined;
  Result: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Home: undefined;
  Settings: undefined;
};

export type StressItem = {
  title: String;
  intensity: number;  // 0: Normal, 1: Moderate, 2: Heavy
  dueDate: Date;
  isDone: boolean;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
