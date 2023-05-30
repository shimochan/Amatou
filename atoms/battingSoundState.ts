import { atom, selector } from 'recoil';
import { StressItem } from '../types';
import { Audio } from 'expo-av';

export const battingSoundState = atom<Audio.Sound | undefined>({
    key: "battingSoundState",
    default: undefined,
});