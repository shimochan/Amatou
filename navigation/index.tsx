/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/home/HomeScreen';
import PuchiPuchi from '../screens/solutions/puchi_puchi/PuchipuchiScreen';

import AddStress from '../screens/add/AddScreen';
import Batting from '../screens/solutions/baseball/Batting';
import CutAction from '../screens/solutions/cut/CutScreen';
import History from '../screens/history/HistoryScreen';
import Jogging from '../screens/solutions/jogging/JoggingScreen';
import SolutionSelect from '../screens/solutions/SolutionScreen';
import StressSelect from '../screens/stress_list/StressListScreen';
import WriteStress from '../screens/WriteStress';

import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import ResultScreen from '../screens/result/ResultScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PuchiPuchi" component={PuchiPuchi} />
      <Stack.Screen name="Batting" component={Batting} />
      <Stack.Screen name="CutAction" component={CutAction} />
      <Stack.Screen name="Jogging" component={Jogging} />
      <Stack.Screen name="StressSelect" component={StressSelect} />
      <Stack.Screen name="SolutionSelect" component={SolutionSelect} />
      <Stack.Screen name="WriteStress" component={WriteStress} />
      <Stack.Screen name="Result" component={ResultScreen} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />

      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen name="AddStress" component={AddStress} />
        <Stack.Screen name="History" component={History} />
      </Stack.Group>

    </Stack.Navigator>
  );
}
